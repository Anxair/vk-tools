import {Page} from 'puppeteer';

async function getScrolledDownPage(page: Page) {
  console.log('i\'m here');
  const scrollDown = async () => {
    let scrollY = 1;
    let prevScrollY = 0;

    const scrollTo = async () => {
      prevScrollY = scrollY;
      scrollY = await page.evaluate(() => {
        window.scrollTo(0, window.scrollY+5000);
        return window.scrollY;
      });
      console.log('scrollY '+scrollY);
    };

    while (scrollY !== prevScrollY) {
      await scrollTo();
      await page.waitFor(1000);
    }
  };

  await scrollDown();
  await page.waitFor(1000);
}

getScrolledDownPage.default = getScrolledDownPage;
export default getScrolledDownPage;
