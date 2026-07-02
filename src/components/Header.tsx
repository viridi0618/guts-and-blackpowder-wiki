'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Maps', href: '/maps' },
  { label: 'Weapons', href: '/weapons' },
  { label: 'Enemies', href: '/enemies' },
  { label: 'Guides', href: '/guides' },
  {
    label: 'More',
    href: '/guides',
    submenu: [
      { label: 'Wiki', href: '/wiki' },
      { label: 'Commands', href: '/commands' },
      { label: 'Badges', href: '/badges' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#05030c] shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Site Title */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wider text-[#f0ece4] hover:text-[#d4af6a] transition-colors duration-200"
          >
            G&B Wiki
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-[#f0ece4] hover:text-[#d4af6a] transition-colors duration-200 rounded-md hover:bg-white/5"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-44 bg-[#05030c] border border-[#2a2826] rounded-md shadow-xl py-2 z-50">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-[#f0ece4] hover:text-[#d4af6a] hover:bg-white/5 transition-colors duration-200"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-[#f0ece4] hover:text-[#d4af6a] transition-colors duration-200 rounded-md hover:bg-white/5"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-[#f0ece4] hover:text-[#d4af6a] transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#05030c]/98 backdrop-blur-md transition-all duration-300 md:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 px-6">
          {navLinks.map((link) =>
            link.submenu ? (
              <div key={link.label} className="w-full max-w-xs text-center">
                <button
                  className="flex items-center justify-center gap-1 w-full py-3 text-lg text-[#f0ece4] hover:text-[#d4af6a] transition-colors duration-200"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    dropdownOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={closeMobile}
                      className="block py-2 text-base text-[#8a8884] hover:text-[#d4af6a] transition-colors duration-200"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="text-lg text-[#f0ece4] hover:text-[#d4af6a] transition-colors duration-200"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
