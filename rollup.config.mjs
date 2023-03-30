import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
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
  ],
};
