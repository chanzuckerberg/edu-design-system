const variableTokens = require("@chanzuckerberg/eds-tokens/json/css-variables-nested.json");
const staticTokens = require("@chanzuckerberg/eds-tokens/json/variables-nested.json");
module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      ...variableTokens.eds.color,
    },
    fontFamily: {
      arimo: "Arimo, sans-serif",
    },
    fontSize: {
      // provide values for both font-size and line-height
      body: [
        staticTokens.legacy.size.font.body,
        staticTokens.legacy.size["line-height"].body,
      ],
      h1: [
        staticTokens.legacy.size.font.h1,
        staticTokens.legacy.size["line-height"].h1,
      ],
      h2: [
        staticTokens.legacy.size.font.h2,
        staticTokens.legacy.size["line-height"].body,
      ],
      h3: [
        staticTokens.legacy.size.font.body,
        staticTokens.legacy.size["line-height"].body,
      ],
      h4: [
        staticTokens.legacy.size.font.sm,
        staticTokens.legacy.size["line-height"].body,
      ],
      h5: [
        staticTokens.legacy.size.font.xs,
        staticTokens.legacy.size["line-height"].sm,
      ],
      sm: [
        staticTokens.legacy.size.font.sm,
        staticTokens.legacy.size["line-height"].sm,
      ],
      xs: [
        staticTokens.legacy.size.font.xs,
        staticTokens.legacy.size["line-height"].xs,
      ],
      caption: [
        staticTokens.legacy.size.font.xs,
        staticTokens.legacy.size["line-height"].sm,
      ],
    },
    extend: {
      lineHeight: staticTokens.legacy.size["line-height"],
      maxWidth: {
        100: "25rem",
      },
      padding: {
        18: "4.5rem",
      },
      // Adding custom shadows based on numbers rather than sm/md/lg
      boxShadow: {
        0: "0px 0px 0px 1px var(--eds-color-neutral-200)",
        1: "0px 0px 0px 1px var(--eds-color-neutral-200), 0px 2px 3px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.08)",
        2: "0px 0px 0px 1px var(--eds-color-neutral-200), 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        3: "0px 0px 0px 1px var(--eds-color-neutral-200), 0px 16px 20px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      transitionTimingFunction: {
        // Used for Toast animations, referenced from
        //https://github.com/timolins/react-hot-toast/blob/main/src/components/toast-bar.tsx
        "slide-in": "cubic-bezier(0.21, 1.02, 0.73, 1)",
        "slide-out": "cubic-bezier(0.06, 0.71, 0.55, 1)",
      },
    },
  },
  variants: {
    animation: ["motion-safe", "motion-reduce"],
    transitionProperty: ["motion-safe", "motion-reduce"],
  },
  plugins: [],
};
