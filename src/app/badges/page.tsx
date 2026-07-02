import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "Badges & Achievements",
  description: "Complete list of all 31 badges in Guts and Blackpowder — grouped by category with unlock conditions and requirements",
};

// Badge categories with their badges
const badgeCategories = [
  {
    category: "Main Map Completion",
    tag: "MAP BADGES",
    description: "Earned by completing specific objective maps for the first time",
    badges: [
      { name: "Cold Front", map: "Vardohus Fortress", description: "Complete Vardohus Fortress in Objective mode" },
      { name: "Forlorn Hope", map: "San Sebastian", description: "Complete San Sebastian in Objective mode" },
      { name: "Battle of Leipzig", map: "Leipzig", description: "Complete Leipzig in Objective mode" },
      { name: "Defender of the Bridge", map: "Kaub", description: "Complete Kaub in Objective mode" },
      { name: "The Burning City", map: "Copenhagen", description: "Complete Copenhagen in Objective mode" },
      { name: "Liberator of Roscoff", map: "Roscoff", description: "Complete Roscoff in Objective mode" },
      { name: "Descent into Darkness", map: "Catacombes de Paris", description: "Complete Catacombes de Paris in Objective mode" },
      { name: "The Undead Plague", map: "London", description: "Complete London in Objective mode" },
      { name: "The Undead Plague II", map: "Westminster", description: "Complete Westminster in Objective mode" },
    ],
  },
  {
    category: "Special Condition Badges",
    tag: "SPECIAL",
    description: "Earned by completing maps under specific conditions or challenges",
    badges: [
      { name: "Old Yeller", map: "Any Objective", description: "Complete any Objective map without any players being infected" },
      { name: "Give Em Steel", map: "Any Objective", description: "Complete any Objective map using melee weapons only (no guns)" },
      { name: "A Decent Death", map: "Catacombes de Paris", description: "Complete Catacombes de Paris without anyone being set on fire" },
      { name: "Against All Odds", map: "San Sebastian", description: "Complete San Sebastian while at least one player survives with less than 10 HP" },
      { name: "Incredible Speed", map: "Any Objective", description: "Complete an Objective map within a very fast time limit" },
      { name: "Alone in the Dark", map: "Catacombes de Paris", description: "Complete Catacombes de Paris as the last surviving player" },
      { name: "Baptism of Fire", map: "Any Endless", description: "Survive wave 15 in any Endless map" },
      { name: "Mark of the Veteran", map: "Any Endless", description: "Survive wave 25 in any Endless map (requires Chaplain)" },
      { name: "Veteran of the Blight", map: "Any Endless", description: "Survive wave 30 in any Endless map" },
      { name: "Hero of the Blight", map: "Any Endless", description: "Survive wave 35 in any Endless map" },
      { name: "Soldats de ma Vieille Garde", map: "Any Endless", description: "Survive wave 50 in any Endless map — the hardest badge in the game" },
      { name: "Counterattack", map: "Berezina", description: "Complete Berezina Holdout" },
      { name: "Frostbitten", map: "Saint Petersburg", description: "Complete Saint Petersburg Holdout" },
    ],
  },
  {
    category: "Class & Hidden Badges",
    tag: "CLASS & HIDDEN",
    description: "Earned by unlocking special classes or discovering hidden secrets",
    badges: [
      { name: "Soldier's Grace", map: "Any Objective", description: "Unlock the Chaplain class by completing an Objective map as a Surgeon without dying" },
      { name: "Untouchable", map: "Catacombes de Paris", description: "Hidden achievement. Complete Catacombes de Paris without ever being hit by any enemy. Rewards the Delicious Leg item" },
      { name: "Vos Enterrement", map: "Catacombes de Paris", description: "Unlock Barry. Complete the Barry puzzle chain across multiple maps" },
    ],
  },
];

export default function BadgesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Badges & Achievements
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            All 31 badges in Guts and Blackpowder — from map completions to hidden achievements. Unlock them all to prove your mastery.
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
        {badgeCategories.map((group) => (
          <section key={group.category}>
            <SectionTitle
              tag={group.tag}
              title={group.category}
              subtitle={group.description}
              align="left"
            />

            <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gold">
                    <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                      Badge Name
                    </th>
                    <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                      Map / Location
                    </th>
                    <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                      How to Unlock
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.badges.map((badge, i) => (
                    <tr
                      key={badge.name}
                      className="border-t border-[#2a2826] transition-colors hover:bg-card-hover"
                      style={{
                        backgroundColor:
                          i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <td className="px-5 py-4 font-serif text-base text-gold whitespace-nowrap">
                        {badge.name}
                      </td>
                      <td className="px-5 py-4 font-sans text-sm text-foreground whitespace-nowrap">
                        {badge.map}
                      </td>
                      <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>
                        {badge.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Special Highlight Cards */}
        <section>
          <SectionTitle
            tag="Notable Achievements"
            title="Key Badges Explained"
            subtitle="Detailed information on the most important badges"
            align="center"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Soldier's Grace */}
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #2a2826",
                borderLeft: "3px solid #d4af6a",
              }}
            >
              <h3 className="font-serif text-xl text-[#d4af6a] mb-3">Soldier's Grace</h3>
              <span
                className="inline-block text-xs px-2.5 py-0.5 rounded-full mb-3"
                style={{
                  backgroundColor: "rgba(212,175,106,0.15)",
                  color: "#d4af6a",
                  border: "1px solid rgba(212,175,106,0.3)",
                }}
              >
                Unlocks Chaplain
              </span>
              <p className="text-sm leading-relaxed text-[#c8c4bc] mb-3">
                Complete any Objective map as a Surgeon without dying even once. This is the only way to unlock the Chaplain class.
              </p>
              <p className="text-sm leading-relaxed text-[#8a8884]">
                Tips: Stay behind the frontline, prioritize self-preservation, and let teammates take the risks. Play on easier maps like Vardohus Fortress for your first attempt.
              </p>
            </div>

            {/* Untouchable */}
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #2a2826",
                borderLeft: "3px solid #d4af6a",
              }}
            >
              <h3 className="font-serif text-xl text-[#d4af6a] mb-3">Untouchable</h3>
              <span
                className="inline-block text-xs px-2.5 py-0.5 rounded-full mb-3"
                style={{
                  backgroundColor: "rgba(212,175,106,0.15)",
                  color: "#d4af6a",
                  border: "1px solid rgba(212,175,106,0.3)",
                }}
              >
                Hidden Achievement
              </span>
              <p className="text-sm leading-relaxed text-[#c8c4bc] mb-3">
                Complete Catacombes de Paris without ever being hit by any enemy. This hidden achievement rewards the Delicious Leg item.
              </p>
              <p className="text-sm leading-relaxed text-[#8a8884]">
                Tips: Requires perfect positioning and a strong team that can clear enemies before they reach you. Stay far back and let teammates handle close combat.
              </p>
            </div>

            {/* Soldats de ma Vieille Garde */}
            <div
              className="rounded-lg p-6 md:col-span-2"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #d4af6a",
                borderLeft: "3px solid #d4af6a",
              }}
            >
              <h3 className="font-serif text-xl text-[#d4af6a] mb-3">Soldats de ma Vieille Garde</h3>
              <span
                className="inline-block text-xs px-2.5 py-0.5 rounded-full mb-3"
                style={{
                  backgroundColor: "rgba(239,68,68,0.15)",
                  color: "#ef4444",
                  border: "1px solid rgba(239,68,68,0.3)",
                }}
              >
                Hardest Badge
              </span>
              <p className="text-sm leading-relaxed text-[#c8c4bc] mb-3">
                Survive wave 50 in any Endless map. This is widely considered the hardest badge in Guts and Blackpowder, requiring hours of flawless gameplay with a perfectly coordinated team.
              </p>
              <p className="text-sm leading-relaxed text-[#8a8884]">
                Requirements: A full team of 12 experienced players, at least one Chaplain for healing and Crucifix support, multiple Sappers for barricade management, Officers for Charge buffs, and Surgeons for emergency healing. Ammo conservation and perfect positioning are essential. Past wave 35, enemies become extremely numerous and dangerous.
              </p>
            </div>
          </div>
        </section>

        {/* Vos Enterrement - Barry Unlock */}
        <section>
          <SectionTitle
            tag="Secret Class"
            title="Vos Enterrement — Unlocking Barry"
            subtitle="The multi-map puzzle chain to unlock the secret Barry class"
            align="left"
          />

          <div
            className="mt-8 rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #2a2826",
            }}
          >
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-6">
              Vos Enterrement is the badge earned by unlocking Barry, a secret playable class. The unlock process requires solving a multi-step puzzle across several maps. Here is the complete sequence:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "Step 1: San Sebastian — Hidden Chamber",
                  desc: "In the catacombs of San Sebastian, find a hidden chamber by destroying a specific wall. Inside, you will find a piano with a clue.",
                },
                {
                  step: "Step 2: Leipzig — Piano Sequence",
                  desc: "In the church on Leipzig, play a specific piano key sequence. The correct sequence is revealed by the clue found in San Sebastian.",
                },
                {
                  step: "Step 3: Copenhagen — Mysterious Key",
                  desc: "In the Copenhagen church, locate and pick up the Mysterious Key that spawns after completing the previous steps.",
                },
                {
                  step: "Step 4: Catacombes de Paris — Barry's Tomb",
                  desc: "Using the Mysterious Key, open Barry's tomb in the Catacombes de Paris. This unlocks Barry as a playable class and grants the Vos Enterrement badge.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid #2a2826",
                    borderLeft: "3px solid #d4af6a",
                  }}
                >
                  <span className="text-[#d4af6a] font-bold text-lg flex-shrink-0">{i + 1}.</span>
                  <div>
                    <h4 className="font-serif text-base text-[#f0ece4] mb-1">{item.step}</h4>
                    <p className="text-sm text-[#8a8884]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
