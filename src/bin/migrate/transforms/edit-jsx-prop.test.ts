import { dedent } from 'ts-dedent';

import transform from './edit-jsx-prop';
import { createTestSourceFile } from '../helpers';

describe('transform', () => {
  it('removes a single prop', () => {
    const sourceFileText = dedent`
      import {Icon} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Icon size="large" color="orange" />
        )
      }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          componentName: 'Icon',
          edits: [
            {
              type: 'remove',
              propName: 'color',
            },
          ],
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {Icon} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Icon size="large" />
        )
      }
    `);
  });

  it('adds a single prop', () => {
    const sourceFileText = dedent`
      import {Button} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Button type="submit">
            Submit
          </Button>
        )
      }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          componentName: 'Button',
          edits: [
            {
              type: 'add',
              propName: 'size',
              propValue: 'lg',
            },
          ],
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {Button} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Button type="submit" size="lg">
            Submit
          </Button>
        )
      }
    `);
  });

  it('updates the name of a prop', () => {
    const sourceFileText = dedent`
      import {Button} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Button type="submit" variant="secondary">
            Submit
          </Button>
        )
      }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          componentName: 'Button',
          edits: [
            {
              type: 'update_name',
              oldPropName: 'variant',
              newPropName: 'rank',
            },
          ],
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {Button} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Button type="submit" rank="secondary">
            Submit
          </Button>
        )
      }
    `);
  });

  it('updates the value of a prop when it is a string literal', () => {
    const sourceFileText = dedent`
      import {Icon} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Icon
            name="add-circle"
            purpose="informative"
            title="add item to cart"
          />
        )
      }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          componentName: 'Icon',
          edits: [
            {
              type: 'update_value',
              propName: 'name',
              oldPropValue: 'add-circle',
              newPropValue: 'add-encircled',
            },
          ],
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {Icon} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Icon
            name="add-encircled"
            purpose="informative"
            title="add item to cart"
          />
        )
      }
    `);
  });

  it('updates the value of a prop when it is an expression', () => {
    const sourceFileText = dedent`
      import {Icon} from '@chanzuckerberg/eds';

      export default function Component({isOpen}) {
        return (
          <Icon
            name={isOpen ? 'expand-less' : 'expand-more' }
            purpose="informative"
            title="add item to cart"
          />
        )
      }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          componentName: 'Icon',
          edits: [
            {
              type: 'update_value',
              propName: 'name',
              oldPropValue: 'expand-more',
              newPropValue: 'collapse',
            },
          ],
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {Icon} from '@chanzuckerberg/eds';

      export default function Component({isOpen}) {
        return (
          <Icon
            name={isOpen ? 'expand-less' : 'collapse' }
            purpose="informative"
            title="add item to cart"
          />
        )
      }
    `);
  });

  it('edits multiple props on the same component', () => {
    const sourceFileText = dedent`
    import {Button, ButtonGroup} from '@chanzuckerberg/eds';

    export default function Component() {
      return (
        <ButtonGroup orientation="vertical" className="gap-2 pt-6">
          <Button
            className="min-w-[72] max-w-80 rounded-full"
            variant="secondary"
            size="lg"
          >
            Cancel
          </Button>
          <Button
            className="min-w-[72] max-w-80 rounded-full"
            variant="secondary"
            size="lg"
          >
            Continue
          </Button>
        </ButtonGroup>
      )
    }
  `;

    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          componentName: 'ButtonGroup',
          edits: [
            {
              type: 'update_name',
              oldPropName: 'orientation',
              newPropName: 'layout',
            },
          ],
        },
        {
          componentName: 'Button',
          edits: [
            {
              type: 'update_name',
              oldPropName: 'variant',
              newPropName: 'rank',
            },
            {
              type: 'add',
              propName: 'status',
              propValue: 'default',
            },
          ],
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {Button, ButtonGroup} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <ButtonGroup layout="vertical" className="gap-2 pt-6">
            <Button
              className="min-w-[72] max-w-80 rounded-full"
              rank="secondary"
              size="lg" status="default"
            >
              Cancel
            </Button>
            <Button
              className="min-w-[72] max-w-80 rounded-full"
              rank="secondary"
              size="lg" status="default"
            >
              Continue
            </Button>
          </ButtonGroup>
        )
      }
    `);
  });

  it('does not modify props from Non-EDS components', () => {
    const sourceFileText = dedent`
    import {Link} from '~/components/Link';

    export default function Component() {
      return (
        <Link variant="primary">Click Me</Link>
      )
    }
  `;

    const sourceFile = createTestSourceFile(sourceFileText);

    transform({
      file: sourceFile,
      changes: [
        {
          componentName: 'Link',
          edits: [
            {
              type: 'remove',
              propName: 'variant',
            },
          ],
        },
      ],
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {Link} from '~/components/Link';

      export default function Component() {
        return (
          <Link variant="primary">Click Me</Link>
        )
      }
    `);
  });
});
