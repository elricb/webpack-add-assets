import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {terser} from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import {babel} from "@rollup/plugin-babel";
import packageJson from "./package.json";

const MINIFY = true;

const rollupConfig = {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    resolve(),
    commonjs({transformMixedEsModules: true}),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled"
    })
  ],
  external: ["webpack"]
};

if (MINIFY === true) {
  rollupConfig.plugins.push(terser());
}

export default rollupConfig;
