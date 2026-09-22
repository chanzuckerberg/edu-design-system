/**
 * LC Codeblock Light — theme for react-syntax-highlighter (Prism).
 *
 * Drop-in replacement for the `solarizedDarkAtom` import in CodeBlock.tsx.
 * Every color is an EDS tier-1 primitive; the token name is noted per value.
 */
const base = {
  color: '#3A3A37', // eds-color-neutral-750
  background: '#FFFFFF', // eds-color-white
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
  comment: { color: '#6B6A64', fontStyle: 'italic' }, // eds-color-neutral-550
  prolog: { color: '#6B6A64', fontStyle: 'italic' },
  doctype: { color: '#6B6A64', fontStyle: 'italic' },
  cdata: { color: '#6B6A64', fontStyle: 'italic' },

  punctuation: { color: '#55554E' }, // eds-color-neutral-650
  operator: { color: '#55554E' },
  entity: { color: '#55554E' },
  'attr-name': { color: '#55554E' },
  property: { color: '#55554E' },

  /* Default-weight layer — inherits neutral-750 */
  function: { color: '#3A3A37' }, // eds-color-neutral-750
  'class-name': { color: '#3A3A37' },
  variable: { color: '#3A3A37' },
  builtin: { color: '#3A3A37' },
  symbol: { color: '#3A3A37' },

  /* Accent layer — green leads; all at the 650 step */
  string: { color: '#125B3A' }, // eds-color-green-650 (== brand-LC-darkGreen)
  char: { color: '#125B3A' },
  'attr-value': { color: '#125B3A' },
  regex: { color: '#125B3A' },
  url: { color: '#125B3A' },

  number: { color: '#6E3A88' }, // eds-color-purple-650
  boolean: { color: '#6E3A88' },
  constant: { color: '#6E3A88' },

  keyword: { color: '#4D63CB' }, // eds-color-blue-550
  atrule: { color: '#4D63CB' },
  selector: { color: '#4D63CB' },
  tag: { color: '#4D63CB' },
  rule: { color: '#4D63CB' },

  deleted: { color: '#9D1F18' }, // eds-color-red-650
  important: { color: '#9D1F18', fontWeight: 'bold' },
  inserted: { color: '#0E442B' }, // eds-color-green-750

  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  namespace: { opacity: 0.7 },
};
