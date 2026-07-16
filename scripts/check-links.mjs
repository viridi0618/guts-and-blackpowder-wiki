import fs from "fs";
import path from "path";

const root = process.cwd();
const appDir = path.join(root, "src", "app");
const checkDirs = [appDir, path.join(root, "src", "components")];
const publicDir = path.join(root, "public");
const failures = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return entry.isFile() && /\.(tsx|ts|jsx|js)$/.test(entry.name) ? [fullPath] : [];
  });
}

function routeFromPage(filePath) {
  const relative = path.relative(appDir, path.dirname(filePath)).replace(/\\/g, "/");
  return relative === "" ? "/" : `/${relative}`;
}

const routes = new Set(
  walk(appDir)
    .filter((filePath) => path.basename(filePath) === "page.tsx")
    .map(routeFromPage),
);

function internalTargetExists(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || clean === "/") return true;
  if (routes.has(clean)) return true;
  const publicPath = path.join(publicDir, clean.replace(/^\//, ""));
  return fs.existsSync(publicPath);
}

const hrefPattern = /\bhref=["'](\/[^"']*)["']/g;

for (const filePath of checkDirs.flatMap(walk)) {
  const relative = path.relative(root, filePath).replace(/\\/g, "/");
  const source = fs.readFileSync(filePath, "utf8");
  let match;
  while ((match = hrefPattern.exec(source)) !== null) {
    const href = match[1];
    if (!internalTargetExists(href)) {
      failures.push(`${relative}: missing internal target ${href}`);
    }
  }
}

const sitemapPath = path.join(publicDir, "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const locPattern = /<loc>https:\/\/gutsandblackpowder\.wiki([^<]*)<\/loc>/g;
  let match;
  while ((match = locPattern.exec(sitemap)) !== null) {
    const route = match[1] || "/";
    if (!routes.has(route)) {
      failures.push(`public/sitemap.xml: missing route for ${route}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Broken internal links found:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Internal link check passed.");
