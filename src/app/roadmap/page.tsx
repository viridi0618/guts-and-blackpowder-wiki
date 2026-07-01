import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { roadmap } from "@/lib/data";

export const metadata: Metadata = {
  title: "版本更新",
  description: "Guts and Blackpowder 完整更新历史与未来计划",
};

function StatusBadge({ status }: { status: "completed" | "in-progress" | "planned" }) {
  const statusConfig = {
    completed: { label: "已完成", bg: "rgba(34,197,94,0.15)", color: "#22c55e", border: "rgba(34,197,94,0.3)" },
    "in-progress": { label: "进行中", bg: "rgba(212,175,106,0.15)", color: "#d4af6a", border: "rgba(212,175,106,0.3)" },
    planned: { label: "已计划", bg: "rgba(138,136,132,0.15)", color: "#8a8884", border: "rgba(138,136,132,0.3)" },
  };

  const config = statusConfig[status];

  return (
    <span
      className="text-xs px-2.5 py-0.5 rounded-full font-medium"
      style={{
        backgroundColor: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
      }}
    >
      {config.label}
    </span>
  );
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            版本更新
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            Guts and Blackpowder 的完整更新历史与未来计划，包含新地图、新武器、新模式等持续内容更新
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* 导语 */}
        <p className="text-lg leading-relaxed text-[#c8c4bc] mb-16">
          Guts and Blackpowder 自 2021 年上线以来持续更新。开发团队 Fezezen 不断推出新地图、新武器和新的游戏模式，
          同时根据社区反馈持续优化游戏体验。以下是完整的更新历史与未来规划，所有内容和时间节点可能会根据开发进度和
          玩家反馈进行调整。
        </p>

        {/* 垂直时间线 */}
        <div className="relative">
          {/* 连接线 */}
          <div
            className="absolute left-[19px] top-3 bottom-3 w-0.5 hidden md:block"
            style={{ backgroundColor: "#2a2826" }}
          />

          <div className="space-y-10">
            {roadmap.map((phase, index) => (
              <div key={index} className="relative md:pl-14">
                {/* 时间线节点 */}
                <div
                  className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full items-center justify-center border-2 z-10"
                  style={{
                    backgroundColor: "#05030c",
                    borderColor:
                      phase.status === "completed"
                        ? "#22c55e"
                        : phase.status === "in-progress"
                          ? "#d4af6a"
                          : "#2a2826",
                  }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{
                      color:
                        phase.status === "completed"
                          ? "#22c55e"
                          : phase.status === "in-progress"
                            ? "#d4af6a"
                            : "#8a8884",
                    }}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* 卡片 */}
                <div
                  className="rounded-lg p-6 md:p-8"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: `1px solid ${
                      phase.status === "in-progress" ? "rgba(212,175,106,0.3)" : "#2a2826"
                    }`,
                  }}
                >
                  {/* 头部：阶段名 + 状态 */}
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs uppercase tracking-[0.15em] text-[#8a8884]">
                      {phase.phase}
                    </span>
                    <StatusBadge status={phase.status} />
                  </div>

                  {/* 标题 */}
                  <h3
                    className="font-serif text-2xl md:text-3xl text-[#f0ece4] mb-4"
                  >
                    {phase.title}
                  </h3>

                  {/* 项目列表 */}
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#c8c4bc]">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{
                            backgroundColor:
                              phase.status === "completed"
                                ? "#22c55e"
                                : phase.status === "in-progress"
                                  ? "#d4af6a"
                                  : "#8a8884",
                          }}
                        />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部说明 */}
        <div
          className="mt-16 pt-8 text-center"
          style={{ borderTop: "1px solid #2a2826" }}
        >
          <p className="text-[#8a8884] text-sm">
            * 路线图内容和时间节点可能根据开发进度和社区反馈进行调整
          </p>
          <p className="text-[#8a8884] text-sm mt-1">
            最新动态请关注 Roblox 游戏页面及官方 Discord 频道
          </p>
        </div>
      </div>
    </div>
  );
}
