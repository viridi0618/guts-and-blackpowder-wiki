import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "Guts & Blackpowder Enemies — All Zombie Types & Infection Guide | G&B Wiki",
  description: "Complete enemy guide for Guts and Blackpowder, including zombies, special infected, boss enemies, and infection mechanics explained.",
  alternates: {
    canonical: "https://gutsandblackpowder.wiki/enemies",
  },
};

// Regular zombie types
const regularEnemies = [
  {
    name: "Shambler",
    icon: "SH",
    type: "Common",
    danger: "Low",
    spawn: "All Maps",
    health: "Low",
    speed: "Slow",
    description: "Complete enemy guide for Guts and Blackpowder, including zombies, special infected, boss enemies, and infection mechanics explained.",
    counters: "One musket shot or melee hit kills them. Headshots save ammo. Bayonet charge clears clusters efficiently.",
  },
  {
    name: "Runner",
    icon: "RN",
    type: "Common",
    danger: "Medium",
    spawn: "All Maps (Wave 7+ Endless)",
    health: "Low",
    speed: "Very Fast",
    description: "Complete enemy guide for Guts and Blackpowder, including zombies, special infected, boss enemies, and infection mechanics explained.",
    counters: "Kill before they reach the line. Requires quick aiming. Officer Charge can knock back approaching Runners. Coordinated volleys are most effective.",
  },
  {
    name: "Bomber",
    icon: "BM",
    type: "Special",
    danger: "High",
    spawn: "All Maps",
    health: "Medium",
    speed: "Slow",
    description: "Complete enemy guide for Guts and Blackpowder, including zombies, special infected, boss enemies, and infection mechanics explained.",
    counters: "Shoot from maximum range. Officer Charge can detonate them safely. Never let one reach melee range in a crowd. Call out Bomber locations.",
  },
  {
    name: "Zapper",
    icon: "ZP",
    type: "Special",
    danger: "High",
    spawn: "All Maps",
    health: "Medium",
    speed: "Medium",
    description: "Complete enemy guide for Guts and Blackpowder, including zombies, special infected, boss enemies, and infection mechanics explained.",
    counters: "Priority target 鈥?kill before they reach the line. Ranged attacks are safest. If stunned, teammates must clear surrounding enemies. Headshots eliminate fastest.",
  },
  {
    name: "Igniter",
    icon: "IG",
    type: "Special",
    danger: "Very High",
    spawn: "All Maps (Wave 20+ Endless)",
    health: "Medium",
    speed: "Medium",
    description: "Complete enemy guide for Guts and Blackpowder, including zombies, special infected, boss enemies, and infection mechanics explained.",
    counters: "Absolute top priority 鈥?kill immediately on sight. Do not cluster near burning players. Spread out to prevent chain fire. Surgeon cannot heal through fire damage effectively.",
  },
  {
    name: "Cuirassier Zombie",
    icon: "CU",
    type: "Elite",
    danger: "Extreme",
    spawn: "All Maps (Wave 16+ Endless)",
    health: "Very High",
    speed: "Medium",
    description: "Complete enemy guide for Guts and Blackpowder, including zombies, special infected, boss enemies, and infection mechanics explained.",
    counters: "Only headshots deal meaningful damage. Requires coordinated team fire. Sapper axe can damage through armor slowly. Spread out to avoid being trampled. Sapper barricades buy time.",
  },
];

// Boss enemies
const bossEnemies = [
  {
    name: "Headless Horseman",
    icon: "HH",
    type: "Boss",
    location: "Sleepy Hollow (Seasonal)",
    health: "Extremely High",
    description: "Complete enemy guide for Guts and Blackpowder, including zombies, special infected, boss enemies, and infection mechanics explained.",
    phases: [
      "Phase 1: Charges on horseback, throws flaming projectiles",
      "Phase 2: Summons Headless Ones while continuing to charge",
      "Phase 3: Increased speed and projectile frequency in final phase",
    ],
  },
  {
    name: "Dracula",
    icon: "DR",
    type: "Boss",
    location: "Transylvania (Seasonal)",
    health: "Extremely High",
    description: "Complete enemy guide for Guts and Blackpowder, including zombies, special infected, boss enemies, and infection mechanics explained.",
    phases: [
      "Phase 1: Dark magic bolts, teleport attacks in the Grand Hall",
      "Phase 2: Summons Vampires, uses area-denial magic",
      "Phase 3: Enhanced speed, combos magic with melee attacks in the Throne Room",
    ],
  },
];

export default function EnemiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Enemies Guide
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            Complete enemy bestiary 鈥?regular zombies, special infected, elite enemies, and boss encounters
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
        {/* Regular Zombies Table */}
        <section>
          <SectionTitle
            tag="Bestiary"
            title="Regular Zombies"
            subtitle="The common and special infected you will face across all maps, ranked by danger level"
            align="left"
          />

          <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold">
                  <th className="px-4 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Enemy</th>
                  <th className="px-4 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Type</th>
                  <th className="px-4 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Danger</th>
                  <th className="px-4 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Spawn</th>
                  <th className="px-4 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Description</th>
                </tr>
              </thead>
              <tbody>
                {regularEnemies.map((enemy, i) => (
                  <tr
                    key={enemy.name}
                    className="border-t border-[#2a2826] transition-colors hover:bg-card-hover"
                    style={{
                      backgroundColor:
                        i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <td className="px-4 py-4 font-serif text-base text-gold whitespace-nowrap">
                      <span className="mr-2">{enemy.icon}</span>{enemy.name}
                    </td>
                    <td className="px-4 py-4 font-sans text-sm text-foreground whitespace-nowrap">
                      {enemy.type}
                    </td>
                    <td
                      className="px-4 py-4 font-sans text-sm font-medium whitespace-nowrap"
                      style={{
                        color:
                          enemy.danger === "Extreme"
                            ? "#ef4444"
                            : enemy.danger === "Very High"
                              ? "#f97316"
                              : enemy.danger === "High"
                                ? "#eab308"
                                : enemy.danger === "Medium"
                                  ? "#22c55e"
                                  : "#8a8884",
                      }}
                    >
                      {enemy.danger}
                    </td>
                    <td className="px-4 py-4 font-sans text-sm text-foreground whitespace-nowrap">
                      {enemy.spawn}
                    </td>
                    <td className="px-4 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>
                      {enemy.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Counter Strategy Cards */}
        <section>
          <SectionTitle
            tag="Counter Strategies"
            title="How to Counter Regular Enemies"
            subtitle="Quick reference for dealing with each enemy type"
            align="center"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {regularEnemies.map((enemy, i) => (
              <div
                key={enemy.name}
                className="rounded-lg p-5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid #2a2826",
                  borderLeft: "3px solid #d4af6a",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{enemy.icon}</span>
                  <div>
                    <h3 className="font-serif text-lg text-[#f0ece4]">{enemy.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <span
                        className="inline-block text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "rgba(212,175,106,0.15)",
                          color: "#d4af6a",
                          border: "1px solid rgba(212,175,106,0.3)",
                        }}
                      >
                        {enemy.type}
                      </span>
                      <span
                        className="inline-block text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor:
                            enemy.danger === "Extreme"
                              ? "rgba(239,68,68,0.15)"
                              : enemy.danger === "Very High"
                                ? "rgba(249,115,22,0.15)"
                                : enemy.danger === "High"
                                  ? "rgba(234,179,8,0.15)"
                                  : enemy.danger === "Medium"
                                    ? "rgba(34,197,94,0.15)"
                                    : "rgba(138,136,132,0.15)",
                          color:
                            enemy.danger === "Extreme"
                              ? "#ef4444"
                              : enemy.danger === "Very High"
                                ? "#f97316"
                                : enemy.danger === "High"
                                  ? "#eab308"
                                  : enemy.danger === "Medium"
                                    ? "#22c55e"
                                    : "#8a8884",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {enemy.danger}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[#c8c4bc] mb-2">
                  <span className="text-[#d4af6a]">Health:</span> {enemy.health} |
                  <span className="text-[#d4af6a]"> Speed:</span> {enemy.speed}
                </div>
                <p className="text-sm text-[#8a8884] mb-2">{enemy.description}</p>
                <div className="text-sm text-[#c8c4bc]">
                  <span className="text-[#d4af6a] font-medium">Counter:</span>
                  <span className="text-[#8a8884]"> {enemy.counters}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Boss Enemies */}
        <section>
          <SectionTitle
            tag="Bosses"
            title="Boss Enemies"
            subtitle="Powerful boss encounters available during seasonal events"
            align="left"
          />

          <div className="mt-8 grid gap-6">
            {bossEnemies.map((boss) => (
              <div
                key={boss.name}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid #d4af6a",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{boss.icon}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#d4af6a]">{boss.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <span
                        className="inline-block text-xs px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "rgba(239,68,68,0.15)",
                          color: "#ef4444",
                          border: "1px solid rgba(239,68,68,0.3)",
                        }}
                      >
                        {boss.type}
                      </span>
                      <span className="inline-block text-xs px-2.5 py-0.5 rounded-full text-[#8a8884]" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid #2a2826" }}>
                        {boss.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#c8c4bc] mb-4">
                  {boss.description}
                </p>

                <h4 className="font-serif text-base text-[#f0ece4] mb-2">Fight Phases:</h4>
                <ul className="space-y-2">
                  {boss.phases.map((phase, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#8a8884]">
                      <span className="text-[#d4af6a] mt-1 flex-shrink-0">&#8226;</span>
                      {phase}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Infection Mechanics */}
        <section>
          <SectionTitle
            tag="Mechanics"
            title="Infection Mechanics"
            subtitle="How the Blight infection works and how to avoid it"
            align="left"
          />

          <div
            className="mt-8 rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #2a2826",
              borderLeft: "3px solid #ef4444",
            }}
          >
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-4">
              Infection is a core mechanic in Guts and Blackpowder. When a player is hit by a zombie, there is a chance they become infected with the Blight. An infected player will gradually lose health and eventually turn into a zombie if not cured.
            </p>

            <div className="space-y-4 mb-4">
              {[
                {
                  title: "How Infection Spreads",
                  desc: "Each zombie attack has a chance to infect you. The chance increases with the number of simultaneous attacks. Bomber explosions and Igniter contact guarantee infection if they do not kill you outright.",
                },
                {
                  title: "Infection Progression",
                  desc: "Once infected, a visual indicator appears on your screen. You have a limited time before turning. The Surgeon's Medical Supplies can cure infection if applied in time. Once you turn, you become a zombie hostile to your former teammates.",
                },
                {
                  title: "Prevention",
                  desc: "Avoid being hit by maintaining distance, using cover, and staying in formation. The Officer's Charge buff can push enemies back. The Chaplain&apos;s Crucifix creates a safe zone that slows undead approach.",
                },
                {
                  title: "Curing Infection",
                  desc: "Only the Surgeon can cure infection using Medical Supplies. If no Surgeon is available or you cannot reach one in time, you will turn. Turning is permanent for that life 鈥?you cannot be revived afterward.",
                },
                {
                  title: "Special Map Mechanics",
                  desc: "On Catacombes de Paris, fire from Igniters is especially dangerous in the confined tunnels. On Berezina, the frostbite mechanic adds an additional survival layer on top of infection risk.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#d4af6a] mt-1.5 flex-shrink-0">&#8226;</span>
                  <div>
                    <span className="text-[#d4af6a] font-medium">{item.title}</span>
                    <span className="text-[#8a8884]"> - {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-lg p-4"
              style={{
                backgroundColor: "rgba(239,68,68,0.05)",
                border: "1px solid rgba(239,68,68,0.2)",
              }}
            >
              <p className="text-sm text-[#ef4444] font-medium">
                Tip: Always keep a Surgeon on your team. Without a Surgeon, infection is essentially a death sentence. In Endless mode past wave 20, the Chaplain&apos;s Crucifix becomes essential for creating safe zones against the overwhelming horde.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

