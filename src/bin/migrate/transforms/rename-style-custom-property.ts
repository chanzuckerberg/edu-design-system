import { SyntaxKind } from 'ts-morph';
import type { PropertyAssignment, SourceFile } from 'ts-morph';
import { isDesignSystemImport } from '../helpers';

/**
 * The key a style object property was written under, when that key is a string.
 *
 * Reads both `{ '--foo': value }` and `{ ['--foo']: value }`, which mean the same thing.
 * A custom property is never a bare identifier, since `--foo` is not a valid one, so a key
 * in any other form is not a custom property and is left alone.
 */
function getCustomPropertyNameNode(property: PropertyAssignment) {
  const nameNode = property.getNameNode();

  return (
    nameNode.asKind(SyntaxKind.StringLiteral) ??
    nameNode
      .asKind(SyntaxKind.ComputedPropertyName)
      ?.getExpression()
      .asKind(SyntaxKind.StringLiteral)
  );
}

export type Change = {
  oldCustomPropertyName: string;
  newCustomPropertyName: string;
};

type TransformOptions = {
  file: SourceFile;
  changes: Change[];
};

/**
 * Renames the CSS custom properties a consumer sets through the `style` prop.
 *
 * `edit-jsx-prop` reaches a prop's name and its value, but a custom property is neither: it
 * is a key inside the object a `style` prop is given, which is how these are set.
 *
 * @example
 * ```
 * // Before:
 * <AppFooter style={{ '--app-footer__bg-color': 'red' }} />
 *
 * // After:
 * <AppFooter style={{ '--app-footer__bg': 'red' }} />
 * ```
 *
 * The match is on the property name in any object literal in the file, rather than on the
 * `style` props of a named component. Two reasons. A style object is often hoisted out of the
 * callsite (`const footerStyle = {...}` above the component, or a `styles` map shared by
 * several), and a custom property also reaches the component when set on a wrapping element,
 * since custom properties inherit. Keying on the component would miss both.
 *
 * That is safe here because these names are namespaced to the design system
 * (`--app-footer__bg`), so a key that matches is the one we mean. The file still has to import
 * from EDS at all, which keeps the rename off files that have nothing to do with us.
 *
 * Only JSX callsites are reached. A consumer who sets the property in their own CSS file, or
 * through `setProperty`, renames it by hand.
 */
export default function transform({ file, changes }: TransformOptions) {
  const importsDesignSystem = file
    .getImportDeclarations()
    .some(
      (importDeclaration) =>
        !importDeclaration.isTypeOnly() &&
        isDesignSystemImport(importDeclaration),
    );

  if (!importsDesignSystem) {
    return;
  }

  file
    .getDescendantsOfKind(SyntaxKind.PropertyAssignment)
    .forEach((property) => {
      const nameNode = getCustomPropertyNameNode(property);
      if (!nameNode) {
        return;
      }

      const changeToApply = changes.find(
        (change) => change.oldCustomPropertyName === nameNode.getLiteralValue(),
      );

      if (changeToApply) {
        nameNode.setLiteralValue(changeToApply.newCustomPropertyName);
      }
    });
}
