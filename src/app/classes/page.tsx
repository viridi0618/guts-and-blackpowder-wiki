import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { classes } from "@/lib/data";

export const metadata: Metadata = {
  title: "游戏模式",
  description: "Guts and Blackpowder 全部游戏模式详解",
};

export default function ClassesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center py-24 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, #d4af6a 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
            style={{ color: "#f0ece4" }}
          >
            游戏模式
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#8a8884" }}
          >
            Guts and Blackpowder 拥有多种各具特色的游戏模式，每种模式都有独特的玩法和目标。
            选择适合你的模式，在拿破仑战争的战场上书写传奇。
          </p>
        </div>
      </section>

      {/* Mode Rating Table */}
      <section className="py-16" style={{ backgroundColor: "#05030c" }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            title="模式评级一览"
            subtitle="基于当前版本的综合体验与上手难度评估"
            align="center"
          />

          <div className="mt-10 overflow-x-auto">
            <table
              className="w-full border-collapse rounded-lg overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <thead>
                <tr style={{ backgroundColor: "#d4af6a" }}>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider" style={{ color: "#05030c" }}>
                    模式
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider" style={{ color: "#05030c" }}>
                    定位
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider" style={{ color: "#05030c" }}>
                    难度
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider" style={{ color: "#05030c" }}>
                    评级
                  </th>
                </tr>
              </thead>
              <tbody>
                {classes.map((cls, index) => (
                  <tr
                    key={cls.id}
                    className="transition-colors"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.06)",
                      borderBottom: "1px solid #2a2826",
                    }}
                  >
                    <td className="px-6 py-4 font-medium flex items-center gap-2" style={{ color: "#f0ece4" }}>
                      <span className="text-xl">{cls.icon}</span>
                      <span>{cls.name}</span>
                    </td>
                    <td className="px-6 py-4" style={{ color: "#8a8884" }}>
                      {cls.role}
                    </td>
                    <td className="px-6 py-4" style={{ color: "#8a8884" }}>
                      {cls.difficulty}
                    </td>
                    <td className="px-6 py-4 font-bold" style={{ color: "#d4af6a" }}>
                      {cls.rating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mode Details */}
      {classes.map((cls, index) => (
        <section
          key={cls.id}
          className="py-16"
          style={{
            backgroundColor:
              index % 2 === 0 ? "#05030c" : "rgba(255,255,255,0.01)",
          }}
        >
          <div className="max-w-5xl mx-auto px-4">
            {/* Mode Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{cls.icon}</span>
              <div>
                <h2
                  className="font-serif text-3xl md:text-4xl leading-tight"
                  style={{ color: "#f0ece4" }}
                >
                  {cls.name}
                </h2>
                <span
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: "#d4af6a" }}
                >
                  {cls.tag}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base leading-relaxed mb-8 max-w-4xl"
              style={{ color: "#8a8884" }}
            >
              {cls.description}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                { label: "定位", value: cls.role },
                { label: "难度", value: cls.difficulty },
                { label: "评级", value: cls.rating },
                { label: "武器类型", value: cls.weaponType },
                { label: "防具", value: cls.armorType },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg p-4"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid #2a2826",
                  }}
                >
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ color: "#8a8884" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "#f0ece4" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Abilities */}
            <div className="mb-8">
              <h3
                className="font-serif text-xl mb-4"
                style={{ color: "#f0ece4" }}
              >
                核心玩法
              </h3>
              <ul className="space-y-2">
                {cls.abilities.map((ability, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "#8a8884" }}
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "#d4af6a" }}
                    />
                    {ability}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Tips */}
            <div
              className="rounded-lg p-5"
              style={{
                border: "1px solid #d4af6a",
                backgroundColor: "rgba(212,175,106,0.05)",
              }}
            >
              <h3
                className="font-serif text-lg mb-2 flex items-center gap-2"
                style={{ color: "#d4af6a" }}
              >
                技巧提示
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#e8d5a3" }}>
                {cls.tips}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
