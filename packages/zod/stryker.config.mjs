// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: "pnpm",
  testRunner: "vitest",
  mutate: ["src/v4/**/*.ts", "!src/v4/**/*.d.ts"],
  testFiles: ["src/v4/**/*.test.ts"],
  checkers: ["typescript"],
  tsconfigFile: "tsconfig.json",
  typescriptChecker: {
    prioritizePerformanceOverAccuracy: true,
  },
};
export default config;

