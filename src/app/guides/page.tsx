import type { Metadata } from "next";
import InfoCard from "@/components/InfoCard";
import CTALink from "@/components/CTALink";
import { featuredGuides } from "@/lib/data";

export const metadata: Metadata = {
  title: "全部指南",
  description:
    "Guts and Blackpowder 所有攻略指南列表，涵盖新手入门、模式攻略、武器指南、敌人图鉴、地图攻略等全方位内容",
};

// Category grouping for all guides
const guideCategories = [
  {
    category: "新手入门",
    tag: "START HERE",
    items: [
      {
        icon: "🌟",
        title: "新手入门",
        description: "从零开始的完整指南，包含基础操作与战斗技巧",
        href: "/beginner-guide",
      },
    ],
  },
  {
    category: "游戏内容",
    tag: "GAME CONTENT",
    items: [
      {
        icon: "🎯",
        title: "模式攻略",
        description: "全部游戏模式深度解析，玩法与策略详解",
        href: "/classes",
      },
      {
        icon: "🔫",
        title: "武器指南",
        description: "多种历史武器详解，搭配推荐用法",
        href: "/weapons",
      },
      {
        icon: "👹",
        title: "敌人图鉴",
        description: "全敌人类型机制解析，轻松应对每个强敌",
        href: "/bosses",
      },
      {
        icon: "🗺️",
        title: "地图攻略",
        description: "经典地图详尽指南，快速上手最新战场",
        href: "/regions",
      },
    ],
  },
  {
    category: "游戏资讯",
    tag: "UPDATES",
    items: [
      {
        icon: "📅",
        title: "游戏信息",
        description: "游戏详情、开发者信息与更新计划一览",
        href: "/release-date",
      },
      {
        icon: "🗺️",
        title: "版本更新",
        description: "完整更新历史与未来内容预览",
        href: "/roadmap",
      },
      {
        icon: "❓",
        title: "常见问题",
        description: "你最关心的问题，这里都有答案",
        href: "/faq",
      },
    ],
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
          >
            全部指南
          </h1>
          <p
            className="font-sans text-base md:text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
          >
            从入门到精通，一站式 Guts and Blackpowder 攻略大全
          </p>
          <div
            className="mt-6 h-0.5 w-16 rounded-full mx-auto"
            style={{ backgroundColor: "#d4af6a" }}
          />
        </div>
      </section>

      {/* Category Sections – Guide Cards Grouped by Category */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {guideCategories.map((group) => (
            <div key={group.category} className="mb-14 last:mb-0">
              {/* Category header */}
              <div className="mb-6">
                <span
                  className="font-sans text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#d4af6a" }}
                >
                  {group.tag}
                </span>
                <h2
                  className="font-serif text-2xl md:text-3xl mt-1"
                  style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
                >
                  {group.category}
                </h2>
                <div
                  className="mt-3 h-0.5 w-12 rounded-full"
                  style={{ backgroundColor: "#d4af6a" }}
                />
              </div>

              {/* Guide cards grid */}
              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <InfoCard
                    key={item.title}
                    icon={item.icon}
                    tag={group.category}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Guides Section */}
      <section
        className="py-14 md:py-20"
        style={{
          borderTop: "1px solid #2a2826",
          borderBottom: "1px solid #2a2826",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10 text-center">
            <span
              className="font-sans text-xs uppercase tracking-[0.2em]"
              style={{ color: "#d4af6a" }}
            >
              FEATURED
            </span>
            <h2
              className="font-serif text-2xl md:text-3xl mt-1"
              style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
            >
              精选指南
            </h2>
            <p
              className="font-sans text-sm mt-3 max-w-xl mx-auto"
              style={{ color: "#8a8884", fontFamily: "Inter, sans-serif" }}
            >
              不容错过的高质量攻略，助你快速上手进阶
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredGuides.map((guide) => (
              <InfoCard
                key={guide.title}
                tag={guide.tag}
                title={guide.title}
                description={guide.description}
                href={guide.href}
              >
                <div className="mt-2">
                  <span
                    className="inline-block font-sans text-xs font-medium"
                    style={{ color: "#d4af6a" }}
                  >
                    查看详情 &rarr;
                  </span>
                </div>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links – All Guides */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-10">
            <span
              className="font-sans text-xs uppercase tracking-[0.2em]"
              style={{ color: "#d4af6a" }}
            >
              QUICK LINKS
            </span>
            <h2
              className="font-serif text-2xl md:text-3xl mt-1"
              style={{ color: "#f0ece4", fontFamily: "Georgia, serif" }}
            >
              快速前往
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <CTALink href="/beginner-guide" variant="secondary">
              新手入门
            </CTALink>
            <CTALink href="/classes" variant="secondary">
              模式攻略
            </CTALink>
            <CTALink href="/weapons" variant="secondary">
              武器指南
            </CTALink>
            <CTALink href="/bosses" variant="secondary">
              敌人图鉴
            </CTALink>
            <CTALink href="/regions" variant="secondary">
              地图攻略
            </CTALink>
            <CTALink href="/release-date" variant="secondary">
              游戏信息
            </CTALink>
            <CTALink href="/roadmap" variant="secondary">
              版本更新
            </CTALink>
            <CTALink href="/faq" variant="secondary">
              常见问题
            </CTALink>
          </div>
        </div>
      </section>
    </div>
  );
}
