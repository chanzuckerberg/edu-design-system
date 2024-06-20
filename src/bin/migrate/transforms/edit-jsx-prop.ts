import { SyntaxKind } from 'ts-morph';
import type {
  JsxOpeningElement,
  JsxSelfClosingElement,
  SourceFile,
} from 'ts-morph';
import { isDesignSystemImport } from '../helpers';

type Edit =
  | {
      type: 'add';
      propName: string;
      propValue: string;
    }
  | {
      type: 'remove';
      propName: string;
      /** Only performs edit if the callback returns truthy */
      callback?: ({
        currentPropValue,
      }: {
        currentPropValue: string;
      }) => boolean;
    }
  | {
      type: 'update_name';
      oldPropName: string;
      newPropName: string;
      /** Only performs edit if the callback returns truthy */
      callback?: ({
        currentPropValue,
      }: {
        currentPropValue: string;
      }) => boolean;
    }
  | {
      type: 'update_value';
      propName: string;
      oldPropValue: string;
      newPropValue: string;
    };

function removeProp(
  element: JsxOpeningElement | JsxSelfClosingElement,
  edit: Extract<Edit, { type: 'remove' }>,
) {
  const attribute = element.getAttribute(edit.propName);
  if (attribute && 'getNameNode' in attribute) {
    const initializer = attribute.getInitializer();
    const performEdit =
      !edit.callback ||
      edit.callback({
        currentPropValue:
          initializer?.asKind(SyntaxKind.StringLiteral)?.getLiteralValue() ||
          '',
      });

    if (performEdit) {
      attribute.remove();
    }
  }
}

function updatePropName(
  element: JsxOpeningElement | JsxSelfClosingElement,
  edit: Extract<Edit, { type: 'update_name' }>,
) {
  const attribute = element.getAttribute(edit.oldPropName);
  if (attribute && 'getNameNode' in attribute) {
    const initializer = attribute.getInitializer();
    const performEdit =
      !edit.callback ||
      edit.callback({
        currentPropValue:
          initializer?.asKind(SyntaxKind.StringLiteral)?.getLiteralValue() ||
          '',
      });

    if (performEdit) {
      attribute.setName(edit.newPropName);
    }
  }
}

function updatePropValue(
  element: JsxOpeningElement | JsxSelfClosingElement,
  edit: Extract<Edit, { type: 'update_value' }>,
) {
  const attribute = element
    .getAttribute(edit.propName)
    ?.asKind(SyntaxKind.JsxAttribute);

  if (attribute) {
    const initializer = attribute.getInitializer();
    if (initializer?.isKind(SyntaxKind.StringLiteral)) {
      if (initializer.getLiteralValue() === edit.oldPropValue) {
        initializer.setLiteralValue(edit.newPropValue);
      }
    } else if (initializer?.isKind(SyntaxKind.JsxExpression)) {
      initializer
        .getDescendantsOfKind(SyntaxKind.StringLiteral)
        .forEach((descendant) => {
          if (descendant.getLiteralValue() === edit.oldPropValue) {
            descendant.setLiteralValue(edit.newPropValue);
          }
        });
    }
  }
}

export type Change = {
  componentName: string;
  edits: Edit[];
};

type TransformOptions = {
  file: SourceFile;
  changes: Change[];
};

export default function transform({ file, changes }: TransformOptions) {
  const importDeclarations = file
    .getImportDeclarations()
    .filter(
      (importDeclaration) =>
        !importDeclaration.isTypeOnly() &&
        isDesignSystemImport(importDeclaration),
    );

  // Only apply changes to EDS Imported components because EDS consumers may have
  // their own components with the same names as our components.
  const changesToApply: Change[] = [];
  importDeclarations.forEach((importDeclaration) => {
    const namedImports = importDeclaration.getNamedImports();
    namedImports.forEach((namedImport) => {
      const change = changes.find(
        (change) =>
          change.componentName.toLowerCase() ===
          namedImport.getName().toLowerCase(),
      );
      if (change) {
        changesToApply.push(change);
      }
    });
  });

  const jsxElements = file.getDescendantsOfKind(SyntaxKind.JsxOpeningElement);
  const jsxSelfClosingElements = file.getDescendantsOfKind(
    SyntaxKind.JsxSelfClosingElement,
  );

  [...jsxElements, ...jsxSelfClosingElements].forEach((element) => {
    const tagName = element.getTagNameNode().getText();
    for (const change of changesToApply) {
      const isChangeable =
        change.componentName.toLowerCase() === tagName.toLowerCase();
      if (!isChangeable) {
        continue;
      }

      change.edits.forEach((edit) => {
        switch (edit.type) {
          case 'add':
            element.addAttribute({
              name: edit.propName,
              initializer: `"${edit.propValue}"`,
            });
            break;
          case 'remove':
            removeProp(element, edit);
            break;
          case 'update_name':
            updatePropName(element, edit);
            break;
          case 'update_value':
            updatePropValue(element, edit);
            break;
        }
      });
    }
  });
}
