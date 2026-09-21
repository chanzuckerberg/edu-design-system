import path from 'node:path';
import { codecovRollupPlugin } from '@codecov/rollup-plugin';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

const OUTPUT_DIR = 'lib';

const INPUT = ['src/index.ts', 'src/tokens.ts'];

/**
 * With the nodeResolve plugin, this marks all EDS node_modules as external, aka provided by the consumer.
 * Since EDS is not imported directly into a web <script>, package managers (such as npm or yarn)
 * will install the deps listed in EDS package.json and hence won't need to be included in the bundle.
 */
const EXTERNAL = [/node_modules/];

/**
 * Shared by both formats. Preserving the source module layout keeps deep
 * imports (and tree-shaking) working the same way in each build.
 *
 * @type {import('rollup').OutputOptions}
 */
const sharedOutput = {
  dir: OUTPUT_DIR,
  preserveModules: true,
  preserveModulesRoot: 'src',
  sourcemap: true,
};

/**
 * The two builds share a source tree, so each needs its own postcss instance to
 * turn `*.module.css` into class-name maps. Both extract to the same
 * stylesheet: the CSS is identical, and consumers import it by one path
 * (`@chanzuckerberg/eds/index.css`) whichever format they resolve to.
 */
const styles = () =>
  postcss({
    modules: true,
    // When having multiple input files, the *.css can be emitted to either file's name. extract and set the path
    extract: path.resolve(`${OUTPUT_DIR}/index.css`),
  });

/**
 * @type {import('rollup').RollupOptions[]}
 */
export default [
  // CommonJS. Also the build that emits the type declarations and reports
  // bundle stats, so the two formats don't each write their own copy.
  {
    input: INPUT,
    output: {
      ...sharedOutput,
      format: 'cjs',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
      interop: 'auto',
    },
    external: EXTERNAL,
    plugins: [
      nodeResolve(),
      styles(),
      typescript({
        tsconfig: 'tsconfig.build.json',
      }),
      commonjs(),
      // Put the Codecov Rollup plugin after all other plugins
      codecovRollupPlugin({
        enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
        bundleName: '@chanzuckerberg/eds',
        uploadToken: process.env.CODECOV_TOKEN,
        telemetry: false,
      }),
    ],
  },
  // ES modules. The package stays `"type": "commonjs"`, so these files need the
  // .mjs extension for Node to read them as modules. Declarations are left to
  // the CommonJS build above and shared through the `types` export condition.
  {
    input: INPUT,
    output: {
      ...sharedOutput,
      format: 'es',
      entryFileNames: '[name].mjs',
      chunkFileNames: '[name].mjs',
    },
    external: EXTERNAL,
    plugins: [
      nodeResolve(),
      styles(),
      typescript({
        tsconfig: 'tsconfig.build.json',
        declaration: false,
        declarationMap: false,
        declarationDir: undefined,
      }),
      commonjs(),
    ],
  },
];
