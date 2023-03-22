const intervalID = setInterval(parser, 3000);

function parser(){
const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser. newPage()
    await page.goto('http://127.0.0.1:5500/test.html')

    let arr = await page.evaluate(() => {

        let text = Array.from(document.querySelectorAll('div'), el => el.innerText)
        return text
    })
 
    arr = arr.map(parseFloat)
    console.log(arr)

    await browser.close()
})()
}

function graf(){
    const ctx = document.getElementById('myChart');
      
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          //backgroundColor: ['red', 'yellow', 'green'],//
          data: [35, 20,  10, 7, 80, 90 ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    }
    
    graf();