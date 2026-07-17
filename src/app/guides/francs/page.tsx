import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "How to Get Francs in Guts and Blackpowder — Best Farming Methods & Complete Currency Guide",
  description: "Complete Francs guide for Guts and Blackpowder — how to earn Francs fast, best farming methods (Hardcore Endless, Speedrun Objectives, Holdout), and what to spend them on.",
  alternates: {
    canonical: "https://gutsandblackpowder.wiki/guides/francs",
  },
};

// Franc earning rates by activity
const francEarningRates = [
  {
    activity: "Objective Maps",
    tag: "OBJECTIVE",
    description: "Earn Francs by completing objective missions. Rewards vary by map length and difficulty.",
    rates: [
      { map: "Vardohus Fortress", francs: "250", note: "Shorter map, lower payout" },
      { map: "San Sebastian", francs: "400", note: "Longer map, higher payout" },
      { map: "Leipzig", francs: "350", note: "Medium length, good payout" },
      { map: "Kaub", francs: "300", note: "Medium length" },
      { map: "Copenhagen", francs: "300", note: "Medium length" },
      { map: "Roscoff", francs: "350", note: "Medium length, good payout" },
      { map: "Catacombes de Paris", francs: "400", note: "Long and difficult, high payout" },
      { map: "London", francs: "300", note: "Medium length" },
      { map: "Westminster", francs: "350", note: "Medium length, good payout" },
    ],
  },
  {
    activity: "Endless Waves",
    tag: "ENDLESS",
    description: "Survive waves to earn Francs. Bonus Francs awarded every 5 waves.",
    rates: [
      { map: "Every 5 Waves", francs: "500", note: "Bonus payout every 5 waves" },
      { map: "Wave 25", francs: "~2,500", note: "Total earned by wave 25" },
      { map: "Wave 30", francs: "~3,500", note: "Total earned by wave 30" },
      { map: "Wave 35", francs: "~4,500", note: "Total earned by wave 35" },
      { map: "Wave 50", francs: "~7,000+", note: "High wave runs are very lucrative" },
    ],
  },
  {
    activity: "Hardcore Mode",
    tag: "HARDCORE",
    description: "Apply the Hardcore modifier for double Franc earnings across all activities.",
    rates: [
      { map: "Hardcore Objective", francs: "2x", note: "All objective map rewards doubled" },
      { map: "Hardcore Endless", francs: "2x", note: "All wave bonuses doubled" },
      { map: "Hardcore Holdout", francs: "2x", note: "All holdout rewards doubled" },
    ],
  },
  {
    activity: "Support Roles",
    tag: "SUPPORT",
    description: "Additional Franc bonuses for playing essential support classes.",
    rates: [
      { map: "Surgeon Heals", francs: "5-15 per heal", note: "Bonus for healing and reviving teammates" },
      { map: "Officer Charge Buffs", francs: "5-10 per buff", note: "Bonus for buffing teammates with Charge" },
      { map: "Sapper Builds", francs: "5 per structure", note: "Bonus for building barricades and structures" },
      { map: "Chaplain Heals", francs: "5-15 per heal", note: "Bonus for healing with Holy Bible" },
    ],
  },
];

export default function FrancsGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Francs Guide
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            Master the in-game currency of Guts and Blackpowder — learn how to earn Francs efficiently and what to spend them on
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
        {/* What are Francs? */}
        <section>
          <SectionTitle
            tag="Currency"
            title="What are Francs?"
            subtitle="The in-game currency of Guts and Blackpowder"
            align="left"
          />
          <div
            className="mt-8 rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #2a2826",
              borderLeft: "3px solid #d4af6a",
            }}
          >
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-4">
              Francs are the premium in-game currency in Guts and Blackpowder. They are earned by completing objectives, surviving waves, and participating in matches. Unlike Robux (Roblox&apos;s real-money currency), Francs are earned entirely through gameplay and cannot be purchased directly.
            </p>
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-4">
              Francs serve as the game&apos;s progression economy. They are used to purchase weapon skins, cosmetic items, and at the trader NPC in the Saint Petersburg Holdout map. Earning Francs efficiently is key to unlocking the cosmetic items you want.
            </p>
            <p className="text-base leading-relaxed text-[#c8c4bc]">
              The Franc economy is designed to reward skilled play and team contribution. Players who complete objectives, survive longer, and play supportive roles earn more Francs over time.
            </p>
          </div>
        </section>

        {/* How to Earn Francs */}
        <section>
          <SectionTitle
            tag="Earning"
            title="How to Earn Francs"
            subtitle="Breakdown of Franc earnings across all game activities"
            align="left"
          />

          {francEarningRates.map((group) => (
            <div key={group.activity} className="mt-10">
              <div className="mb-4">
                <span
                  className="font-sans text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#d4af6a" }}
                >
                  {group.tag}
                </span>
                <h3 className="font-serif text-xl text-[#f0ece4] mt-1">{group.activity}</h3>
                <p className="text-sm text-[#8a8884] mt-1">{group.description}</p>
              </div>

              <div className="overflow-x-auto rounded-lg border border-[#2a2826]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gold">
                      <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                        Activity / Map
                      </th>
                      <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                        Francs
                      </th>
                      <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rates.map((rate, i) => (
                      <tr
                        key={i}
                        className="border-t border-[#2a2826]"
                        style={{
                          backgroundColor:
                            i % 2 === 0
                              ? "rgba(255,255,255,0.03)"
                              : "rgba(255,255,255,0.06)",
                        }}
                      >
                        <td className="px-5 py-4 font-serif text-sm text-gold whitespace-nowrap">
                          {rate.map}
                        </td>
                        <td className="px-5 py-4 font-sans text-sm text-foreground whitespace-nowrap font-medium">
                          {rate.francs}
                        </td>
                        <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>
                          {rate.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* Fastest Way to Get Francs */}
        <section>
          <SectionTitle
            tag="Optimization"
            title="Fastest Way to Get Francs"
            subtitle="The most efficient Franc farming strategies"
            align="left"
          />
          <div
            className="mt-8 rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #2a2826",
              borderLeft: "3px solid #d4af6a",
            }}
          >
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-6">
              Based on the earning rates above, here are the most efficient strategies for farming Francs:
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "1. Hardcore Endless — Best Overall",
                  desc: "Play Endless mode with the Hardcore modifier enabled. The double Franc multiplier applies to wave bonuses and every 5-wave bonus. A coordinated team reaching wave 25+ on Hardcore Endless can earn 5,000+ Francs per run.",
                },
                {
                  title: "2. Speedrun Objective Maps",
                  desc: "Complete shorter Objective maps (Vardohus Fortress, Copenhagen, London) quickly and efficiently. While each individual run pays less than longer maps, the faster completion time means more runs per hour and higher total Francs earned.",
                },
                {
                  title: "3. Saint Petersburg Holdout",
                  desc: "Saint Petersburg Holdout mode with Hardcore modifier offers consistent Franc earnings from wave bonuses combined with the trader NPC economy. Surviving all 10 waves on Hardcore provides a substantial payout.",
                },
                {
                  title: "4. Play Support Roles",
                  desc: "Playing Surgeon, Officer, or Chaplain earns bonus Francs from heals, buffs, and support actions. These bonuses stack with map completion rewards and wave bonuses, making support classes surprisingly lucrative over time.",
                },
                {
                  title: "5. High Wave Endless",
                  desc: "Pushing to wave 30+ (or even wave 50 for the truly ambitious) provides the single largest Franc payout in the game. The every-5-wave bonus scales well, and surviving longer waves demonstrates mastery of the game.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid #2a2826",
                  }}
                >
                  <h4 className="font-serif text-base text-[#d4af6a] mb-1">{item.title}</h4>
                  <p className="text-sm text-[#8a8884]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Buy */}
        <section>
          <SectionTitle
            tag="Shopping"
            title="What to Buy with Francs"
            subtitle="Best purchases and what to save for"
            align="left"
          />
          <div
            className="mt-8 rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #2a2826",
              borderLeft: "3px solid #d4af6a",
            }}
          >
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-6">
              Francs can be spent on a variety of cosmetic items and in-game purchases. Here is what you should prioritize:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Weapon Skins",
                  desc: "The most popular Franc purchase. Weapon skins change the appearance of your muskets, sabres, and other equipment. Prices vary from 500 to 5,000 Francs depending on rarity.",
                  priority: "High",
                },
                {
                  title: "Character Cosmetics",
                  desc: "Uniform variants, hats, and other cosmetic items allow you to customize your soldier's appearance. These are purely visual and do not affect gameplay.",
                  priority: "Medium",
                },
                {
                  title: "Saint Petersburg Trader Items",
                  desc: "In Saint Petersburg Holdout mode, a trader NPC sells supplies between waves using Francs. Items include ammunition, healing items, and temporary buffs that can help you survive all 10 waves.",
                  priority: "Situational",
                },
                {
                  title: "Limited-Time Cosmetics",
                  desc: "During seasonal events (Halloween, etc.), exclusive cosmetic items become available for Francs. These are time-limited and may not return, so prioritize them if you want exclusive gear.",
                  priority: "High (Seasonal)",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg p-5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid #2a2826",
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-serif text-base text-[#f0ece4]">{item.title}</h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor:
                          item.priority === "High"
                            ? "rgba(34,197,94,0.15)"
                            : item.priority === "High (Seasonal)"
                              ? "rgba(239,68,68,0.15)"
                              : item.priority === "Medium"
                                ? "rgba(212,175,106,0.15)"
                                : "rgba(138,136,132,0.15)",
                        color:
                          item.priority === "High"
                            ? "#22c55e"
                            : item.priority === "High (Seasonal)"
                              ? "#ef4444"
                              : item.priority === "Medium"
                                ? "#d4af6a"
                                : "#8a8884",
                      }}
                    >
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-sm text-[#8a8884]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section>
          <SectionTitle
            tag="Tips"
            title="Franc Farming Tips"
            subtitle="Pro strategies for maximizing your Franc earnings"
            align="left"
          />
          <div
            className="mt-8 rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #2a2826",
            }}
          >
            <ul className="space-y-3 text-[#c8c4bc]">
              {[
                {
                  title: "Always Enable Hardcore",
                  desc: "If your team is skilled enough, always enable the Hardcore modifier. The double Franc multiplier effectively means you earn twice as much for the same time investment.",
                },
                {
                  title: "Play with a Coordinated Team",
                  desc: "Surviving longer in Endless mode and completing Objective maps more reliably means more consistent Franc earnings. Playing with a regular group through Discord or friends list is the most efficient way.",
                },
                {
                  title: "Stack Support Bonuses",
                  desc: "Playing Surgeon or Chaplain and actively healing teammates provides bonus Francs on top of map completion rewards. A good Surgeon can earn 200-500 bonus Francs per map from heals alone.",
                },
                {
                  title: "Focus on Efficiency, Not Glory",
                  desc: "A quick, clean completion of Vardohus Fortress on Hardcore (paying 500 Francs) in 15 minutes is more efficient than spending 45 minutes on San Sebastian for 800 Francs. Calculate your Francs-per-minute rate.",
                },
                {
                  title: "Save for Seasonal Items",
                  desc: "Limited-time seasonal cosmetics are often the most coveted items. Save up Francs in advance of Halloween and other seasonal events so you can purchase exclusive items when they become available.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#d4af6a] mt-1.5 flex-shrink-0">&#8226;</span>
                  <div>
                    <span className="text-[#d4af6a] font-medium">{item.title}</span>
                    <span className="text-[#8a8884]"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
