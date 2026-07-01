import Link from 'next/link';

const footerColumns = [
  {
    title: '指南',
    links: [
      { label: '新手入门', href: '/guides/newbie' },
      { label: '模式攻略', href: '/guides/modes' },
      { label: '敌人图鉴', href: '/guides/enemies' },
      { label: '武器指南', href: '/guides/weapons' },
    ],
  },
  {
    title: '资源',
    links: [
      { label: '地图攻略', href: '/regions' },
      { label: '游戏信息', href: '/guides/release' },
      { label: '版本更新', href: '/guides/roadmap' },
      { label: '常见问题', href: '/guides/faq' },
    ],
  },
  {
    title: '实时工具',
    links: [
      { label: '兵种强度排行', href: '/tools/class-tier' },
      { label: '武器推荐配置', href: '/tools/weapon-builds' },
      { label: '全敌人图鉴', href: '/tools/enemy-encyclopedia' },
      { label: '新手入坑指南', href: '/guides/newbie' },
    ],
  },
  {
    title: '长尾指南',
    links: [
      { label: '游戏简介', href: '/about/game' },
      { label: '系统配置', href: '/about/system-requirements' },
      { label: '关于我们', href: '/about' },
      { label: '更新日志', href: '/changelog' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#05030c] border-t border-[#2a2826]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main grid: 5 columns, collapses to 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1-4: Link sections */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#d4af6a] mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#8a8884] hover:text-[#f0ece4] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Copyright / Brand info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#d4af6a] mb-4">
              版权信息
            </h3>
            <div className="space-y-2">
              <p className="text-base font-semibold text-[#f0ece4]">
                Guts and Blackpowder Wiki
              </p>
              <p className="text-sm text-[#8a8884] leading-relaxed">
                本站为Guts and Blackpowder玩家提供最全面的游戏攻略、模式分析、武器评测及敌人图鉴指南。
              </p>
              <p className="text-xs text-[#8a8884] pt-2">
                &copy; {new Date().getFullYear()} G&B Wiki. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
