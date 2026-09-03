import { dedent } from 'ts-dedent';

import { describe, expect, it } from 'vitest';
import migration from './18-to-19';
import { createTestSourceFile } from '../helpers';

describe('18-to-19', () => {
  it('replaces component-specific presets on Text', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {Text} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div>
            <Text preset="tag">Tag</Text>
            <Text preset="input">Input</Text>
            <Text as="span" preset="appHeader-subLabel">Sub-label</Text>
          </div>
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {Text} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div>
            <Text preset="overline-sm">Tag</Text>
            <Text preset="body-md">Input</Text>
            <Text as="span" preset="body-xs">Sub-label</Text>
          </div>
        )
      }
    `);
  });

  it('replaces component-specific presets on Heading', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {Heading} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Heading as="h2" preset="dataTable-headerCell">Column</Heading>
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {Heading} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Heading as="h2" preset="title-xs">Column</Heading>
        )
      }
    `);
  });

  it('leaves reusable presets alone', () => {
    const sourceFileText = dedent`
      import {Text} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Text preset="body-md">Copy</Text>
        )
      }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(sourceFileText);
  });

  it('leaves a same-named component from another package alone', () => {
    const sourceFileText = dedent`
      import {Text} from 'some-other-library';

      export default function Component() {
        return (
          <Text preset="tag">Tag</Text>
        )
      }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(sourceFileText);
  });
});
