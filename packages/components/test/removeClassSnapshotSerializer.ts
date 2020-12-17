/**
 * Borrowed parts from jest-styled-components with a customized print function.
 * Instead of injecting styles and modifying classes, this custom
 * serializer will remove them completely.
 */
import { styleSheetSerializer } from "jest-styled-components";

const KEY = "__jest-styled-components__";

type NodeType = {
  [KEY]: boolean;
  children: NodeType[];
};

const markNodes = (nodes: NodeType[]): void =>
  nodes.forEach((node) => (node[KEY] = true));

const getNodes = (node: NodeType, nodes: NodeType[] = []): NodeType[] => {
  if (typeof node === "object") {
    nodes.push(node);
  }

  if (node.children) {
    Array.from(node.children).forEach((child) => getNodes(child, nodes));
  }

  return nodes;
};

/**
 * Remove all class attributes from the specified code
 */
const removeClassNames = (code: string): string => {
  return code.replace(/\n\s*class=".+"( )*/g, "");
};

const collapseEmptyElements = (code: string): string => {
  return code.replace(/<(\w+)\s*>/g, (match, element) => {
    return `<${element}>`;
  });
};

expect.addSnapshotSerializer({
  test: styleSheetSerializer.test,
  print(value, serialize) {
    /**
     * Mark the nodes we will serialize. The `styleSheetSerializer.test`
     * will skip anything we have already processed.
     */
    const nodes = getNodes(value as NodeType);
    markNodes(nodes);

    const code = serialize(value);
    const result = collapseEmptyElements(removeClassNames(code));

    return result;
  },
});
