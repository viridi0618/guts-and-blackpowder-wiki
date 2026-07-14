import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Guts & Blackpowder Classes Guide — All 7 Roles & Best Picks | G&B Wiki",
  description: "All 7 classes in Guts and Blackpowder explained in detail — Line Infantry, Officer, Seaman, Musician, Sapper, Surgeon, Chaplain. Roles, abilities, and team synergy.",
  alternates: {
    canonical: "https://gutsandblackpowder.wiki/classes",
  },
};

const classData = [
  {
    name: "Line Infantry",
    icon: "🔫",
    role: "Standard Soldier",
    difficulty: "Easy",
    weapon: "Musket + Bayonet",
    description: "The backbone of any army. Line Infantry uses smoothbore muskets with bayonets, making them effective at both ranged and melee combat. Reliable in all situations and the most beginner-friendly class.",
    strengths: ["Versatile in all combat ranges", "Bayonet allows melee without switching weapons", "High survivability", "Easy to learn"],
    weaknesses: ["Slow reload speed", "No special abilities", "Average in every role"],
    tips: "Stick with your team. Use your bayonet to save ammo on shamblers. Reload behind cover — muskets are slow.",
  },
  {
    name: "Officer",
    icon: "⚔️",
    role: "Team Leader",
    difficulty: "Medium",
    weapon: "Pistol + Sabre + Bugle",
    description: "The team commander. Officers use the Bugle to charge teammates, providing a powerful offensive buff. The Officer's Charge ability allows the team to push through zombie hordes. Essential for Bomber encounters — the charge can safely detonate Bombers at range.",
    strengths: ["Bugle charge buffs entire team", "Can safely detonate Bombers", "Strong melee with sabre", "Turns the tide in critical moments"],
    weaknesses: ["Limited ranged capability (pistol only)", "Charge has cooldown", "Requires team coordination"],
    tips: "Save your charge for Bomber waves or clutch moments. Communicate with your team before charging. Use sabre for crowd control when pistol is reloading.",
  },
  {
    name: "Seaman",
    icon: "⚓",
    role: "Ranged Specialist",
    difficulty: "Medium",
    weapon: "Blunderbuss + Sabre",
    description: "A naval soldier armed with the devastating Blunderbuss. The Blunderbuss fires a spread of pellets, making it extremely effective against groups of zombies at close range. Excellent for crowd control and holding choke points.",
    strengths: ["Blunderbuss destroys groups at close range", "Excellent crowd control", "Strong in tight corridors", "High burst damage"],
    weaknesses: ["Ineffective at long range", "Slow reload", "Limited ammo capacity", "Vulnerable during reload"],
    tips: "Position yourself at choke points where zombies cluster. Let them group up before firing. Pair with a Line Infantry for long-range cover during reloads.",
  },
  {
    name: "Musician",
    icon: "🎵",
    role: "Support / Buffer",
    difficulty: "Easy",
    weapon: "Sabre + Fife",
    description: "A support class that provides team-wide buffs through music. The Fife increases movement speed for all nearby teammates, while the Drum provides a different buff. Musicians are essential for team mobility and repositioning during intense fights.",
    strengths: ["Team movement speed buff", "Fast melee with sabre", "Simple to play", "Always useful to the team"],
    weaknesses: ["No ranged weapon", "Low damage output", "Relies entirely on team", "Fragile in direct combat"],
    tips: "Stay near your team to maximize buff uptime. Use your speed to revive downed teammates. Don't engage enemies alone — you're a support, not a fighter.",
  },
  {
    name: "Sapper",
    icon: "🛠️",
    role: "Engineer / Builder",
    difficulty: "Hard",
    weapon: "Axe + Hammer",
    description: "The engineer class. Sappers can build defensive structures (barricades, stakes, and fortifications) using the Hammer. The Axe deals massive damage but is slow. Essential in Holdout mode for building defenses before waves.",
    strengths: ["Builds defensive structures", "Massive melee damage with axe", "Essential for Holdout mode", "Controls the battlefield with barricades"],
    weaknesses: ["Very slow attack speed", "No ranged weapon", "Vulnerable while building", "Requires map knowledge for optimal building"],
    tips: "Build barricades at choke points. Prioritize building before waves start. Learn each map's best building spots. The axe one-shots most regular zombies — time your swings.",
  },
  {
    name: "Surgeon",
    icon: "🏥",
    role: "Healer",
    difficulty: "Medium",
    weapon: "Sabre + Medical Supplies",
    description: "The team medic. Surgeons can heal and revive teammates using Medical Supplies. They are the only class that can cure infection and bring players back from the brink. A good Surgeon can carry an entire team through the hardest content.",
    strengths: ["Heals teammates", "Cures zombie infection", "Revives downed players", "Essential for high-wave Endless"],
    weaknesses: ["No ranged weapon", "Limited medical supplies", "Heavily targeted by special enemies", "Can't heal while under attack"],
    tips: "Prioritize healing infected teammates — infection kills faster than damage. Stay behind the front line. Save supplies for critical moments. Communicate who needs healing.",
  },
  {
    name: "Chaplain",
    icon: "✝️",
    role: "Support / Crowd Control",
    difficulty: "Hard",
    weapon: "Holy Bible + Crucifix",
    description: "A religious support class. The Holy Bible heals nearby teammates over time, and the Crucifix creates a safe zone that repels undead enemies. The Chaplain is essential for surviving high-wave Endless runs (wave 20+) and is one of the most important classes for team survival.",
    strengths: ["Area healing with Holy Bible", "Crucifix repels all undead", "Creates safe zones", "Essential for wave 20+ Endless"],
    weaknesses: ["No weapons at all", "Completely defenseless alone", "Requires constant team protection", "Unlocked via Soldier's Grace badge"],
    tips: "Unlocked by earning the Soldier's Grace badge as Surgeon. Stay in the center of your team. Place Crucifix at choke points. The Bible's healing is passive — stay close to teammates.",
  },
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Classes Guide
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            All 7 classes explained in detail — roles, abilities, and team synergy
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
        {/* Class Overview */}
        <section>
          <SectionTitle tag="Overview" title="Each Class Explained" subtitle="Complete breakdown of all 7 playable classes" align="left" />
          <div className="mt-8 grid gap-6">
            {classData.map((cls, i) => (
              <div key={cls.name} className="rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-2xl">{cls.icon}</span>
                  <div className="flex-1">
                    <h2 className="font-serif text-xl text-[#f0ece4]">{cls.name}</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(212,175,106,0.1)", color: "#d4af6a", border: "1px solid rgba(212,175,106,0.3)" }}>{cls.role}</span>
                      <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#8a8884", border: "1px solid #2a2826" }}>Difficulty: {cls.difficulty}</span>
                      <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#8a8884", border: "1px solid #2a2826" }}>{cls.weapon}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#c8c4bc] mb-4">{cls.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#d4af6a] mb-2">Strengths</h4>
                    <ul className="space-y-1">
                      {cls.strengths.map((s) => (
                        <li key={s} className="text-xs text-[#8a8884] flex items-start gap-2">
                          <span className="text-[#22c55e] mt-0.5">+</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#ef4444] mb-2">Weaknesses</h4>
                    <ul className="space-y-1">
                      {cls.weaknesses.map((w) => (
                        <li key={w} className="text-xs text-[#8a8884] flex items-start gap-2">
                          <span className="text-[#ef4444] mt-0.5">-</span> {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 rounded-lg p-3" style={{ backgroundColor: "rgba(212,175,106,0.05)", border: "1px solid rgba(212,175,106,0.2)" }}>
                  <p className="text-xs text-[#d4af6a]"><strong>Tip:</strong> {cls.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle tag="Support Classes" title="Class-Specific Guides" align="left" />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "How to Use Musician", href: "/guides/how-to-use-musician" },
              { label: "Weapons Guide", href: "/weapons" },
              { label: "Beginner Guide", href: "/beginner-guide" },
              { label: "Achievements Guide", href: "/achievements" },
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
