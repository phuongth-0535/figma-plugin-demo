const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(process.env.ACTION_INPUTS_URL);

    try {
        if (process.env.ACTION_INPUTS_SELECTOR) {
            await page.waitForSelector(process.env.ACTION_INPUTS_SELECTOR);
            const element = await page.$(process.env.ACTION_INPUTS_SELECTOR);
            await element.screenshot({path: process.env.ACTION_INPUTS_OUTPUT });
        } else {
            await page.screenshot({path: process.env.ACTION_INPUTS_OUTPUT });
        }
    } catch (e) {
        console.log("Capture screen failed.")
    }

    await browser.close();
})();
