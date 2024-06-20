import { dedent } from 'ts-dedent';

import { updateStatusProp } from './alpha14-to-alpha15';
import { createTestSourceFile } from '../helpers';

describe('alpha14-to-alpha15', () => {
  it('updates an appropriate isWarning prop', () => {
    const sourceFileText = dedent`
    import {FieldNote} from '@chanzuckerberg/eds';

    export default function Component() {
      return (
        <FieldNote isWarning />
      )
    }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    updateStatusProp({
      file: sourceFile,
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {FieldNote} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <FieldNote status="warning" />
        )
      }
    `);
  });

  it('updates an appropriate isError prop', () => {
    const sourceFileText = dedent`
    import {FieldNote} from '@chanzuckerberg/eds';

    export default function Component() {
      return (
        <FieldNote isError />
      )
    }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    updateStatusProp({
      file: sourceFile,
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {FieldNote} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <FieldNote status="critical" />
        )
      }
    `);
  });

  it('does not update an isError prop on non-EDS component', () => {
    const sourceFileText = dedent`
    import {FieldNote} from 'somewhere';

    export default function Component() {
      return (
        <FieldNote isError />
      )
    }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    updateStatusProp({
      file: sourceFile,
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {FieldNote} from 'somewhere';

      export default function Component() {
        return (
          <FieldNote isError />
        )
      }
    `);
  });

  it('updates appropriately when both isError and isWarning prop exists', () => {
    const sourceFileText = dedent`
    import {FieldNote} from '@chanzuckerberg/eds';

    export default function Component() {
      return (
        <FieldNote isWarning isError />
      )
    }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    updateStatusProp({
      file: sourceFile,
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {FieldNote} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <FieldNote status="warning" status="critical" />
        )
      }
    `);
  });

  it('converts on all component types', () => {
    const sourceFileText = dedent`
    import {FieldNote, InputField, Select, TextareaField} from '@chanzuckerberg/eds';

    export default function Component() {
      return (
        <div>
          <InputField isWarning />
          <FieldNote isWarning></FieldNote>
          <Select isError></Select>
          <TextareaField isError isWarning></Textarea>
        </div>
      );
    }
    `;

    const sourceFile = createTestSourceFile(sourceFileText);

    updateStatusProp({
      file: sourceFile,
    });

    expect(sourceFile.getText()).toEqual(dedent`
      import {FieldNote, InputField, Select, TextareaField} from '@chanzuckerberg/eds';

      export default function Component() {
        return (
          <div>
            <InputField status="warning" />
            <FieldNote status="warning"></FieldNote>
            <Select status="critical"></Select>
            <TextareaField status="warning" status="critical"></Textarea>
          </div>
        );
      }
    `);
  });
});
