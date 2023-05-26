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
          <ColorList listItems={filterTokens(`eds-color-brand`)} />
        </Section>

        <Section title="Neutral Colors">
          <ColorList listItems={filterTokens(`eds-color-neutral`)} />
        </Section>

        <Section title="Transparent Colors">
          <ColorList listItems={filterTokens(`eds-color-transparent`)} />
        </Section>

        <Section title="Other Colors">
          <ColorList listItems={filterTokens(`eds-color-other-mint`)} />
          <ColorList listItems={filterTokens(`eds-color-other-yellow`)} />
          <ColorList listItems={filterTokens(`eds-color-other-lemon`)} />
          <ColorList listItems={filterTokens(`eds-color-other-orange`)} />
          <ColorList listItems={filterTokens(`eds-color-other-ruby`)} />
        </Section>
      </div>
    );
  }
}
