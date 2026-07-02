import Link from 'next/link';

const footerColumns = [
  {
    title: 'Guides',
    links: [
      { label: 'Maps', href: '/maps' },
      { label: 'Weapons', href: '/weapons' },
      { label: 'Enemies', href: '/enemies' },
      { label: 'Commands', href: '/commands' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Wiki', href: '/wiki' },
      { label: 'Badges', href: '/badges' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Francs Guide', href: '/guides/francs' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Play on Roblox', href: 'https://www.roblox.com/games/5048655205' },
      { label: 'Discord', href: 'https://discord.gg/gutsandblackpowder' },
      { label: 'Trello Board', href: 'https://trello.com/b/ygxvBipE/guts-blackpowder' },
      { label: 'Twitter / X', href: 'https://x.com/FuzeStudios' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Barry Guide', href: '/guides/barry' },
      { label: 'Server Status', href: 'https://discord.gg/gutsandblackpowder' },
      { label: 'Tier List', href: '/guides' },
      { label: 'About', href: '/' },
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
              About
            </h3>
            <div className="space-y-2">
              <p className="text-base font-semibold text-[#f0ece4]">
                Guts and Blackpowder Wiki
              </p>
              <p className="text-sm text-[#8a8884] leading-relaxed">
                The complete community wiki for Guts and Blackpowder — a Roblox PvE zombie survival game set during the Napoleonic Wars.
              </p>
              <p className="text-xs text-[#8a8884] pt-2">
                &copy; {new Date().getFullYear()} G&B Wiki. Not affiliated with Roblox or Fuze Studios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
