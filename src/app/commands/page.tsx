import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Guts and Blackpowder Commands: G&B / GNB Admin & Private Server Commands",
  description: "Every Guts and Blackpowder command in one place: G&B commands, GNB commands, admin commands, private server commands, zombie spawn commands, class commands, map commands, and nation commands.",
  alternates: {
    canonical: "https://gutsandblackpowder.wiki/commands",
  },
};

// Command data organized by category
const adminCommands = [
  { command: "/class [class] [user]", desc: "Change a player's class. E.g. /class Officer @a" },
  { command: "/changeclass [class] [user]", desc: "Alias for /class" },
  { command: "/emperor [user] [nation]", desc: "Turn a player into an Emperor. E.g. /emperor @m British" },
  { command: "/ruler [user] [nation]", desc: "Alias for /emperor" },
  { command: "/give [user] [item]", desc: "Give an item to a player. E.g. /give @m Musket" },
  { command: "/giveitem [user] [item]", desc: "Alias for /give" },
  { command: "/item [user] [item]", desc: "Alias for /give" },
  { command: "/kick [user] [reason]", desc: "Kick a player from the server" },
  { command: "/ban [user] [reason]", desc: "Permanently ban a player" },
  { command: "/tempban [user] [reason] [time]", desc: "Temporarily ban a player" },
  { command: "/mute [user]", desc: "Mute a player's chat" },
  { command: "/kill [user]", desc: "Instantly kill a player" },
  { command: "/killz", desc: "Kill all zombies currently on the map" },
  { command: "/respawn [user]", desc: "Respawn a player at the starting point" },
  { command: "/restore [user]", desc: "Respawn a player in their current position" },
  { command: "/break [user]", desc: "Break a player's legs, immobilizing them" },
  { command: "/breaklegs [user]", desc: "Alias for /break" },
  { command: "/immobilize [user]", desc: "Alias for /break" },
  { command: "/bring [user]", desc: "Teleport a player to your location" },
  { command: "/getoverhere [user]", desc: "Alias for /bring" },
  { command: "/grab [user]", desc: "Alias for /bring" },
  { command: "/to [user]", desc: "Teleport yourself to another player" },
  { command: "/gooverto [user]", desc: "Alias for /to" },
  { command: "/warp", desc: "Teleport toward your cursor position" },
  { command: "/smite [user]", desc: "Kill a player with a lightning strike" },
  { command: "/getownednoob [user]", desc: "Alias for /smite" },
  { command: "/hide", desc: "Hide your admin username from the server" },
  { command: "/hidden", desc: "Alias for /hide" },
  { command: "/bigserver", desc: "Increase server player limit to 100 (admins only)" },
  { command: "/console", desc: "Open the developer console" },
  { command: "/chaplainlock", desc: "Unlock the Chaplain class for all players in the server" },
  { command: "/knight [user]", desc: "Assign Knight class (VIP-only servers)" },
  { command: "/alien", desc: "Turn into the Alien class (developer-only)" },
];

const mapNationCommands = [
  { command: "/forcemap [map] [mode]", desc: "Force change the map and game mode without a vote. E.g. /forcemap Hougoumont Endless" },
  { command: "/map [map] [mode]", desc: "Alias for /forcemap" },
  { command: "/nation [nation]", desc: "Change your nation. E.g. /nation Russian" },
  { command: "/changenation [nation]", desc: "Alias for /nation" },
  { command: "/worldwide", desc: "Allow players to choose any nation on any map" },
  { command: "/regional", desc: "Reset nation restrictions to map defaults" },
];

const zombieSpawnCommands = [
  { command: "/summon sh [amount]", zombie: "Shambler", shorthand: "sh" },
  { command: "/summon runner [amount]", zombie: "Runner", shorthand: "run" },
  { command: "/summon bomber [amount]", zombie: "Bomber", shorthand: "bomb" },
  { command: "/summon zapper [amount]", zombie: "Zapper", shorthand: "zap" },
  { command: "/summon igniter [amount]", zombie: "Igniter", shorthand: "ig" },
  { command: "/summon cuirassier [amount]", zombie: "Cuirassier Zombie", shorthand: "cui" },
  { command: "/spawn [type] [amount]", zombie: "Same as /summon", shorthand: "-" },
  { command: "/togglez", zombie: "Toggle zombie spawning on/off", shorthand: "-" },
];

const gameplayCommands = [
  { command: "/hardcore", desc: "Toggle Hardcore mode (double Francs, harder zombies)" },
  { command: "/preparetodie", desc: "Alias for /hardcore" },
  { command: "/ff", desc: "Toggle friendly fire between all players" },
  { command: "/fighting", desc: "Alias for /ff" },
  { command: "/friendlyfire", desc: "Alias for /ff" },
  { command: "/cannontk", desc: "Toggle cannon friendly fire specifically" },
  { command: "/cannonfight", desc: "Alias for /cannontk" },
  { command: "/infect [0-100]", desc: "Set your infection percentage manually" },
  { command: "/skipwave [number]", desc: "Skip to a specific Endless wave" },
  { command: "/skipobj", desc: "Skip the current Objective task" },
  { command: "/callescape", desc: "Trigger the final Holdout escape objective + Frenzy mode" },
  { command: "/sethround [1-100]", desc: "Set which Holdout wave you're on" },
  { command: "/togglefreezing", desc: "Toggle cold weather / freezing effects" },
  { command: "/bot [class] [amount] n=[nation]", desc: "Spawn AI bots with a specified class and nation" },
  { command: "/minigun [user]", desc: "Give a player a minigun" },
  { command: "/armor [user]", desc: "Give Siege Engineer Armor" },
  { command: "/armour [user]", desc: "Alias for /armor" },
  { command: "/mortarstrike [1-150]", desc: "Call a mortar strike of specified intensity" },
  { command: "/ghostrain [user]", desc: "Spam blue grenades above a player" },
  { command: "/abduct [user]", desc: "UFO abducts a player" },
  { command: "/zeep [user]", desc: "Alias for /abduct" },
  { command: "/classlimit", desc: "Toggle class limit restrictions" },
];

const utilityCommands = [
  { command: "/ping", desc: "Check your current latency" },
  { command: "/info", desc: "Show server info and player list" },
  { command: "/reset", desc: "Suicide and respawn your character" },
  { command: "/serverbrowser", desc: "Open the server browser" },
  { command: "/cmd [command]", desc: "Show details about a specific command. /cmd all lists everything" },
];

const easterEggCommands = [
  { command: "/arthur [user]", effect: "Transform into Arthur Morgan (Red Dead Redemption 2)", badge: "Evening Redness - must be used before any zombie is killed in the round" },
  { command: "/marston [user]", effect: "Transform into John Marston (Red Dead Redemption)", badge: "Evening Redness - same restriction as /arthur" },
  { command: "/krisface [user]", effect: "Change a player's face to \":3\" expression", badge: "None" },
];

const mapNameList = [
  "Vardohus", "SanSebastian", "Leipzig", "Kaub", "Copenhagen",
  "Roscoff", "Catacombes", "London", "Westminster", "Hougoumont",
  "LaHayeSainte", "LaFerme", "Berezina", "SaintPetersburg",
  "TyroleanVillage", "SleepyHollow", "Transylvania",
];

const modeOptions = ["Endless", "Objective", "Holdout", "Boss"];

export default function CommandsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            Guts and Blackpowder Commands
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            Guts and Blackpowder commands, G&B commands, and GNB commands for private server commands, admin commands, zombie spawn commands, class commands, maps, nations, and server gameplay controls.
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
        {/* ===== How to Use Commands ===== */}
        <section>
          <SectionTitle tag="Getting Started" title="How to Use Commands" subtitle="Requirements and basic usage" align="left" />
          <div className="mt-8 rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-4">
              You must be a <strong className="text-[#d4af6a]">private server owner</strong>, game admin, or developer to use commands. The easiest way to get access is to create a private server.
            </p>
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-4 font-medium">Steps to use a command:</p>
            <ol className="list-decimal list-inside space-y-2 text-[#c8c4bc] mb-4">
              <li>Open the Roblox in-game chat</li>
              <li>Type <code className="text-[#d4af6a] bg-[rgba(212,175,106,0.1)] px-1.5 py-0.5 rounded">/</code> followed by the command (e.g. <code className="text-[#d4af6a] bg-[rgba(212,175,106,0.1)] px-1.5 py-0.5 rounded">/give @m Musket</code>)</li>
              <li>Press <strong>Enter</strong> to activate</li>
            </ol>
            <p className="text-sm leading-relaxed text-[#8a8884]">
              If chat is blocked in your region or your account is not age-verified, press <code className="text-[#d4af6a] bg-[rgba(212,175,106,0.1)] px-1.5 py-0.5 rounded">]</code> on keyboard (PC) or the left D-pad button on console to open the Command Bar instead.
            </p>
          </div>
        </section>

        {/* ===== Target Arguments ===== */}
        <section>
          <SectionTitle tag="Syntax" title="Target Arguments (@a / @m / @o)" subtitle="How to target players with commands" align="left" />
          <div className="mt-8 rounded-lg p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-4">
              Most commands require a <code className="text-[#d4af6a] bg-[rgba(212,175,106,0.1)] px-1.5 py-0.5 rounded">[user]</code> target. Instead of typing a player's name, use these shortcuts:
            </p>
            <div className="overflow-x-auto rounded-lg border border-[#2a2826] mb-4">
              <table className="w-full border-collapse">
                <thead><tr className="bg-gold"><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Argument</th><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Effect</th></tr></thead>
                <tbody>
                  {[
                    { arg: "@a", effect: "Affects all players on the server, including yourself" },
                    { arg: "@m", effect: "Affects only yourself" },
                    { arg: "@o", effect: "Affects all other players, excluding yourself" },
                  ].map((item, i) => (
                    <tr key={item.arg} className="border-t border-[#2a2826]" style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)" }}>
                      <td className="px-5 py-4 font-mono text-sm text-gold whitespace-nowrap">{item.arg}</td>
                      <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>{item.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm leading-relaxed text-[#8a8884]">
              Example: <code className="text-[#d4af6a] bg-[rgba(212,175,106,0.1)] px-1.5 py-0.5 rounded">/give @a Musket</code> gives every player a Musket at once.
            </p>
          </div>
        </section>

        {/* ===== Admin & Essential Commands ===== */}
        <section>
          <SectionTitle tag="Admin" title="Admin & Essential Commands" subtitle="Core admin commands for server management" align="left" />
          <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gold"><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background w-[40%]">Command</th><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Description</th></tr></thead>
              <tbody>
                {adminCommands.map((cmd, i) => (
                  <tr key={cmd.command} className="border-t border-[#2a2826] transition-colors hover:bg-card-hover" style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)" }}>
                    <td className="px-5 py-4 font-mono text-sm text-gold whitespace-nowrap">{cmd.command}</td>
                    <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>{cmd.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Maps & Nations Commands ===== */}
        <section>
          <SectionTitle tag="Maps" title="Maps & Nations Commands" subtitle="Change maps, game modes, and player nations" align="left" />
          <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gold"><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background w-[40%]">Command</th><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Description</th></tr></thead>
              <tbody>
                {mapNationCommands.map((cmd, i) => (
                  <tr key={cmd.command} className="border-t border-[#2a2826] transition-colors hover:bg-card-hover" style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)" }}>
                    <td className="px-5 py-4 font-mono text-sm text-gold whitespace-nowrap">{cmd.command}</td>
                    <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>{cmd.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826" }}>
            <p className="text-sm text-[#d4af6a] font-medium mb-2">Map name list for /forcemap:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {mapNameList.map((name) => (
                <span key={name} className="inline-block text-xs px-2.5 py-0.5 rounded font-mono" style={{ backgroundColor: "rgba(212,175,106,0.1)", color: "#d4af6a", border: "1px solid rgba(212,175,106,0.3)" }}>{name}</span>
              ))}
            </div>
            <p className="text-sm text-[#d4af6a] font-medium mb-2">Mode options:</p>
            <div className="flex flex-wrap gap-2">
              {modeOptions.map((mode) => (
                <span key={mode} className="inline-block text-xs px-2.5 py-0.5 rounded font-mono" style={{ backgroundColor: "rgba(212,175,106,0.1)", color: "#d4af6a", border: "1px solid rgba(212,175,106,0.3)" }}>{mode}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Zombie Spawn Commands ===== */}
        <section>
          <SectionTitle tag="Zombies" title="Zombie Spawn Commands" subtitle="Summon specific zombie types with shorthand codes" align="left" />
          <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gold"><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Command</th><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Zombie</th><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Shorthand</th></tr></thead>
              <tbody>
                {zombieSpawnCommands.map((cmd, i) => (
                  <tr key={cmd.command} className="border-t border-[#2a2826] transition-colors hover:bg-card-hover" style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)" }}>
                    <td className="px-5 py-4 font-mono text-sm text-gold whitespace-nowrap">{cmd.command}</td>
                    <td className="px-5 py-4 font-sans text-sm text-[#f0ece4]">{cmd.zombie}</td>
                    <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>{cmd.shorthand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg p-4" style={{ backgroundColor: "rgba(212,175,106,0.05)", border: "1px solid rgba(212,175,106,0.2)" }}>
            <p className="text-sm text-[#d4af6a] font-medium">
              Example: <code className="bg-[rgba(212,175,106,0.1)] px-1.5 py-0.5 rounded">/summon sh 20</code> spawns 20 Shamblers. <code className="bg-[rgba(212,175,106,0.1)] px-1.5 py-0.5 rounded">/summon cui 1</code> spawns one Cuirassier.
            </p>
          </div>
        </section>

        {/* ===== Gameplay Commands ===== */}
        <section>
          <SectionTitle tag="Gameplay" title="Gameplay Commands" subtitle="Toggle game modes, effects, and special mechanics" align="left" />
          <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gold"><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background w-[40%]">Command</th><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Description</th></tr></thead>
              <tbody>
                {gameplayCommands.map((cmd, i) => (
                  <tr key={cmd.command} className="border-t border-[#2a2826] transition-colors hover:bg-card-hover" style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)" }}>
                    <td className="px-5 py-4 font-mono text-sm text-gold whitespace-nowrap">{cmd.command}</td>
                    <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>{cmd.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Utility Commands ===== */}
        <section>
          <SectionTitle tag="All Players" title="Utility Commands (All Players)" subtitle="Commands that work for everyone, not just admins" align="left" />
          <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gold"><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background w-[40%]">Command</th><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Description</th></tr></thead>
              <tbody>
                {utilityCommands.map((cmd, i) => (
                  <tr key={cmd.command} className="border-t border-[#2a2826] transition-colors hover:bg-card-hover" style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)" }}>
                    <td className="px-5 py-4 font-mono text-sm text-gold whitespace-nowrap">{cmd.command}</td>
                    <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>{cmd.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Hidden / Easter Egg Commands ===== */}
        <section>
          <SectionTitle tag="Easter Eggs" title="Hidden / Easter Egg Commands" subtitle="Secret cosmetic transformations and hidden badges" align="left" />
          <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
            <table className="w-full border-collapse">
              <thead><tr className="bg-gold"><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Command</th><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Effect</th><th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">Badge Unlocked</th></tr></thead>
              <tbody>
                {easterEggCommands.map((cmd, i) => (
                  <tr key={cmd.command} className="border-t border-[#2a2826] transition-colors hover:bg-card-hover" style={{ backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)" }}>
                    <td className="px-5 py-4 font-mono text-sm text-gold whitespace-nowrap">{cmd.command}</td>
                    <td className="px-5 py-4 font-sans text-sm text-[#f0ece4]">{cmd.effect}</td>
                    <td className="px-5 py-4 font-sans text-sm" style={{ color: "#8a8884" }}>{cmd.badge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg p-4" style={{ backgroundColor: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}>
            <p className="text-sm text-[#ef4444] font-medium">
              Important: /arthur and /marston can only be used once per game session, and must be activated before any zombie has been killed. If even one zombie dies first, the badge will not unlock.
            </p>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section>
          <SectionTitle tag="FAQ" title="Frequently Asked Questions" subtitle="Common questions about using commands" align="left" />
          <div className="mt-8 space-y-4">
            {[
              { q: "Can I use commands without a private server?", a: "No. Commands require admin permissions, which regular players only get in private servers they own." },
              { q: "Can commands be used on console / mobile?", a: "Yes. On console, press the left D-pad button to open the Command Bar. On mobile, use the on-screen chat button and type the command normally." },
              { q: "Why isn't my command working?", a: "Check that you are the private server owner, that you typed the / prefix, and that the player name or @ argument is correct. Some commands like /arthur have timing restrictions." },
              { q: "What's the fastest way to get Francs using commands?", a: "Use /hardcore to double all Franc rewards, then play Endless mode to farm waves efficiently. See our Francs guide for more strategies." },
              { q: "Can I spawn the Headless Horseman or Dracula with commands?", a: "No - these boss enemies are tied to the Sleepy Hollow and Transylvania seasonal maps and cannot be manually spawned." },
            ].map((item, i) => (
              <div key={i} className="rounded-lg p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid #2a2826", borderLeft: "3px solid #d4af6a" }}>
                <h3 className="font-serif text-base text-[#d4af6a] mb-2">{item.q}</h3>
                <p className="text-sm text-[#8a8884]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
