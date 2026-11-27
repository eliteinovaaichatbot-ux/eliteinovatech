import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // A transitive dependency (stats-gl, pulled in via three-globe) nests its
    // own older three.js copy; without this, two THREE instances end up
    // loaded at once and instanceof checks across R3F/three-globe break.
    dedupe: ["three"],
  },
});
