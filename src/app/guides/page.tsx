import type { Metadata } from "next";
import InfoCard from "@/components/InfoCard";
import CTALink from "@/components/CTALink";
import { featuredGuides } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Guides",
  description:
    "Guts and Blackpowder complete guides collection — weapons, enemies, maps, commands, badges, FAQ, and more",
};

// Category grouping for all guides
const guideCategories = [
  {
    category: "Game Content",
    tag: "GAME CONTENT",
    items: [
      {
        icon: "🔫",
        title: "Weapons Guide",
        description: "Complete weapons reference — muskets, rifles, sabres, pistols, and more",
        href: "/weapons",
      },
      {
        icon: "👹",
        title: "Enemies Guide",
        description: "Full enemy bestiary — types, danger levels, and counter strategies",
        href: "/enemies",
      },
      {
        icon: "🗺️",
        title: "Maps Guide",
        description: "All 15 maps with detailed walkthroughs and tactical points",
        href: "/maps",
      },
      {
        icon: "⌨️",
        title: "Commands Guide",
        description: "All chat commands, admin commands, and private server settings",
        href: "/commands",
      },
    ],
  },
  {
    category: "Game Info",
    tag: "INFO",
    items: [
      {
        icon: "🏅",
        title: "Badges",
        description: "All 31 badges with unlock conditions and rarity tiers",
        href: "/badges",
      },
      {
        icon: "❓",
        title: "FAQ",
        description: "Frequently asked questions about Guts and Blackpowder",
        href: "/faq",
      },
      {
        icon: "📖",
        title: "Wiki",
        description: "Getting started, game modes, combat tips, and survival guide",
        href: "/wiki",
      },
    ],
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            All Guides
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            From beginner to veteran — the complete Guts and Blackpowder guide collection
          </p>
          <div
            className="mt-6 h-0.5 w-16 rounded-full mx-auto"
            style={{ backgroundColor: "#d4af6a" }}
          />
        </div>
      </section>

      {/* Category Sections – Guide Cards Grouped by Category */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {guideCategories.map((group) => (
            <div key={group.category} className="mb-14 last:mb-0">
              {/* Category header */}
              <div className="mb-6">
                <span
                  className="font-sans text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#d4af6a" }}
                >
                  {group.tag}
                </span>
                <h2
                  className="font-serif text-2xl md:text-3xl mt-1"
                  style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
                >
                  {group.category}
                </h2>
                <div
                  className="mt-3 h-0.5 w-12 rounded-full"
                  style={{ backgroundColor: "#d4af6a" }}
                />
              </div>

              {/* Guide cards grid */}
              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <InfoCard
                    key={item.title}
                    icon={item.icon}
                    tag={group.category}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Guides Section */}
      <section
        className="py-14 md:py-20"
        style={{
          borderTop: "1px solid #2a2826",
          borderBottom: "1px solid #2a2826",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10 text-center">
            <span
              className="font-sans text-xs uppercase tracking-[0.2em]"
              style={{ color: "#d4af6a" }}
            >
              FEATURED
            </span>
            <h2
              className="font-serif text-2xl md:text-3xl mt-1"
              style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
            >
              Featured Guides
            </h2>
            <p
              className="font-sans text-sm mt-3 max-w-xl mx-auto"
              style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
            >
              Must-read content to level up your skills
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredGuides.map((guide) => (
              <InfoCard
                key={guide.title}
                tag={guide.tag}
                title={guide.title}
                description={guide.description}
                href={guide.href}
              >
                <div className="mt-2">
                  <span
                    className="inline-block font-sans text-xs font-medium"
                    style={{ color: "#d4af6a" }}
                  >
                    View Details &rarr;
                  </span>
                </div>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-10">
            <span
              className="font-sans text-xs uppercase tracking-[0.2em]"
              style={{ color: "#d4af6a" }}
            >
              QUICK LINKS
            </span>
            <h2
              className="font-serif text-2xl md:text-3xl mt-1"
              style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
            >
              Quick Links
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <CTALink href="/weapons" variant="secondary">
              Weapons
            </CTALink>
            <CTALink href="/enemies" variant="secondary">
              Enemies
            </CTALink>
            <CTALink href="/maps" variant="secondary">
              Maps
            </CTALink>
            <CTALink href="/commands" variant="secondary">
              Commands
            </CTALink>
            <CTALink href="/badges" variant="secondary">
              Badges
            </CTALink>
            <CTALink href="/wiki" variant="secondary">
              Wiki
            </CTALink>
            <CTALink href="/faq" variant="secondary">
              FAQ
            </CTALink>
          </div>
        </div>
      </section>
    </div>
  );
}