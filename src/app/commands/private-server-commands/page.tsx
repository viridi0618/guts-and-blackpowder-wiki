import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Guts and Blackpowder Private Server Commands",
  description:
    "List of Guts and Blackpowder private server commands, including class, map, nation, zombie spawn, hardcore, and admin-style commands for Roblox G&B.",
  alternates: {
    canonical: "https://gutsandblackpowder.wiki/commands/private-server-commands",
  },
  openGraph: {
    title: "Guts and Blackpowder Private Server Commands",
    description: "List of Guts and Blackpowder private server commands, including class, map, nation, zombie spawn, hardcore, and admin-style commands for Roblox G&B.",
  }};

const commandGroups = [
  {
    title: "Class Commands",
    intro: "Use these private server commands to change a player's class or unlock special class access.",
    commands: [
      { command: "/class [class] [user]", desc: "Change a player's class." },
      { command: "/changeclass [class] [user]", desc: "Alias for /class." },
      { command: "/chaplainlock", desc: "Unlock the Chaplain class for all players in the server." },
      { command: "/knight [user]", desc: "Assign Knight class in VIP-only servers." },
    ],
  },
  {
    title: "Map and Nation Commands",
    intro: "Use these commands to control maps, modes, and nation restrictions in a private server.",
    commands: [
      { command: "/forcemap [map] [mode]", desc: "Force change the map and game mode without a vote." },
      { command: "/map [map] [mode]", desc: "Alias for /forcemap." },
      { command: "/nation [nation]", desc: "Change your nation." },
      { command: "/changenation [nation]", desc: "Alias for /nation." },
      { command: "/worldwide", desc: "Allow players to choose any nation on any map." },
      { command: "/regional", desc: "Reset nation restrictions to map defaults." },
    ],
  },
  {
    title: "Zombie Spawn Commands",
    intro: "These commands summon or control zombie spawning for testing and custom private server sessions.",
    commands: [
      { command: "/summon sh [amount]", desc: "Summon Shamblers." },
      { command: "/summon runner [amount]", desc: "Summon Runners." },
      { command: "/summon bomber [amount]", desc: "Summon Bombers." },
      { command: "/summon zapper [amount]", desc: "Summon Zappers." },
      { command: "/summon igniter [amount]", desc: "Summon Igniters." },
      { command: "/summon cuirassier [amount]", desc: "Summon Cuirassier Zombies." },
      { command: "/spawn [type] [amount]", desc: "Same purpose as /summon." },
      { command: "/togglez", desc: "Toggle zombie spawning on or off." },
    ],
  },
  {
    title: "Gameplay Commands",
    intro: "Use these to adjust difficulty, friendly fire, waves, objectives, bots, and special effects.",
    commands: [
      { command: "/hardcore", desc: "Toggle Hardcore mode." },
      { command: "/preparetodie", desc: "Alias for /hardcore." },
      { command: "/ff", desc: "Toggle friendly fire between all players." },
      { command: "/friendlyfire", desc: "Alias for /ff." },
      { command: "/skipwave [number]", desc: "Skip to a specific Endless wave." },
      { command: "/skipobj", desc: "Skip the current Objective task." },
      { command: "/callescape", desc: "Trigger the final Holdout escape objective and Frenzy mode." },
      { command: "/bot [class] [amount] n=[nation]", desc: "Spawn AI bots with a specified class and nation." },
      { command: "/classlimit", desc: "Toggle class limit restrictions." },
    ],
  },
  {
    title: "Admin-Style Commands",
    intro: "Private server owners and admins can use these for player management and server control.",
    commands: [
      { command: "/give [user] [item]", desc: "Give an item to a player." },
      { command: "/kick [user] [reason]", desc: "Kick a player from the server." },
      { command: "/ban [user] [reason]", desc: "Permanently ban a player." },
      { command: "/tempban [user] [reason] [time]", desc: "Temporarily ban a player." },
      { command: "/mute [user]", desc: "Mute a player's chat." },
      { command: "/kill [user]", desc: "Instantly kill a player." },
      { command: "/killz", desc: "Kill all zombies currently on the map." },
      { command: "/respawn [user]", desc: "Respawn a player at the starting point." },
      { command: "/bring [user]", desc: "Teleport a player to your location." },
      { command: "/to [user]", desc: "Teleport yourself to another player." },
      { command: "/hide", desc: "Hide your admin username from the server." },
    ],
  },
];

const relatedLinks = [
  { label: "Full Commands List", href: "/commands" },
  { label: "Wiki", href: "/wiki" },
  { label: "Guides", href: "/guides" },
  { label: "Classes", href: "/classes" },
  { label: "Maps", href: "/maps" },
];

export default function PrivateServerCommandsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Guts and Blackpowder Private Server Commands
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            Guts and Blackpowder private server commands let server owners and admins control classes, maps, nations, zombie spawns, Hardcore mode, friendly fire, waves, objectives, and players in Roblox G&B.
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-16">
        <section>
          <SectionTitle
            tag="Quick Answer"
            title="How Private Server Commands Work"
            subtitle="You need private server owner, admin, or developer permissions. Open in-game chat or the Command Bar, type the command with a slash, and press Enter."
            align="left"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
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

        {commandGroups.map((group) => (
          <section key={group.title}>
            <SectionTitle tag="Commands" title={group.title} subtitle={group.intro} align="left" />
            <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gold">
                    <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background w-[42%]">
                      Command
                    </th>
                    <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                      What It Does
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.commands.map((cmd, i) => (
                    <tr
                      key={cmd.command}
                      className="border-t border-[#2a2826] transition-colors hover:bg-card-hover"
                      style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)" }}
                    >
                      <td className="px-5 py-4 font-mono text-sm text-gold whitespace-nowrap">{cmd.command}</td>
                      <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>{cmd.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
