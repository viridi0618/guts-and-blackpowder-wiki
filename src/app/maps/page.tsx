import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "Maps",
  description: "Complete list of all 15 maps in Guts and Blackpowder — Objective, Endless, Holdout, and Seasonal maps with descriptions",
};

  // SEO: BreadcrumbList Schema
  const bcJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gutsandblackpowder.wiki/"},
      {"@type": "ListItem", "position": 2, "name": "Maps", "item": "https://gutsandblackpowder.wiki/maps"}
    ]
  };

// Map data organized by mode
const mapModes = [
  {
    mode: "Objective",
    tag: "OBJECTIVE",
    description: "Complete mission objectives and escape. 9 maps available.",
    color: "#22c55e",
    maps: [
      { name: "Vardohus Fortress", players: "Up to 12", description: "Snow-covered Norwegian fortress. Light signal fires and escape by boat through tight corridors." },
      { name: "San Sebastian", players: "Up to 12", description: "1813 siege. Beach assault, wall breach, town capture, and catacomb escape." },
      { name: "Leipzig", players: "Up to 12", description: "Battle of Nations. Church start, destroyed village, key-finding finale." },
      { name: "Kaub", players: "Up to 12", description: "1814 Rhine crossing. Bridge assault, town capture, vineyard fighting, second bridge escape." },
      { name: "Copenhagen", players: "Up to 12", description: "1807 battle. Narrow streets, harbor district, church cemetery finale." },
      { name: "Roscoff", players: "Up to 12", description: "Coastal town. Church, chateau interiors, ship extraction finale." },
      { name: "Catacombes de Paris", players: "Up to 12", description: "Dark underground tunnels. Limited visibility, claustrophobic combat." },
      { name: "London", players: "Up to 12", description: "Urban London. Thames riverbank, city streets, escape finale." },
      { name: "Westminster", players: "Up to 12", description: "Westminster area. Parliament buildings, defensive hold finale." },
    ],
  },
  {
    mode: "Endless",
    tag: "ENDLESS",
    description: "Survive infinite waves of increasing difficulty. 6 maps available.",
    color: "#f97316",
    maps: [
      { name: "Hougoumont", players: "Up to 12", description: "Waterloo farmhouse. Walled compound, large courtyard, barn interiors." },
      { name: "La Haye Sainte", players: "Up to 12", description: "Waterloo farmstead. Central farmhouse, surrounding walls, multiple entry points." },
      { name: "La Ferme d'En-Haut", players: "Up to 12", description: "Farmstead map with open fields and building defense positions." },
      { name: "Classic Vardohus", players: "Up to 12", description: "Endless variant of Vardohus Fortress. Snowy terrain with fortress defenses." },
      { name: "Tyrolean Village", players: "Up to 12", description: "Alpine village with narrow streets and elevated positions." },
      { name: "Foggy Field", players: "Up to 12", description: "Open field map with limited visibility. Heavy fog reduces sight lines." },
    ],
  },
  {
    mode: "Holdout",
    tag: "HOLDOUT",
    description: "Defend a fixed position through waves. 2 maps available.",
    color: "#3b82f6",
    maps: [
      { name: "Berezina", players: "Up to 12", description: "Frozen river crossing. Build a bridge to escape with frostbite mechanic." },
      { name: "Saint Petersburg", players: "Up to 12", description: "Survive 10 waves. Trader NPC, Franc economy between waves." },
    ],
  },
  {
    mode: "Seasonal / Boss Event",
    tag: "SEASONAL",
    description: "Limited-time boss encounters during seasonal events. 3 maps available.",
    color: "#ef4444",
    maps: [
      { name: "Road to Sleepy Hollow", players: "Up to 12", description: "Approach map leading to the Sleepy Hollow boss arena. Forest path with enemies." },
      { name: "Sleepy Hollow", players: "Up to 12", description: "Halloween boss event. Battle the Headless Horseman in dark, foggy woods." },
      { name: "Transylvania", players: "Up to 12", description: "Halloween boss event. Multi-phase Dracula fight in gothic castle." },
    ],
  },
];

export default function MapsPage() {
  return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bcJsonLd) }}
      />

    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Maps
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            All 15 maps in Guts and Blackpowder — from Objective missions to Endless survival, Holdout defenses, and Seasonal boss events
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
        {/* Mode Overview Cards */}
        <section>
          <SectionTitle
            tag="Game Modes"
            title="Maps by Mode"
            subtitle="15 maps spread across 4 game modes — each offering unique challenges and objectives"
            align="center"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { mode: "Objective", count: "9", desc: "Mission-based maps with objectives and escape" },
              { mode: "Endless", count: "6", desc: "Survival maps with infinite waves" },
              { mode: "Holdout", count: "2", desc: "Defensive hold maps with build mechanics" },
              { mode: "Seasonal", count: "3", desc: "Limited-time boss event maps" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg p-5 text-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid #2a2826",
                }}
              >
                <span className="text-3xl font-bold text-[#d4af6a] block mb-1">{item.count}</span>
                <h3 className="font-serif text-lg text-[#f0ece4] mb-1">{item.mode}</h3>
                <p className="text-xs text-[#8a8884]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Maps by Mode */}
        {mapModes.map((group) => (
          <section key={group.mode}>
            <SectionTitle
              tag={group.tag}
              title={`${group.mode} Maps`}
              subtitle={group.description}
              align="left"
            />

            <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gold">
                    <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                      Map Name
                    </th>
                    <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                      Players
                    </th>
                    <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.maps.map((mapItem, i) => (
                    <tr
                      key={mapItem.name}
                      className="border-t border-[#2a2826] transition-colors hover:bg-card-hover"
                      style={{
                        backgroundColor:
                          i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <td className="px-5 py-4 font-serif text-base text-gold whitespace-nowrap">
                        {mapItem.name}
                      </td>
                      <td className="px-5 py-4 font-sans text-sm text-foreground whitespace-nowrap">
                        {mapItem.players}
                      </td>
                      <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>
                        {mapItem.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Quick Tips */}
        <section>
          <SectionTitle
            tag="Tips"
            title="Map Selection Tips"
            subtitle="Which maps to play based on your experience level"
            align="left"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Beginner Friendly",
                maps: "Vardohus Fortress, Copenhagen, London",
                desc: "Straightforward objectives with good defensive positions. Start here to learn the basics.",
              },
              {
                title: "Intermediate",
                maps: "Kaub, Roscoff, Westminster, Hougoumont (Endless)",
                desc: "More complex objectives with harder enemy waves. Good for practicing team coordination.",
              },
              {
                title: "Advanced",
                maps: "San Sebastian, Catacombes de Paris, Berezina (Holdout)",
                desc: "Challenging layouts with tough mechanics. Requires experienced teams and good communication.",
              },
              {
                title: "Expert",
                maps: "Sleepy Hollow, Transylvania (Boss Events)",
                desc: "The hardest content in the game. Requires perfect coordination and class composition.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg p-5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid #2a2826",
                  borderLeft: "3px solid #d4af6a",
                }}
              >
                <h3 className="font-serif text-lg text-[#d4af6a] mb-2">{item.title}</h3>
                <p className="text-sm text-[#f0ece4] mb-2 font-medium">{item.maps}</p>
                <p className="text-sm text-[#8a8884]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section>
          <div className="rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826" }}>
            <h3 className="font-serif text-xl text-[#f0ece4] mb-4">Related Guides</h3>
            <ul className="space-y-2">
              <li><a href="/enemies" className="text-sm text-[#d4af6a] hover:underline">All Enemies — What You&apos;ll Face on Each Map</a></li>
              <li><a href="/classes" className="text-sm text-[#d4af6a] hover:underline">Classes Guide — Best Class for Each Map</a></li>
              <li><a href="/beginner-guide" className="text-sm text-[#d4af6a] hover:underline">Beginner Guide — How to Survive Your First Match</a></li>
              <li><a href="/badges" className="text-sm text-[#d4af6a] hover:underline">Badges — Map Completion Achievements</a></li>
              <li><a href="/wiki" className="text-sm text-[#d4af6a] hover:underline">Full Wiki Overview</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
