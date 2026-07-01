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
   1. 首页 — 游戏基础信息
   ============================== */

export const gameData: GameInfo = {
  title: "Guts and Blackpowder",
  subtitle: "Roblox 拿破仑战争题材第一人称射击游戏",
  description:
    "Guts and Blackpowder 是由 Fezezen（Fuze Studios）在 Roblox 平台上开发的一款以拿破仑战争为背景的第一人称射击游戏。游戏还原了 19 世纪初期欧洲战场的残酷氛围，玩家将扮演英、法、普鲁士等不同阵营的士兵，使用火枪、刺刀、佩剑等历史武器参与大规模阵地战。\n\n游戏拥有多种游戏模式，包括经典的 Objective（目标）模式、Endless（无尽）生存模式和 versus（玩家对战）模式。自 2021 年上线以来，累计游玩次数已超过 53 亿次，凭借其硬核的 gameplay 和对历史细节的还原，获得了社区 94% 的好评率。",
  heroTitle: "在 Guts and Blackpowder 中浴血奋战",
  heroSubtitle:
    "一款 Roblox 平台上的硬核拿破仑战争游戏。在硝烟弥漫的战场上，用火枪和刺刀书写你的战斗传奇。",
  heroStats: [
    { label: "上线时间", value: "2021年" },
    { label: "游玩次数", value: "533M+" },
    { label: "好评率", value: "94%" },
    { label: "游戏模式", value: "7+" },
  ],
  quickFacts: [
    { label: "开发商", value: "Fezezen / Fuze Studios" },
    { label: "类型", value: "第一人称射击 / 历史战争" },
    { label: "平台", value: "Roblox" },
    { label: "人数", value: "支持大规模多人对战" },
    { label: "价格", value: "免费游玩" },
    { label: "评价", value: "94% 好评（530万+ 评价）" },
    { label: "引擎", value: "Roblox Engine" },
  ],
};

/* ==============================
   2. 游戏模式（原职业）
   ============================== */

export const classes: ClassData[] = [
  {
    id: "objective",
    name: "目标模式",
    icon: "🎯",
    tag: "经典 · 团队合作",
    shortDescription: "团队合作完成指定目标，如占领据点、护送物资等。最适合新手上手的模式。",
    description:
      "目标模式是 Guts and Blackpowder 中最经典的游戏模式。玩家分为进攻方和防守方，进攻方需要在地图上完成一系列目标（如占领阵地、摧毁炮台、护送关键人物等），防守方则需要阻止对方。该模式强调团队配合和战术执行，每张地图都有独特的目标路线。",
    role: "团队合作 / 战术执行 / 攻防转换",
    difficulty: "中等",
    rating: "S 级",
    weaponType: "步枪、刺刀、佩剑、手枪、火炮",
    armorType: "标准军服",
    abilities: [
      "占领据点 — 在指定区域停留以占领目标",
      "护送任务 — 保护关键人物或物资到达目的地",
      "炮台操作 — 操作固定火炮压制敌方",
      "团队协作 — 与队友配合推进或防守",
    ],
    tips: "新手推荐：选择步枪兵，跟随大部队行动 | 进阶技巧：学习地图路线和敌人重生点 | 团队定位：根据队伍需要选择合适兵种",
  },
  {
    id: "endless",
    name: "无尽模式",
    icon: "♾️",
    tag: "生存 · 合作防守",
    shortDescription: "抵御一波又一波的敌人进攻，与队友合作生存尽可能久。",
    description:
      "无尽模式是 Guts and Blackpowder 中的生存合作模式。玩家需要在一个封闭地图中抵御不断袭来的 AI 敌人波次。每波敌人的数量和强度都会逐渐提升，中间会有 Boss 级别的敌人出现。团队需要合理分配火力、管理弹药，并利用地图地形进行防守。",
    role: "生存防守 / 资源管理 / 团队配合",
    difficulty: "困难",
    rating: "A 级",
    weaponType: "步枪、手枪、刺刀、佩剑",
    armorType: "标准军服",
    abilities: [
      "波次防守 — 抵御逐渐增强的敌人波次",
      "弹药管理 — 合理分配有限弹药资源",
      "地形利用 — 选择有利防守位置",
      "Boss 应对 — 处理特殊强力敌人",
    ],
    tips: "新手推荐：选择线列步兵，保持阵型 | 进阶技巧：节省弹药，善用刺刀近战 | 团队定位：分工合作，有人负责火力压制，有人负责侧翼警戒",
  },
  {
    id: "versus",
    name: "对战模式",
    icon: "⚔️",
    tag: "PvP · 竞技",
    shortDescription: "玩家之间的直接对抗，在战场上比拼枪法与战术。",
    description:
      "对战模式是 Guts and Blackpowder 中的玩家对战模式。双方玩家在战场上直接对抗，比拼枪法、战术和团队配合。不同于目标模式的固定路线，对战模式更加自由，需要玩家具备更好的个人技术和战场意识。",
    role: "玩家对战 / 战术射击 / 团队竞技",
    difficulty: "困难",
    rating: "S 级",
    weaponType: "步枪、手枪、佩剑、刺刀",
    armorType: "标准军服",
    abilities: [
      "枪法比拼 — 精确瞄准和快速射击能力",
      "战术走位 — 利用掩体和地形优势",
      "团队配合 — 与队友协同进攻防守",
      "近战格斗 — 关键时刻使用刺刀或佩剑",
    ],
    tips: "新手推荐：先熟悉步枪弹道和装填节奏 | 进阶技巧：学习预瞄和提前枪 | 团队定位：与队友保持阵型，不要单独行动",
  },
  {
    id: "event",
    name: "活动模式",
    icon: "🎪",
    tag: "限时 · 特殊玩法",
    shortDescription: "限时开放的特殊游戏模式，提供独特的战斗体验和奖励。",
    description:
      "活动模式是 Guts and Blackpowder 中限时开放的特殊游戏模式。通常会结合特定历史事件或节日推出，具有独特的规则和玩法。例如圣诞节期间的特别地图、历史上的著名战役还原等。活动模式通常会提供专属的武器皮肤和奖励。",
    role: "限时体验 / 特殊玩法 / 收藏奖励",
    difficulty: "视活动而定",
    rating: "A 级",
    weaponType: "视活动而定",
    armorType: "标准军服",
    abilities: [
      "限时内容 — 仅在活动期间开放",
      "独特规则 — 每期活动有不同玩法",
      "专属奖励 — 活动限定武器和装扮",
      "历史还原 — 部分活动还原真实战役",
    ],
    tips: "关注官方公告，及时参与限时活动获取限定奖励 | 活动模式通常有独特的机制，建议先查看规则说明",
  },
];

/* ==============================
   3. 地图攻略（原区域）
   ============================== */

export const regions: Region[] = [
  {
    id: "san-sebastian",
    name: "圣塞巴斯蒂安",
    tag: "经典地图",
    levelRange: "适合所有等级",
    description:
      "以 1813 年圣塞巴斯蒂安围城战为背景的地图。进攻方需要穿越开阔海滩，攻破城墙防线，最终占领城市中心。防守方占据城墙优势，可以居高临下射击。该地图以开阔地形和远程对射为主要特色。",
    features: [
      "开阔海滩地带，进攻方暴露度高",
      "城墙防守体系，防守方有高度优势",
      "巷战区域，适合近距离交战",
      "多处可破坏障碍物",
    ],
    pointsOfInterest: [
      "海滩登陆点 — 进攻方起始位置，易受火力压制",
      "城墙缺口 — 主要突破点，双方争夺焦点",
      "城市广场 — 最终目标点，激烈近战区域",
      "侧翼小路 — 可绕后突袭的隐蔽路线",
    ],
  },
  {
    id: "copenhagen",
    name: "哥本哈根",
    tag: "城市战",
    levelRange: "适合所有等级",
    description:
      "以 1807 年哥本哈根战役为背景的城市地图。街道狭窄，建筑密集，适合近距离战斗和伏击。进攻方需要在城市街巷中推进，清除各个据点中的守军。防守方可以利用建筑窗口和屋顶进行射击。",
    features: [
      "狭窄街巷，近距离战斗频繁",
      "多层建筑，提供多种射击角度",
      "室内战斗区域，适合近战武器",
      "多条进攻路线可选",
    ],
    pointsOfInterest: [
      "港口区 — 地图边缘，相对开阔",
      "市政广场 — 中心区域，四面受敌",
      "教堂钟楼 — 制高点，可俯瞰全图",
      "市场街 — 主要交火区域，掩体众多",
    ],
  },
  {
    id: "leipzig",
    name: "莱比锡",
    tag: "大型会战",
    levelRange: "适合所有等级",
    description:
      "以 1813 年莱比锡会战（民族会战）为背景的大型地图。战场广阔，参与人数众多，是游戏中规模最大的地图之一。包含多个战略要点，需要团队高度协作才能在广阔的战场上取得优势。",
    features: [
      "大规模会战场景，支持更多玩家",
      "开阔田野与村庄结合的地形",
      "多个战略据点需要同时争夺",
      "骑兵冲锋区域",
    ],
    pointsOfInterest: [
      "村庄 — 地图中央的关键据点",
      "桥梁 — 战略要道，易守难攻",
      "炮兵阵地 — 可提供火力支援的高地",
      "林地 — 适合伏击和隐蔽移动",
    ],
  },
  {
    id: "kaub",
    name: "考布",
    tag: "渡河战役",
    levelRange: "适合所有等级",
    description:
      "以 1814 年考布渡河战役为背景的地图。进攻方需要跨越河流建立桥头堡，防守方则在河岸布防。河流将地图分为两半，桥梁和浅滩成为双方争夺的焦点。",
    features: [
      "河流地形，渡河点有限",
      "桥梁争夺战激烈",
      "两岸地形不对称",
      "火炮在开阔地带威力巨大",
    ],
    pointsOfInterest: [
      "主桥 — 主要渡河通道，火力密集",
      "浅滩 — 可涉水过河的隐蔽路线",
      "河岸阵地 — 防守方炮兵位置",
      "对岸村庄 — 进攻方需要占领的目标",
    ],
  },
];

/* ==============================
   4. 开始你的旅程（9个入口卡片）
   ============================== */

export const journeys: JourneyCard[] = [
  {
    icon: "📅",
    title: "游戏信息",
    description: "Guts and Blackpowder 基本介绍、开发团队及 Roblox 平台信息",
    href: "/release-date/",
  },
  {
    icon: "🌟",
    title: "新手入门",
    description: "前 5 小时指南：基础操作、兵种选择、武器熟悉及战场生存技巧",
    href: "/beginner-guide/",
  },
  {
    icon: "🎯",
    title: "游戏模式",
    description: "全部游戏模式详解——目标模式、无尽模式、对战模式及活动模式",
    href: "/classes/",
  },
  {
    icon: "🔫",
    title: "武器大全",
    description: "步枪、手枪、刺刀、佩剑等所有武器的性能参数和使用技巧",
    href: "/weapons/",
  },
  {
    icon: "👹",
    title: "敌人图鉴",
    description: "全敌人类型详解——从普通士兵到 Boss 级敌人的应对策略",
    href: "/bosses/",
  },
  {
    icon: "🎮",
    title: "联机指南",
    description: "Roblox 组队方式、服务器选择、语音沟通及团队配合技巧",
    href: "/how-to-play/",
  },
  {
    icon: "💡",
    title: "技巧与窍门",
    description: "快速提升枪法、弹药管理、团队阵型、地图熟悉度等实战技巧",
    href: "/tips/",
  },
  {
    icon: "🗺️",
    title: "版本更新",
    description: "新地图、新武器、新活动和新系统——完整更新历史",
    href: "/roadmap/",
  },
  {
    icon: "❓",
    title: "常见问题",
    description: "Guts and Blackpowder 免费吗？如何获得武器？所有问题解答",
    href: "/faq/",
  },
];

/* ==============================
   5. 工具与排行榜（6个工具卡片）
   ============================== */

export const tools: ToolCard[] = [
  {
    icon: "🖥️",
    tag: "实时",
    title: "服务器状态",
    description: "Guts and Blackpowder 服务器是否正常？实时状态及故障排查",
    href: "/server-status/",
  },
  {
    icon: "📊",
    tag: "数据",
    title: "游玩数据",
    description: "Guts and Blackpowder 玩家数量、在线峰值及活跃趋势",
    href: "/game-stats/",
  },
  {
    icon: "🏆",
    tag: "排行",
    title: "兵种排行榜",
    description: "各兵种在当前版本的强度评级——单人及团队评分",
    href: "/tier-list/",
  },
  {
    icon: "⚡",
    tag: "排行",
    title: "最佳武器",
    description: "各兵种最佳武器推荐，附带使用技巧和获取方式",
    href: "/best-weapons/",
  },
  {
    icon: "👹",
    tag: "战斗",
    title: "敌人指南",
    description: "每个敌人类型的机制、应对策略和推荐武器",
    href: "/bosses/",
  },
  {
    icon: "🎁",
    tag: "兑换码",
    title: "兑换码",
    description: "Guts and Blackpowder 有效兑换码及兑换方式（每日更新）",
    href: "/codes/",
  },
];

/* ==============================
   6. 精选指南（3个）
   ============================== */

export const featuredGuides: GuideItem[] = [
  {
    tag: "入门",
    title: "2026 新手完全指南",
    description: "从零开始的 Guts and Blackpowder 入门攻略，帮助你快速掌握基础战斗技巧。",
    href: "/guides/gb-beginner-guide/",
  },
  {
    tag: "进阶",
    title: "枪法与弹道指南",
    description: "掌握步枪弹道、预瞄技巧和装填节奏，成为战场上的神射手。",
    href: "/guides/gb-aim-guide/",
  },
  {
    tag: "评测",
    title: "Guts and Blackpowder 值得玩吗？",
    description: "完整体验评测——游戏内容、社区氛围、更新频率与长期可玩性分析。",
    href: "/guides/is-gb-worth-it/",
  },
];

/* ==============================
   7. 最新动态
   ============================== */

export const news: NewsItem[] = [
  {
    date: "2026-06-15",
    content: "Guts and Blackpowder 发布夏季更新，新增全新地图和武器皮肤。",
  },
  {
    date: "2026-04-01",
    content: "Fezezen 发布重大更新，优化游戏性能和新增兵种平衡调整。",
  },
  {
    date: "2026 路线图",
    content: "计划推出新地图、新武器类别、季节性活动及更多游戏模式。",
  },
];

/* ==============================
   8. 常见问题（11个）
   ============================== */

export const faqs: FAQ[] = [
  {
    question: "Guts and Blackpowder 是什么游戏？",
    answer:
      "Guts and Blackpowder 是由 Fezezen（Fuze Studios）在 Roblox 平台上开发的一款以拿破仑战争为背景的第一人称射击游戏。游戏于 2021 年上线，累计游玩次数超过 53 亿次。",
  },
  {
    question: "Guts and Blackpowder 是免费游戏吗？",
    answer:
      "是的。Guts and Blackpowder 在 Roblox 平台上免费游玩。游戏内有可选购买的武器皮肤和装饰品，但不影响游戏平衡。",
  },
  {
    question: "Guts and Blackpowder 有哪些游戏模式？",
    answer:
      "游戏主要包含目标模式（Objective）、无尽模式（Endless）、对战模式（Versus）和限时活动模式。每种模式都有独特的玩法和挑战。",
  },
  {
    question: "Guts and Blackpowder 可以单人玩吗？",
    answer:
      "可以。目标模式和无尽模式都支持匹配进入，无需组队即可开始游戏。不过与队友配合会获得更好的游戏体验。",
  },
  {
    question: "Guts and Blackpowder 服务器现在宕机了吗？",
    answer:
      "大部分时间运行正常。如果遇到连接问题，请检查你的网络连接或查看 Roblox 服务器状态页面。",
  },
  {
    question: "如何获得武器皮肤？",
    answer:
      "武器皮肤可以通过参与限时活动、完成特定成就或通过 Roblox 游戏内商店购买获得。部分稀有皮肤只能在活动期间获取。",
  },
  {
    question: "游戏有历史背景吗？",
    answer:
      "有。Guts and Blackpowder 的地图和战役大多基于拿破仑战争时期的真实历史事件，如圣塞巴斯蒂安围城战、哥本哈根战役、莱比锡会战等。",
  },
  {
    question: "Guts and Blackpowder 有 PvP 模式吗？",
    answer:
      "有。对战模式（Versus）就是玩家对战的 PvP 模式。此外目标模式中也有玩家对抗的元素（攻防双方）。",
  },
  {
    question: "游戏支持哪些平台？",
    answer:
      "Guts and Blackpowder 作为 Roblox 游戏，支持 PC、手机、平板和 Xbox 等所有 Roblox 支持的平台。不同平台间的玩家可以同服游玩。",
  },
  {
    question: "如何更换兵种？",
    answer:
      "在游戏中按特定键位可以打开兵种选择菜单，在不同兵种之间切换。不同兵种使用的武器和能力有所不同。",
  },
  {
    question: "游戏有官方社区吗？",
    answer:
      "有。Guts and Blackpowder 有官方 Discord 服务器和 Roblox 群组，开发团队 Fezezen 会在此发布更新公告和收集玩家反馈。",
  },
];

/* ==============================
   9. 武器系统
   ============================== */

export const weaponTypes: WeaponType[] = [
  { name: "滑膛步枪", description: "标准步兵武器，射程远但装填慢", classes: ["objective", "endless", "versus"] },
  { name: "线膛步枪", description: "精度更高的步枪，装填时间更长", classes: ["objective", "endless", "versus"] },
  { name: "手枪", description: "装填快速的副武器，适合近距离紧急使用", classes: ["objective", "endless", "versus"] },
  { name: "刺刀", description: "安装在步枪上的近战武器，冲锋利器", classes: ["objective", "endless", "versus"] },
  { name: "佩剑", description: "军官使用的近战武器，攻速快", classes: ["objective", "endless", "versus"] },
  { name: "军刀", description: "骑兵用弯刀，威力大", classes: ["objective", "endless"] },
  { name: "火炮", description: "固定或移动式火炮，范围伤害", classes: ["objective"] },
  { name: "手榴弹", description: "投掷爆炸物，清理聚集敌人", classes: ["objective", "endless"] },
  { name: "喇叭", description: "军官用信号装备，可激励队友", classes: ["objective", "endless"] },
  { name: "战旗", description: "军旗手使用，提供团队增益", classes: ["objective", "endless"] },
];

export const classWeaponMap: { class: string; weapons: string[] }[] = [
  { class: "目标模式", weapons: ["滑膛步枪", "线膛步枪", "手枪", "刺刀", "佩剑", "火炮", "手榴弹"] },
  { class: "无尽模式", weapons: ["滑膛步枪", "线膛步枪", "手枪", "刺刀", "佩剑", "手榴弹"] },
  { class: "对战模式", weapons: ["滑膛步枪", "线膛步枪", "手枪", "刺刀", "佩剑"] },
  { class: "活动模式", weapons: ["滑膛步枪", "手枪", "刺刀", "佩剑"] },
];

export const recommendedWeapons: Weapon[] = [
  { name: "标准滑膛步枪", type: "滑膛步枪", class: "通用", damage: "B", speed: "C", range: "远", description: "标准步兵武器，均衡实用" },
  { name: "英式贝克步枪", type: "线膛步枪", class: "通用", damage: "A", speed: "D", range: "远", description: "高精度步枪，适合狙击" },
  { name: "法式骑兵手枪", type: "手枪", class: "通用", damage: "C", speed: "A", range: "中", description: "快速副武器，紧急时使用" },
  { name: "标准刺刀", type: "刺刀", class: "通用", damage: "B", speed: "B", range: "中", description: "安装在步枪上，冲锋利器" },
  { name: "军官佩剑", type: "佩剑", class: "军官", damage: "A", speed: "S", range: "短", description: "军官专属，快速近战" },
  { name: "野战火炮", type: "火炮", class: "目标模式", damage: "S", speed: "D", range: "极远", description: "范围伤害，清理密集敌人" },
  { name: "手榴弹", type: "手榴弹", class: "通用", damage: "S", speed: "B", range: "中", description: "范围爆炸，清理掩体内敌人" },
  { name: "铜管军号", type: "喇叭", class: "军官", damage: "N/A", speed: "N/A", range: "N/A", description: "激励队友，提供战斗增益" },
  { name: "团战旗", type: "战旗", class: "旗手", damage: "N/A", speed: "N/A", range: "N/A", description: "团队增益核心" },
];

/* ==============================
   10. 敌人与 Boss
   ============================== */

export const bosses: Boss[] = [
  { name: "法国线列步兵", location: "通用", level: "低", description: "标准敌人，排成线列阵型推进", type: "normal" },
  { name: "英国龙虾兵", location: "圣塞巴斯蒂安", level: "中", description: "英军精锐，纪律严明", type: "normal" },
  { name: "普鲁士近卫军", location: "莱比锡", level: "中", description: "精锐部队，装备精良", type: "normal" },
  { name: "骑兵突击队", location: "通用", level: "中高", description: "高速冲锋单位，近战威胁大", type: "normal" },
  { name: "炮兵阵地", location: "考布", level: "高", description: "固定火力点，需要侧翼突破", type: "normal" },
  { name: "Boss 军官", location: "无尽模式", level: "高", description: "精英军官，领导力强，周围士兵士气提升", type: "world" },
  { name: "重装掷弹兵", location: "哥本哈根", level: "高", description: "精英重装单位，血厚攻高", type: "world" },
  { name: "传奇将领", location: "活动模式", level: "极高", description: "历史名将 Boss，拥有特殊技能", type: "world" },
];

export const dungeons: Dungeon[] = [
  {
    name: "海滩登陆 — 圣塞巴斯蒂安",
    level: "全等级",
    description: "从海滩发起进攻，突破城墙防线。需要利用烟雾弹掩护推进，集中火力突破城墙缺口。",
    bosses: ["英国龙虾兵"],
    rewards: ["经验值", "武器皮肤碎片", "成就徽章"],
  },
  {
    name: "街巷争夺 — 哥本哈根",
    level: "全等级",
    description: "在城市街巷中逐屋争夺。善用窗口和屋顶优势，注意巷战中的近距离遭遇。",
    bosses: ["重装掷弹兵"],
    rewards: ["经验值", "武器皮肤碎片", "特殊装扮"],
  },
  {
    name: "民族会战 — 莱比锡",
    level: "全等级",
    description: "大规模会战，多线作战。需要协调多个小队的行动，合理分配兵力。",
    bosses: ["普鲁士近卫军"],
    rewards: ["经验值", "稀有武器皮肤", "荣誉勋章"],
  },
  {
    name: "渡河战役 — 考布",
    level: "全等级",
    description: "跨越河流建立桥头堡。桥梁是争夺焦点，需要压制对岸火力点。",
    bosses: ["炮兵阵地"],
    rewards: ["经验值", "武器皮肤碎片", "成就徽章"],
  },
];

/* ==============================
   11. 兵种（原生活职业）
   ============================== */

export const professions: Profession[] = [
  { name: "线列步兵", icon: "🔫", description: "标准步兵，使用滑膛步枪，战场主力" },
  { name: "轻步兵", icon: "🎯", description: "机动步兵，使用线膛步枪，精准射击" },
  { name: "军官", icon: "⚔️", description: "团队领袖，使用佩剑和喇叭，指挥作战" },
  { name: "旗手", icon: "🚩", description: "军旗手，使用战旗提供团队增益" },
  { name: "工兵", icon: "🛠️", description: "工程兵，可修建防御工事和破坏障碍" },
  { name: "炮兵", icon: "💣", description: "火炮操作手，提供范围火力支援" },
];

/* ==============================
   12. 系统需求
   ============================== */

export const systemRequirements: SystemRequirement[] = [
  {
    category: "最低配置（Roblox）",
    items: [
      { label: "操作系统", value: "Windows 7 / macOS 10.10 / iOS / Android" },
      { label: "处理器", value: "Intel Core i3 / AMD equivalent" },
      { label: "内存", value: "4 GB RAM" },
      { label: "显卡", value: "集成显卡（DirectX 10 支持）" },
      { label: "存储空间", value: "Roblox 客户端约 200 MB" },
      { label: "网络", value: "宽带互联网连接" },
    ],
  },
  {
    category: "推荐配置",
    items: [
      { label: "操作系统", value: "Windows 10 / macOS 11+" },
      { label: "处理器", value: "Intel Core i5 / AMD Ryzen 5" },
      { label: "内存", value: "8 GB RAM" },
      { label: "显卡", value: "独立显卡（DirectX 11 支持）" },
      { label: "存储空间", value: "Roblox 客户端约 200 MB" },
      { label: "网络", value: "稳定的宽带连接" },
    ],
  },
];

/* ==============================
   13. 游戏信息（原发售信息）
   ============================== */

export const releaseDates: ReleaseDateInfo[] = [
  {
    phase: "游戏首发",
    date: "2021年",
    description: "Guts and Blackpowder 在 Roblox 平台正式上线，初始包含少量地图和基础玩法",
  },
  {
    phase: "重大更新一",
    date: "2022年",
    description: "新增圣塞巴斯蒂安、哥本哈根等经典地图，引入目标模式完整机制",
  },
  {
    phase: "重大更新二",
    date: "2023-2024年",
    description: "新增莱比锡、考布等地图，引入无尽模式、新武器和兵种系统",
  },
  {
    phase: "近期更新",
    date: "2025-2026年",
    description: "持续优化游戏性能，推出活动模式、新武器皮肤和季节性活动",
  },
];

/* ==============================
   14. 版本更新（原EA路线图）
   ============================== */

export const roadmap: RoadmapItem[] = [
  {
    phase: "已发布",
    title: "经典内容",
    items: [
      "多张历史战役地图（圣塞巴斯蒂安、哥本哈根、莱比锡、考布等）",
      "目标模式（Objective）完整玩法",
      "无尽模式（Endless）生存玩法",
      "多种历史武器（滑膛步枪、线膛步枪、手枪等）",
      "兵种系统（线列步兵、轻步兵、军官等）",
      "基础武器皮肤系统",
    ],
    status: "completed",
  },
  {
    phase: "当前阶段",
    title: "持续更新",
    items: [
      "新地图开发中",
      "新武器类型规划中",
      "游戏性能优化",
      "兵种平衡调整",
      "新活动模式筹备",
      "社区反馈驱动的改进",
    ],
    status: "in-progress",
  },
  {
    phase: "计划中",
    title: "未来更新",
    items: [
      "全新游戏模式",
      "更多历史战役还原",
      "季节性活动系统",
      "武器皮肤自定义系统",
      "成就和荣誉系统",
      "更多语言支持",
    ],
    status: "planned",
  },
  {
    phase: "长远规划",
    title: "发展方向",
    items: [
      "社区创意工坊支持",
      "更多历史时期内容扩展",
      "跨游戏联动活动",
      "电竞级对战模式",
      "玩家自建服务器功能",
    ],
    status: "planned",
  },
];
