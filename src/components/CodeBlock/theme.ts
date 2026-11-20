/**
 * LC Codeblock — theme for react-syntax-highlighter (Prism).
 *
 * Drop-in replacement for the `solarizedDarkAtom` import in CodeBlock.tsx.
 * Every color is a `light-dark()` pair of EDS tier-1 primitives; the dark value mirrors the
 * light one across the scale (for example neutral-750 -> neutral-100). The token names are
 * noted per value. Prism applies the theme as inline styles, and `light-dark()` resolves
 * against the page `color-scheme`, which `design-tokens/css/base/body.css` sets from
 * `<html data-theme>` or the operating system preference, like the component stylesheets.
 */
export const base = {
  color: 'light-dark(#3A3A37, #E6E2DE)', // eds-color-neutral-750 / neutral-100
  backgroundColor: 'light-dark(#FFFFFF, #242423)', // eds-color-white / neutral-850
  fontFamily: 'var(--eds-typography-font-family-3)',
  fontSize: '0.875rem',
  lineHeight: '1.6',
  direction: 'ltr',
  textAlign: 'left',
  whiteSpace: 'pre',
  wordSpacing: 'normal',
  wordBreak: 'normal',
  tabSize: 2,
  hyphens: 'none',
};

export default {
  'code[class*="language-"]': { ...base },
  'pre[class*="language-"]': {
    ...base,
    padding: '1rem',
    margin: '0',
    overflow: 'auto',
    borderRadius: 'calc(var(--eds-theme-border-radius-objects-md) * 1px)',
  },

  /* Recessive layer — greyscale only */
  comment: { color: 'light-dark(#6B6A64, #9B9997)', fontStyle: 'italic' }, // eds-color-neutral-550 / neutral-350
  prolog: { color: 'light-dark(#6B6A64, #9B9997)', fontStyle: 'italic' },
  doctype: { color: 'light-dark(#6B6A64, #9B9997)', fontStyle: 'italic' },
  cdata: { color: 'light-dark(#6B6A64, #9B9997)', fontStyle: 'italic' },

  punctuation: { color: 'light-dark(#55554E, #BCB9B6)' }, // eds-color-neutral-650 / neutral-250
  operator: { color: 'light-dark(#55554E, #BCB9B6)' },
  entity: { color: 'light-dark(#55554E, #BCB9B6)' },
  'attr-name': { color: 'light-dark(#55554E, #BCB9B6)' },
  property: { color: 'light-dark(#55554E, #BCB9B6)' },

  /* Default-weight layer — inherits the base text color */
  function: { color: 'light-dark(#3A3A37, #E6E2DE)' }, // eds-color-neutral-750 / neutral-100
  'class-name': { color: 'light-dark(#3A3A37, #E6E2DE)' },
  variable: { color: 'light-dark(#3A3A37, #E6E2DE)' },
  builtin: { color: 'light-dark(#3A3A37, #E6E2DE)' },
  symbol: { color: 'light-dark(#3A3A37, #E6E2DE)' },

  /* Accent layer — green leads; 650 step in light, 250 step in dark */
  string: { color: 'light-dark(#125B3A, #5CCB98)' }, // eds-color-green-650 (== brand-LC-darkGreen) / green-250
  char: { color: 'light-dark(#125B3A, #5CCB98)' },
  'attr-value': { color: 'light-dark(#125B3A, #5CCB98)' },
  regex: { color: 'light-dark(#125B3A, #5CCB98)' },
  url: { color: 'light-dark(#125B3A, #5CCB98)' },

  number: { color: 'light-dark(#6E3A88, #D5A2EE)' }, // eds-color-purple-650 / purple-250
  boolean: { color: 'light-dark(#6E3A88, #D5A2EE)' },
  constant: { color: 'light-dark(#6E3A88, #D5A2EE)' },

  keyword: { color: 'light-dark(#4D63CB, #88BBFA)' }, // eds-color-blue-550 / blue-250
  atrule: { color: 'light-dark(#4D63CB, #88BBFA)' },
  selector: { color: 'light-dark(#4D63CB, #88BBFA)' },
  tag: { color: 'light-dark(#4D63CB, #88BBFA)' },
  rule: { color: 'light-dark(#4D63CB, #88BBFA)' },

  deleted: { color: 'light-dark(#9D1F18, #FF9C99)' }, // eds-color-red-650 / red-250
  important: { color: 'light-dark(#9D1F18, #FF9C99)', fontWeight: 'bold' },
  inserted: { color: 'light-dark(#0E442B, #A1E1C4)' }, // eds-color-green-750 / green-150

  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  namespace: { opacity: 0.7 },
};
