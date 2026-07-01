import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { releaseDates, systemRequirements } from "@/lib/data";

export const metadata: Metadata = {
  title: "游戏信息",
  description: "Guts and Blackpowder 游戏详情、开发团队及平台信息",
};

export default function ReleaseDatePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            游戏信息
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            Guts and Blackpowder 是由 Fezezen（Fuze Studios）在 Roblox 平台上开发的拿破仑战争题材游戏，
            自 2021 年上线以来已累计超过 533M+ 游玩次数
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-20">
        {/* 游戏概要 */}
        <section>
          <SectionTitle
            title="游戏概要"
            subtitle="Roblox 平台上的硬核拿破仑战争体验"
            align="left"
          />
          <div
            className="mt-8 rounded-lg p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid #2a2826",
            }}
          >
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-4">
              Guts and Blackpowder 于 2021 年在 Roblox 平台正式上线，由 Fezezen（Fuze Studios）开发。
              游戏以其对拿破仑战争历史的高度还原和硬核的 gameplay 而闻名，在 Roblox 社区中获得了极高的人气。
            </p>
            <p className="text-base leading-relaxed text-[#c8c4bc] mb-4">
              游戏完全免费游玩，内含多种游戏模式（目标模式、无尽模式、对战模式、活动模式）、多张历史战役地图、
              多种历史武器和兵种系统。开发团队持续推出更新，包括新地图、新武器和季节性活动。
            </p>
            <p className="text-base leading-relaxed text-[#c8c4bc]">
              作为 Roblox 上的游戏，Guts and Blackpowder 可以在 PC、手机、平板和 Xbox 等所有 Roblox 支持的平台上运行，
              全平台数据互通，玩家可以随时随地加入战斗。
            </p>
          </div>
        </section>

        {/* 更新时间线表格 */}
        <section>
          <SectionTitle
            title="更新历程"
            subtitle="从首发到现在的完整时间规划"
            align="left"
          />
          <div className="mt-8 overflow-x-auto">
            <table
              className="w-full text-left border-collapse"
              style={{
                border: "1px solid #2a2826",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#0a0815",
                    borderBottom: "2px solid #d4af6a",
                  }}
                >
                  <th
                    className="px-5 py-4 font-serif text-lg text-[#d4af6a]"
                    style={{ borderRight: "1px solid #2a2826" }}
                  >
                    阶段
                  </th>
                  <th
                    className="px-5 py-4 font-serif text-lg text-[#d4af6a]"
                    style={{ borderRight: "1px solid #2a2826" }}
                  >
                    日期
                  </th>
                  <th className="px-5 py-4 font-serif text-lg text-[#d4af6a]">
                    说明
                  </th>
                </tr>
              </thead>
              <tbody>
                {releaseDates.map((item, index) => (
                  <tr
                    key={index}
                    className="transition-colors"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? "rgba(255,255,255,0.02)"
                          : "rgba(255,255,255,0.04)",
                      borderBottom: "1px solid #2a2826",
                    }}
                  >
                    <td
                      className="px-5 py-4 text-[#d4af6a] font-medium whitespace-nowrap"
                      style={{ borderRight: "1px solid #2a2826" }}
                    >
                      {item.phase}
                    </td>
                    <td
                      className="px-5 py-4 text-[#f0ece4] whitespace-nowrap"
                      style={{ borderRight: "1px solid #2a2826" }}
                    >
                      {item.date}
                    </td>
                    <td className="px-5 py-4 text-[#8a8884]">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 系统配置要求 */}
        <section>
          <SectionTitle
            title="系统配置要求"
            subtitle="确保你的设备可以流畅运行 Guts and Blackpowder"
            align="left"
          />
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {systemRequirements.map((req) => (
              <div
                key={req.category}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid #2a2826",
                }}
              >
                <h3
                  className="font-serif text-xl text-[#d4af6a] mb-4 pb-3"
                  style={{ borderBottom: "1px solid #2a2826" }}
                >
                  {req.category}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#d4af6a] mt-1 flex-shrink-0">
                        &#8226;
                      </span>
                      <div>
                        <span className="text-[#8a8884] text-sm">
                          {item.label}：
                        </span>
                        <span className="text-[#f0ece4] text-sm">
                          {item.value}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
