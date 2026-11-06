import { useSyncExternalStore } from 'react';

export type ColorScheme = 'light' | 'dark';

const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)';

/**
 * Reads the page color scheme the same way the EDS stylesheet resolves it: an explicit
 * `data-theme` on `<html>` wins (see `design-tokens/css/base/body.css`), and otherwise the
 * page follows the operating system preference.
 */
function readColorScheme(): ColorScheme {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return 'light';
  }

  const forced = document.documentElement.dataset.theme;
  if (forced === 'light' || forced === 'dark') {
    return forced;
  }

  const prefersDark =
    typeof window.matchMedia === 'function' &&
    window.matchMedia(DARK_SCHEME_QUERY).matches;

  return prefersDark ? 'dark' : 'light';
}

/**
 * Re-reads when either input changes: the OS preference (media query) or the `data-theme`
 * attribute on `<html>`.
 */
function subscribe(onChange: () => void) {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return () => {};
  }

  const mediaQuery =
    typeof window.matchMedia === 'function'
      ? window.matchMedia(DARK_SCHEME_QUERY)
      : undefined;
  mediaQuery?.addEventListener('change', onChange);

  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  return () => {
    mediaQuery?.removeEventListener('change', onChange);
    observer.disconnect();
  };
}

function getServerSnapshot(): ColorScheme {
  return 'light';
}

/**
 * The page's effective color scheme, kept in sync with `<html data-theme>` and the
 * `prefers-color-scheme` media query. Renders as `light` on the server.
 */
export function useColorScheme(): ColorScheme {
  return useSyncExternalStore(subscribe, readColorScheme, getServerSnapshot);
}
