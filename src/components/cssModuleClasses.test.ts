// @vitest-environment node
import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import { describe, expect, it } from 'vitest';

/**
 * Tests map CSS modules through a proxy that echoes back any key, so a lookup like
 * `styles['foo--bar']` renders "foo--bar" in snapshots even when no `.foo--bar` rule exists.
 * In the built package that lookup is `undefined` and the class never reaches the DOM.
 *
 * This cross-references every static `styles['…']` / `styles.foo` key in a component against
 * the classes its CSS module actually defines, after expanding imports, mixins, and nesting the
 * same way the build does. Template-literal keys (`styles[\`foo--${bar}\`]`) are skipped.
 */

const componentsDir = __dirname;
const cssProcessor = postcss([
  postcssImport(),
  postcssMixins(),
  postcssNested(),
]);

function listComponentFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listComponentFiles(fullPath);
    return /\.tsx?$/.test(entry.name) &&
      !/\.(test|stories)\.tsx?$/.test(entry.name)
      ? [fullPath]
      : [];
  });
}

function stripComments(source: string): string {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
}

async function getDefinedClasses(cssPath: string): Promise<Set<string>> {
  const result = await cssProcessor.process(fs.readFileSync(cssPath, 'utf8'), {
    from: cssPath,
  });
  const classes = new Set<string>();
  result.root.walkRules((rule) => {
    for (const match of rule.selector.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)) {
      classes.add(match[1]);
    }
  });
  return classes;
}

function getStaticLookups(source: string, stylesName: string): string[] {
  const bracketLookups = source.matchAll(
    new RegExp(`\\b${stylesName}\\[\\s*(['"])([^'"]+)\\1\\s*\\]`, 'g'),
  );
  const backtickLookups = source.matchAll(
    new RegExp(`\\b${stylesName}\\[\\s*\`([^\`$]+)\`\\s*\\]`, 'g'),
  );
  const dotLookups = source.matchAll(
    new RegExp(`\\b${stylesName}\\.([A-Za-z_]\\w*)`, 'g'),
  );
  return [
    ...[...bracketLookups].map((match) => match[2]),
    ...[...backtickLookups].map((match) => match[1]),
    ...[...dotLookups].map((match) => match[1]),
  ];
}

const componentsWithModules = listComponentFiles(componentsDir).flatMap(
  (file) => {
    const source = stripComments(fs.readFileSync(file, 'utf8'));
    const importMatch = source.match(
      /import\s+(\w+)\s+from\s+['"](\.[^'"]+\.module\.css)['"]/,
    );
    if (!importMatch) return [];
    const [, stylesName, cssImport] = importMatch;
    return [
      {
        name: path.relative(componentsDir, file).split(path.sep).join('/'),
        source,
        stylesName,
        cssPath: path.resolve(path.dirname(file), cssImport),
      },
    ];
  },
);

describe('CSS module class lookups', () => {
  it.each(componentsWithModules)(
    '$name only looks up classes its CSS module defines',
    async ({ name, source, stylesName, cssPath }) => {
      const defined = await getDefinedClasses(cssPath);
      const missing = [...new Set(getStaticLookups(source, stylesName))].filter(
        (key) => !defined.has(key),
      );

      expect(missing).toEqual([]);
    },
  );
});
