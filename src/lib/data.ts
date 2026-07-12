import type {
  GameInfo,
  ClassData,
  Region,
  JourneyCard,
  ToolCard,
  GuideItem,
  NewsItem,
  FAQ,
  WeaponType,
  Weapon,
  Boss,
  Dungeon,
  Profession,
  SystemRequirement,
  ReleaseDateInfo,
  RoadmapItem,
} from "./types";

/* ==============================
   1. Game Info
   ============================== */

export const gameData: GameInfo = {
  title: "Guts and Blackpowder",
  subtitle: "Roblox PvE Zombie Survival",
  description:
    'Guts & Blackpowder (G&B) is a free-to-play Roblox PvE horde shooter developed by Fezezen (Fuze Studios), released August 25, 2021. It is set during an alternate-history Napoleonic Wars era where a viral infection called "The Blight" has raised the dead across Europe. Players take on the roles of Napoleonic-era soldiers who must band together to survive waves of undead across historical battlefields.\n\nSurvive the undead Blight across 15 historical maps with up to 12 players — armed only with muskets, sabres, and 19th-century grit. The game features multiple modes including Objective, Endless, Holdout, and seasonal Boss events.',
  heroTitle: "Survive the Blight",
  heroSubtitle:
    "A free Roblox PvE zombie survival game set during the Napoleonic Wars. Fight the undead across 15 historical maps with muskets, sabres, and 19th-century grit.",
  heroStats: [
    { label: "Released", value: "August 2021" },
    { label: "Total Plays", value: "533M+" },
    { label: "Maps", value: "15 Public" },
    { label: "Rating", value: "94%" },
  ],
  quickFacts: [
    { label: "Developer", value: "Fezezen / Fuze Studios" },
    { label: "Genre", value: "PvE Zombie Survival" },
    { label: "Platform", value: "Roblox (Free)" },
    { label: "Players", value: "Up to 12 per server" },
    { label: "Price", value: "Free to Play" },
    { label: "Rating", value: "94% (533M+ Plays)" },
    { label: "Version", value: "v0.17.9" },
    { label: "Community", value: "540K+ Members" },
  ],
};

/* ==============================
   2. Game Modes
   ============================== */

export const classes: ClassData[] = [
  { id:"objective", name:"Objective", icon:"🎯", tag:"PvE · Missions", shortDescription:"Complete objectives then escape. Deaths respawn at checkpoints. 9 maps.", description:"Objective is the core mode. Players complete mission objectives (find keys, light signal fires, defend positions) while fighting zombies. Each map has unique objectives and escape sequences.", role:"PvE / Teamwork", difficulty:"Medium", rating:"Popular", weaponType:"Musket, Rifle, Pistol, Sabre", armorType:"Standard", abilities:["Complete objectives","Respawn at checkpoints","Team progression","Escape finale"], tips:"Stick with your team. Learn each map's objective order." },
  { id:"endless", name:"Endless", icon:"♾️", tag:"PvE · Survival", shortDescription:"Survive infinite waves. No respawns. 6 maps.", description:"Survive as many waves as possible. Each wave grows harder with special infected appearing at higher waves (Runners wave7+, Cuirassier wave16+, Igniter wave20+). No respawns.", role:"PvE / Survival", difficulty:"Hard", rating:"Challenging", weaponType:"Musket, Rifle, Pistol, Sabre", armorType:"Standard", abilities:["Infinite waves","Special enemies","No respawns","Francs every 5 waves"], tips:"Conserve ammo. Use melee for shamblers. Officer Charge for Bombers." },
  { id:"holdout", name:"Holdout", icon:"🛡️", tag:"PvE · Defense", shortDescription:"Defend fixed position. All respawn between waves. 2 maps.", description:"Defend a fixed position through waves, all respawn between waves. Berezina: build a bridge to escape with frostbite mechanic. Saint Petersburg: survive 10 waves with trader NPC.", role:"PvE / Defense", difficulty:"Hard", rating:"Team Essential", weaponType:"Musket, Rifle, Pistol", armorType:"Standard", abilities:["Defend position","Respawn between waves","Build defenses","Trader NPC"], tips:"Sapper is crucial. Save Francs for trader." },
  { id:"boss", name:"Boss Event", icon:"👹", tag:"PvE · Seasonal", shortDescription:"Single powerful boss fights. Seasonal only. 2 maps.", description:"Special seasonal boss fights during Halloween. Headless Horseman in Sleepy Hollow, Dracula in Transylvania. Most difficult encounters requiring perfect coordination.", role:"PvE / Boss Fight", difficulty:"Extreme", rating:"Seasonal", weaponType:"All weapons", armorType:"Standard", abilities:["Unique boss mechanics","Limited time","Special rewards","Highest difficulty"], tips:"Study boss patterns. Bring your best team." },
  { id:"siege", name:"Siege", icon:"⚔️", tag:"PvP · Battle", shortDescription:"Two teams battle in PvP combat.", description:"PvP mode where two teams face off using Napoleonic weapons. Tactical positioning, accuracy, and teamwork essential.", role:"PvP / Competitive", difficulty:"Hard", rating:"Competitive", weaponType:"Musket, Pistol, Sabre", armorType:"Standard", abilities:["Player vs Player","Team tactics","Last team standing"], tips:"Practice aim. Learn ballistics. Stay with squad." },
  { id:"blox-event", name:"Blox Event", icon:"🎪", tag:"PvE · Special", shortDescription:"Modern setting variant with modern weapons.", description:"Limited-time variant replacing Napoleonic setting with modern civilians using contemporary firearms.", role:"PvE / Special", difficulty:"Medium", rating:"Fun", weaponType:"Modern weapons", armorType:"Civilian", abilities:["Modern weapons","Unique setting","Limited time"], tips:"Different weapon handling than standard mode." },
  { id:"hardcore", name:"Hardcore", icon:"💀", tag:"Modifier", shortDescription:"Difficulty modifier. Double Francs. Much harder.", description:"Difficulty modifier applied to other modes. Enemies deal more damage, have more health, appear in greater numbers. Rewards double Francs. Veterans only.", role:"Difficulty Modifier", difficulty:"Extreme", rating:"Veteran", weaponType:"All", armorType:"Standard", abilities:["Double Francs","Harder enemies","More enemies","Higher risk"], tips:"Only with coordinated team. Officer and Surgeon essential." },
  { id:"pvp", name:"PVP", icon:"🏴", tag:"PvP · Nations", shortDescription:"Nation vs Nation combat. Last team standing wins.", description:"Nation vs Nation combat on select maps (Hougoumont, La Haye Sainte). Most players prefer PvE.", role:"PvP / Nations", difficulty:"Hard", rating:"Niche", weaponType:"Musket, Pistol, Sabre", armorType:"Standard", abilities:["Nation vs Nation","Last standing","Select maps"], tips:"Know maps. Team coordination wins." },
];

/* ==============================
   3. Maps
   ============================== */

export const regions: Region[] = [
  {
    id: "vardohus-fortress",
    name: "Vardohus Fortress",
    tag: "Objective",
    levelRange: "All Levels",
    description:
      "Set in a snow-covered Norwegian fortress. Players must fight through the fortress grounds, light signal fires to call for extraction, and escape by boat. The cold environment and tight fortress corridors create tense close-quarters combat.",
    features: [
      "Snow-covered fortress terrain",
      "Signal fire objective mechanic",
      "Boat escape sequence",
      "Tight corridor combat",
    ],
    pointsOfInterest: [
      "Fortress Gate — Main entry point, heavy fighting",
      "Courtyard — Central area with signal fire",
      "Watchtower — Elevated sniping position",
      "Docks — Final escape point by boat",
    ],
  },
  {
    id: "san-sebastian",
    name: "San Sebastian",
    tag: "Objective",
    levelRange: "All Levels",
    description:
      "Based on the 1813 siege of San Sebastian. Attackers must cross open beach terrain, breach the fortress walls, capture the town square, and finally descend into the dark catacombs beneath the city to find their way out.",
    features: [
      "Open beach assault with limited cover",
      "Fortress wall breach mechanics",
      "Urban warfare in town streets",
      "Catacomb escape finale",
    ],
    pointsOfInterest: [
      "Beach Landing — Exposed approach, heavy fire",
      "Wall Breach — Main breakthrough point",
      "Town Square — Final surface objective",
      "Catacomb Entrance — Escape route below city",
    ],
  },
  {
    id: "leipzig",
    name: "Leipzig",
    tag: "Objective",
    levelRange: "All Levels",
    description:
      "Set during the 1813 Battle of Nations. A large-scale map where players advance from a church through a destroyed village, fight across the town, and must find the key to unlock the gate while holding off waves of undead in an intense finale.",
    features: [
      "Large battlefield with open fields",
      "Church starting position",
      "Destroyed village with rubble cover",
      "Key-finding finale defense",
    ],
    pointsOfInterest: [
      "Church — Starting position, safe zone",
      "Destroyed Village — Central combat zone",
      "Town Gate — Final defense position",
      "Key Location — Random spawn, must be found",
    ],
  },
  {
    id: "kaub",
    name: "Kaub",
    tag: "Objective",
    levelRange: "All Levels",
    description:
      "Based on the 1814 crossing of the Rhine at Kaub. Players must cross a bridge under fire, capture a town, fight through vineyards and a forest, and finally escape across a second bridge while fending off relentless attackers.",
    features: [
      "Bridge crossing under fire",
      "Town capture objective",
      "Vineyard and forest terrain",
      "Second bridge escape",
    ],
    pointsOfInterest: [
      "First Bridge — Initial crossing, killzone",
      "Town Center — Capturable objective area",
      "Vineyard — Flanking route with cover",
      "Escape Bridge — Final extract point",
    ],
  },
  {
    id: "copenhagen",
    name: "Copenhagen",
    tag: "Objective",
    levelRange: "All Levels",
    description:
      "Set during the 1807 Battle of Copenhagen. Narrow city streets and dense buildings create intense close-quarters fighting. Players fight through the harbor, city streets, and must survive a final stand in the church cemetery.",
    features: [
      "Narrow street urban combat",
      "Multi-level building engagements",
      "Harbor district firefights",
      "Church cemetery finale",
    ],
    pointsOfInterest: [
      "Harbor — Map edge, initial approach",
      "Town Square — Central crossroads, heavy combat",
      "Church — Key defensive position",
      "Cemetery — Final stand location",
    ],
  },
  {
    id: "roscoff",
    name: "Roscoff",
    tag: "Objective",
    levelRange: "All Levels",
    description:
      "A coastal town map set in Roscoff, France. Players must navigate through narrow streets, a church, and a chateau while completing objectives. The map includes a unique ship escape sequence at the docks.",
    features: [
      "Coastal town setting",
      "Church and chateau interiors",
      "Narrow street fighting",
      "Ship extraction finale",
    ],
    pointsOfInterest: [
      "Town Entrance — Initial spawn area",
      "Church — Mid-map defensive hold",
      "Chateau — Elevated position with sightlines",
      "Docks — Final escape point",
    ],
  },
  {
    id: "catacombes-de-paris",
    name: "Catacombes de Paris",
    tag: "Objective",
    levelRange: "All Levels",
    description:
      "Descend into the dark, claustrophobic tunnels beneath Paris. Navigate through tight catacomb passages filled with bones and darkness. Limited visibility makes this one of the most atmospheric and tense maps in the game.",
    features: [
      "Dark underground tunnels",
      "Claustrophobic close-quarters combat",
      "Bone-lined passageways",
      "Limited visibility gameplay",
    ],
    pointsOfInterest: [
      "Staircase Descent — Entry to catacombs",
      "Bone Gallery — Main corridor with skull displays",
      "Underground Chapel — Mid-map hold point",
      "Exit Chamber — Final escape location",
    ],
  },
  {
    id: "london",
    name: "London",
    tag: "Objective",
    levelRange: "All Levels",
    description:
      "Fight through the streets of London during the outbreak. Players advance from the Thames riverbank through city streets, past buildings, and must escape at the end. Urban environment with diverse engagement ranges.",
    features: [
      "Urban London streets",
      "River Thames starting area",
      "Dense building cover",
      "City escape finale",
    ],
    pointsOfInterest: [
      "Thames Riverbank — Starting position",
      "City Gate — Choke point defense",
      "Market District — Open combat zone",
      "Escape Route — Final extract point",
    ],
  },
  {
    id: "westminster",
    name: "Westminster",
    tag: "Objective",
    levelRange: "All Levels",
    description:
      "Battle through the iconic Westminster area of London. Players push through streets toward the Parliament buildings, fighting in and around historic architecture. Finale involves holding position while awaiting extraction.",
    features: [
      "Iconic London architecture",
      "Parliament building interiors",
      "Street-to-building transitions",
      "Defensive hold finale",
    ],
    pointsOfInterest: [
      "Street Approach — Initial advance",
      "Parliament Square — Open engagement area",
      "Parliament Hall — Interior fighting zone",
      "Extraction Point — Final defensive hold",
    ],
  },
  {
    id: "hougoumont",
    name: "Hougoumont",
    tag: "Objective / PVP",
    levelRange: "All Levels",
    description:
      "Based on the farmhouse at Hougoumont from the Battle of Waterloo. A walled farm complex with a large courtyard, barns, and gardens. Defense of the farmhouse is critical. Also available for PVP nation combat.",
    features: [
      "Walled farm compound",
      "Large central courtyard",
      "Barn and stable interiors",
      "Garden flanking routes",
    ],
    pointsOfInterest: [
      "Main Gate — Primary entrance, heavily contested",
      "Courtyard — Central open area",
      "North Barn — Interior defensive position",
      "South Garden — Flanking approach route",
    ],
  },
  {
    id: "la-haye-sainte",
    name: "La Haye Sainte",
    tag: "Objective / PVP",
    levelRange: "All Levels",
    description:
      "Based on the farmhouse at La Haye Sainte from Waterloo. A smaller walled farm with a central building and surrounding walls. The farm changes hands multiple times. Also available for PVP nation combat.",
    features: [
      "Small walled farmstead",
      "Central farmhouse interior",
      "Surrounding wall defenses",
      "Multiple entry points",
    ],
    pointsOfInterest: [
      "Farmhouse — Central building, key defensive hold",
      "North Wall — First line of defense",
      "South Gate — Rear entry point",
      "Road Approach — Open approach from both sides",
    ],
  },
  {
    id: "berezina",
    name: "Berezina",
    tag: "Holdout",
    levelRange: "All Levels",
    description:
      "Holdout mode map based on the Berezina river crossing during Napoleon's retreat. Players must build a bridge across the frozen river to escape while managing the frostbite mechanic. One of only two Holdout mode maps.",
    features: [
      "Frozen river crossing",
      "Bridge building mechanic",
      "Frostbite survival mechanic",
      "Escort the VIP objective",
    ],
    pointsOfInterest: [
      "Starting Camp — Initial defensive position",
      "Bridge Build Site — Main construction area",
      "River Bank — Flanking approach route",
      "Escape Point — Far side of river",
    ],
  },
  {
    id: "saint-petersburg",
    name: "Saint Petersburg",
    tag: "Holdout",
    levelRange: "All Levels",
    description:
      "Holdout mode set in the streets of Saint Petersburg. Survive 10 waves of undead with the help of a trader NPC who sells supplies between waves. The only Holdout map with a shop system using Francs currency.",
    features: [
      "10 waves of survival",
      "Trader NPC shop system",
      "Urban defensive positions",
      "Francs economy between waves",
    ],
    pointsOfInterest: [
      "Main Street — Primary combat zone",
      "Trader Post — Shop location between waves",
      "Barricade Points — Defensible positions",
      "Side Alleys — Flanking enemy routes",
    ],
  },
  {
    id: "sleepy-hollow",
    name: "Sleepy Hollow",
    tag: "Boss Event",
    levelRange: "Seasonal Only",
    description:
      "Halloween seasonal boss map. Battle the Headless Horseman in the dark, foggy woods of Sleepy Hollow. The Headless Horseman charges on horseback, hurls flaming jack-o'-lanterns, and summons Headless Ones. Requires perfect team coordination.",
    features: [
      "Dark foggy forest atmosphere",
      "Headless Horseman boss encounter",
      "Horseback charge attacks",
      "Flaming jack-o'-lantern projectiles",
    ],
    pointsOfInterest: [
      "Forest Clearing — Main boss arena",
      "Cover Points — Safe zones from charges",
      "Bridge — Tactical repositioning point",
      "Graveyard — Summoned enemy spawn area",
    ],
  },
  {
    id: "transylvania",
    name: "Transylvania",
    tag: "Boss Event",
    levelRange: "Seasonal Only",
    description:
      "Halloween seasonal boss map set in Dracula's castle in Transylvania. Players navigate the castle interior and face Dracula himself in a multi-phase boss fight. Dracula uses dark magic, summons Vampires, and requires extreme precision to defeat.",
    features: [
      "Gothic castle setting",
      "Multi-phase Dracula boss fight",
      "Vampire summon mechanics",
      "Dark magic attacks",
    ],
    pointsOfInterest: [
      "Castle Entrance — Approach and entry",
      "Grand Hall — First phase boss area",
      "Spiral Staircase — Transition between phases",
      "Throne Room — Final phase encounter",
    ],
  },
];

/* ==============================
   4. Quick Links
   ============================== */

export const journeys: JourneyCard[] = [
  {
    icon: "📖",
    title: "Game Info",
    description: "Learn about Guts and Blackpowder, its development team, and Roblox platform details",
    href: "/wiki",
  },
  {
    icon: "🏅",
    title: "Badges",
    description: "All available badges and how to unlock them, from easy to hidden challenges",
    href: "/badges/",
  },
  {
    icon: "⌨️",
    title: "Commands",
    description: "Complete list of in-game commands, chat shortcuts, and admin commands",
    href: "/commands/",
  },
  {
    icon: "🌟",
    title: "Beginner Guide",
    description: "First time playing? Complete guide from classes and weapons to survival tips",
    href: "/beginner-guide/",
  },
  {
    icon: "🎯",
    title: "Classes Guide",
    description: "All classes explained in detail — Infantry, Officer, Seaman, Musician, Sapper, Surgeon, Chaplain",
    href: "/classes/",
  },
  {
    icon: "🔫",
    title: "Weapons",
    description: "All historical weapons and recommended loadouts",
    href: "/weapons/",
  },
  {
    icon: "👹",
    title: "Enemies",
    description: "Complete enemy guide: zombies, special infected, and boss enemies",
    href: "/enemies/",
  },
  {
    icon: "🗺️",
    title: "Maps",
    description: "Detailed strategy for every map: layouts, chokepoints, and survival tactics",
    href: "/maps/",
  },
  {
    icon: "❓",
    title: "FAQ",
    description: "Frequently asked questions about game mechanics, updates, and troubleshooting",
    href: "/faq/",
  },
];

/* ==============================
   5. Tools
   ============================== */

export const tools: ToolCard[] = [
  {
    icon: "📖",
    tag: "Reference",
    title: "Wiki",
    description: "Complete Guts and Blackpowder wiki covering all game mechanics, weapons, maps, and enemies",
    href: "/wiki",
  },
  {
    icon: "🖥️",
    tag: "Server",
    title: "Private Servers",
    description: "Create or join private servers. Customize game settings and play with friends",
    href: "/guides",
  },
  {
    icon: "👹",
    tag: "Guide",
    title: "Enemies",
    description: "Complete enemy bestiary — Shamblers, Runners, Bombers, and Boss encounters",
    href: "/enemies/",
  },
  {
    icon: "🗺️",
    tag: "Guide",
    title: "Maps",
    description: "All 15 maps with detailed walkthroughs, objective routes, and escape strategies",
    href: "/maps/",
  },
  {
    icon: "🎨",
    tag: "Gallery",
    title: "Art",
    description: "Fan art gallery showcasing the Guts and Blackpowder community's creative works",
    href: "/guides",
  },
  {
    icon: "😂",
    tag: "Fun",
    title: "Memes",
    description: "Community memes and humorous content from the Guts and Blackpowder community",
    href: "/guides",
  },
];

/* ==============================
   6. Featured Guides
   ============================== */

export const featuredGuides: GuideItem[] = [
  {
    tag: "Easter Egg",
    title: "Barry — Who Is He & Why Does Everyone Love Him?",
    description: "The truth about the Catacombes de Paris NPC Easter egg. Find Barry's tomb, earn the Vos Enterrement badge, and learn the community legend.",
    href: "/guides/barry",
  },
  {
    tag: "Currency",
    title: "Francs Guide — Earn & Spend Efficiently",
    description: "Maximize your Francs earnings across all modes. Best farming strategies, what to buy first, and how to save for rare items.",
    href: "/guides/francs",
  },
  {
    tag: "Meta",
    title: "Best Class Tier List (v0.17.9)",
    description: "Complete tier ranking of all 8 game modes and classes. Performance analysis, team synergy, and recommendations for every playstyle.",
    href: "/guides",
  },
];

/* ==============================
   7. News
   ============================== */

export const news: NewsItem[] = [
  {
    date: "2026-06-28",
    content: "Guts and Blackpowder v0.17.9 released! New maps, weapons, balance changes, and performance improvements.",
  },
  {
    date: "2026-05-15",
    content: "Latest content update adds the Catacombes de Paris map and new weapon variants for all classes.",
  },
  {
    date: "2026-04-20",
    content: "Community milestone reached: 540,000 Discord members! Thank you for your continued support.",
  },
];

/* ==============================
   8. FAQs
   ============================== */

export const faqs: FAQ[] = [
  {
    question: "Is Guts and Blackpowder free to play?",
    answer:
      "Yes. Guts and Blackpowder is completely free to play on Roblox. There are optional in-game purchases for weapon skins and cosmetics, but these do not affect gameplay balance. All weapons and classes are available to everyone.",
  },
  {
    question: "Is Guts and Blackpowder a horror game?",
    answer:
      "While Guts and Blackpowder is primarily a PvE zombie survival game with intense combat, it does have horror elements — especially on maps like Catacombes de Paris (dark tunnels) and the seasonal Halloween boss maps. The atmosphere can be tense and eerie, but it's more action-horror than pure survival horror.",
  },
  {
    question: "Can I play Guts and Blackpowder solo?",
    answer:
      "Guts and Blackpowder is designed for team play with up to 12 players per server. There is no solo/offline mode. You can join public servers and matchmake with random players, but playing with a coordinated team is highly recommended for harder modes like Endless and Holdout.",
  },
  {
    question: "What is 'The Blight'?",
    answer:
      "The Blight is the viral infection at the core of Guts and Blackpowder's alternate-history setting. It is a mysterious disease that raises the dead, turning them into hostile undead. The Blight spreads across Napoleonic-era Europe, and players must survive against the infected hordes across various historical battlefields.",
  },
  {
    question: "Who is Barry?",
    answer:
      "Barry is a hidden NPC (non-playable character) Easter egg found in the Catacombes de Paris map. Internally nicknamed 'WinchGuy,' Barry is a skeleton discovered deep in the catacombs, armed with a shovel. Players can earn the 'Vos Enterrement' badge by finding and interacting with Barry's tomb. Important: Barry is NOT a playable class — he is purely an NPC Easter egg that has become a beloved community meme and legend.",
  },
  {
    question: "What does the Chaplain class do?",
    answer:
      "The Chaplain is a support class primarily used in Endless mode. The Chaplain uses the Holy Bible to heal teammates and the Crucifix to repel or slow down nearby undead. The Chaplain is essential for surviving high-wave Endless runs and is one of the most important classes for team survival.",
  },
  {
    question: "Are there active Guts and Blackpowder codes?",
    answer:
      "Guts and Blackpowder occasionally releases promo codes for free cosmetics or items during special events or milestones. Codes are typically announced on the official Discord server and Twitter/X. Most codes are time-limited, so check official channels regularly. There are no permanent active codes.",
  },
  {
    question: "What commands are available in Guts and Blackpowder?",
    answer:
      "Guts and Blackpowder supports several chat commands: /respawn (respawn at checkpoint in Objective mode), /votekick (initiate vote to kick a player), /report (report a player), /music (toggle BGM), and various private server admin commands for customizing game settings. Private server owners can access additional commands to control game parameters.",
  },
  {
    question: "What are Francs and how do I earn them?",
    answer:
      "Francs are the in-game currency in Guts and Blackpowder. They are earned by completing objectives, surviving waves, and participating in matches. In Endless mode, bonus Francs are awarded every 5 waves. Hardcore mode doubles all Franc earnings. Francs can be spent on weapon skins, cosmetics, and at the Saint Petersburg trader NPC in Holdout mode.",
  },
  {
    question: "What is the hardest map in Guts and Blackpowder?",
    answer:
      "The hardest map depends on the mode. For Objective mode, San Sebastian is widely considered the most difficult due to the exposed beach approach and the tight final catacomb escape. For Endless mode, Leipzig's open layout makes survival past wave 20 extremely challenging. The Boss Event maps (Sleepy Hollow and Transylvania) are the hardest overall, requiring perfect coordination.",
  },
  {
    question: "Does Guts and Blackpowder have PvP?",
    answer:
      "Yes, Guts and Blackpowder has PvP modes. The Siege mode is a dedicated PvP battle mode where two teams face off using Napoleonic weapons. There is also a PVP (Nation vs Nation) mode available on select maps (Hougoumont, La Haye Sainte). However, the majority of the player base prefers the PvE modes.",
  },
  {
    question: "How often does the game update?",
    answer:
      "Fezezen (Fuze Studios) releases major updates every few months, with smaller patches in between for bug fixes and balance adjustments. Major updates typically introduce new maps, weapons, or game modes. Seasonal events (like Halloween Boss Events) arrive annually. The current version is v0.17.9, released June 2026.",
  },
];

/* ==============================
   9. Weapons
   ============================== */

export const weaponTypes: WeaponType[] = [
  { name: "Musket", description: "Standard infantry firearm, slow reload but reliable range and damage", classes: ["objective", "endless", "holdout", "siege", "pvp"] },
  { name: "Rifle", description: "Rifled barrel for improved accuracy, longer reload time", classes: ["objective", "endless", "holdout"] },
  { name: "Carbine", description: "Shorter barrel variant, faster reload with reduced range", classes: ["objective", "endless"] },
  { name: "Blunderbuss", description: "Wide-spread shotgun-like firearm, devastating at close range", classes: ["objective", "endless", "holdout"] },
  { name: "Nock Gun", description: "Seven-barrel volley gun, massive burst damage but very slow reload", classes: ["objective"] },
  { name: "Pistol", description: "Quick sidearm, fast reload, effective at close range", classes: ["objective", "endless", "holdout", "siege", "pvp"] },
  { name: "Sabre", description: "Standard cavalry saber, balanced speed and damage for melee", classes: ["objective", "endless", "holdout", "siege", "pvp"] },
  { name: "Heavy Sabre", description: "Larger, heavier sabre, higher damage but slower swings", classes: ["objective", "endless"] },
  { name: "Hand Axe", description: "One-handed axe, good damage and moderate swing speed", classes: ["objective", "endless"] },
  { name: "Heavy Axe", description: "Two-handed axe, highest melee damage, very slow swing", classes: ["objective", "endless"] },
  { name: "Hammer", description: "Blunt melee weapon, effective against armored enemies", classes: ["objective", "endless"] },
  { name: "Bayonet", description: "Blade attached to rifle barrel, combines ranged and melee", classes: ["objective", "endless", "holdout"] },
  { name: "Pickaxe", description: "Mining tool repurposed as weapon, unique moveset", classes: ["objective", "endless"] },
  { name: "Medical Supplies", description: "Surgeon class item, used to heal and revive teammates", classes: ["objective", "endless", "holdout"] },
  { name: "Holy Bible", description: "Chaplain class item, heals nearby teammates when used", classes: ["objective", "endless"] },
  { name: "Crucifix", description: "Chaplain class item, repels undead enemies in an area", classes: ["objective", "endless"] },
  { name: "Fife", description: "Musical instrument, provides movement speed buff to nearby teammates", classes: ["objective", "endless"] },
  { name: "Drum", description: "Musical instrument, provides damage buff to nearby teammates", classes: ["objective", "endless"] },
  { name: "Bugle", description: "Officer's instrument, used to charge and buff teammates", classes: ["objective", "endless", "holdout"] },
  { name: "Stake", description: "Specialized anti-vampire weapon, only usable in Transylvania boss map", classes: ["boss"] },
];

export const classWeaponMap: { class: string; weapons: string[] }[] = [
  { class: "Objective", weapons: ["Musket", "Rifle", "Carbine", "Blunderbuss", "Nock Gun", "Pistol", "Sabre", "Heavy Sabre", "Hand Axe", "Heavy Axe", "Hammer", "Bayonet", "Pickaxe", "Medical Supplies", "Holy Bible", "Crucifix", "Fife", "Drum", "Bugle"] },
  { class: "Endless", weapons: ["Musket", "Rifle", "Carbine", "Blunderbuss", "Pistol", "Sabre", "Heavy Sabre", "Hand Axe", "Heavy Axe", "Hammer", "Bayonet", "Pickaxe", "Medical Supplies", "Holy Bible", "Crucifix", "Fife", "Drum", "Bugle"] },
  { class: "Holdout", weapons: ["Musket", "Rifle", "Blunderbuss", "Pistol", "Sabre", "Bayonet", "Medical Supplies", "Bugle"] },
  { class: "Boss Event", weapons: ["All weapons", "Stake"] },
  { class: "Siege", weapons: ["Musket", "Pistol", "Sabre"] },
  { class: "PVP", weapons: ["Musket", "Pistol", "Sabre"] },
];

export const recommendedWeapons: Weapon[] = [
  { name: "Standard Musket", type: "Musket", class: "All", damage: "B", speed: "C", range: "Long", description: "Reliable all-rounder, the standard infantry weapon" },
  { name: "Baker Rifle", type: "Rifle", class: "All", damage: "A", speed: "D", range: "Very Long", description: "High accuracy rifle, ideal for precision shooting" },
  { name: "Cavalry Pistol", type: "Pistol", class: "All", damage: "C", speed: "A", range: "Short", description: "Fast sidearm for emergency close-range defense" },
  { name: "Officer Sabre", type: "Sabre", class: "Officer", damage: "A", speed: "S", range: "Short", description: "Fast melee weapon with high DPS" },
  { name: "Sapper Axe", type: "Heavy Axe", class: "Sapper", damage: "S", speed: "D", range: "Short", description: "Devastating damage but very slow, best used with timing" },
  { name: "Chaplain Bible", type: "Holy Bible", class: "Chaplain", damage: "N/A", speed: "N/A", range: "N/A", description: "Heals nearby teammates, essential for survival" },
  { name: "Crucifix", type: "Crucifix", class: "Chaplain", damage: "N/A", speed: "N/A", range: "N/A", description: "Repels undead, creates safe zones" },
  { name: "Bugle", type: "Bugle", class: "Officer", damage: "N/A", speed: "N/A", range: "N/A", description: "Charge buff for team-wide offensive push" },
  { name: "Fife", type: "Fife", class: "Musician", damage: "N/A", speed: "N/A", range: "N/A", description: "Movement speed buff for team repositioning" },
];

/* ==============================
   10. Enemies & Bosses
   ============================== */

export const bosses: Boss[] = [
  { name: "Shambler", location: "All Maps", level: "Common", description: "Standard slow-moving undead. Walks toward players and attacks with basic melee. Most numerous enemy type.", type: "normal" },
  { name: "Runner", location: "All Maps (Wave 7+ Endless)", level: "Common", description: "Fast-moving infected that sprints at players. Appears from wave 7 in Endless mode. Requires quick aiming.", type: "normal" },
  { name: "Bomber", location: "All Maps", level: "Medium", description: "Bloated undead that explodes when killed or when close to players. Deals heavy area damage. Officer charge can detonate safely.", type: "normal" },
  { name: "Zapper", location: "All Maps", level: "Medium", description: "Electrical undead that discharges lightning in close range. Stuns players on contact. Priority target in crowds.", type: "normal" },
  { name: "Igniter", location: "All Maps (Wave 20+ Endless)", level: "High", description: "Flaming undead that sets players on fire. Appears from wave 20 in Endless mode. Fire spreads to nearby teammates.", type: "normal" },
  { name: "Cuirassier Zombie", location: "All Maps (Wave 16+ Endless)", level: "High", description: "Armored undead cavalry wearing breastplate. Heavy armor absorbs multiple shots. Weak point is exposed head. Appears from wave 16 Endless.", type: "elite" },
  { name: "Headless Horseman", location: "Sleepy Hollow (Boss Event)", level: "Boss", description: "Halloween boss. Rides horseback, hurls flaming jack-o'-lanterns, charges across the arena, and summons Headless Ones. Requires coordinated dodging and timing.", type: "world" },
  { name: "Headless One", location: "Sleepy Hollow (Boss Event)", level: "Medium", description: "Summoned by the Headless Horseman during the Sleepy Hollow boss fight. Slower shambler-type enemies that swarm the arena.", type: "normal" },
  { name: "Dracula", location: "Transylvania (Boss Event)", level: "Boss", description: "Halloween boss. Multi-phase fight in Dracula's castle. Uses dark magic, teleports, summons Vampires, and has devastating area attacks. Most difficult boss in the game.", type: "world" },
  { name: "Vampire", location: "Transylvania (Boss Event)", level: "High", description: "Summoned by Dracula during the Transylvania boss fight. Fast, aggressive enemies that can drain health. Vulnerable to stakes.", type: "elite" },
];

export const dungeons: Dungeon[] = [
  {
    name: "San Sebastian - Beach Landing",
    level: "All Levels",
    description: "Assault the beach and break through the fortress walls. Use smoke grenades for cover and focus fire on the breach.",
    bosses: ["British Redcoats"],
    rewards: ["Experience", "Weapon Skin Fragments", "Badge Progress"],
  },
  {
    name: "Copenhagen - Street Fighting",
    level: "All Levels",
    description: "House-to-house fighting in narrow streets. Use windows and rooftops, watch for close-quarters ambushes.",
    bosses: ["Heavy Grenadiers"],
    rewards: ["Experience", "Weapon Skin Fragments", "Special Cosmetics"],
  },
  {
    name: "Leipzig - Battle of Nations",
    level: "All Levels",
    description: "Large-scale multi-front battle. Coordinate multiple squads and allocate forces strategically.",
    bosses: ["Prussian Guards"],
    rewards: ["Experience", "Rare Weapon Skin", "Honor Medal"],
  },
  {
    name: "Kaub - River Crossing",
    level: "All Levels",
    description: "Cross the river and establish a bridgehead. Control the bridge and suppress enemy fire positions.",
    bosses: ["Artillery Position"],
    rewards: ["Experience", "Weapon Skin Fragments", "Badge Progress"],
  },
];

/* ==============================
   11. Classes
   ============================== */

export const professions: Profession[] = [
  { name: "Line Infantry", icon: "🔫", description: "Standard infantry using smoothbore muskets, the backbone of any army" },
  { name: "Light Infantry", icon: "🎯", description: "Mobile infantry using rifles for precision shooting" },
  { name: "Officer", icon: "⚔️", description: "Team leader using sabre and bugle to command troops" },
  { name: "Standard Bearer", icon: "🚩", description: "Carries the regimental colors to provide team buffs" },
  { name: "Sapper", icon: "🛠️", description: "Engineer who builds defenses and destroys obstacles" },
  { name: "Artillerist", icon: "💣", description: "Cannon operator providing area fire support" },
];

/* ==============================
   12. System Requirements
   ============================== */

export const systemRequirements: SystemRequirement[] = [
  {
    category: "Minimum (Roblox)",
    items: [
      { label: "OS", value: "Windows 7 / macOS 10.10 / iOS / Android" },
      { label: "CPU", value: "Intel Core i3 / AMD equivalent" },
      { label: "RAM", value: "4 GB RAM" },
      { label: "GPU", value: "Integrated GPU (DirectX 10 support)" },
      { label: "Storage", value: "~200 MB for Roblox client" },
      { label: "Network", value: "Broadband internet connection" },
    ],
  },
  {
    category: "Recommended",
    items: [
      { label: "OS", value: "Windows 10 / macOS 11+" },
      { label: "CPU", value: "Intel Core i5 / AMD Ryzen 5" },
      { label: "RAM", value: "8 GB RAM" },
      { label: "GPU", value: "Dedicated GPU (DirectX 11 support)" },
      { label: "Storage", value: "~200 MB for Roblox client" },
      { label: "Network", value: "Stable broadband connection" },
    ],
  },
];

/* ==============================
   13. Game Info (Release History)
   ============================== */

export const releaseDates: ReleaseDateInfo[] = [
  {
    phase: "Launch",
    date: "2021",
    description: "Guts and Blackpowder launched on Roblox with initial maps and core gameplay",
  },
  {
    phase: "Major Update 1",
    date: "2022",
    description: "Added San Sebastian, Copenhagen and more maps. Introduced full Objective mode mechanics.",
  },
  {
    phase: "Major Update 2",
    date: "2023-2024",
    description: "Added Leipzig, Kaub and more. Introduced Endless mode, new weapons and class system.",
  },
  {
    phase: "Recent Updates",
    date: "2025-2026",
    description: "Continued performance optimization, event modes, new weapon skins and seasonal activities",
  },
];

/* ==============================
   14. Updates & Roadmap
   ============================== */

export const roadmap: RoadmapItem[] = [
  {
    phase: "Released",
    title: "Classic Content",
    items: [
      "Multiple historical battle maps (San Sebastian, Copenhagen, Leipzig, Kaub and more)",
      "Objective mode with full mechanics",
      "Endless survival mode",
      "Multiple historical weapons (smoothbore muskets, rifles, pistols, etc.)",
      "Class system (Line Infantry, Light Infantry, Officer, etc.)",
      "Basic weapon skin system",
    ],
    status: "completed",
  },
  {
    phase: "Current Phase",
    title: "Ongoing Updates",
    items: [
      "New maps in development",
      "New weapon types being planned",
      "Game performance optimization",
      "Class balance adjustments",
      "New event modes in preparation",
      "Community feedback-driven improvements",
    ],
    status: "in-progress",
  },
  {
    phase: "Planned",
    title: "Future Updates",
    items: [
      "Brand new game modes",
      "More historical battle recreations",
      "Seasonal event system",
      "Weapon skin customization system",
      "Achievement and honor system",
      "More language support",
    ],
    status: "planned",
  },
  {
    phase: "Long-term Vision",
    title: "Development Direction",
    items: [
      "Community workshop support",
      "More historical era expansions",
      "Cross-game crossover events",
      "Esports-grade competitive mode",
      "Player-hosted server support",
    ],
    status: "planned",
  },
];
