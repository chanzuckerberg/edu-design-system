import tokens from '../data/tokens.json';

export default function filterTokens(prefix: string) {
  return Object.entries(tokens)
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, value]) => ({
      name: `--${name}`,
      value,
    }));
}
