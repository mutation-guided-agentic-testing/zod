import { type ViteUserConfig, defineConfig, mergeConfig } from "vitest/config";
import sharedConfig from './packages/zod/vitest.shared.config.js'

export default mergeConfig(
  sharedConfig,
  defineConfig({
    test: {
      projects: [
        "./packages/*/vitest.config.ts",
        "./vitest.compile.config.ts",
      ],
    },
  }),
) as ViteUserConfig;
