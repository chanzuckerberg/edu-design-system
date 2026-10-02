import { dedent } from 'ts-dedent';
import { describe, expect, it } from 'vitest';

import transform from './rename-style-custom-property';
import { createTestSourceFile } from '../helpers';

const changes = [
  {
    oldCustomPropertyName: '--app-footer__bg-color',
    newCustomPropertyName: '--app-footer__bg',
  },
];

describe('transform', () => {
  it('renames a custom property set inline on the style prop', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <AppFooter navItems={[]} style={{ '--app-footer__bg-color': 'red' }} title="App" />
        )
      }
    `);

    transform({ file: sourceFile, changes });

    expect(sourceFile.getText()).toEqual(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <AppFooter navItems={[]} style={{ '--app-footer__bg': 'red' }} title="App" />
        )
      }
    `);
  });

  it('keeps the quote style the property was written with', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      const style = {"--app-footer__bg-color": 'red'};
    `);

    transform({ file: sourceFile, changes });

    expect(sourceFile.getText()).toEqual(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      const style = {"--app-footer__bg": 'red'};
    `);
  });

  it('renames a computed custom property key', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      const style = {['--app-footer__bg-color']: 'red'};
    `);

    transform({ file: sourceFile, changes });

    expect(sourceFile.getText()).toEqual(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      const style = {['--app-footer__bg']: 'red'};
    `);
  });

  it('renames a custom property in a style object hoisted out of the callsite', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      const footerStyle = {
        '--app-footer__bg-color': 'red',
        color: 'white',
      };

      export default function Component() {
        return (
          <AppFooter navItems={[]} style={footerStyle} title="App" />
        )
      }
    `);

    transform({ file: sourceFile, changes });

    expect(sourceFile.getText()).toEqual(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      const footerStyle = {
        '--app-footer__bg': 'red',
        color: 'white',
      };

      export default function Component() {
        return (
          <AppFooter navItems={[]} style={footerStyle} title="App" />
        )
      }
    `);
  });

  it('renames a custom property set on a wrapping element', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div style={{ '--app-footer__bg-color': 'red' } as React.CSSProperties}>
            <AppFooter navItems={[]} title="App" />
          </div>
        )
      }
    `);

    transform({ file: sourceFile, changes });

    expect(sourceFile.getText()).toEqual(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div style={{ '--app-footer__bg': 'red' } as React.CSSProperties}>
            <AppFooter navItems={[]} title="App" />
          </div>
        )
      }
    `);
  });

  it('renames every property named in the changes, and leaves the rest of the object alone', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      const footerStyle = {
        '--app-footer__bg-color': 'red',
        '--app-footer__fg-color': 'white',
        '--app-header__bg-color': 'blue',
        backgroundColor: 'red',
      };
    `);

    transform({
      file: sourceFile,
      changes: [
        ...changes,
        {
          oldCustomPropertyName: '--app-footer__fg-color',
          newCustomPropertyName: '--app-footer__fg',
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      const footerStyle = {
        '--app-footer__bg': 'red',
        '--app-footer__fg': 'white',
        '--app-header__bg-color': 'blue',
        backgroundColor: 'red',
      };
    `);
  });

  it('leaves a matching value alone, renaming only keys', () => {
    const sourceFileText = dedent`
      import {AppFooter} from '@chanzuckerberg/eds';

      const custom = {name: '--app-footer__bg-color'};

      element.style.setProperty('--app-footer__bg-color', 'red');
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    transform({ file: sourceFile, changes });

    expect(sourceFile.getText()).toEqual(sourceFileText);
  });

  it('leaves files that do not import the design system alone', () => {
    const sourceFileText = dedent`
      import {AppFooter} from 'some-other-library';

      export default function Component() {
        return (
          <AppFooter style={{ '--app-footer__bg-color': 'red' }} />
        )
      }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    transform({ file: sourceFile, changes });

    expect(sourceFile.getText()).toEqual(sourceFileText);
  });

  it('leaves files whose only design system import is a type alone', () => {
    const sourceFileText = dedent`
      import type {AppFooterProps} from '@chanzuckerberg/eds';

      export const style: AppFooterProps['style'] = {'--app-footer__bg-color': 'red'};
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    transform({ file: sourceFile, changes });

    expect(sourceFile.getText()).toEqual(sourceFileText);
  });
});
