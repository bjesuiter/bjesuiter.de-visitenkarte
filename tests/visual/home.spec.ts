import { expect, test } from "@playwright/test";

const screenshotDelayMs = 250;
const homepageCases = [
  { name: "de-homepage", path: "/de/" },
  { name: "en-homepage", path: "/en/" },
] as const;

for (const homepage of homepageCases) {
  test(`${homepage.name} matches the approved baseline`, async ({ page }) => {
    const response = await page.goto(homepage.path, { waitUntil: "load" });

    expect(response).not.toBeNull();
    expect(response?.ok()).toBeTruthy();

    await expect(page).toHaveURL(new RegExp(`${escapeRegex(homepage.path)}$`));
    await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();

    await page.waitForTimeout(screenshotDelayMs);

    await expect(page).toHaveScreenshot(`${homepage.name}.png`, {
      fullPage: true,
    });
  });
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
