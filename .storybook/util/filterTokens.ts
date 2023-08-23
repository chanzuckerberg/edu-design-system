import tokens from '../data/tokens.json';

const recurseToPrimaryValue: (value: string) => string = (value) => {
  if (value.startsWith('var(--eds')) {
    return recurseToPrimaryValue(
      tokens[value.slice(6, -1) as keyof typeof tokens],
    );
  }
  return value;
};

export default function filterTokens(prefix: string) {
  return Object.entries(tokens)
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, value]) => ({
      name: `--${name}`,
      value: recurseToPrimaryValue(value),
    }));
}
