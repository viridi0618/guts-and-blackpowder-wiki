import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { classes } from "@/lib/data";

export const metadata: Metadata = {
  title: "新手入门",
  description: "Guts and Blackpowder 从零开始的新手完全攻略",
};

export default function BeginnerGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#2a2826]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af6a]/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#f0ece4]">
            新手完全入门指南
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#8a8884] max-w-2xl mx-auto leading-relaxed">
            从零开始的 Guts and Blackpowder 战场指南，无论你是第一次接触 FPS 的新手，
            还是经验丰富的老兵，都能在这里找到实用的指引
          </p>
          <div className="mt-8 mx-auto h-0.5 w-20 rounded-full bg-[#d4af6a]" />
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-4 py-16">
        {/* 导语 */}
        <p className="text-lg leading-relaxed text-[#c8c4bc] mb-16">
          Guts and Blackpowder 的战场硝烟弥漫，对于初来乍到的新兵来说，可能会感到有些不知所措。本攻略将带你从零开始，
          逐步了解这个游戏的一切，从基础操作到进阶技巧，从武器选择到团队配合，助你顺利开启在拿破仑战争中的战斗之旅。
        </p>

        {/* Section 1: 选择你的模式 */}
        <section className="mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl leading-tight mb-6 pl-5"
            style={{
              borderLeft: "3px solid #d4af6a",
              color: "#f0ece4",
            }}
          >
            了解游戏模式
          </h2>
          <p className="text-base leading-relaxed text-[#c8c4bc] mb-6">
            Guts and Blackpowder 目前拥有多种游戏模式，每种模式都有独特的玩法风格和目标。选择适合自己的模式是开始战斗的第一步。
            不必过于纠结——所有模式都能让你体验到拿破仑战争的魅力，关键是要选择你喜欢的玩法风格。
          </p>
          <div className="grid gap-6">
            {classes.map((cls) => (
              <div
                key={cls.id}
                className="rounded-lg p-5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid #2a2826",
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{cls.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-serif text-xl text-[#f0ece4]">{cls.name}</h3>
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "rgba(212,175,106,0.15)",
                          color: "#d4af6a",
                          border: "1px solid rgba(212,175,106,0.3)",
                        }}
                      >
                        {cls.tag}
                      </span>
                      <span className="text-xs text-[#8a8884]">
                        难度: {cls.difficulty} | 评级: {cls.rating}
                      </span>
                    </div>
                    <p className="text-sm text-[#8a8884] mb-2">{cls.shortDescription}</p>
                    <p className="text-sm leading-relaxed text-[#c8c4bc]">{cls.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: 初入战场 */}
        <section className="mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl leading-tight mb-6 pl-5"
            style={{
              borderLeft: "3px solid #d4af6a",
              color: "#f0ece4",
            }}
          >
            初入战场
          </h2>
          <p className="text-base leading-relaxed text-[#c8c4bc] mb-6">
            当你第一次进入 Guts and Blackpowder，会从兵种选择界面开始。以下是你需要了解的基础知识：
          </p>
          <ul className="space-y-3 text-[#c8c4bc]">
            {[
              {
                title: "了解基本控制",
                desc: "WASD 移动，鼠标瞄准和射击，R 键装填弹药。熟练掌握这些基础操作是在战场上生存的第一步。",
              },
              {
                title: "理解装填机制",
                desc: "与大多数现代 FPS 不同，G&B 的火枪装填需要较长时间。每次射击后必须手动装填，而且不能在移动中完成。找到安全的装填位置至关重要。",
              },
              {
                title: "跟随大部队",
                desc: "新手最重要的原则：不要单独行动。与其他玩家保持阵型，集体射击（排枪）的效率远高于单打独斗。",
              },
              {
                title: "熟悉地图地形",
                desc: "每张地图都有独特的布局。了解掩体位置、敌军重生点和目标路线，能让你在战场上更有优势。",
              },
              {
                title: "尝试不同兵种",
                desc: "初期不要急着锁定某一种兵种。多尝试不同的角色，找到最适合自己的战斗风格。",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#d4af6a] mt-1.5 flex-shrink-0">&#8226;</span>
                <div>
                  <span className="text-[#d4af6a] font-medium">{item.title}</span>
                  <span className="text-[#8a8884]"> — {item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 3: 武器与战斗 */}
        <section className="mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl leading-tight mb-6 pl-5"
            style={{
              borderLeft: "3px solid #d4af6a",
              color: "#f0ece4",
            }}
          >
            武器与战斗技巧
          </h2>

          <h3 className="font-serif text-xl text-[#f0ece4] mb-3">火枪使用要领</h3>
          <p className="text-base leading-relaxed text-[#c8c4bc] mb-6">
            Guts and Blackpowder 的核心武器是前装滑膛步枪。与普通射击游戏不同，你需要考虑弹道下坠、装填时间和射击节奏。
            瞄准时稍微抬高准星以补偿远距离弹道下坠，在敌人密集时射击效果最佳。
          </p>

          <h3 className="font-serif text-xl text-[#f0ece4] mb-3">近战战斗</h3>
          <p className="text-base leading-relaxed text-[#c8c4bc] mb-6">
            当弹药耗尽或敌人逼近时，刺刀和佩剑是你最好的朋友。近战攻击一击必杀，但需要准确把握距离和时机。
            冲锋时保持直线前进，利用速度优势快速接近敌人。
          </p>

          <h3 className="font-serif text-xl text-[#f0ece4] mb-3">团队配合</h3>
          <p className="text-base leading-relaxed text-[#c8c4bc] mb-6">
            拿破仑战争的核心是纪律和阵型。与队友站成一排同时开火（齐射）可以瞬间消灭大量敌人。
            听从军官的指挥，保持阵型不被冲散，是取胜的关键。
          </p>
        </section>

        {/* Section 4: 资源与成长 */}
        <section className="mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl leading-tight mb-6 pl-5"
            style={{
              borderLeft: "3px solid #d4af6a",
              color: "#f0ece4",
            }}
          >
            新手建议
          </h2>
          <p className="text-base leading-relaxed text-[#c8c4bc] mb-6">
            以下是一些给新手玩家的实用建议，可以帮助你更快上手：
          </p>
          <ul className="space-y-3 text-[#c8c4bc]">
            {[
              {
                title: "耐心装填",
                desc: "不要慌，每次射击后找安全位置装填。匆忙装填容易出错，反而浪费更多时间。",
              },
              {
                title: "保持阵型",
                desc: "和队友在一起不仅更安全，还能形成火力优势。单独行动很容易被包围消灭。",
              },
              {
                title: "学习地图",
                desc: "熟悉每张地图的布局和热点区域，知道哪里容易遭遇敌人，哪里可以安全装填。",
              },
              {
                title: "善用掩体",
                desc: "墙壁、沙袋、建筑角落都是很好的掩体。利用掩体可以减少受到的伤害。",
              },
              {
                title: "关注目标",
                desc: "不要只顾着杀敌，完成地图目标是取胜的关键。听从团队指挥，优先完成目标。",
              },
              {
                title: "保持冷静",
                desc: "战场上很混乱，但保持冷静的头脑才能做出正确的判断。慌乱中射击的命中率很低。",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#d4af6a] mt-1.5 flex-shrink-0">&#8226;</span>
                <div>
                  <span className="text-[#d4af6a] font-medium">{item.title}</span>
                  <span className="text-[#8a8884]"> — {item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 结尾 */}
        <div
          className="mt-16 pt-8 text-center"
          style={{ borderTop: "1px solid #2a2826" }}
        >
          <p className="text-[#8a8884] text-sm">
            这篇攻略将持续更新，如果你有任何疑问或建议，欢迎通过官方社区渠道反馈。
            祝你在 Guts and Blackpowder 的战场上战斗愉快！
          </p>
        </div>
      </article>
    </div>
  );
}
