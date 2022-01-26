import { addons } from "@storybook/addons"; // eslint-disable-line import/no-extraneous-dependencies

addons.setConfig({
  sidebar: {
    // Show top-level directories (under components/src) as directories instead of separate
    // sections. It's a little nicer seeing them as directories instead of their own sections.
    // We only need this when auto-generating story titles. If we supply our own titles, we should
    // delete this config.
    showRoots: false,
  },
});
