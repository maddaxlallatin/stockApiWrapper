# yahoo-finance-wrapper
API wrapper for [https://github.com/maddaxlallatin/stockAPI](https://github.com/maddaxlallatin/stockAPI), an UNOFFICAL yahoo finance api

# Installation
`npm i yahoo-finance-wrapper`

# Example Usage

```js
//Import the Module
const YahooFinance = require("yahoo-finance-wrapper");

//Create A new stock class
const appleStock = new YahooFinance.Stock("AAPL");
const nvidiaStock = new YahooFinance.Stock("NVDA");

async function getStockInfo() {
    //get the Price of apple stock and print to console
    var applePrice = await appleStock.getPrice();
    console.log(applePrice.price);
    
    //get historical price for the nvidia stock
    console.log(await nvidiaStock.getHistory());
    //get dividends for the nvidia stock
    console.log(await nvidiaStock.getDividends());

    //Get information on stoks that are currently trending
    console.log(await YahooFinance.getTrending());
}

getStockInfo();
```

# Documentation 

[View the documentation on Github](https://github.com/maddaxlallatin/stockApiWrapper/blob/main/node/Documentation.md)