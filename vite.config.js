import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      assets: "/src/assets",
      ui: "/src/components/ui",
      components: "/src/components",
      mockData: "/src/data",
      features: "/src/features",
      pages: "/src/pages",
      client: "/src/pages/Client",
      admin: "/src/pages/Admin",
      theme: "/src/theme",
      utils: "/src/utils",
      styles: "/src/styles",
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[local]__[contenthash:4]",
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
      include: "**/*.svg?react",
    }),
  ],
});
