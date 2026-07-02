'use client';

import SectionTitle from "@/components/SectionTitle";

const sections = [
  {
    title: "Getting Started",
    points: [
      "Install Roblox and search for Guts and Blackpowder",
      "Choose your starting class — Surgeon or Musician are recommended",
      "Complete the tutorial to learn basic mechanics",
      "Join public servers or play with friends in private lobbies",
      "Check the Beginner Guide for detailed walkthroughs",
    ],
  },
  {
    title: "Game Modes",
    points: [
      "Endless — Survive infinite waves of the undead",
      "Objective — Complete mission goals across historical maps",
      "Versus — Team-based PvP with unique class abilities",
      "Hardcore — Permadeath mode with increased difficulty",
      "Special events — Limited-time game modes with unique rewards",
    ],
  },
  {
    title: "Combat Tips",
    points: [
      "Master the reload timing — each weapon has a unique reload cadence",
      "Use melee attacks to conserve ammunition during early waves",
      "Position yourself near teammates to form defensive lines",
      "Prioritize special infected that break formations",
      "Upgrade your weapons at the armory between matches",
    ],
  },
  {
    title: "Survival Guide",
    points: [
      "Learn map layouts to find chokepoints and safe zones",
      "Communicate with your team using voice chat or quick commands",
      "Manage your stamina — sprinting drains it quickly",
      "Bandages and medical supplies are essential for longer matches",
      "Study enemy patterns to predict attack behaviors",
    ],
  },
];

export default function WikiPage() {
  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212,175,106,0.08) 0%, transparent 60%), linear-gradient(180deg, #05030c 0%, #0a0720 30%, #05030c 100%)",
          }}
        />

        {/* Gold glow decoration */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,106,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <span
            className="inline-block text-xs font-medium tracking-[0.2em] uppercase mb-6"
            style={{ color: "#d4af6a" }}
          >
            Knowledge Base
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Wiki
          </h1>

          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#8a8884" }}
          >
            The complete Guts and Blackpowder knowledge base
          </p>
        </div>
      </section>

      {/* ===== SECTIONS GRID ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            tag="Explore"
            title="Everything You Need to Know"
            subtitle="Comprehensive guides, tips, and strategies for Guts and Blackpowder"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-lg p-6 transition-all duration-300 hover:border-[#d4af6a]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid #2a2826",
                  borderLeft: "4px solid #d4af6a",
                }}
              >
                <h3
                  className="text-xl font-bold mb-5"
                  style={{ color: "#f0ece4" }}
                >
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: "#d4af6a" }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "#8a8884" }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
