import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  minify: "terser",
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      external: [], // Remove react and react-dom from here
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
      include: ["react", "react-dom"],
      exclude: [],
    },
  },
});
