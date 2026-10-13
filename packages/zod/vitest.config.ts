import { defineProject, mergeConfig } from "vitest/config";
import sharedConfig from './vitest.shared.config.js';

export default mergeConfig(
  sharedConfig,
  defineProject({
    resolve: {
      conditions: ["@zod/source", "default"],
    },
    test: {
      typecheck: {
        tsconfig: "./tsconfig.test.json",
      },
    },
  })
);
