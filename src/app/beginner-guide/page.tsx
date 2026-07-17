import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Guts and Blackpowder Beginner Guide — How to Survive Your First Match",
  description: "Complete beginner's guide for Guts and Blackpowder — basic controls, combat tips, class recommendations, and battlefield survival strategies for new players.",
  alternates: {
    canonical: "https://gutsandblackpowder.wiki/beginner-guide",
  },
};

export default function BeginnerGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Beginner Guide
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            How to survive your first match in Guts and Blackpowder — basic controls, combat tips, and class recommendations
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
        {/* Getting Started */}
        <section>
          <SectionTitle tag="START HERE" title="Getting Started" subtitle="The basics every new player needs to know" align="left" />
          <div className="mt-8 space-y-4">
            {[
              { title: "Join a Game", desc: "Open Roblox, search for 'Guts and Blackpowder', and click Play. The game has 533M+ total plays and is free to play. You'll be placed in a server with up to 12 players." },
              { title: "Choose Your Class", desc: "Start with Line Infantry — it's the most beginner-friendly class. You get a musket with a bayonet, making you effective at both ranged and melee combat. As you learn the game, experiment with other classes." },
              { title: "Learn the Controls", desc: "Use WASD to move, left-click to attack/shoot, right-click to aim, and F to interact. Press R to reload your musket. The chat box is opened with / and the Command Bar is opened with ] (useful if chat is blocked)." },
              { title: "Follow Your Team", desc: "Guts and Blackpowder is a team game. Stick with your squad, follow the objective markers, and never run off alone. Lone wolves die fast." },
              { title: "Watch the Objective", desc: "In Objective mode, follow the on-screen prompts. Each map has unique objectives — find keys, light signal fires, capture positions, and escape. The minimap shows your next objective location." },
            ].map((item, i) => (
              <div key={i} className="rounded-lg p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
                <h3 className="font-serif text-base text-[#d4af6a] mb-2">{i + 1}. {item.title}</h3>
                <p className="text-sm text-[#8a8884]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Combat Tips */}
        <section>
          <SectionTitle tag="Combat" title="Combat Tips" subtitle="How to fight and survive against the undead" align="left" />
          <div className="mt-8 space-y-4">
            {[
              { title: "Use Melee for Shamblers", desc: "Shamblers are the slow, basic zombies. Don't waste musket shots on them — use your bayonet or sabre instead. Save your ammo for special enemies." },
              { title: "Shoot Runners First", desc: "Runners are fast zombies that sprint toward players. They deal high damage and cause infection. Prioritize shooting them before they reach your team." },
              { title: "Keep Distance from Bombers", desc: "Bombers are bloated zombies that explode when killed or when close to players. Shoot them from a distance, or let the Officer use their charge to safely detonate them." },
              { title: "Avoid Zappers", desc: "Zappers use a slow but devastating axe attack. They can one-shot most classes. Keep your distance, shoot them, and never try to melee a Zapper." },
              { title: "Reload Behind Cover", desc: "Muskets are slow to reload. Always find cover (a wall, barricade, or behind teammates) before reloading. Never reload in the open with zombies nearby." },
              { title: "Watch Your Infection", desc: "Getting hit by zombies causes infection, shown by a green bar on your HUD. When it fills up, you turn into a zombie. Only the Surgeon can cure infection — find one fast if you're infected." },
            ].map((item, i) => (
              <div key={i} className="rounded-lg p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
                <h3 className="font-serif text-base text-[#d4af6a] mb-2">{i + 1}. {item.title}</h3>
                <p className="text-sm text-[#8a8884]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Class Recommendation */}
        <section>
          <SectionTitle tag="Classes" title="Recommended Starting Class" subtitle="Which class should you pick as a beginner?" align="left" />
          <div className="mt-8 rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
            <p className="text-base text-[#c8c4bc] mb-4">
              <strong className="text-[#d4af6a]">Start with Line Infantry.</strong> It&apos;s the most versatile class — the musket with bayonet lets you handle any situation. You&apos;ll learn the fundamentals of both ranged and melee combat without being overwhelmed by special abilities.
            </p>
            <p className="text-sm text-[#8a8884] mb-4">
              Once you&apos;re comfortable with Line Infantry, try these next:
            </p>
            <div className="space-y-2">
              {[
                { cls: "Officer", why: "Learn team leadership with the Bugle charge. Great for understanding team timing.", when: "After 5-10 matches" },
                { cls: "Surgeon", why: "Learn support role. Essential for understanding infection mechanics and team survival.", when: "After 10-15 matches" },
                { cls: "Sapper", why: "Learn map layouts and defensive building. Critical for Holdout mode.", when: "After 15-20 matches" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826" }}>
                  <span className="text-[#d4af6a] font-bold text-sm whitespace-nowrap">{item.cls}</span>
                  <span className="text-xs text-[#8a8884]">{item.why} — <span className="text-[#d4af6a]">{item.when}</span></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Game Modes */}
        <section>
          <SectionTitle tag="Modes" title="Understanding Game Modes" subtitle="What each mode is and which to play first" align="left" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { mode: "Objective", desc: "The main mode. Complete map objectives then escape. Deaths respawn at checkpoints. Start here — it's the most forgiving mode.", players: "Up to 12", maps: "9" },
              { mode: "Endless", desc: "Survive infinite waves. No respawns. Each wave gets harder. Try this after you're comfortable with Objective mode.", players: "Up to 12", maps: "6" },
              { mode: "Holdout", desc: "Defend a fixed position through waves. Build defenses between waves. Requires a coordinated team.", players: "Up to 12", maps: "2" },
              { mode: "Boss Event", desc: "Seasonal boss fights during Halloween. Extremely difficult. Only attempt with an experienced team.", players: "Up to 12", maps: "2" },
            ].map((item, i) => (
              <div key={i} className="rounded-lg p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
                <h3 className="font-serif text-base text-[#d4af6a] mb-2">{item.mode}</h3>
                <p className="text-xs text-[#8a8884] mb-3">{item.desc}</p>
                <div className="flex gap-3 text-xs">
                  <span className="text-[#f0ece4]">{item.players}</span>
                  <span className="text-[#8a8884]">{item.maps} maps</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Tips */}
        <section>
          <SectionTitle tag="Advanced" title="Pro Tips for New Players" subtitle="Things the game doesn't tell you" align="left" />
          <div className="mt-8 space-y-3">
            {[
              "Press ] to open the Command Bar if chat is blocked in your region",
              "You earn Francs (in-game currency) every 5 waves in Endless mode",
              "Hardcore mode doubles all Franc rewards but makes enemies much harder",
              "The Chaplain class is locked behind the Soldier's Grace badge — play Surgeon without dying in an Objective map to unlock it",
              "Always have a Surgeon on your team. Infection is a death sentence without one",
              "In Endless mode, special enemies appear at specific waves: Runners at wave 7, Cuirassiers at wave 16, Igniters at wave 20",
              "Use the /ping command to check your latency if the game feels laggy",
              "Join the official Discord (540K+ members) to find teams and stay updated on events",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826" }}>
                <span className="text-[#d4af6a] mt-0.5 flex-shrink-0">&#8226;</span>
                <span className="text-sm text-[#8a8884]">{tip}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
