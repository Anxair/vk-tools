import {Page} from 'puppeteer';

async function getScrolledDownPage(page: Page) {
  const scrollDown = async () => {
    let scrollY = 1;
    let prevScrollY = 0;

    const scrollTo = async () => {
      prevScrollY = scrollY;
      scrollY = await page.evaluate(() => {
        window.scrollTo(0, document.body.getBoundingClientRect().height);
        return window.scrollY;
      });
    };
    while (scrollY !== prevScrollY) {
      await scrollTo();
      await page.waitForTimeout(1000);
    }
  };
  await scrollDown();
  await page.waitForTimeout(1000);
}

export default getScrolledDownPage;
