import tokensData from '../data/tokens-data.json';
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
  return Object.entries(tokensData)
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, valueObj]) => ({
      name: `--${name}`,
      value: recurseToPrimaryValue(valueObj.value),
      data: valueObj,
    }));
}
