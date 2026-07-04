import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import CTALink from "@/components/CTALink";
import FAQAccordion from "@/components/FAQAccordion";
import {
  gameData,
  classes,
  regions,
  journeys,
  tools,
  featuredGuides,
  news,
  faqs,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Guts and Blackpowder Wiki — PvE Zombie Survival Guide, Maps & Weapons",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Guts and Blackpowder Wiki",
    description:
      "Guts and Blackpowder 中文攻略站，提供完整的游戏模式攻略、武器指南、敌人图鉴、地图攻略、新手入门等全方位内容",
    applicationCategory: "GameApplication",
    operatingSystem: "Web",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212,175,106,0.08) 0%, transparent 60%), linear-gradient(180deg, #05030c 0%, #0a0720 30%, #05030c 100%)",
          }}
        />

        {/* Gold glow decoration */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,106,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <span
            className="inline-block text-xs font-medium tracking-[0.2em] uppercase mb-6"
            style={{ color: "#d4af6a" }}
          >
            Guts and Blackpowder Wiki
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            {gameData.heroTitle}
          </h1>

          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#8a8884" }}
          >
            {gameData.heroSubtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <CTALink
              href="https://www.roblox.com/games/5048655205"
              variant="primary"
              external
            >
              在 Roblox 上游玩
            </CTALink>
            <CTALink href="/beginner-guide" variant="secondary">
              新手入门
            </CTALink>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {gameData.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-4 text-center transition-all duration-300 hover:border-[#d4af6a]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid #2a2826",
                }}
              >
                <div
                  className="text-xl md:text-2xl font-bold mb-1"
                  style={{ color: "#d4af6a" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs md:text-sm"
                  style={{ color: "#8a8884" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. GAME INTRO ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            tag="关于游戏"
            title="Guts and Blackpowder"
            align="left"
          />
          <div className="grid md:grid-cols-5 gap-8 mt-10">
            <div className="md:col-span-3">
              <p
                className="text-base leading-relaxed"
                style={{ color: "#f0ece4" }}
              >
                {gameData.description}
              </p>
            </div>
            <div
              className="md:col-span-2 rounded-lg p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid #2a2826",
              }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: "#d4af6a" }}
              >
                Quick Facts
              </h3>
              <div className="space-y-3">
                {gameData.quickFacts.map((fact) => (
                  <div key={fact.label} className="flex justify-between text-sm">
                    <span style={{ color: "#8a8884" }}>{fact.label}</span>
                    <span style={{ color: "#f0ece4" }}>{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. GAME MODES SECTION (原CLASSES) ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle tag="四大模式" title="选择你的战场" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {classes.map((cls) => (
              <InfoCard
                key={cls.id}
                icon={cls.icon}
                tag={cls.tag}
                title={cls.name}
                description={cls.shortDescription}
                href="/classes"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. MAPS SECTION (原REGIONS) ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle tag="经典地图" title="探索历史战场" />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {regions.map((region) => (
              <InfoCard
                key={region.id}
                tag={`${region.tag} · ${region.levelRange}`}
                title={region.name}
                description={region.description}
                href="/regions"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. JOURNEYS SECTION ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle tag="开始你的旅程" title="从这里出发" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {journeys.map((journey) => (
              <InfoCard
                key={journey.title}
                icon={journey.icon}
                title={journey.title}
                description={journey.description}
                href={journey.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. TOOLS SECTION ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle tag="工具与排行榜" title="实用工具" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {tools.map((tool) => (
              <InfoCard
                key={tool.title}
                icon={tool.icon}
                tag={tool.tag}
                title={tool.title}
                description={tool.description}
                href={tool.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. GUIDES SECTION ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle tag="精选指南" title="攻略精选" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
                    className="text-xs font-medium"
                    style={{ color: "#d4af6a" }}
                  >
                    阅读更多 &rarr;
                  </span>
                </div>
              </InfoCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTALink href="/guides" variant="secondary">
              查看全部指南
            </CTALink>
          </div>
        </div>
      </section>

      {/* ===== 8. NEWS SECTION ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle tag="最新动态" title="资讯" />
          <div className="mt-10 relative">
            {/* Timeline line */}
            <div
              className="absolute left-[100px] md:left-[140px] top-0 bottom-0 w-px"
              style={{ backgroundColor: "#2a2826" }}
            />
            <div className="space-y-8">
              {news.map((item) => (
                <div key={item.date} className="relative flex items-start gap-6">
                  {/* Date */}
                  <div
                    className="w-[90px] md:w-[130px] text-right flex-shrink-0 pt-1"
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#d4af6a" }}
                    >
                      {item.date}
                    </span>
                  </div>
                  {/* Timeline dot */}
                  <div
                    className="relative z-10 w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: "#d4af6a" }}
                  />
                  {/* Content */}
                  <p className="text-sm leading-relaxed pt-0.5">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. FAQ SECTION ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle tag="常见问题" title="你需要知道的" />
          <div className="mt-10">
            <FAQAccordion faqs={faqs.slice(0, 5)} />
          </div>
          <div className="text-center mt-10">
            <CTALink href="/faq" variant="secondary">
              查看全部FAQ
            </CTALink>
          </div>
        </div>
      </section>

      {/* ===== 10. FINAL CTA ===== */}
      <section className="py-24">
        <div
          className="max-w-4xl mx-auto px-4 text-center rounded-xl py-16"
          style={{ backgroundColor: "#d4af6a" }}
        >
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: "#05030c" }}
          >
            准备好加入战场了吗？
          </h2>
          <p
            className="text-base mb-8 max-w-lg mx-auto"
            style={{ color: "#2a2826" }}
          >
            加入 Guts and Blackpowder 的世界，选择你的战场，使用历史武器，在拿破仑战争中成为传奇。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.roblox.com/games/5048655205"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: "#05030c",
                color: "#f0ece4",
              }}
            >
              在 Roblox 上游玩
            </a>
            <a
              href="/beginner-guide"
              className="inline-block rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 hover:opacity-90"
              style={{
                border: "2px solid #05030c",
                color: "#05030c",
              }}
            >
              新手入门
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
