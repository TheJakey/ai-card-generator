import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "~": path.resolve(__dirname, "./node_modules"),
      },
    },
    server: {
      proxy: {
        "/webapi": {
          target: env.VITE_WEBAPI_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/webapi/, ""),
        },
      },
    },
  };
});
