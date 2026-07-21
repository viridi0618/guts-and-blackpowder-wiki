import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "How to Use Musician in Guts and Blackpowder",
  description:
    "Learn how to use the Musician class in Guts and Blackpowder, including team buffs, positioning, survival tips, and beginner advice for Roblox G&B.",
  alternates: {
    canonical: "https://gutsandblackpowder.wiki/guides/how-to-use-musician",
  },
  openGraph: {
    title: "How to Use Musician in Guts and Blackpowder",
    description: "Learn how to use the Musician class in Guts and Blackpowder, including team buffs, positioning, survival tips, and beginner advice for Roblox G&B.",
  }};

const musicianTips = [
  "Stay near teammates so your music buff actually reaches the group.",
  "Avoid leading the frontline unless the team needs an emergency push.",
  "Watch Sappers, Surgeons, and Officers because they benefit heavily from steady support.",
  "Move with the team during objectives instead of holding a buff far behind everyone.",
  "Swap to weapons only when enemies are close or the line is about to break.",
];

export default function HowToUseMusicianPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            How to Use Musician in Guts and Blackpowder
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            Musician is a support class built around team positioning. Your job is to keep useful buffs active while staying close enough to help the line survive.
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-16">
        <section>
          <SectionTitle
            tag="Quick Answer"
            title="Musician Basics"
            subtitle="Play near the team, keep the buff where it matters, and do not wander away from the defensive line."
            align="left"
          />
          <div className="mt-8 rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
            <ul className="space-y-3">
              {musicianTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-[#c8c4bc]">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af6a]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle tag="Related Guides" title="Build a Better Team" align="left" />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Classes Guide", href: "/classes" },
              { label: "Beginner Guide", href: "/beginner-guide" },
              { label: "Weapons Guide", href: "/weapons" },
              { label: "Enemies Guide", href: "/enemies" },
              { label: "Maps Guide", href: "/maps" },
            ].map((link) => (
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
