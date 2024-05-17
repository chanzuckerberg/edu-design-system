import { SyntaxKind, type SourceFile } from 'ts-morph';
import { isDesignSystemImport } from '../helpers';

export type Change = {
  alias?: string;
  oldImportName: string;
  newImportName: string;
  removeAlias?: boolean;
};

type TransformOptions = {
  file: SourceFile;
  changes: Change[];
};

/**
 * Transforms import declarations in a source file based on the provided conversions.
 * @param {TransformOptions} options - The transformation options.
 */
export default function transform({ file, changes }: TransformOptions) {
  const importDeclarations = file.getImportDeclarations();
  const importsToTransform = importDeclarations.filter(
    (importDeclaration) =>
      !importDeclaration.isTypeOnly() &&
      isDesignSystemImport(importDeclaration),
  );

  /**
   * Used to keep track of which JSXElements need to be renamed
   */
  const appliedChanges: Change[] = [];
  importsToTransform.forEach((importDeclaration) => {
    const namedImports = importDeclaration.getNamedImports();

    namedImports.forEach((namedImport) => {
      const name = namedImport.getName();
      const changeToApply = changes.find(
        (change) => change.oldImportName === name,
      );

      if (changeToApply) {
        namedImport.getNameNode;
        namedImport.setName(changeToApply.newImportName);
        namedImport.getNameNode().rename(changeToApply.newImportName);
        if (changeToApply.removeAlias) {
          namedImport.removeAliasWithRename();
        } else if (changeToApply.alias) {
          namedImport.renameAlias(changeToApply.alias);
        }
        appliedChanges.push(changeToApply);
      }
    });
  });

  file.getDescendantsOfKind(SyntaxKind.JsxElement).forEach((element) => {
    const openingElement = element.getOpeningElement();
    const closingElement = element.getClosingElement();
    const openingTagNameNode = openingElement.getTagNameNode();
    const closingTagNameNode = closingElement.getTagNameNode();

    const appliedChange = appliedChanges.find(
      (change) => change.oldImportName === openingTagNameNode.getText(),
    );

    if (appliedChange) {
      openingTagNameNode.replaceWithText(appliedChange.newImportName);
      closingTagNameNode.replaceWithText(appliedChange.newImportName);
    }
  });

  file
    .getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement)
    .forEach((element) => {
      const tagNameNode = element.getTagNameNode();
      const appliedChange = appliedChanges.find(
        (change) => change.oldImportName === tagNameNode.getText(),
      );
      if (appliedChange) {
        tagNameNode.replaceWithText(appliedChange.newImportName);
      }
    });
}
