import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/employer/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "employer-dashboard-dist",
    lib: {
      entry: path.resolve(__dirname, "src/pages/DashboardContent.tsx"),
      name: "DashboardContent",
      fileName: "dashboard-content",
      formats: ["es"], // ใช้ ES module
    },
    rollupOptions: {
      external: ["react", "react-dom"], // React ต้องโหลดจาก CDN
    },
  },
}));
