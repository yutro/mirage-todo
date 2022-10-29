/// <reference types="vitest" />
/// <reference types="vite" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsConfigPaths(), react()],
	test: {
		globals: true,
		environment: "jsdom",
		css: false,
		setupFiles: "./testSetup.ts",
	},
});
