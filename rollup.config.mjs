import commonjs from '@rollup/plugin-commonjs';
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
  external: ['../../icons/spritemap/spritemap.svg', 'react-children-by-type'],
  plugins: [
    commonjs(),
    postcss({
      extract: true,
      modules: true,
    }),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
  ],
};
