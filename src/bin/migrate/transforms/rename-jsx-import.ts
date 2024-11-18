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
  const jsxElementsToRename: Array<{
    oldName: string;
    newName: string;
  }> = [];

  importsToTransform.forEach((importDeclaration) => {
    const namedImports = importDeclaration.getNamedImports();

    namedImports.forEach((namedImport) => {
      const name = namedImport.getName();
      const changeToApply = changes.find(
        (change) => change.oldImportName === name,
      );

      if (changeToApply) {
        const jsxElementName =
          namedImport.getAliasNode()?.getText() || namedImport.getName();

        jsxElementsToRename.push({
          oldName: jsxElementName,
          newName: changeToApply.alias || changeToApply.newImportName,
        });

        namedImport.setName(changeToApply.newImportName);
        const namedNode = namedImport.getNameNode();
        if ('rename' in namedNode) {
          namedNode.rename(changeToApply.newImportName);
        }

        if (changeToApply.removeAlias) {
          namedImport.removeAliasWithRename();
        } else if (changeToApply.alias) {
          namedImport.renameAlias(changeToApply.alias);
        }
      }
    });
  });

  file.getDescendantsOfKind(SyntaxKind.JsxElement).forEach((element) => {
    const openingElement = element.getOpeningElement();
    const closingElement = element.getClosingElement();
    const openingTagNameNode = openingElement.getTagNameNode();
    const closingTagNameNode = closingElement.getTagNameNode();

    const renameInfo = jsxElementsToRename.find(
      ({ oldName }) => oldName === openingTagNameNode.getText(),
    );

    if (renameInfo) {
      openingTagNameNode.replaceWithText(renameInfo.newName);
      closingTagNameNode.replaceWithText(renameInfo.newName);
    }
  });

  file
    .getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement)
    .forEach((element) => {
      const tagNameNode = element.getTagNameNode();
      const renameInfo = jsxElementsToRename.find(
        ({ oldName }) => oldName === tagNameNode.getText(),
      );
      if (renameInfo) {
        tagNameNode.replaceWithText(renameInfo.newName);
      }
    });
}
