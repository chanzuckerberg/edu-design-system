import { generateSnapshots } from '@chanzuckerberg/story-utils';
import { render } from '@testing-library/react';
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import * as BreadcrumbsStoryFile from './Breadcrumbs.stories';

describe('<Breadcrumbs />', () => {
  generateSnapshots(BreadcrumbsStoryFile);
  it('throws an error if there are invalid children', () => {
    expect(() => {
      render(
        <Breadcrumbs>
          <Breadcrumbs.Item href="#" text="Breadcrumb 1" />
          <button>Breadcrumb 2</button>
        </Breadcrumbs>,
      );
    }).toThrow(
      /Only <Breadcrumbs.Item>, <BreadcrumbsItem>, or React.Fragment of aforementioned components allowed/,
    );
  });
});
