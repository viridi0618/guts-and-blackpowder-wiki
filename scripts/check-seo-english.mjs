import fs from "fs";
import path from "path";

const root = process.cwd();
const filesToCheck = [
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/wiki/page.tsx",
  "src/app/maps/page.tsx",
  "src/app/weapons/page.tsx",
  "src/app/enemies/page.tsx",
  "src/app/commands/page.tsx",
  "src/app/commands/private-server-commands/page.tsx",
  "src/app/achievements/page.tsx",
  "src/app/badges/untouchable/page.tsx",
  "src/app/enemies/cuirassier/page.tsx",
  "src/app/guides/how-to-use-musician/page.tsx",
  "src/app/guides/how-to-get-francs/page.tsx",
  "src/components/Header.tsx",
  "src/components/CTALink.tsx",
];

const seoLinePattern =
  /\b(title|description|openGraph|twitter|label|children|aria-label)\b|<h1|<h2|<h3|<p|<span|<Link|<a|CTALink/;
const cjkPattern = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;

const failures = [];

for (const relativePath of filesToCheck) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    failures.push(`${relativePath}: file is missing`);
    continue;
  }

  const lines = fs.readFileSync(absolutePath, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    if (seoLinePattern.test(line) && cjkPattern.test(line)) {
      failures.push(`${relativePath}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (failures.length > 0) {
  console.error("Chinese/CJK text found in SEO or visible UI lines:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("SEO English check passed.");
