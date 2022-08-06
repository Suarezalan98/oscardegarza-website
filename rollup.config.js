import { nodeResolve } from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
import scss from "rollup-plugin-scss";

export default [
  {
    input: "./src/js/index.js",
    output: {
      dir: "./public/js/",
    },
    plugins: [scss({ output: "./public/js/style.css" }), css(), nodeResolve()],
  },
  {
    input: "./src/js/photo-grid.js",
    output: {
      dir: "./public/js/",
    },
    plugins: [scss({ output: "./public/js/style.css" }), css(), nodeResolve()],
  },
];
