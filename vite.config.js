import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/vite-template",
  build: {
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        404: resolve("404.html"),
      },
    },
  },
});
