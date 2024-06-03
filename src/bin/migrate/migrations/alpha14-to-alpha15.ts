import {
  type JsxAttribute,
  SyntaxKind,
  type Project,
  type SourceFile,
} from 'ts-morph';
import { isDesignSystemImport } from '../helpers';

export default function migration(project: Project) {
  const files = project.getSourceFiles();
  const sourceFiles = files.filter((file) => !file.isDeclarationFile());

  sourceFiles.forEach((sourceFile) => {
    updateStatusProp({ file: sourceFile }); // https://github.com/chanzuckerberg/edu-design-system/pull/1973
  });
}

type TransformOptions = {
  file: SourceFile;
};

const statusComponents = [
  'FieldNote',
  'InputField',
  'Select',
  'TextareaField',
].map((name) => name.toLowerCase());

export function updateStatusProp({ file }: TransformOptions) {
  // Filter down to the design-system-only imports
  const importDeclarations = file
    .getImportDeclarations()
    .filter(
      (importDeclaration) =>
        !importDeclaration.isTypeOnly() &&
        isDesignSystemImport(importDeclaration),
    );

  const jsxElements = file.getDescendantsOfKind(SyntaxKind.JsxOpeningElement);
  const jsxSelfClosingElements = file.getDescendantsOfKind(
    SyntaxKind.JsxSelfClosingElement,
  );

  // Get the component usages in the given file (which should only work on EDS imports)
  [...jsxElements, ...jsxSelfClosingElements].forEach((element) => {
    const tagName = element.getTagNameNode().getText();
    const edsTags: string[] = [];
    importDeclarations.forEach((importDeclaration) => {
      importDeclaration.getNamedImports().forEach((namedImport) => {
        edsTags.push(namedImport.getName());
      });
    });

    if (
      statusComponents.includes(tagName.toLowerCase()) &&
      edsTags.includes(tagName)
    ) {
      // detect if isWarning exists (at all or with value true)
      if (
        isBooleanTrue(
          element.getAttribute('isWarning')?.asKind(SyntaxKind.JsxAttribute),
        )
      ) {
        element.getAttribute('isWarning')?.remove();
        element.addAttribute({
          name: 'status',
          initializer: `"warning"`,
        });
      }

      // detect if isError exists (at all or with value true)
      if (
        isBooleanTrue(
          element.getAttribute('isError')?.asKind(SyntaxKind.JsxAttribute),
        )
      ) {
        element.getAttribute('isError')?.remove();
        element.addAttribute({
          name: 'status',
          initializer: `"critical"`,
        });
      }
    }
  });
}

/**
 * Determine whether the attribute evaluates to being set to true
 *
 * @param attribute the attribute retrieved from the element node
 * @returns whether the elements attribute evaluates to true in JSX (exists or exists AND is true)
 */
function isBooleanTrue(attribute: JsxAttribute | undefined): boolean {
  return (
    (attribute && typeof attribute?.getInitializer() === 'undefined') ||
    attribute?.getInitializer()?.getText() === '{true}'
  );
}
