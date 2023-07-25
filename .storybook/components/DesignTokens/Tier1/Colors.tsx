import React from 'react';
import '../DesignTokens.css';
import { Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { ColorList } from '../../ColorList/ColorList';

export const Tier1Colors = () => (
  <div>
    <Section title="Brand Colors">
      <ColorList listItems={filterTokens(`eds-color-brand`)} />
    </Section>

    <Section title="Neutral Colors">
      <ColorList listItems={filterTokens(`eds-color-neutral`)} />
    </Section>

    <Section title="Other Colors">
      <ColorList listItems={filterTokens(`eds-color-other-mint`)} />
      <div className="p-3"></div>
      <ColorList listItems={filterTokens(`eds-color-other-yellow`)} />
      <div className="p-3"></div>
      <ColorList listItems={filterTokens(`eds-color-other-lemon`)} />
      <div className="p-3"></div>
      <ColorList listItems={filterTokens(`eds-color-other-orange`)} />
      <div className="p-3"></div>
      <ColorList listItems={filterTokens(`eds-color-other-ruby`)} />
    </Section>
  </div>
);
