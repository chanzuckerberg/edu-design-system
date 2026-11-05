/**
 * LC Codeblock Dark — theme for react-syntax-highlighter (Prism).
 *
 * Counterpart to the light theme in `theme.ts`. `CodeBlock` picks between the two from the
 * page color scheme. Every color is an EDS tier-1 primitive that mirrors its light value
 * across the scale (for example neutral-750 -> neutral-100); the token name is noted per
 * value. The non-color layout values are shared with the light theme.
 */
import { base as lightBase } from './theme';

const base = {
  ...lightBase,
  color: '#E6E2DE', // eds-color-neutral-100
  background: '#242423', // eds-color-neutral-850
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
  comment: { color: '#9B9997', fontStyle: 'italic' }, // eds-color-neutral-350
  prolog: { color: '#9B9997', fontStyle: 'italic' },
  doctype: { color: '#9B9997', fontStyle: 'italic' },
  cdata: { color: '#9B9997', fontStyle: 'italic' },

  punctuation: { color: '#BCB9B6' }, // eds-color-neutral-250
  operator: { color: '#BCB9B6' },
  entity: { color: '#BCB9B6' },
  'attr-name': { color: '#BCB9B6' },
  property: { color: '#BCB9B6' },

  /* Default-weight layer — inherits neutral-100 */
  function: { color: '#E6E2DE' }, // eds-color-neutral-100
  'class-name': { color: '#E6E2DE' },
  variable: { color: '#E6E2DE' },
  builtin: { color: '#E6E2DE' },
  symbol: { color: '#E6E2DE' },

  /* Accent layer — green leads; all at the 250 step */
  string: { color: '#5CCB98' }, // eds-color-green-250
  char: { color: '#5CCB98' },
  'attr-value': { color: '#5CCB98' },
  regex: { color: '#5CCB98' },
  url: { color: '#5CCB98' },

  number: { color: '#D5A2EE' }, // eds-color-purple-250
  boolean: { color: '#D5A2EE' },
  constant: { color: '#D5A2EE' },

  keyword: { color: '#88BBFA' }, // eds-color-blue-250
  atrule: { color: '#88BBFA' },
  selector: { color: '#88BBFA' },
  tag: { color: '#88BBFA' },
  rule: { color: '#88BBFA' },

  deleted: { color: '#FF9C99' }, // eds-color-red-250
  important: { color: '#FF9C99', fontWeight: 'bold' },
  inserted: { color: '#A1E1C4' }, // eds-color-green-150

  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  namespace: { opacity: 0.7 },
};
