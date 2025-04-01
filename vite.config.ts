import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Configure SVG processing to handle namespaces
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false, // Disable SVGO optimization to preserve namespaces
        replaceAttrValues: {
          "#000": "currentColor",
        },
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // Use the same port as CRA for consistency
    open: true,
  },
});
