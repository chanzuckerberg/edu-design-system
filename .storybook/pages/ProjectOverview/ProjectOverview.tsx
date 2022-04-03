import React from 'react';

import {
  PageHeader,
  TextPassage,
  ListDetail,
  ListDetailPanel,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  Hr,
} from '../../../src';

import { PageShell } from '../../recipes/PageShell/PageShell';

export interface Props {
  /*
   * Variant
   * 1) Argument that gets passed to ListDetail Component for stylistic variant
   */
  listVariant?: 'ordered';
}

export const ProjectOverview: React.FC<Props> = ({ ...args }) => {
  return (
    <PageShell>
      <Breadcrumbs>
        <BreadcrumbsItem text="My Courses" href="#" />
        <BreadcrumbsItem text="Disciplinary Science 7" />
      </Breadcrumbs>
      <PageHeader
        title="Feudal Honor Codes and Values"
        right={
          <Button
            variant="bare"
            iconPosition="after"
            iconName="arrow-narrow-right"
          >
            View plan
          </Button>
        }
      />
      <ListDetail variant="ordered">
        <ListDetailPanel title="Overview" variant="success">
          <div>List Detail Component</div>
          <div className="fpo">Heading</div>
          <div className="fpo">Text Passage large</div>
          <div className="fpo">See more component (truncated text)</div>
          <div className="fpo">Heading</div>
          <div className="fpo">
            List component (Could include numbers/Q for question)
          </div>
          <Hr />
          <div className="fpo">
            <div>Section title with image in front (Power Focus Areas)</div>
            <div className="fpo">Tooltip (up for discussion)</div>
            <div className="fpo">
              Hoverable/Linkable Card Recipe (naming TBD)
            </div>
          </div>
          <div className="fpo">
            <div>
              Section title with image in front (Additional Focus Areas)
            </div>
            <div className="fpo">
              <div>Hoverable/Linkable Card Recipe (naming TBD)</div>
              <div className="fpo">Badge? Status badge?</div>
            </div>
            <div className="fpo">
              <div>Hoverable/Linkable Card Recipe (naming TBD)</div>
              <div className="fpo">Badge? Status badge?</div>
            </div>
          </div>
          <div className="fpo">
            <div>Cognitive skills (smaller section title than ones above)</div>
            <div className="fpo">Text passage with links?</div>
          </div>
        </ListDetailPanel>

        <ListDetailPanel
          title="Expectations of Samuri in Feudal Japan and Wars of 5th Century"
          variant="warning"
        >
          <TextPassage>
            <h3>ListDetailPanel 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </TextPassage>
        </ListDetailPanel>

        <ListDetailPanel
          title="Expectations of Samuri in Feudal Japan"
          variant="error"
        >
          <TextPassage>
            <h3>ListDetailPanel 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </TextPassage>
        </ListDetailPanel>
        <ListDetailPanel
          title="Expectations of Samuri in Feudal Japan"
          variant="number"
        >
          <TextPassage>
            <h3>ListDetailPanel 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </TextPassage>
        </ListDetailPanel>
        <ListDetailPanel title="Expectations of Samuri in Feudal Japan">
          <TextPassage>
            <h3>ListDetailPanel 5</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex{' '}
            </p>
          </TextPassage>
        </ListDetailPanel>
      </ListDetail>
    </PageShell>
  );
};
