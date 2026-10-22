/**
 * Chromatic modes for visual regression snapshots.
 *
 * Each key in a story's `parameters.chromatic.modes` is a separate snapshot, with its own baseline.
 * Modes replace the unnamed default snapshot, so a story that only lists `dark` loses its light one.
 *
 * Chromatic errors when a story has both `modes` and the legacy `viewports`, and parameters merge
 * from meta to story, so use `viewportModes` instead of `viewports` everywhere.
 *
 * See: https://www.chromatic.com/docs/modes/
 */

/**
 * Theme modes. `theme` is the `@storybook/addon-themes` global, set up in `.storybook/preview.tsx`.
 */
export const themeModes = {
  light: { theme: 'light' },
  dark: { theme: 'dark' },
} as const;

/**
 * Builds one mode per width, from `chromaticViewports`. Modes are named `<width>px`, which matches
 * what Chromatic names converted legacy `viewports` entries.
 *
 * These set width only. Chromatic keeps its default height (900px).
 */
export function viewportModes(...widths: number[]) {
  return Object.fromEntries(
    widths.map((width) => [`${width}px`, { viewport: width }]),
  );
}

/**
 * Turns off viewport modes a story inherits from its meta. Needed because `modes` merges from
 * meta to story, where the legacy `viewports` array replaced it.
 */
export function disabledViewportModes(...widths: number[]) {
  return Object.fromEntries(
    widths.map((width) => [`${width}px`, { disable: true }]),
  );
}
