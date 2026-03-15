import { expect, test } from "@playwright/test";

const autoprintWaitMs = 800;
const behaviorCases = [
  {
    localeName: "en",
    cvPath: "/en/cv/",
    printPath: "/en/cv/print/",
    linkName: "Print",
  },
  {
    localeName: "de",
    cvPath: "/de/lebenslauf/",
    printPath: "/de/lebenslauf/drucken/",
    linkName: "Drucken",
  },
] as const;

for (const behaviorCase of behaviorCases) {
  test.describe(`${behaviorCase.localeName} print behavior`, () => {
    test("plain print preview does not auto-open the print dialog", async ({
      context,
      page,
    }, testInfo) => {
      test.skip(
        testInfo.project.name !== "desktop-chromium",
        "Print dialog behavior is only verified on the desktop print flow.",
      );

      await context.addInitScript(() => {
        (window as Window & { __printCalls?: number }).__printCalls = 0;
        window.print = () => {
          (window as Window & { __printCalls?: number }).__printCalls =
            ((window as Window & { __printCalls?: number }).__printCalls ?? 0) +
            1;
        };
      });

      await page.goto(behaviorCase.printPath, { waitUntil: "load" });
      await page.waitForTimeout(autoprintWaitMs);

      const printCalls = await page.evaluate(
        () => (window as Window & { __printCalls?: number }).__printCalls ?? 0,
      );

      expect(printCalls).toBe(0);
    });

    test("print action opens a new tab and auto-opens the print dialog", async ({
      context,
      page,
    }, testInfo) => {
      test.skip(
        testInfo.project.name !== "desktop-chromium",
        "Print dialog behavior is only verified on the desktop print flow.",
      );

      await context.addInitScript(() => {
        (window as Window & { __printCalls?: number }).__printCalls = 0;
        window.print = () => {
          (window as Window & { __printCalls?: number }).__printCalls =
            ((window as Window & { __printCalls?: number }).__printCalls ?? 0) +
            1;
        };
      });

      await page.goto(behaviorCase.cvPath, { waitUntil: "load" });

      const printLink = page.getByRole("link", { name: behaviorCase.linkName });
      await expect(printLink).toBeVisible();
      await expect(printLink).toHaveAttribute(
        "href",
        `${behaviorCase.printPath}?autoprint=1`,
      );
      await expect(printLink).toHaveAttribute("target", "_blank");

      const [popup] = await Promise.all([
        page.waitForEvent("popup"),
        printLink.click(),
      ]);

      await popup.waitForLoadState("load");
      await popup.waitForFunction(
        () => (window as Window & { __printCalls?: number }).__printCalls === 1,
      );

      await expect
        .poll(async () => popup.url())
        .toBe(`${testInfo.project.use.baseURL}${behaviorCase.printPath}`);
    });
  });
}
