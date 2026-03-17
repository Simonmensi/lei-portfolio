'use client';

import { useState, useEffect } from 'react';
import { setTheme, getTheme, getEffectiveTheme } from '@/src/lib/theme';

/**
 * ThemeToggle Component
 * Provides a button to switch between light, dark, and system themes
 * Persists user preference to localStorage
 */
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    setMounted(true);
    setThemeState(getTheme());
  }, []);

  const toggleTheme = () => {
    const currentTheme = getTheme();
    let newTheme: 'light' | 'dark' | 'system';

    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'system';
    } else {
      newTheme = 'light';
    }

    setTheme(newTheme);
    setThemeState(newTheme);
  };

  if (!mounted) return null;

  const effectiveTheme = getEffectiveTheme();
  const isDark = effectiveTheme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
      aria-label="Toggle theme"
      title={`Current: ${theme}`}
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.122-2.122a4 4 0 00-5.656 5.656l2.122 2.122a4 4 0 005.656-5.656zM9 16.83V19a1 1 0 11-2 0v-2.17a1 1 0 112 0zM16.83 9h2.17a1 1 0 110 2h-2.17a1 1 0 110-2zm2.3-7.3a1 1 0 1-1.414 1.414l1.414-1.414zm2.828 2.828a1 1 0 00-1.414-1.414l1.414 1.414zm0 5.656a1 1 0 111.414-1.414l-1.414 1.414zM9 4.17V2a1 1 0 112 0v2.17a1 1 0 11-2 0z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}
