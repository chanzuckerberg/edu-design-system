import { dedent } from 'ts-dedent';

import transform from './rename-jsx-import';
import { createTestSourceFile } from '../helpers';

describe('transform', () => {
  it('does not modify import statements that are from other libraries', () => {
    const sourceFileText = dedent`
      import {Button} from '@headlessui/react';
    `;
    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          oldImportName: 'Button',
          newImportName: 'ButtonV2',
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {Button} from '@headlessui/react';
    `);
  });

  it('renames import statements', () => {
    const sourceFileText = dedent`
      import {Button, Icon} from '@chanzuckerberg/eds';
      import type {ButtonProps} from '@chanzuckerberg/eds/lib/components/Button';
      import clsx from 'clsx';
    `;
    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          oldImportName: 'Button',
          newImportName: 'ButtonV2',
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {ButtonV2, Icon} from '@chanzuckerberg/eds';
      import type {ButtonProps} from '@chanzuckerberg/eds/lib/components/Button';
      import clsx from 'clsx';
    `);
  });

  it('adds aliases to import statements', () => {
    const sourceFileText = dedent`
      import {Button} from '@chanzuckerberg/eds';
    `;
    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          alias: 'Button',
          oldImportName: 'Button',
          newImportName: 'ButtonV2',
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {ButtonV2 as Button} from '@chanzuckerberg/eds';
    `);
  });

  it('remove aliases from import statements', () => {
    const sourceFileText = dedent`
      import {ButtonV2 as Button} from '@chanzuckerberg/eds';
    `;
    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          removeAlias: true,
          oldImportName: 'ButtonV2',
          newImportName: 'Button',
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {Button} from '@chanzuckerberg/eds';
    `);
  });

  it('renames JsxElements when imports are changed', () => {
    const sourceFileText = dedent`
      import {Button, Icon} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div>
            <Icon />
            <span>Something here</span>
            <Button>Something there</Button>
            <Button variant="secondary">Something over there</Button>
          </div>
        )
      }
    `;
    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          oldImportName: 'Button',
          newImportName: 'ButtonV2',
        },
        {
          oldImportName: 'Icon',
          newImportName: 'IconV2',
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {ButtonV2, IconV2} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div>
            <IconV2 />
            <span>Something here</span>
            <ButtonV2>Something there</ButtonV2>
            <ButtonV2 variant="secondary">Something over there</ButtonV2>
          </div>
        )
      }
    `);
  });
});
