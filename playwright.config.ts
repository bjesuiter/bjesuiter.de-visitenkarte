import { defineConfig } from "@playwright/test";

const previewHost = "127.0.0.1";
const previewPort = 4321;
const previewURL = `http://${previewHost}:${previewPort}`;

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  outputDir: "tmp/playwright/test-results",
  reporter: [
    ["list"],
    ["html", { open: "never", outputFolder: "tmp/playwright/report" }],
  ],
  expect: {
    toHaveScreenshot: {
      animations: "allow",
      maxDiffPixelRatio: 0.001,
      scale: "css",
    },
  },
  use: {
    baseURL: previewURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "minimal-chromium",
      use: {
        browserName: "chromium",
        viewport: { width: 300, height: 500 },
      },
    },
    {
      name: "iphone-12-pro-chromium",
      use: {
        browserName: "chromium",
        viewport: { width: 390, height: 844 },
      },
    },
    {
      name: "tablet-chromium",
      use: {
        browserName: "chromium",
        viewport: { width: 768, height: 1024 },
      },
    },
    {
      name: "desktop-chromium",
      use: {
        browserName: "chromium",
        viewport: { width: 1440, height: 1200 },
      },
    },
  ],
  webServer: {
    command: `bun run preview --host ${previewHost} --port ${previewPort}`,
    url: previewURL,
    reuseExistingServer: true,
    stdout: "pipe",
    stderr: "pipe",
    timeout: 120_000,
  },
});
