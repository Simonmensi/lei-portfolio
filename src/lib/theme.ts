/**
 * Theme management utilities for dark mode toggle
 * Handles localStorage persistence and class toggling
 */

export type Theme = 'light' | 'dark' | 'system';

/**
 * Get the current theme from localStorage or system preference
 * @returns The current theme
 */
export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem('theme') as Theme;
  return stored || 'system';
}

/**
 * Set the theme and persist to localStorage
 * @param theme - The theme to set
 */
export function setTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', theme);
  applyTheme(theme);
}

/**
 * Apply the theme to the DOM
 * @param theme - The theme to apply
 */
export function applyTheme(theme: Theme): void {
  const htmlElement = document.documentElement;
  
  if (theme === 'dark') {
    htmlElement.classList.add('dark');
  } else if (theme === 'light') {
    htmlElement.classList.remove('dark');
  } else if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }
}

/**
 * Get the effective theme (resolves 'system' to actual theme)
 * @returns 'light' or 'dark'
 */
export function getEffectiveTheme(): 'light' | 'dark' {
  const theme = getTheme();
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return theme;
}
