import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  define: {
    global: {}, // Define global as an empty object or as needed
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern", "legacy"
        importers: [
          // ...
        ],
      },
    },
  },
  base: "./",
});
