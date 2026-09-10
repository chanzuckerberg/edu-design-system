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

  it('renames the leading icon prop to a content prop', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {InputField, SelectionChip} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div>
            <InputField leadingIcon="search" placeholder="Search..." />
            <SelectionChip label="Add" leadingIcon="add" />
          </div>
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {InputField, SelectionChip} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div>
            <InputField leadingContent="search" placeholder="Search..." />
            <SelectionChip label="Add" leadingContent="add" />
          </div>
        )
      }
    `);
  });

  it('renames the leading icon prop on subcomponents', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {Accordion, DataTable} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div>
            <Accordion.Button leadingIcon={<Icon name="star" purpose="decorative" />} title="Row" />
            <DataTable.HeaderCell leadingIcon="person-add">Name</DataTable.HeaderCell>
            <DataTable.DataCell leadingIcon="person-add">Ada</DataTable.DataCell>
          </div>
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {Accordion, DataTable} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div>
            <Accordion.Button leadingContent={<Icon name="star" purpose="decorative" />} title="Row" />
            <DataTable.HeaderCell leadingContent="person-add">Name</DataTable.HeaderCell>
            <DataTable.DataCell leadingContent="person-add">Ada</DataTable.DataCell>
          </div>
        )
      }
    `);
  });

  it('drops the Accordion expand indicator override', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {Accordion} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Accordion.Button title="Row" trailingIcon="chevron-down" />
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {Accordion} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Accordion.Button title="Row" />
        )
      }
    `);
  });

  it('drops the Accordion indicator under the name it carried in v19 prereleases', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {Accordion} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Accordion.Button title="Row" indicatorContent="chevron-up" />
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {Accordion} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Accordion.Button title="Row" />
        )
      }
    `);
  });

  it('drops the Breadcrumbs back icon override', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {Breadcrumbs} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Breadcrumbs.Item href="/" icon="chevron-left" text="Home" />
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {Breadcrumbs} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Breadcrumbs.Item href="/" text="Home" />
        )
      }
    `);
  });

  it('renames the Accordion row leading content flag', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {Accordion} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Accordion.Row hasLeadingIcon>
            <Accordion.Button title="Row" />
          </Accordion.Row>
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {Accordion} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Accordion.Row hasLeadingContent>
            <Accordion.Button title="Row" />
          </Accordion.Row>
        )
      }
    `);
  });

  it('leaves the Accordion trailing slot alone', () => {
    const sourceFileText = dedent`
      import {Accordion} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Accordion.Button title="Row" trailingContent={<Tag>New</Tag>} />
        )
      }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(sourceFileText);
  });

  it('moves the deprecated icon prop onto the leading slot, and drops the semantic one', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {Menu, PopoverListItem} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Menu>
            <Menu.Button icon="chevron-down">Actions</Menu.Button>
            <Menu.Items>
              <Menu.Item icon="link" href="/docs">Docs</Menu.Item>
            </Menu.Items>
            <PopoverListItem icon="arrow-down">Sort</PopoverListItem>
          </Menu>
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {Menu, PopoverListItem} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Menu>
            <Menu.Button>Actions</Menu.Button>
            <Menu.Items>
              <Menu.Item leadingContent="link" href="/docs">Docs</Menu.Item>
            </Menu.Items>
            <PopoverListItem leadingContent="arrow-down">Sort</PopoverListItem>
          </Menu>
        )
      }
    `);
  });

  it('drops the Menu.Button chevron under the name it carried in v19 prereleases', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {Menu} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Menu>
            <Menu.Button trailingContent="chevron-down">Actions</Menu.Button>
          </Menu>
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {Menu} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Menu>
            <Menu.Button>Actions</Menu.Button>
          </Menu>
        )
      }
    `);
  });

  it('renames the Link continuation icon to its role', () => {
    const sourceFile = createTestSourceFile(dedent`
      import {Link} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <>
            <Link context="standalone" emphasis="low" icon="chevron-right">Next</Link>
            <Link context="standalone" icon="open-in-new">Docs</Link>
          </>
        )
      }
    `);

    migration(sourceFile.getProject());

    expect(sourceFile.getText()).toEqual(dedent`
      import {Link} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <>
            <Link context="standalone" emphasis="low" icon="forward">Next</Link>
            <Link context="standalone" icon="open-in-new">Docs</Link>
          </>
        )
      }
    `);
  });

  it('leaves the icon prop on components that kept it alone', () => {
    const sourceFileText = dedent`
      import {Button, Card, Icon} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <Card>
            <Card.Header icon="star" title="Saved" />
            <Button icon="add" iconLayout="left">Add</Button>
            <Icon name="close" purpose="decorative" />
          </Card>
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
