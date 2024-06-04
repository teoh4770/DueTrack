// https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "ES2020", // <--------- ✅✅✅✅✅✅
  },
  test: {
    globals: true,
    setupFiles: "src/setupTests.js",
  },
});
