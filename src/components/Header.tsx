'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

/**
 * Header Component
 * Navigation bar with links to all main pages and theme toggle
 * Highlights the current active page
 */
export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/lei-portfolio/' },
    { name: 'About', href: '/lei-portfolio/about' },
    { name: 'Projects', href: '/lei-portfolio/projects' },
    { name: 'Contact', href: '/lei-portfolio/contact' },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname === href.replace(/\/$/, '');
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 transition-theme">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/lei-portfolio/" className="text-2xl font-bold text-primary-600 dark:text-accent-400 hover:text-primary-800 dark:hover:text-accent-500 transition-colors">
            Lei Nuozhen
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600 dark:text-accent-400 border-b-2 border-primary-600 dark:border-accent-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
