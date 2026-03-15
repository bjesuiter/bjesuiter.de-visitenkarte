import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { promisify } from "node:util";
import { expect, test, type Page } from "@playwright/test";

const execFileAsync = promisify(execFile);
const screenshotDelayMs = 400;
const skillPreviewPageIndexes = [2, 3] as const;
const laterProjectPageIndex = 5;
const printCases = [
  { name: "en-cv-print", path: "/en/cv/print/" },
  { name: "de-cv-print", path: "/de/lebenslauf/drucken/" },
] as const;

for (const printCase of printCases) {
  test(`${printCase.name} keeps preview and printed output aligned`, async ({
    page,
  }, testInfo) => {
    test.skip(
      testInfo.project.name !== "desktop-chromium",
      "Print regression snapshots are only approved for the desktop A4 layout.",
    );

    const tempDir = await mkdtemp(join(tmpdir(), `${printCase.name}-`));

    try {
      const response = await page.goto(printCase.path, { waitUntil: "load" });

      expect(response).not.toBeNull();
      expect(response?.ok()).toBeTruthy();

      await page.waitForTimeout(screenshotDelayMs);

      const previewPageCount = await page.locator(".cv-print-page").count();
      expect(previewPageCount).toBeGreaterThan(0);

      const previewState = await getPrintLayoutState(page);
      expect(previewState.hasOverflow).toBeFalsy();

      await expect(page.locator(".cv-print-page").first()).toHaveScreenshot(
        `${printCase.name}-preview-page-01.png`,
      );

      for (const pageIndex of skillPreviewPageIndexes) {
        await expect(
          page.locator(".cv-print-page").nth(pageIndex),
        ).toHaveScreenshot(
          `${printCase.name}-preview-page-${String(pageIndex + 1).padStart(2, "0")}.png`,
        );
      }

      await page.emulateMedia({ media: "print" });

      const printState = await getPrintLayoutState(page);
      expect(
        Math.abs(printState.pageWidth - previewState.pageWidth),
      ).toBeLessThan(1);
      expect(
        Math.abs(printState.pageHeight - previewState.pageHeight),
      ).toBeLessThan(1);
      expect(printState.pageBoxShadow).toBe("none");
      expect(printState.sheetBorderTopWidth).toBe("0px");
      expect(printState.sheetBorderRightWidth).toBe("0px");
      expect(printState.dockDisplay).toBe("none");

      await expect(page.locator(".cv-print-page").first()).toHaveScreenshot(
        `${printCase.name}-print-page-01.png`,
      );

      for (const pageIndex of skillPreviewPageIndexes) {
        await expect(
          page.locator(".cv-print-page").nth(pageIndex),
        ).toHaveScreenshot(
          `${printCase.name}-print-page-${String(pageIndex + 1).padStart(2, "0")}.png`,
        );
      }

      const laterPage = page
        .locator(".cv-print-page")
        .nth(Math.min(laterProjectPageIndex, previewPageCount - 1));
      await expect(laterPage).toHaveScreenshot(
        `${printCase.name}-print-page-${String(Math.min(laterProjectPageIndex, previewPageCount - 1) + 1).padStart(2, "0")}.png`,
      );

      const pdfPath = join(tempDir, `${printCase.name}.pdf`);
      await page.pdf({
        path: pdfPath,
        printBackground: true,
        preferCSSPageSize: true,
      });

      const pdfText = (await readFile(pdfPath)).toString("latin1");
      const pdfPageCount = (pdfText.match(/\/Type\s*\/Page\b/g) ?? []).length;
      expect(pdfPageCount).toBe(previewPageCount);

      const pdfPreviewPath = await renderPdfFirstPage(pdfPath, tempDir);
      if (pdfPreviewPath) {
        await expect(await readFile(pdfPreviewPath)).toMatchSnapshot(
          `${printCase.name}-pdf-page-01.png`,
        );
      }
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
}

async function getPrintLayoutState(page: Page) {
  return page.evaluate(() => {
    const firstPage = document.querySelector(
      ".cv-print-page",
    ) as HTMLElement | null;
    const firstSheet = document.querySelector(
      ".cv-sheet-page",
    ) as HTMLElement | null;
    const dock = document.querySelector(
      ".print\\:hidden",
    ) as HTMLElement | null;
    const pageRect = firstPage?.getBoundingClientRect();
    const sheetStyle = firstSheet ? getComputedStyle(firstSheet) : null;
    const pageStyle = firstPage ? getComputedStyle(firstPage) : null;
    const overflowState = (
      window as Window & {
        __cvPrintOverflowState?: Array<{ overflow?: boolean }>;
      }
    ).__cvPrintOverflowState;

    return {
      pageWidth: pageRect?.width ?? 0,
      pageHeight: pageRect?.height ?? 0,
      pageBoxShadow: pageStyle?.boxShadow ?? "",
      sheetBorderTopWidth: sheetStyle?.borderTopWidth ?? "",
      sheetBorderRightWidth: sheetStyle?.borderRightWidth ?? "",
      dockDisplay: dock ? getComputedStyle(dock).display : null,
      hasOverflow: Array.isArray(overflowState)
        ? overflowState.some((entry) => entry?.overflow)
        : false,
    };
  });
}

async function renderPdfFirstPage(pdfPath: string, outputDir: string) {
  if (process.platform !== "darwin") {
    return null;
  }

  try {
    await execFileAsync("qlmanage", [
      "-t",
      "-s",
      "2000",
      "-o",
      outputDir,
      pdfPath,
    ]);
  } catch {
    return null;
  }

  const thumbnailPath = join(outputDir, `${basename(pdfPath)}.png`);
  try {
    await readFile(thumbnailPath);
    return thumbnailPath;
  } catch {
    return null;
  }
}
