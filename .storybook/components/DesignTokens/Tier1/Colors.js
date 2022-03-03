import React, { Component } from 'react';
import '../DesignTokens.css';
import { Section } from '../../../../src';
import { ColorList } from '../../ColorList/ColorList';
import tokens from '../../../data/tokens.json';

export class Tier1Colors extends Component {
  render() {
    return (
      <div>
        <Section title="Brand Colors">
          <ColorList listItems={filterTokens(`eds-color-brand`)} />
        </Section>

        <Section title="Neutral Colors">
          <ColorList listItems={filterTokens(`eds-color-neutral`)} />
        </Section>

        <Section title="Transparent Colors">
          <ColorList listItems={filterTokens(`eds-color-transparent`)} />
        </Section>

        <Section title="Other Colors">
          <ColorList listItems={filterTokens(`eds-color-other`)} />
        </Section>
      </div>
    );
  }
}

function filterTokens(prefix) {
  return Object.entries(tokens)
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, { value, comment }]) => ({
      name: `--${name}`,
      value,
      comment,
    }));
}
