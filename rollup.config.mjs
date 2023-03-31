import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'lib/es',
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
    {
      dir: 'lib/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
  ],
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
      compilerOptions: {
        /**
         * Rollup wants declarations in the same directory as the output folder,
         * but since we ship both cjs and esm in separate folders, this will throw an error.
         * Declarations are hence built separately using tsc into lib/types
         */
        declaration: false,
        declarationDir: undefined,
      },
    }),
  ],
};
