import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Barry — Who Is He & Why Does Everyone Love Him?",
  description: "Who is Barry in Guts and Blackpowder? The truth about the Catacombes de Paris NPC Easter egg, the Vos Enterrement badge, and why the community loves him",
};

export default function BarryGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Barry — Who Is He &amp; Why Does Everyone Love Him?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            The truth about the Catacombes de Paris NPC Easter egg, the Vos Enterrement badge, and the community legend
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
        {/* Who is Barry? */}
        <section>
          <SectionTitle
            tag="NPC Easter Egg"
            title="Who is Barry?"
            subtitle="The hidden skeleton NPC in the Catacombes de Paris"
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
              Barry is a hidden NPC (non-playable character) Easter egg found deep within the Catacombes de Paris map. He is a skeleton figure discovered in a secluded tomb chamber, armed with a shovel. Internally, the game files refer to him as <strong>&quot;WinchGuy&quot;</strong> — a reference to his unique equipment.
            </p>
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-4">
              <strong className="text-[#d4af6a]">Important: Barry is NOT a playable class.</strong> There is no unlock process, no multi-step puzzle, and no secret character to play as. Barry is purely an atmospheric NPC Easter egg placed by the developers as a fun hidden discovery for players exploring the catacombs.
            </p>
            <p className="text-base leading-relaxed text-[#c8c4bc]">
              The rumors about Barry being a &quot;secret unlockable class&quot; are community myths and memes. They originated from players speculating about the mysterious skeleton in the catacombs, and the legend grew from there. The truth is much simpler: Barry is a fun Easter egg, and that is exactly what makes him special.
            </p>
          </div>
        </section>

        {/* Where to Find Barry */}
        <section>
          <SectionTitle
            tag="Location"
            title="Where to Find Barry"
            subtitle="His location in the Catacombes de Paris map"
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
              Barry is located in the Catacombes de Paris Objective map. To find him:
            </p>
            <div className="space-y-3">
              {[
                {
                  step: "1. Enter the Catacombes",
                  desc: "Play the Catacombes de Paris map on Objective mode. Progress through the map until you reach the underground tunnel sections.",
                },
                {
                  step: "2. Explore the Side Passages",
                  desc: "The catacombs are a maze of bone-lined tunnels. Barry's tomb is in a side chamber off one of the main passages. Keep an eye out for a small alcove or doorway that leads away from the main objective path.",
                },
                {
                  step: "3. Find the Tomb Chamber",
                  desc: "Look for a small chamber containing a skeleton figure. This is Barry. He is typically found lying down or positioned against a wall, with his signature shovel nearby.",
                },
                {
                  step: "4. Interact to Earn the Badge",
                  desc: "Approach and interact with Barry's tomb to earn the Vos Enterrement badge. You do not need any special items or keys — just find him and interact.",
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
            <div
              className="mt-6 rounded-lg p-4"
              style={{
                backgroundColor: "rgba(212,175,106,0.05)",
                border: "1px solid rgba(212,175,106,0.2)",
              }}
            >
              <p className="text-sm text-[#d4af6a] font-medium">
                Tip: The catacombs are dark and disorienting. Bring a torch or stick with teammates who know the map layout. The side chamber is easy to miss if you are rushing through the objective.
              </p>
            </div>
          </div>
        </section>

        {/* Vos Enterrement Badge */}
        <section>
          <SectionTitle
            tag="Badge"
            title="Vos Enterrement Badge"
            subtitle="The badge earned by discovering Barry"
            align="left"
          />
          <div
            className="mt-8 rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #d4af6a",
            }}
          >
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-6">
              Vos Enterrement is the badge awarded for finding and interacting with Barry in the Catacombes de Paris. The name &quot;Vos Enterrement&quot; is French for &quot;Your Burial&quot; — a fitting name for a badge earned in the Paris catacombs.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { label: "Badge Name", value: "Vos Enterrement" },
                { label: "Map", value: "Catacombes de Paris (Objective)" },
                { label: "Requirement", value: "Find and interact with Barry's tomb" },
                { label: "Difficulty", value: "Exploration — no combat requirement" },
                { label: "NPC Name", value: "Barry (WinchGuy)" },
                { label: "NPC Type", value: "Easter Egg NPC (not playable)" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid #2a2826",
                  }}
                >
                  <span className="text-[#d4af6a] text-sm font-medium whitespace-nowrap">{item.label}:</span>
                  <span className="text-[#8a8884] text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why is Barry so popular? */}
        <section>
          <SectionTitle
            tag="Community"
            title="Why is Barry So Popular?"
            subtitle="The legend behind the skeleton NPC"
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
              Barry has become one of the most iconic characters in Guts and Blackpowder despite — or perhaps because of — being just a simple NPC Easter egg. Here is why the community loves him:
            </p>
            <ul className="space-y-3 text-[#c8c4bc]">
              {[
                {
                  title: "Mystery and Discovery",
                  desc: "The catacombs are dark, eerie, and full of bones. Stumbling upon a named skeleton with a shovel in a hidden side chamber is a genuinely surprising and memorable moment for new players. The mystery of 'who is Barry?' sparks curiosity.",
                },
                {
                  title: "Community Memes and Myths",
                  desc: "The lack of official explanation about Barry allowed the community to create their own lore. Myths about Barry being a secret unlockable class, a developer self-insert, or a reference to something deeper spread through the community, creating an entire subculture of Barry content.",
                },
                {
                  title: "The Shovel",
                  desc: "Barry's shovel is iconic. In a game full of muskets, sabres, and bayonets, a simple shovel stands out. The internal filename 'WinchGuy' only adds to the mystique — what does a winch have to do with a shovel? The community has had endless fun speculating.",
                },
                {
                  title: "A Shared Experience",
                  desc: "Finding Barry is a rite of passage for Guts and Blackpowder players. Veterans enjoy guiding new players to his tomb, and the shared experience of discovering the Easter egg creates a sense of community. 'Have you found Barry yet?' is a common question in the Discord.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#d4af6a] mt-1.5 flex-shrink-0">&#8226;</span>
                  <div>
                    <span className="text-[#d4af6a] font-medium">{item.title}:</span>
                    <span className="text-[#8a8884]"> {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Debunking the Myths */}
        <section>
          <SectionTitle
            tag="Fact Check"
            title="Debunking the Myths"
            subtitle="Setting the record straight about Barry"
            align="left"
          />
          <div
            className="mt-8 rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #2a2826",
            }}
          >
            <div className="space-y-4">
              {[
                {
                  myth: "Barry is a secret playable class",
                  fact: "False. Barry is an NPC Easter egg. There is no way to play as Barry. He is a static skeleton with a shovel, not a character with abilities or equipment.",
                },
                {
                  myth: "You need to solve a multi-map puzzle to unlock Barry",
                  fact: "False. There is no puzzle chain involving San Sebastian, Leipzig, or Copenhagen. Barry is found exclusively in the Catacombes de Paris map. Simply find his tomb and interact with it.",
                },
                {
                  myth: "Barry has unique abilities including a shovel weapon",
                  fact: "False. Barry is not playable and has no abilities. The shovel is part of his NPC model, not a usable weapon for players.",
                },
                {
                  myth: "Runners specifically target Barry players",
                  fact: "False. Since Barry is not a playable class, this mechanic does not exist. Runners behave the same way regardless of which class you are playing.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid #2a2826",
                    borderLeft: "3px solid #ef4444",
                  }}
                >
                  <span className="text-[#ef4444] font-bold text-lg flex-shrink-0">✕</span>
                  <div>
                    <h4 className="font-serif text-base text-[#ef4444] mb-1 line-through">{item.myth}</h4>
                    <p className="text-sm text-[#8a8884]">{item.fact}</p>
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