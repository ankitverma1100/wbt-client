import react from "@vitejs/plugin-react"

import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    open: true,
  },
  build: {
    // outDir: "ant-client"
    outDir: "build",
    sourcemap: true,
  },
})
