const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser. newPage()
    await page.goto('https://www.youtube.com/@Illya.Landar')

    let arr = await page.evaluate(() => {

        let text = document.querySelector('#video-title').innerText
        return text

    })

    console.log(arr)

    await browser.close()
})()