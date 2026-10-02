/**
 * EDIT / FORM — THEME MANAGER
 * Handles Light / Dark theme toggling, system preferences & localStorage
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'editform_theme';
  const THEME_ATTR = 'data-theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute(THEME_ATTR, theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update all theme toggle buttons across the page
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    });

    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  // Initial immediate application before rendering to prevent flash
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Initialize event listeners when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Bind toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = document.documentElement.getAttribute(THEME_ATTR) || 'light';
        const nextTheme = current === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);

        if (window.showToast) {
          window.showToast(`${nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1)} Mode activated`, 'info');
        }
      });
    });

    // Listen to OS theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  });

  window.applyTheme = applyTheme;
})();
