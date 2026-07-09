import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Guts and Blackpowder Cuirassier Guide: How to Beat Cuirassier Zombies",
  description:
    "Learn how to fight Cuirassier Zombies in Guts and Blackpowder, including weak points, Endless wave timing, counters, and team tips for Roblox G&B.",
};

const tips = [
  "Aim for exposed weak points instead of wasting shots into armor.",
  "Call out Cuirassier spawns early so the team can focus fire.",
  "Do not let armored enemies break the defensive line during Endless waves.",
  "Use Sapper defenses and team volleys to slow them before they reach melee range.",
  "Keep Bombers and Runners controlled first if they appear at the same time.",
];

export default function CuirassierGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Guts and Blackpowder Cuirassier Guide
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            Cuirassier Zombies are armored special enemies that appear in Endless mode from wave 16 onward. They can absorb careless shots, so teams should call them out and focus fire on weak points.
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-16">
        <section>
          <SectionTitle
            tag="Quick Answer"
            title="How to Beat Cuirassier Zombies"
            subtitle="Treat Cuirassiers as priority armored targets. Stay behind the line, avoid rushed melee trades, and use focused shots with team support."
            align="left"
          />
          <div className="mt-8 rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
            <ul className="space-y-3">
              {tips.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-[#c8c4bc]">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af6a]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle tag="Related Guides" title="Keep Learning" align="left" />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Enemies Guide", href: "/enemies" },
              { label: "Weapons Guide", href: "/weapons" },
              { label: "Classes Guide", href: "/classes" },
              { label: "Maps Guide", href: "/maps" },
              { label: "Commands", href: "/commands" },
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
