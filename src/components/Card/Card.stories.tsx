import { Meta } from '@storybook/react';

import { Card } from './Card';
import { CardHeader } from '../CardHeader/CardHeader';
import { CardBody } from '../CardBody/CardBody';
import { CardFooter } from '../CardFooter/CardFooter';
import { Heading } from '../Heading/Heading';
import { TextPassage } from '../TextPassage/TextPassage';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

export default {
  title: 'Molecules/Blocks/Card',
  component: Card,
} as Meta;

export const Default = () => (
  <Card>
    <CardHeader>
      <div className="fpo">Card Header</div>
    </CardHeader>
    <CardBody>
      <div className="fpo">Card Body</div>
    </CardBody>
    <CardFooter>
      <div className="fpo">Card Footer</div>
    </CardFooter>
  </Card>
);

export const Inverted = () => (
  <div style={{ backgroundColor: 'black', padding: '1rem' }}>
    <Card inverted={true}>
      <CardHeader>
        <div className="fpo">Card Header</div>
      </CardHeader>
      <CardBody>
        <div className="fpo">Card Body</div>
      </CardBody>
      <CardFooter>
        <div className="fpo">Card Footer</div>
      </CardFooter>
    </Card>
  </div>
);
