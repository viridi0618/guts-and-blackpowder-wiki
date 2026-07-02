import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "Commands Guide",
  description: "Complete list of all Guts and Blackpowder commands — chat commands, admin commands, class commands, map commands, and special character commands",
};

// Command categories
const commandCategories = [
  {
    category: "Map Commands",
    tag: "MAPS",
    description: "Change the current map in a private server",
    commands: [
      { command: "/map vardohus", description: "Switch to Vardohus Fortress" },
      { command: "/map san_sebastian", description: "Switch to San Sebastian" },
      { command: "/map leipzig", description: "Switch to Leipzig" },
      { command: "/map kaub", description: "Switch to Kaub" },
      { command: "/map copenhagen", description: "Switch to Copenhagen" },
      { command: "/map roscoff", description: "Switch to Roscoff" },
      { command: "/map catacombes", description: "Switch to Catacombes de Paris" },
      { command: "/map london", description: "Switch to London" },
      { command: "/map westminster", description: "Switch to Westminster" },
    ],
  },
  {
    category: "Class Commands",
    tag: "CLASSES",
    description: "Change your class or force another player to change class",
    commands: [
      { command: "/class [classname]", description: "Change your class to the specified class (e.g., /class infantry)" },
      { command: "/class [playername] [classname]", description: "Change another player's class (admin only)" },
      { command: "/changeclass [classname]", description: "Alternative to /class — changes your class" },
    ],
  },
  {
    category: "Summon Commands",
    tag: "SUMMON",
    description: "Spawn enemies or NPCs for testing or events",
    commands: [
      { command: "/summon shambler", description: "Spawn a Shambler zombie" },
      { command: "/summon runner", description: "Spawn a Runner zombie" },
      { command: "/summon bomber", description: "Spawn a Bomber zombie" },
      { command: "/summon zapper", description: "Spawn a Zapper zombie" },
      { command: "/summon igniter", description: "Spawn an Igniter zombie" },
      { command: "/summon cuirassier", description: "Spawn a Cuirassier Zombie" },
      { command: "/summon horseman", description: "Spawn the Headless Horseman boss" },
      { command: "/summon dracula", description: "Spawn Dracula boss" },
    ],
  },
  {
    category: "Give Commands",
    tag: "GIVE",
    description: "Give weapons or items to yourself or other players",
    commands: [
      { command: "/give [item]", description: "Give yourself an item (e.g., /give musket)" },
      { command: "/give [playername] [item]", description: "Give an item to another player" },
    ],
  },
  {
    category: "Special Character Commands",
    tag: "CHARACTERS",
    description: "Spawn special NPC characters",
    commands: [
      { command: "/marston", description: "Spawn Marston, a special NPC character" },
      { command: "/arthur", description: "Spawn Arthur, a special NPC character" },
    ],
  },
  {
    category: "Admin Commands",
    tag: "ADMIN",
    description: "Server administration and moderation commands",
    commands: [
      { command: "/kick [playername]", description: "Kick a player from the server" },
      { command: "/ban [playername]", description: "Permanently ban a player from the server" },
      { command: "/tempban [playername] [duration]", description: "Temporarily ban a player for a set duration" },
    ],
  },
];

export default function CommandsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Commands Guide
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            Complete reference for all Guts and Blackpowder commands — from basic class changes to advanced server administration
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
        {/* How to Use Commands */}
        <section>
          <SectionTitle
            tag="Basics"
            title="How to Use Commands"
            subtitle="Understanding command syntax and batch targets"
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
              Commands in Guts and Blackpowder are entered through the chat window. Simply press "/" to open the chat, type your command, and press Enter to execute. Most commands require admin privileges in a private server.
            </p>
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-4">
              Some commands support batch target parameters to affect multiple players at once:
            </p>
            <div className="overflow-x-auto rounded-lg border border-[#2a2826] mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gold">
                    <th className="px-4 py-3 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                      Parameter
                    </th>
                    <th className="px-4 py-3 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: "@a", desc: "All players in the server" },
                    { param: "@o", desc: "All players currently playing Objective mode" },
                    { param: "@m", desc: "All players currently in your party or squad" },
                  ].map((item, i) => (
                    <tr
                      key={item.param}
                      className="border-t border-[#2a2826]"
                      style={{
                        backgroundColor:
                          i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <td className="px-4 py-3 font-mono text-sm text-gold whitespace-nowrap">
                        {item.param}
                      </td>
                      <td className="px-4 py-3 font-sans text-sm" style={{ color: "#8a8884" }}>
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-relaxed text-[#8a8884]">
              Example: <code className="text-[#d4af6a] bg-[rgba(212,175,106,0.1)] px-1.5 py-0.5 rounded">/give @a musket</code> — gives every player a musket.
            </p>
          </div>
        </section>

        {/* Command Categories */}
        {commandCategories.map((group) => (
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
                    <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background w-[40%]">
                      Command
                    </th>
                    <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.commands.map((cmd, i) => (
                    <tr
                      key={cmd.command}
                      className="border-t border-[#2a2826] transition-colors hover:bg-card-hover"
                      style={{
                        backgroundColor:
                          i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <td className="px-5 py-4 font-mono text-sm text-gold whitespace-nowrap">
                        {cmd.command}
                      </td>
                      <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>
                        {cmd.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {/* Usage Tips */}
        <section>
          <SectionTitle
            tag="Tips"
            title="Command Usage Tips"
            subtitle="Best practices for using commands effectively"
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
                  title: "Admin Only",
                  desc: "Most commands (map, summon, give, kick, ban) require admin privileges in a private server. They do not work in public servers.",
                },
                {
                  title: "Class Commands",
                  desc: "Class names are case-insensitive. Use common class names like infantry, officer, seaman, musician, sapper, surgeon, chaplain.",
                },
                {
                  title: "Map Names",
                  desc: "Map names use underscores for multi-word maps (e.g., san_sebastian instead of San Sebastian). Use the exact map ID for reliable results.",
                },
                {
                  title: "Player Names",
                  desc: "When specifying a player name, use their exact Roblox username. Usernames are case-sensitive.",
                },
                {
                  title: "Batch Targets",
                  desc: "Use @a, @o, or @m to apply commands to groups of players. This is especially useful for /give commands during events.",
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
