// import "vite/modulepreload-polyfill";

const { resolve } = require("path");

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve("./vue_app"),
  base: "/static/",
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: false,
  },
  resolve: {
    extensions: [".js"],
  },
  build: {
    outDir: resolve("./dist"),
    assetsDir: "",
    manifest: true,
    emptyOutDir: true,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      main: resolve("./src/main.js"),
    },
  },
  plugins: [vue()],
});
