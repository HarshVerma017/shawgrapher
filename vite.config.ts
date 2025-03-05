import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/shawgrapher/", // Set this correctly to match your repo name
  plugins: [react()],
});
