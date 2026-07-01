import { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import InfoCard from '@/components/InfoCard';
import { bosses, dungeons } from '@/lib/data';

export const metadata: Metadata = {
  title: '敌人图鉴',
  description: 'Guts and Blackpowder 全敌人类型机制解析与应对攻略',
};

export default function BossesPage() {
  const normalBosses = bosses.filter((b) => b.type === 'normal');
  const worldBosses = bosses.filter((b) => b.type === 'world');

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero Banner */}
      <section className="mb-20 text-center">
        <SectionTitle
          tag="Enemies"
          title="敌人图鉴"
          subtitle="Guts and Blackpowder 全敌人类型机制解析与应对攻略，助你战胜每一个强敌"
        />
      </section>

      {/* Normal Enemies Table */}
      <section className="mb-20">
        <SectionTitle
          tag="Normal Enemies"
          title="普通敌人"
          subtitle="地图中的主要敌人类型，击败后可获得重要奖励"
          align="left"
        />
        <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gold">
                <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                  敌人名称
                </th>
                <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                  位置
                </th>
                <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                  等级
                </th>
                <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                  描述
                </th>
              </tr>
            </thead>
            <tbody>
              {normalBosses.map((boss, i) => (
                <tr
                  key={i}
                  className="border-t border-[#2a2826] transition-colors hover:bg-card-hover"
                  style={{
                    backgroundColor:
                      i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.06)',
                  }}
                >
                  <td className="px-5 py-4 font-serif text-base text-gold whitespace-nowrap">
                    {boss.name}
                  </td>
                  <td className="px-5 py-4 font-sans text-sm text-foreground whitespace-nowrap">
                    {boss.location}
                  </td>
                  <td className="px-5 py-4 font-sans text-sm text-foreground whitespace-nowrap">
                    {boss.level}
                  </td>
                  <td className="px-5 py-4 font-sans text-sm" style={{ color: '#8a8884' }}>
                    {boss.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Special Enemies Table */}
      <section className="mb-20">
        <SectionTitle
          tag="Special Enemies"
          title="特殊敌人"
          subtitle="在特定模式或地图中出现的精英级敌人，需要团队合作讨伐"
          align="left"
        />
        <div className="mt-8 overflow-x-auto rounded-lg border border-[#2a2826]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gold">
                <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                  敌人名称
                </th>
                <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                  位置
                </th>
                <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                  等级
                </th>
                <th className="px-5 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-widest text-background">
                  描述
                </th>
              </tr>
            </thead>
            <tbody>
              {worldBosses.map((boss, i) => (
                <tr
                  key={i}
                  className="border-t border-[#2a2826] transition-colors hover:bg-card-hover"
                  style={{
                    backgroundColor:
                      i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.06)',
                  }}
                >
                  <td className="px-5 py-4 font-serif text-base text-gold whitespace-nowrap">
                    {boss.name}
                  </td>
                  <td className="px-5 py-4 font-sans text-sm text-foreground whitespace-nowrap">
                    {boss.location}
                  </td>
                  <td className="px-5 py-4 font-sans text-sm text-foreground whitespace-nowrap">
                    {boss.level}
                  </td>
                  <td className="px-5 py-4 font-sans text-sm" style={{ color: '#8a8884' }}>
                    {boss.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Battlefields Section */}
      <section>
        <SectionTitle
          tag="Battlefields"
          title="主要战场"
          subtitle="Guts and Blackpowder 中的各个战场，每个都包含独特的挑战和丰厚的奖励"
          align="left"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {dungeons.map((dungeon, i) => (
            <InfoCard
              key={i}
              tag={dungeon.level}
              title={dungeon.name}
              description={dungeon.description}
            >
              <div className="flex flex-col gap-3 pt-3 border-t border-[#2a2826]">
                {/* Enemy List */}
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold">
                    主要敌人
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {dungeon.bosses.map((boss, j) => (
                      <span
                        key={j}
                        className="inline-block font-sans text-xs px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: 'rgba(212, 175, 106, 0.15)',
                          color: '#d4af6a',
                        }}
                      >
                        {boss}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Rewards */}
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold">
                    奖励
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {dungeon.rewards.map((reward, j) => (
                      <span
                        key={j}
                        className="inline-block font-sans text-xs px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: 'rgba(94, 226, 216, 0.15)',
                          color: '#5ee2d8',
                        }}
                      >
                        {reward}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </InfoCard>
          ))}
        </div>
      </section>
    </div>
  );
}
