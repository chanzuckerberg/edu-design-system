import {
  DocsContainer as BaseDocsContainer,
  type DocsContainerProps,
} from '@storybook/addon-docs/blocks';
import React, {
  useEffect,
  useSyncExternalStore,
  type PropsWithChildren,
} from 'react';
import type { Globals } from 'storybook/internal/types';

import { darkTheme, lightTheme } from './Theme';

const darkSchemeQuery = '(prefers-color-scheme: dark)';

function subscribeToColorScheme(onChange: () => void) {
  const mediaQueryList = window.matchMedia(darkSchemeQuery);
  mediaQueryList.addEventListener('change', onChange);
  return () => mediaQueryList.removeEventListener('change', onChange);
}

function usePrefersDarkScheme() {
  return useSyncExternalStore(
    subscribeToColorScheme,
    () => window.matchMedia(darkSchemeQuery).matches,
  );
}

/**
 * Reads the `theme` global set by `@storybook/addon-themes`.
 *
 * `store` isn't part of the public `DocsContextProps` type, and there's no public way to read
 * globals on a docs page without stories. Docs pages re-render on every globals update, so reading
 * it during render stays current.
 */
function getThemeGlobal(context: DocsContainerProps['context']) {
  const { store } = context as {
    store?: { userGlobals?: { globals?: Globals } };
  };
  return store?.userGlobals?.globals?.theme as string | undefined;
}

/**
 * Switches the docs page chrome (background, text, code blocks, controls table) between the light
 * and dark Storybook themes. Follows the toolbar's theme, or the OS setting when none is chosen,
 * which matches how `data-theme` and `color-scheme` resolve for components.
 */
export function DocsContainer({
  children,
  context,
}: PropsWithChildren<DocsContainerProps>) {
  const themeGlobal = getThemeGlobal(context);
  const prefersDarkScheme = usePrefersDarkScheme();
  const isDark = themeGlobal ? themeGlobal === 'dark' : prefersDarkScheme;

  // MDX-only pages render no stories, so the addon-themes decorator never sets `data-theme`.
  useEffect(() => {
    const root = document.documentElement;
    if (themeGlobal) {
      root.dataset.theme = themeGlobal;
    } else {
      delete root.dataset.theme;
    }
  }, [themeGlobal]);

  return (
    <BaseDocsContainer
      context={context}
      theme={isDark ? darkTheme : lightTheme}
    >
      {children}
    </BaseDocsContainer>
  );
}
