import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ProjectColumn, Props } from './ProjectColumn';
import {
  Heading,
  Button,
  Icon,
  Grid,
  GridItem,
  Card,
  CardBody,
} from '../../../src';
import utilityStyles from '../../../src/components/Utilities/Spacing.module.css';
import { Toolbar } from '../../../src/upcoming-components/Toolbar/Toolbar';
import { ToolbarItem } from '../../../src/upcoming-components/ToolbarItem/ToolbarItem';

export default {
  title: 'Recipes/ProjectColumn',
  component: ProjectColumn,
} as Meta;

const Template: Story<Props> = (args) => (
  <ProjectColumn {...args}>
    <Toolbar variant="bare">
      <ToolbarItem>
        <Heading as="h2" size="title-sm">
          Available projects
        </Heading>
      </ToolbarItem>
      <ToolbarItem align="right">
        <Button variant="icon">
          <Icon name="add" purpose="decorative" />
          Add project
        </Button>
      </ToolbarItem>
    </Toolbar>
    <Grid gap="sm">
      <GridItem>
        <Card>
          <CardBody>
            <Heading
              as="h3"
              className={utilityStyles['u-margin-bottom-sm']}
              size="body-sm"
            >
              Longer project name truncation after a long...
            </Heading>
            <div className="fpo u-margin-none">Calendar Icon text</div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>
            <Heading
              as="h3"
              className={utilityStyles['u-margin-bottom-sm']}
              size="body-sm"
            >
              Project name
            </Heading>
            <div className="fpo u-margin-none">12 days</div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>
            <Heading
              as="h3"
              className={utilityStyles['u-margin-bottom-sm']}
              size="body-sm"
            >
              Project name
            </Heading>
            <div className="fpo u-margin-none">12 days</div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>
            <Heading
              as="h3"
              className={utilityStyles['u-margin-bottom-sm']}
              size="body-sm"
            >
              Project name
            </Heading>
            <div className="fpo u-margin-none">12 days</div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>
            <Heading
              as="h3"
              className={utilityStyles['u-margin-bottom-sm']}
              size="body-sm"
            >
              Project name
            </Heading>
            <div className="fpo u-margin-none">12 days</div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardBody>
            <Heading
              as="h3"
              className={utilityStyles['u-margin-bottom-sm']}
              size="body-sm"
            >
              Project name
            </Heading>
            <div className="fpo u-margin-none">12 days</div>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  </ProjectColumn>
);

export const Default = Template.bind({});
Default.args = {};
