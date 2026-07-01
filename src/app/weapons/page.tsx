import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { weaponTypes, classWeaponMap, recommendedWeapons } from "@/lib/data";

export const metadata: Metadata = {
  title: "武器指南",
  description: "Guts and Blackpowder 多种历史武器详解",
};

export default function WeaponsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex items-center justify-center py-24 md:py-32 overflow-hidden">
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
            武器指南
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#8a8884" }}
          >
            Guts and Blackpowder 拥有多种各具特色的历史武器，武器选择将决定你的战斗风格。
            了解每种武器的特性，搭配适合的兵种，将在战场上决定你的生死。
          </p>
        </div>
      </section>

      {/* Weapon System Introduction */}
      <section className="py-16" style={{ backgroundColor: "#05030c" }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            title="武器系统简介"
            subtitle="历史武器是 Guts and Blackpowder 战斗系统的核心"
            align="center"
          />

          <div className="mt-10 max-w-3xl mx-auto">
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#8a8884" }}
            >
              在 Guts and Blackpowder 中，武器精确还原了拿破仑战争时期的真实装备。
              从前装滑膛步枪到军官佩剑，每种武器都有独特的装填速度、伤害和射程特性。
              选择合适的武器能让你的战斗效率得到最大程度的发挥。
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#8a8884" }}
            >
              不同兵种可以使用的武器各有不同。线列步兵使用标准步枪，轻步兵可使用精度更高的线膛步枪，
              军官则配备佩剑和喇叭指挥作战。建议根据兵种特点和个人喜好来选择最适合自己的武器配置。
            </p>
          </div>
        </div>
      </section>

      {/* Weapon Types Table */}
      <section
        className="py-16"
        style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            title="武器类型一览"
            subtitle="多种武器类型及其适用模式"
            align="center"
          />

          <div className="mt-10 overflow-x-auto">
            <table
              className="w-full border-collapse rounded-lg overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <thead>
                <tr style={{ backgroundColor: "#d4af6a" }}>
                  <th
                    className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider"
                    style={{ color: "#05030c" }}
                  >
                    武器名称
                  </th>
                  <th
                    className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider"
                    style={{ color: "#05030c" }}
                  >
                    描述
                  </th>
                  <th
                    className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider"
                    style={{ color: "#05030c" }}
                  >
                    可用模式
                  </th>
                </tr>
              </thead>
              <tbody>
                {weaponTypes.map((weapon, index) => (
                  <tr
                    key={weapon.name}
                    className="transition-colors"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.06)",
                      borderBottom: "1px solid #2a2826",
                    }}
                  >
                    <td
                      className="px-6 py-4 font-medium whitespace-nowrap"
                      style={{ color: "#f0ece4" }}
                    >
                      {weapon.name}
                    </td>
                    <td className="px-6 py-4" style={{ color: "#8a8884" }}>
                      {weapon.description}
                    </td>
                    <td className="px-6 py-4" style={{ color: "#8a8884" }}>
                      <div className="flex flex-wrap gap-2">
                        {weapon.classes.map((cls) => (
                          <span
                            key={cls}
                            className="inline-block text-xs px-2 py-0.5 rounded"
                            style={{
                              backgroundColor: "rgba(212,175,106,0.15)",
                              color: "#d4af6a",
                              border: "1px solid rgba(212,175,106,0.3)",
                            }}
                          >
                            {cls}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mode-Weapon Compatibility */}
      <section className="py-16" style={{ backgroundColor: "#05030c" }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            title="模式武器适配"
            subtitle="各游戏模式可使用的武器类型一览"
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {classWeaponMap.map((entry) => (
              <div
                key={entry.class}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid #2a2826",
                }}
              >
                <h3
                  className="font-serif text-xl mb-3"
                  style={{ color: "#f0ece4" }}
                >
                  {entry.class}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {entry.weapons.map((weapon) => (
                    <span
                      key={weapon}
                      className="inline-block text-sm px-3 py-1 rounded"
                      style={{
                        backgroundColor: "rgba(212,175,106,0.1)",
                        color: "#e8d5a3",
                        border: "1px solid rgba(212,175,106,0.25)",
                      }}
                    >
                      {weapon}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Weapons */}
      <section
        className="py-16"
        style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            title="推荐武器"
            subtitle="当前版本推荐武器列表"
            align="center"
          />

          <div className="mt-10 overflow-x-auto">
            <table
              className="w-full border-collapse rounded-lg overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <thead>
                <tr style={{ backgroundColor: "#d4af6a" }}>
                  {[
                    "武器名称",
                    "类型",
                    "适用",
                    "伤害",
                    "速度",
                    "射程",
                    "说明",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-4 py-4 text-left font-semibold text-sm uppercase tracking-wider whitespace-nowrap"
                      style={{ color: "#05030c" }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recommendedWeapons.map((weapon, index) => (
                  <tr
                    key={weapon.name}
                    className="transition-colors"
                    style={{
                      backgroundColor:
                        index % 2 === 0
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(255,255,255,0.06)",
                      borderBottom: "1px solid #2a2826",
                    }}
                  >
                    <td
                      className="px-4 py-4 font-medium whitespace-nowrap"
                      style={{ color: "#f0ece4" }}
                    >
                      {weapon.name}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap" style={{ color: "#8a8884" }}>
                      {weapon.type}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap" style={{ color: "#d4af6a" }}>
                      {weapon.class}
                    </td>
                    <td
                      className="px-4 py-4 text-center font-mono"
                      style={{
                        color:
                          weapon.damage === "S"
                            ? "#d4af6a"
                            : weapon.damage === "A"
                              ? "#5ee2d8"
                              : "#8a8884",
                      }}
                    >
                      {weapon.damage}
                    </td>
                    <td
                      className="px-4 py-4 text-center font-mono"
                      style={{
                        color:
                          weapon.speed === "S"
                            ? "#d4af6a"
                            : weapon.speed === "A"
                              ? "#5ee2d8"
                              : "#8a8884",
                      }}
                    >
                      {weapon.speed}
                    </td>
                    <td className="px-4 py-4 text-center" style={{ color: "#8a8884" }}>
                      {weapon.range}
                    </td>
                    <td className="px-4 py-4 text-sm" style={{ color: "#8a8884" }}>
                      {weapon.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
