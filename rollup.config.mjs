import { codecovRollupPlugin } from '@codecov/rollup-plugin';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'cjs',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
    interop: 'auto',
  },
  /**
   * With the nodeResolve plugin, this marks all EDS node_modules as external, aka provided by the consumer.
   * Since EDS is not imported directly into a web <script>, package managers (such as npm or yarn)
   * will install the deps listed in EDS package.json and hence won't need to be included in the bundle.
   */
  external: [/node_modules/],
  plugins: [
    nodeResolve(),
    postcss({
      extract: true,
      modules: true,
    }),
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
};
