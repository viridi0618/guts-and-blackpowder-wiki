import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Guts & Blackpowder Achievements — How to Unlock Every Badge | G&B Wiki",
  description:
    "Learn about Guts and Blackpowder achievements, Roblox badges, unlock requirements, and badge guides for G&B players.",
  alternates: {
    canonical: "https://gutsandblackpowder.wiki/achievements",
  },
};

const achievementTopics = [
  {
    title: "Map Completion Achievements",
    text: "Many Guts and Blackpowder achievements come from completing Objective, Holdout, or event maps for the first time.",
    href: "/maps",
  },
  {
    title: "Hidden and Challenge Badges",
    text: "Players often search for achievements like Soldier's Grace, Untouchable, Old Guard, and Vos Enterrement because the unlock requirements are specific.",
    href: "/badges",
  },
  {
    title: "Barry and Catacombes Badges",
    text: "The Barry guide helps with the Catacombes de Paris secret tied to Vos Enterrement and the community-favorite Barry NPC.",
    href: "/guides/barry",
  },
  {
    title: "Class Unlock Goals",
    text: "Some badge goals connect to class progression, including the Surgeon run required for Soldier's Grace and Chaplain access.",
    href: "/classes",
  },
];

const guideLinks = [
  { label: "All Badges", href: "/badges" },
  { label: "Barry Guide", href: "/guides/barry" },
  { label: "Beginner Guide", href: "/beginner-guide" },
  { label: "Classes Guide", href: "/classes" },
  { label: "Maps Guide", href: "/maps" },
  { label: "How to Get Francs", href: "/guides/francs" },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Guts and Blackpowder Achievements
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            Guts and Blackpowder achievements are commonly searched by players because Roblox tracks many of them as badges with specific unlock requirements, map conditions, hidden secrets, and class-related goals.
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-16">
        <section>
          <SectionTitle
            tag="Badges"
            title="Achievements Are Roblox Badges"
            subtitle="In G&B, players usually mean Roblox badges when they search for achievements. The main badges page lists known unlock conditions and tips."
            align="left"
          />
          <div className="mt-8 rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
            <p className="text-base leading-relaxed text-[#c8c4bc]">
              Start with the <Link href="/badges" className="text-[#d4af6a] hover:underline">Guts and Blackpowder badges guide</Link> for the full badge list, then use the related guides below for specific unlock paths.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle
            tag="Unlock Paths"
            title="Achievement Types Players Look For"
            subtitle="Use these guide paths to plan which badges to unlock next."
            align="left"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {achievementTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="rounded-lg p-6 transition-all duration-300 hover:border-[#d4af6a]"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826" }}
              >
                <h2 className="font-serif text-xl text-[#d4af6a] mb-3">{topic.title}</h2>
                <p className="text-sm leading-relaxed text-[#8a8884]">{topic.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle tag="Related Guides" title="Badge and Achievement Guides" align="left" />
          <div className="mt-8 flex flex-wrap gap-3">
            {guideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#d4af6a] transition-colors hover:bg-[#d4af6a] hover:text-[#05030c]"
                style={{ border: "1px solid #d4af6a" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
