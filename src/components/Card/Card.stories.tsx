import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta } from '@storybook/react';
import React from 'react';

import { Card } from './Card';
import CardBody from '../CardBody';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';

export default {
  title: 'Molecules/Blocks/Card',
  component: Card,
  subcomponents: { CardHeader, CardBody, CardFooter },
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
    badges: [BADGE.BETA],
  },
} as Meta;

export const Default = () => (
  <Card>
    <Card.Header>
      <div className="fpo">Card Header</div>
    </Card.Header>
    <Card.Body>
      <div className="fpo">Card Body</div>
    </Card.Body>
    <Card.Footer>
      <div className="fpo">Card Footer</div>
    </Card.Footer>
  </Card>
);

export const Inverted = () => (
  <div style={{ backgroundColor: 'black', padding: '1rem' }}>
    <Card inverted={true}>
      <Card.Header>
        <div className="fpo">Card Header</div>
      </Card.Header>
      <Card.Body>
        <div className="fpo">Card Body</div>
      </Card.Body>
      <Card.Footer>
        <div className="fpo">Card Footer</div>
      </Card.Footer>
    </Card>
  </div>
);
