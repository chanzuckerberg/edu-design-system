import React, { Component } from 'react';
import '../DesignTokens.css';
import { Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { ColorList } from '../../ColorList/ColorList';

export class Tier1Colors extends Component {
  render() {
    return (
      <div>
        <Section title="Brand Colors">
          {/* TODO(brand-tokens): change back to `eds-color-brand` after old aliases are gone */}
          <ColorList listItems={filterTokens(`eds-color-brand-grape`)} />
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
