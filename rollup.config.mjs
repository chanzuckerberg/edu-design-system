import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json' assert { type: 'json' };

const allDeps = {
  ...packageJson.peerDependencies,
  ...packageJson.dependencies,
};

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  external: [...Object.keys(allDeps)],
  plugins: [
    postcss({
      extract: true,
      modules: true,
    }),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
  ],
};
