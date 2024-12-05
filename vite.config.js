import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: false,
      filename: "stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  minify: "terser",
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      external: ["react", "react-dom"],
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules/react")) {
            return "react-core";
          }
          if (id.includes("node_modules/react-router")) {
            return "react-router";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    optimizeDeps: {
      exclude: ["react", "react-dom"],
    },
  },
});
