import terser from "@rollup/plugin-terser";

export default {
  input: "./rollup/bundle.mjs",
  output: {
    file: "./dist/bundle.js",
    format: "iife",
  },
  plugins: [
    // Minifies bundle
    terser(),
  ],
};
