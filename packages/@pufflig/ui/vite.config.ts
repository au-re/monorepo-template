import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      $fonts: path.resolve(__dirname, "public/font"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "prompt-studio-ui",
      fileName: () => `index.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-error-boundary",
        "lodash.mergewith",
        "@emotion/react",
        "@emotion/styled",
        "framer-motion",
        "lodash.debounce",
        /@chakra-ui\/[a-zA-Z-]+/,
        "date-fns",
        "recharts",
        "@tanstack/react-table",
        "@monaco-editor/react",
        "papaparse",
        "react-resizable",
        "he",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts(), svgr()],
});
