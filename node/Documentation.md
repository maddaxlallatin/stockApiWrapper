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

# General Functions
``const YahooFinance = require("yahoo-finance-wrapper");``

### Trending Stocks

``var trendingStocks = await YahooFinance.getTrending()``

<details>
  <summary>Sample Output</summary>
  
```json
  {
  trendingStocks: [
    {
      ticker: 'NVDA',
      companyName: 'NVIDIA Corporation',
      price: '142.31',
      change: '+4.31',
      changePercent: '+3.12%',
      volume: '211.276M',
      averageVolume: '324.87M',
      marketCap: '3.491T',
      priceEarningsRatio: '66.50',
      yearChangePercent: '221.12%',
      dayChart: 'https://finance.yahoo.com/chart/NVDA'
    },
    {
      ticker: 'SAVE',
      companyName: 'Spirit Airlines, Inc.',
      price: '2.2797',
      change: '+0.8097',
      changePercent: '+55.08%',
      volume: '80.615M',
      averageVolume: '5.339M',
      marketCap: '249.668M',
      priceEarningsRatio: '-',
      yearChangePercent: '-91.06%',
      dayChart: 'https://finance.yahoo.com/chart/SAVE'
    },
    {
      ticker: 'GNPX',
      companyName: 'Genprex, Inc.',
      price: '1.4900',
      change: '+1.0710',
      changePercent: '+255.61%',
      volume: '269.017M',
      averageVolume: '632,068',
      marketCap: '3.857M',
      priceEarningsRatio: '-',
      yearChangePercent: '-96.41%',
      dayChart: 'https://finance.yahoo.com/chart/GNPX'
    },
    {
      ticker: 'IONQ',
      companyName: 'IonQ, Inc.',
      price: '15.12',
      change: '+1.82',
      changePercent: '+13.72%',
      volume: '25.864M',
      averageVolume: '6.796M',
      marketCap: '3.238B',
      priceEarningsRatio: '-',
      yearChangePercent: '5.22%',
      dayChart: 'https://finance.yahoo.com/chart/IONQ'
    },
    {
      ticker: 'BIVI',
      companyName: 'BioVie Inc.',
      price: '2.9100',
      change: '+0.5600',
      changePercent: '+23.83%',
      volume: '140.099M',
      averageVolume: '981,225',
      marketCap: '23.231M',
      priceEarningsRatio: '-',
      yearChangePercent: '-92.79%',
      dayChart: 'https://finance.yahoo.com/chart/BIVI'
    },
    {
      ticker: 'BA',
      companyName: 'The Boeing Company',
      price: '159.73',
      change: '+4.73',
      changePercent: '+3.05%',
      volume: '11.529M',
      averageVolume: '7.677M',
      marketCap: '98.429B',
      priceEarningsRatio: '-',
      yearChangePercent: '-14.38%',
      dayChart: 'https://finance.yahoo.com/chart/BA'
    },
    {
      ticker: 'WULF',
      companyName: 'TeraWulf Inc.',
      price: '6.08',
      change: '+0.84',
      changePercent: '+16.03%',
      volume: '51.216M',
      averageVolume: '19.211M',
      marketCap: '2.326B',
      priceEarningsRatio: '-',
      yearChangePercent: '336.67%',
      dayChart: 'https://finance.yahoo.com/chart/WULF'
    },
    {
      ticker: 'GRI',
      companyName: 'GRI Bio, Inc.',
      price: '1.3352',
      change: '+0.7552',
      changePercent: '+129.27%',
      volume: '113.097M',
      averageVolume: '1.659M',
      marketCap: '3.909M',
      priceEarningsRatio: '0.02',
      yearChangePercent: '-99.42%',
      dayChart: 'https://finance.yahoo.com/chart/GRI'
    },
    {
      ticker: 'HOWL',
      companyName: 'Werewolf Therapeutics, Inc.',
      price: '2.8500',
      change: '+0.8000',
      changePercent: '+39.21%',
      volume: '9.392M',
      averageVolume: '160,492',
      marketCap: '124.551M',
      priceEarningsRatio: '-',
      yearChangePercent: '15.17%',
      dayChart: 'https://finance.yahoo.com/chart/HOWL'
    },
    {
      ticker: 'IVP',
      companyName: 'Inspire Veterinary Partners, Inc.',
      price: '0.3422',
      change: '+0.0955',
      changePercent: '+38.55%',
      volume: '349.288M',
      averageVolume: '3.168M',
      marketCap: '2.558M',
      priceEarningsRatio: '-',
      yearChangePercent: '-99.73%',
      dayChart: 'https://finance.yahoo.com/chart/IVP'
    },
    {
      ticker: 'APP',
      companyName: 'AppLovin Corporation',
      price: '159.24',
      change: '+14.01',
      changePercent: '+9.65%',
      volume: '4.742M',
      averageVolume: '4.171M',
      marketCap: '53.224B',
      priceEarningsRatio: '68.05',
      yearChangePercent: '285.81%',
      dayChart: 'https://finance.yahoo.com/chart/APP'
    },
    {
      ticker: 'TGT',
      companyName: 'Target Corporation',
      price: '150.60',
      change: '-6.24',
      changePercent: '-3.98%',
      volume: '3.035M',
      averageVolume: '4.1M',
      marketCap: '69.378B',
      priceEarningsRatio: '15.56',
      yearChangePercent: '46.01%',
      dayChart: 'https://finance.yahoo.com/chart/TGT'
    },
    {
      ticker: 'GRAB',
      companyName: 'Grab Holdings Limited',
      price: '4.0450',
      change: '+0.3150',
      changePercent: '+8.45%',
      volume: '48.348M',
      averageVolume: '24.283M',
      marketCap: '16.022B',
      priceEarningsRatio: '-',
      yearChangePercent: '14.77%',
      dayChart: 'https://finance.yahoo.com/chart/GRAB'
    },
    {
      ticker: 'NNE',
      companyName: 'NANO Nuclear Energy Inc.',
      price: '27.30',
      change: '+6.92',
      changePercent: '+33.95%',
      volume: '10.743M',
      averageVolume: '2.895M',
      marketCap: '822.486M',
      priceEarningsRatio: '-',
      yearChangePercent: '292.68%',
      dayChart: 'https://finance.yahoo.com/chart/NNE'
    },
    {
      ticker: 'SYTA',
      companyName: 'Siyata Mobile Inc.',
      price: '1.7702',
      change: '+0.7602',
      changePercent: '+75.27%',
      volume: '118.275M',
      averageVolume: '998,860',
      marketCap: '5.586M',
      priceEarningsRatio: '0.01',
      yearChangePercent: '-99.55%',
      dayChart: 'https://finance.yahoo.com/chart/SYTA'
    },
    {
      ticker: 'TSLA',
      companyName: 'Tesla, Inc.',
      price: '217.96',
      change: '-2.74',
      changePercent: '-1.24%',
      volume: '42.311M',
      averageVolume: '80.743M',
      marketCap: '696.304B',
      priceEarningsRatio: '61.40',
      yearChangePercent: '4.06%',
      dayChart: 'https://finance.yahoo.com/chart/TSLA'
    },
    {
      ticker: 'UPS',
      companyName: 'United Parcel Service, Inc.',
      price: '131.28',
      change: '-4.65',
      changePercent: '-3.42%',
      volume: '3.033M',
      averageVolume: '4.628M',
      marketCap: '112.452B',
      priceEarningsRatio: '21.42',
      yearChangePercent: '-8.25%',
      dayChart: 'https://finance.yahoo.com/chart/UPS'
    },
    {
      ticker: 'RKT',
      companyName: 'Rocket Companies, Inc.',
      price: '16.60',
      change: '-1.41',
      changePercent: '-7.80%',
      volume: '4.684M',
      averageVolume: '3.416M',
      marketCap: '32.999B',
      priceEarningsRatio: '9.21',
      yearChangePercent: '144.70%',
      dayChart: 'https://finance.yahoo.com/chart/RKT'
    },
    {
      ticker: 'KVUE',
      companyName: 'Kenvue Inc.',
      price: '22.92',
      change: '+1.20',
      changePercent: '+5.52%',
      volume: '32.545M',
      averageVolume: '15.625M',
      marketCap: '43.896B',
      priceEarningsRatio: '40.21',
      yearChangePercent: '10.37%',
      dayChart: 'https://finance.yahoo.com/chart/KVUE'
    },
    {
      ticker: 'NBIS',
      companyName: 'Nebius Group N.V.',
      price: '19.10',
      change: '+0.16',
      changePercent: '+0.84%',
      volume: '11.026M',
      averageVolume: '0',
      marketCap: '-',
      priceEarningsRatio: '-',
      yearChangePercent: '0.00%',
      dayChart: 'https://finance.yahoo.com/chart/NBIS'
    },
    {
      ticker: 'ROAD',
      companyName: 'Construction Partners, Inc.',
      price: '84.24',
      change: '+9.54',
      changePercent: '+12.77%',
      volume: '919,683',
      averageVolume: '351,165',
      marketCap: '4.445B',
      priceEarningsRatio: '62.87',
      yearChangePercent: '95.19%',
      dayChart: 'https://finance.yahoo.com/chart/ROAD'
    },
    {
      ticker: 'HD',
      companyName: 'The Home Depot, Inc.',
      price: '405.60',
      change: '-9.40',
      changePercent: '-2.27%',
      volume: '2.607M',
      averageVolume: '3.242M',
      marketCap: '402.879B',
      priceEarningsRatio: '27.22',
      yearChangePercent: '45.58%',
      dayChart: 'https://finance.yahoo.com/chart/HD'
    },
    {
      ticker: 'BLDR',
      companyName: 'Builders FirstSource, Inc.',
      price: '184.34',
      change: '-10.63',
      changePercent: '-5.45%',
      volume: '870,595',
      averageVolume: '1.518M',
      marketCap: '21.467B',
      priceEarningsRatio: '16.24',
      yearChangePercent: '75.79%',
      dayChart: 'https://finance.yahoo.com/chart/BLDR'
    },
    {
      ticker: 'HIMS',
      companyName: 'Hims & Hers Health, Inc.',
      price: '23.12',
      change: '+0.97',
      changePercent: '+4.38%',
      volume: '6.225M',
      averageVolume: '9.814M',
      marketCap: '5.004B',
      priceEarningsRatio: '289.00',
      yearChangePercent: '257.84%',
      dayChart: 'https://finance.yahoo.com/chart/HIMS'
    },
    {
      ticker: 'KSCP',
      companyName: 'Knightscope, Inc.',
      price: '14.82',
      change: '+3.72',
      changePercent: '+33.51%',
      volume: '2.772M',
      averageVolume: '130,875',
      marketCap: '45.296M',
      priceEarningsRatio: '-',
      yearChangePercent: '-72.59%',
      dayChart: 'https://finance.yahoo.com/chart/KSCP'
    }
  ]
}
```

</details>

### Top Gainers

``var topGainers = await YahooFinance.getGainers()``

<details>
  <summary>Sample Output</summary>
  
```json{
  topGainers: [
    {
      ticker: 'SOTDF',
      companyName: 'SOTDF Ströer SE & Co. KGaA',
      price: '63.42',
      change: '+29.42',
      changePercent: '+86.53%',
      volume: '17,280',
      averageVolume: '5',
      marketCap: '3.533B',
      priceEarningsRatio: '30.06',
      yearChangePercent: '50.46%',
      dayChart: 'https://finance.yahoo.com/chart/SOTDF'
    },
    {
      ticker: 'EFGIF',
      companyName: 'EFGIF EFG International AG',
      price: '13.74',
      change: '+5.59',
      changePercent: '+68.59%',
      volume: '119,104',
      averageVolume: '145',
      marketCap: '4.19B',
      priceEarningsRatio: '12.38',
      yearChangePercent: '25.48%',
      dayChart: 'https://finance.yahoo.com/chart/EFGIF'
    },
    {
      ticker: 'OKLO',
      companyName: 'OKLO Oklo Inc.',
      price: '22.39',
      change: '+4.16',
      changePercent: '+22.79%',
      volume: '50.007M',
      averageVolume: '5.691M',
      marketCap: '2.733B',
      priceEarningsRatio: '-',
      yearChangePercent: '76.65%',
      dayChart: 'https://finance.yahoo.com/chart/OKLO'
    },
    {
      ticker: 'WULF',
      companyName: 'WULF TeraWulf Inc.',
      price: '6.05',
      change: '+0.82',
      changePercent: '+15.55%',
      volume: '50.948M',
      averageVolume: '19.211M',
      marketCap: '2.317B',
      priceEarningsRatio: '-',
      yearChangePercent: '336.67%',
      dayChart: 'https://finance.yahoo.com/chart/WULF'
    },
    {
      ticker: 'IONQ',
      companyName: 'IONQ IonQ, Inc.',
      price: '15.16',
      change: '+1.86',
      changePercent: '+13.98%',
      volume: '25.441M',
      averageVolume: '6.796M',
      marketCap: '3.245B',
      priceEarningsRatio: '-',
      yearChangePercent: '5.22%',
      dayChart: 'https://finance.yahoo.com/chart/IONQ'
    },
    {
      ticker: 'ROAD',
      companyName: 'ROAD Construction Partners, Inc.',
      price: '84.49',
      change: '+9.79',
      changePercent: '+13.10%',
      volume: '910,873',
      averageVolume: '351,165',
      marketCap: '4.458B',
      priceEarningsRatio: '63.05',
      yearChangePercent: '95.19%',
      dayChart: 'https://finance.yahoo.com/chart/ROAD'
    },
    {
      ticker: 'APP',
      companyName: 'APP AppLovin Corporation',
      price: '159.18',
      change: '+13.96',
      changePercent: '+9.61%',
      volume: '4.686M',
      averageVolume: '4.171M',
      marketCap: '53.206B',
      priceEarningsRatio: '68.03',
      yearChangePercent: '285.81%',
      dayChart: 'https://finance.yahoo.com/chart/APP'
    },
    {
      ticker: 'WRBY',
      companyName: 'WRBY Warby Parker Inc.',
      price: '17.90',
      change: '+1.35',
      changePercent: '+8.13%',
      volume: '1.704M',
      averageVolume: '1.647M',
      marketCap: '2.144B',
      priceEarningsRatio: '-',
      yearChangePercent: '19.49%',
      dayChart: 'https://finance.yahoo.com/chart/WRBY'
    },
    {
      ticker: 'ZIM',
      companyName: 'ZIM ZIM Integrated Shipping Services Ltd.',
      price: '24.68',
      change: '+1.81',
      changePercent: '+7.91%',
      volume: '8.636M',
      averageVolume: '5.605M',
      marketCap: '2.97B',
      priceEarningsRatio: '-',
      yearChangePercent: '184.10%',
      dayChart: 'https://finance.yahoo.com/chart/ZIM'
    },
    {
      ticker: 'TAL',
      companyName: 'TAL TAL Education Group',
      price: '11.09',
      change: '+0.71',
      changePercent: '+6.84%',
      volume: '6.732M',
      averageVolume: '7.741M',
      marketCap: '6.701B',
      priceEarningsRatio: '138.62',
      yearChangePercent: '8.01%',
      dayChart: 'https://finance.yahoo.com/chart/TAL'
    },
    {
      ticker: 'DJT',
      companyName: 'DJT Trump Media & Technology Group Corp.',
      price: '31.57',
      change: '+1.99',
      changePercent: '+6.72%',
      volume: '33.97M',
      averageVolume: '14.816M',
      marketCap: '6.319B',
      priceEarningsRatio: '-',
      yearChangePercent: '99.33%',
      dayChart: 'https://finance.yahoo.com/chart/DJT'
    },
    {
      ticker: 'CRDO',
      companyName: 'CRDO Credo Technology Group Holding Ltd',
      price: '39.73',
      change: '+2.42',
      changePercent: '+6.49%',
      volume: '1.972M',
      averageVolume: '2.365M',
      marketCap: '6.598B',
      priceEarningsRatio: '-',
      yearChangePercent: '156.43%',
      dayChart: 'https://finance.yahoo.com/chart/CRDO'
    },
    {
      ticker: 'RBA',
      companyName: 'RBA RB Global, Inc.',
      price: '86.07',
      change: '+4.96',
      changePercent: '+6.12%',
      volume: '1.293M',
      averageVolume: '785,379',
      marketCap: '15.871B',
      priceEarningsRatio: '47.29',
      yearChangePercent: '29.57%',
      dayChart: 'https://finance.yahoo.com/chart/RBA'
    },
    {
      ticker: 'KVUE',
      companyName: 'KVUE Kenvue Inc.',
      price: '22.95',
      change: '+1.24',
      changePercent: '+5.69%',
      volume: '32.436M',
      averageVolume: '15.625M',
      marketCap: '43.963B',
      priceEarningsRatio: '40.27',
      yearChangePercent: '10.37%',
      dayChart: 'https://finance.yahoo.com/chart/KVUE'
    },
    {
      ticker: 'BEPC',
      companyName: 'BEPC Brookfield Renewable Corporation',
      price: '34.78',
      change: '+1.57',
      changePercent: '+4.73%',
      volume: '2.416M',
      averageVolume: '830,390',
      marketCap: '6.251B',
      priceEarningsRatio: '8.42',
      yearChangePercent: '39.25%',
      dayChart: 'https://finance.yahoo.com/chart/BEPC'
    },
    {
      ticker: 'HIMS',
      companyName: 'HIMS Hims & Hers Health, Inc.',
      price: '23.14',
      change: '+0.99',
      changePercent: '+4.45%',
      volume: '6.159M',
      averageVolume: '9.814M',
      marketCap: '5.007B',
      priceEarningsRatio: '289.19',
      yearChangePercent: '257.84%',
      dayChart: 'https://finance.yahoo.com/chart/HIMS'
    },
    {
      ticker: 'DJTWW',
      companyName: 'DJTWW Trump Media & Technology Group Corp.',
      price: '22.71',
      change: '+0.99',
      changePercent: '+4.53%',
      volume: '362,498',
      averageVolume: '538,253',
      marketCap: '6.191B',
      priceEarningsRatio: '-',
      yearChangePercent: '-8.74%',
      dayChart: 'https://finance.yahoo.com/chart/DJTWW'
    },
    {
      ticker: 'SPNS',
      companyName: 'SPNS Sapiens International Corporation N.V.',
      price: '38.02',
      change: '+1.65',
      changePercent: '+4.54%',
      volume: '87,819',
      averageVolume: '114,301',
      marketCap: '2.119B',
      priceEarningsRatio: '30.91',
      yearChangePercent: '44.90%',
      dayChart: 'https://finance.yahoo.com/chart/SPNS'
    },
    {
      ticker: 'HDB',
      companyName: 'HDB HDFC Bank Limited',
      price: '63.55',
      change: '+2.68',
      changePercent: '+4.40%',
      volume: '2.59M',
      averageVolume: '2.85M',
      marketCap: '161.645B',
      priceEarningsRatio: '20.17',
      yearChangePercent: '7.45%',
      dayChart: 'https://finance.yahoo.com/chart/HDB'
    },
    {
      ticker: 'ALKT',
      companyName: 'ALKT Alkami Technology, Inc.',
      price: '37.96',
      change: '+1.62',
      changePercent: '+4.46%',
      volume: '1.485M',
      averageVolume: '530,551',
      marketCap: '3.757B',
      priceEarningsRatio: '-',
      yearChangePercent: '101.55%',
      dayChart: 'https://finance.yahoo.com/chart/ALKT'
    },
    {
      ticker: 'SG',
      companyName: 'SG Sweetgreen, Inc.',
      price: '36.69',
      change: '+1.42',
      changePercent: '+4.03%',
      volume: '1.647M',
      averageVolume: '3.429M',
      marketCap: '4.188B',
      priceEarningsRatio: '-',
      yearChangePercent: '225.97%',
      dayChart: 'https://finance.yahoo.com/chart/SG'
    },
    {
      ticker: 'FNMAS',
      companyName: 'FNMAS Federal National Mortgage Association',
      price: '5.41',
      change: '+0.21',
      changePercent: '+4.04%',
      volume: '573,426',
      averageVolume: '842,421',
      marketCap: '6.848B',
      priceEarningsRatio: '772.86',
      yearChangePercent: '137.90%',
      dayChart: 'https://finance.yahoo.com/chart/FNMAS'
    },
    {
      ticker: 'ERJ',
      companyName: 'ERJ Embraer S.A.',
      price: '35.18',
      change: '+1.32',
      changePercent: '+3.90%',
      volume: '1.402M',
      averageVolume: '1.569M',
      marketCap: '6.474B',
      priceEarningsRatio: '17.00',
      yearChangePercent: '138.28%',
      dayChart: 'https://finance.yahoo.com/chart/ERJ'
    },
    {
      ticker: 'SITM',
      companyName: 'SITM SiTime Corporation',
      price: '181.69',
      change: '+6.72',
      changePercent: '+3.84%',
      volume: '80,755',
      averageVolume: '194,226',
      marketCap: '4.203B',
      priceEarningsRatio: '-',
      yearChangePercent: '66.72%',
      dayChart: 'https://finance.yahoo.com/chart/SITM'
    },
    {
      ticker: 'ELF',
      companyName: 'ELF e.l.f. Beauty, Inc.',
      price: '112.28',
      change: '+4.08',
      changePercent: '+3.77%',
      volume: '2.958M',
      averageVolume: '2.297M',
      marketCap: '6.331B',
      priceEarningsRatio: '53.72',
      yearChangePercent: '2.54%',
      dayChart: 'https://finance.yahoo.com/chart/ELF'
    }
  ]
}
```

</details>

### Top Losers

``var topLosers = await YahooFinance.getLosers()``
<details>
  <summary>Sample Output</summary>
  
```json
  {
  topLosers: [
    {
      ticker: 'NMRA',
      companyName: 'NMRA Neumora Therapeutics, Inc.',
      price: '14.14',
      change: '-2.35',
      changePercent: '-14.25%',
      volume: '2.202M',
      averageVolume: '803,018',
      marketCap: '2.263B',
      priceEarningsRatio: '-',
      yearChangePercent: '68.61%',
      dayChart: 'https://finance.yahoo.com/chart/NMRA'
    },
    {
      ticker: 'ICHBF',
      companyName: 'ICHBF Industrias CH, S. A. B. de C. V.',
      price: '9.92',
      change: '-1.18',
      changePercent: '-10.67%',
      volume: '4,200',
      averageVolume: '46',
      marketCap: '4.329B',
      priceEarningsRatio: '9.01',
      yearChangePercent: '-15.97%',
      dayChart: 'https://finance.yahoo.com/chart/ICHBF'
    },
    {
      ticker: 'W',
      companyName: 'W Wayfair Inc.',
      price: '47.89',
      change: '-4.32',
      changePercent: '-8.27%',
      volume: '6.453M',
      averageVolume: '4.343M',
      marketCap: '5.913B',
      priceEarningsRatio: '-',
      yearChangePercent: '23.17%',
      dayChart: 'https://finance.yahoo.com/chart/W'
    },
    {
      ticker: 'VFC',
      companyName: 'VFC V.F. Corporation',
      price: '18.07',
      change: '-1.53',
      changePercent: '-7.83%',
      volume: '9.099M',
      averageVolume: '6.622M',
      marketCap: '7.031B',
      priceEarningsRatio: '-',
      yearChangePercent: '12.13%',
      dayChart: 'https://finance.yahoo.com/chart/VFC'
    },
    {
      ticker: 'RKT',
      companyName: 'RKT Rocket Companies, Inc.',
      price: '16.62',
      change: '-1.39',
      changePercent: '-7.69%',
      volume: '4.702M',
      averageVolume: '3.416M',
      marketCap: '33.039B',
      priceEarningsRatio: '9.23',
      yearChangePercent: '144.70%',
      dayChart: 'https://finance.yahoo.com/chart/RKT'
    },
    {
      ticker: 'RNA',
      companyName: 'RNA Avidity Biosciences, Inc.',
      price: '46.71',
      change: '-3.74',
      changePercent: '-7.42%',
      volume: '870,234',
      averageVolume: '1.356M',
      marketCap: '5.521B',
      priceEarningsRatio: '-',
      yearChangePercent: '900.99%',
      dayChart: 'https://finance.yahoo.com/chart/RNA'
    },
    {
      ticker: 'QBEIF',
      companyName: 'QBEIF QBE Insurance Group Limited',
      price: '11.15',
      change: '-0.85',
      changePercent: '-7.08%',
      volume: '36,417',
      averageVolume: '1,792',
      marketCap: '17.437B',
      priceEarningsRatio: '9.61',
      yearChangePercent: '13.54%',
      dayChart: 'https://finance.yahoo.com/chart/QBEIF'
    },
    {
      ticker: 'ACLX',
      companyName: 'ACLX Arcellx, Inc.',
      price: '90.04',
      change: '-6.82',
      changePercent: '-7.04%',
      volume: '401,637',
      averageVolume: '463,342',
      marketCap: '4.84B',
      priceEarningsRatio: '-',
      yearChangePercent: '199.14%',
      dayChart: 'https://finance.yahoo.com/chart/ACLX'
    },
    {
      ticker: 'AUB',
      companyName: 'AUB Atlantic Union Bankshares Corporation',
      price: '36.23',
      change: '-2.58',
      changePercent: '-6.65%',
      volume: '6.395M',
      averageVolume: '419,717',
      marketCap: '3.253B',
      priceEarningsRatio: '16.17',
      yearChangePercent: '39.96%',
      dayChart: 'https://finance.yahoo.com/chart/AUB'
    },
    {
      ticker: 'RUN',
      companyName: 'RUN Sunrun Inc.',
      price: '13.69',
      change: '-0.92',
      changePercent: '-6.33%',
      volume: '8.596M',
      averageVolume: '8.593M',
      marketCap: '3.059B',
      priceEarningsRatio: '-',
      yearChangePercent: '47.87%',
      dayChart: 'https://finance.yahoo.com/chart/RUN'
    },
    {
      ticker: 'SKY',
      companyName: 'SKY Champion Homes, Inc.',
      price: '93.69',
      change: '-6.25',
      changePercent: '-6.25%',
      volume: '216,530',
      averageVolume: '416,842',
      marketCap: '5.395B',
      priceEarningsRatio: '38.56',
      yearChangePercent: '69.48%',
      dayChart: 'https://finance.yahoo.com/chart/SKY'
    },
    {
      ticker: 'BLD',
      companyName: 'BLD TopBuild Corp.',
      price: '389.65',
      change: '-25.12',
      changePercent: '-6.06%',
      volume: '195,407',
      averageVolume: '287,931',
      marketCap: '11.754B',
      priceEarningsRatio: '20.07',
      yearChangePercent: '83.20%',
      dayChart: 'https://finance.yahoo.com/chart/BLD'
    },
    {
      ticker: 'AUR',
      companyName: 'AUR Aurora Innovation, Inc.',
      price: '5.93',
      change: '-0.38',
      changePercent: '-5.94%',
      volume: '3.911M',
      averageVolume: '8.955M',
      marketCap: '10.106B',
      priceEarningsRatio: '-',
      yearChangePercent: '250.56%',
      dayChart: 'https://finance.yahoo.com/chart/AUR'
    },
    {
      ticker: 'AGYS',
      companyName: 'AGYS Agilysys, Inc.',
      price: '116.58',
      change: '-7.36',
      changePercent: '-5.94%',
      volume: '171,586',
      averageVolume: '202,582',
      marketCap: '3.25B',
      priceEarningsRatio: '32.12',
      yearChangePercent: '93.96%',
      dayChart: 'https://finance.yahoo.com/chart/AGYS'
    },
    {
      ticker: 'PAY',
      companyName: 'PAY Paymentus Holdings, Inc.',
      price: '24.92',
      change: '-1.72',
      changePercent: '-6.46%',
      volume: '336,877',
      averageVolume: '189,187',
      marketCap: '3.102B',
      priceEarningsRatio: '95.85',
      yearChangePercent: '81.47%',
      dayChart: 'https://finance.yahoo.com/chart/PAY'
    },
    {
      ticker: 'WAFD',
      companyName: 'WAFD WaFd, Inc.',
      price: '34.05',
      change: '-2.12',
      changePercent: '-5.86%',
      volume: '533,546',
      averageVolume: '538,709',
      marketCap: '2.766B',
      priceEarningsRatio: '13.62',
      yearChangePercent: '49.46%',
      dayChart: 'https://finance.yahoo.com/chart/WAFD'
    },
    {
      ticker: 'WAL',
      companyName: 'WAL Western Alliance Bancorporation',
      price: '80.47',
      change: '-5.06',
      changePercent: '-5.92%',
      volume: '2.114M',
      averageVolume: '1.478M',
      marketCap: '8.86B',
      priceEarningsRatio: '12.44',
      yearChangePercent: '105.01%',
      dayChart: 'https://finance.yahoo.com/chart/WAL'
    },
    {
      ticker: 'PTON',
      companyName: 'PTON Peloton Interactive, Inc.',
      price: '5.49',
      change: '-0.35',
      changePercent: '-5.91%',
      volume: '11.126M',
      averageVolume: '15.597M',
      marketCap: '2.068B',
      priceEarningsRatio: '-',
      yearChangePercent: '24.26%',
      dayChart: 'https://finance.yahoo.com/chart/PTON'
    },
    {
      ticker: 'CCS',
      companyName: 'CCS Century Communities, Inc.',
      price: '96.96',
      change: '-5.94',
      changePercent: '-5.77%',
      volume: '177,128',
      averageVolume: '275,295',
      marketCap: '3.039B',
      priceEarningsRatio: '9.68',
      yearChangePercent: '72.68%',
      dayChart: 'https://finance.yahoo.com/chart/CCS'
    },
    {
      ticker: 'JBLU',
      companyName: 'JBLU JetBlue Airways Corporation',
      price: '7.59',
      change: '-0.46',
      changePercent: '-5.72%',
      volume: '11.808M',
      averageVolume: '17.85M',
      marketCap: '2.632B',
      priceEarningsRatio: '-',
      yearChangePercent: '80.49%',
      dayChart: 'https://finance.yahoo.com/chart/JBLU'
    },
    {
      ticker: 'ARDT',
      companyName: 'ARDT Ardent Health Partners, Inc.',
      price: '18.46',
      change: '-1.08',
      changePercent: '-5.53%',
      volume: '166,568',
      averageVolume: '390,667',
      marketCap: '2.635B',
      priceEarningsRatio: '31.29',
      yearChangePercent: '21.67%',
      dayChart: 'https://finance.yahoo.com/chart/ARDT'
    },
    {
      ticker: 'RVMD',
      companyName: 'RVMD Revolution Medicines, Inc.',
      price: '47.70',
      change: '-2.73',
      changePercent: '-5.41%',
      volume: '767,766',
      averageVolume: '1.018M',
      marketCap: '7.968B',
      priceEarningsRatio: '-',
      yearChangePercent: '174.75%',
      dayChart: 'https://finance.yahoo.com/chart/RVMD'
    },
    {
      ticker: 'CSTM',
      companyName: 'CSTM Constellium SE',
      price: '14.20',
      change: '-0.80',
      changePercent: '-5.33%',
      volume: '592,947',
      averageVolume: '1.167M',
      marketCap: '2.077B',
      priceEarningsRatio: '12.14',
      yearChangePercent: '-6.89%',
      dayChart: 'https://finance.yahoo.com/chart/CSTM'
    },
    {
      ticker: 'BLDR',
      companyName: 'BLDR Builders FirstSource, Inc.',
      price: '184.68',
      change: '-10.29',
      changePercent: '-5.28%',
      volume: '882,273',
      averageVolume: '1.518M',
      marketCap: '21.507B',
      priceEarningsRatio: '16.27',
      yearChangePercent: '75.79%',
      dayChart: 'https://finance.yahoo.com/chart/BLDR'
    },
    {
      ticker: 'IBP',
      companyName: 'IBP Installed Building Products, Inc.',
      price: '240.96',
      change: '-13.46',
      changePercent: '-5.29%',
      volume: '122,497',
      averageVolume: '270,412',
      marketCap: '6.803B',
      priceEarningsRatio: '26.89',
      yearChangePercent: '129.41%',
      dayChart: 'https://finance.yahoo.com/chart/IBP'
    }
  ]
}
```

</details>

### Stock Sectors
``var stockSectors = await YahooFinance.getSectors()``
<details>
  <summary>Sample Output</summary>
  
```json
  {
  sectors: [
    {
      sectorName: 'Technology',
      marketWeight: '29.08%',
      ytdReturn: '+31.63%'
    },
    {
      sectorName: 'Financial Services',
      marketWeight: '14.90%',
      ytdReturn: '+22.27%'
    },
    {
      sectorName: 'Healthcare',
      marketWeight: '10.61%',
      ytdReturn: '+10.02%'
    },
    {
      sectorName: 'Consumer Cyclical',
      marketWeight: '10.46%',
      ytdReturn: '+11.37%'
    },
    {
      sectorName: 'Industrials',
      marketWeight: '8.66%',
      ytdReturn: '+13.10%'
    },
    {
      sectorName: 'Communication Services',
      marketWeight: '8.52%',
      ytdReturn: '+23.64%'
    },
    {
      sectorName: 'Consumer Defensive',
      marketWeight: '5.45%',
      ytdReturn: '+15.30%'
    },
    {
      sectorName: 'Energy',
      marketWeight: '4.58%',
      ytdReturn: '+7.94%'
    },
    {
      sectorName: 'Basic Materials',
      marketWeight: '2.71%',
      ytdReturn: '+12.76%'
    },
    {
      sectorName: 'Real Estate',
      marketWeight: '2.63%',
      ytdReturn: '+12.39%'
    },
    {
      sectorName: 'Utilities',
      marketWeight: '2.40%',
      ytdReturn: '+33.50%'
    }
  ]
}

```

</details>

# Stock Class
``const Stock = new YahooFinance.Stock("{TICKER}");``

### Get Price 

`var stockPrice = await Stock.getPrice()`

Sample Output
```json
{
  ticker: 'AAPL',
  price: '236.10',
  dayHigh: '236.85',
  dayLow: '234.45',
  yearHigh: '237.49',
  yearLow: '164.08',
  volume: '24,702,096'
}
```

### Get History
`var stockHistory = await Stock.getHistory()`

 Specifc Date Range
```js
startDate = "2024-10-18" //YYYY-MM-DD
endDate = "2024-10-21" //YYYY-MM-DD
var stockPrice = await Stock.getHistory(startDate, endDate)
```
Sample Output
```json
{
  ticker: 'AAPL',
  stockHistory: [
    {
      date: 'Oct 18, 2024',
      open: '236.18',
      high: '236.18',
      low: '234.01',
      close: '235.00',
      adjustedClose: '235.00',
      volume: '46,416,300'
    }
  ]
}
```

### Get News
`var stockNews = await Stock.getNews()`

**Specifc Number of Articles (1-10)**

`var stockNews = await Stock.getNews(1)`

Sample Output:
```json
{
  ticker: 'AAPL',
  newsArticles: [
    {
      title: 'Qualcomm reveals AI smartphone chip, as industry leans into AI phones',
      description: 'Qualcomm announced its latest smartphone chip packed with AI features.',
      link: 'https://finance.yahoo.com/news/qualcomm-reveals-ai-smartphone-chip-as-industry-leans-into-ai-phones-190015353.html'
    }
  ]
}
```

### Get Profile
`var stockProfile = await Stock.getProfile()`

Sample Output:
```json
{
  ticker: 'AAPL',
  company: 'Apple Inc.',
  sector: 'Technology Consumer Electronics',
  industry: 'Consumer Electronics',
  ceo: 'Mr. Timothy D. Cook',
  employees: '161,000'
}
```


### Get Analyst Recommendations
`var stockAnalystRecommendations = await Stock.getAnalystRecommendations()`
<details>
  <summary>Sample Output</summary>
  
```json
{
  ticker: 'AAPL',
  analystRecommendations: [
    {
      analyst: 'Wedbush',
      overallScore: '70',
      directionScore: '72',
      priceScore: '90',
      rating: 'Outperform',
      priceTarget: '300',
      date: '9/11/2024'
    },
    {
      analyst: 'Baird',
      overallScore: '70',
      directionScore: '74',
      priceScore: '97',
      rating: 'Outperform',
      priceTarget: '240',
      date: '7/26/2024'
    },
    {
      analyst: 'Needham',
      overallScore: '69',
      directionScore: '75',
      priceScore: '97',
      rating: 'Buy',
      priceTarget: '260',
      date: '9/25/2024'
    },
    {
      analyst: 'Canaccord Genuity',
      overallScore: '68',
      directionScore: '69',
      priceScore: '96',
      rating: 'Buy',
      priceTarget: '215',
      date: '5/4/2024'
    },
    {
      analyst: 'UBS',
      overallScore: '67',
      directionScore: '67',
      priceScore: '89',
      rating: 'Neutral',
      priceTarget: '236',
      date: '9/4/2024'
    },
    {
      analyst: 'Morgan Stanley',
      overallScore: '67',
      directionScore: '69',
      priceScore: '93',
      rating: 'Overweight',
      priceTarget: '273',
      date: '9/11/2024'
    },
    {
      analyst: 'Piper Sandler',
      overallScore: '67',
      directionScore: '72',
      priceScore: '84',
      rating: 'Neutral',
      priceTarget: '225',
      date: '10/10/2024'
    },
    {
      analyst: 'Raymond James',
      overallScore: '66',
      directionScore: '72',
      priceScore: '69',
      rating: 'Outperform',
      priceTarget: '250',
      date: '7/26/2024'
    },
    {
      analyst: 'Tigress Financial',
      overallScore: '65',
      directionScore: '64',
      priceScore: '100',
      rating: 'Strong Buy',
      priceTarget: '295',
      date: '8/28/2024'
    },
    {
      analyst: 'DA Davidson',
      overallScore: '65',
      directionScore: '63',
      priceScore: '98',
      rating: 'Buy',
      priceTarget: '230',
      date: '6/11/2024'
    }
  ]
}

```
</details>

### Get Dividends
`var stockDividends = await Stock.getDividends()`

Sample Output
```json
{
  ticker: 'AAPL',
  stockDividends: [
    { date: 'Aug 12, 2024', dividend: '0.25 Dividend' },
    { date: 'May 10, 2024', dividend: '0.25 Dividend' },
    { date: 'Feb 9, 2024', dividend: '0.24 Dividend' },
    { date: 'Nov 10, 2023', dividend: '0.24 Dividend' },
    { date: 'Aug 11, 2023', dividend: '0.24 Dividend' },
    { date: 'May 12, 2023', dividend: '0.24 Dividend' },
    { date: 'Feb 10, 2023', dividend: '0.23 Dividend' },
    { date: 'Nov 4, 2022', dividend: '0.23 Dividend' },
    { date: 'Aug 5, 2022', dividend: '0.23 Dividend' },
    { date: 'May 6, 2022', dividend: '0.23 Dividend' },
    { date: 'Feb 4, 2022', dividend: '0.22 Dividend' },
    { date: 'Nov 5, 2021', dividend: '0.22 Dividend' },
    { date: 'Aug 6, 2021', dividend: '0.22 Dividend' },
    { date: 'May 7, 2021', dividend: '0.22 Dividend' },
    { date: 'Feb 5, 2021', dividend: '0.21 Dividend' }
  ]
}
```

### Get Earnings
`var stockDividends = await Stock.getEarnings()`
<details>
  <summary>Sample Output</summary>

```json

{
  ticker: 'AAPL',
  stockEarnings: [
    {
      earningsDate: 'Oct 31, 2024, 4 PM EDT',
      epsEstimate: '1.55',
      reportedEPS: '-',
      surprisePercent: '-'
    },
    {
      earningsDate: 'Aug 01, 2024, 4 PM EDT',
      epsEstimate: '1.35',
      reportedEPS: '1.4',
      surprisePercent: '+3.99'
    },
    {
      earningsDate: 'May 02, 2024, 4 PM EDT',
      epsEstimate: '1.5',
      reportedEPS: '1.53',
      surprisePercent: '+1.97'
    },
    {
      earningsDate: 'Feb 01, 2024, 4 PM EST',
      epsEstimate: '2.1',
      reportedEPS: '2.18',
      surprisePercent: '+3.9'
    },
    {
      earningsDate: 'Nov 02, 2023, 4 PM EDT',
      epsEstimate: '1.39',
      reportedEPS: '1.46',
      surprisePercent: '+4.92'
    },
    {
      earningsDate: 'Aug 03, 2023, 4 PM EDT',
      epsEstimate: '1.19',
      reportedEPS: '1.26',
      surprisePercent: '+5.49'
    },
    {
      earningsDate: 'May 04, 2023, 4 PM EDT',
      epsEstimate: '1.43',
      reportedEPS: '1.52',
      surprisePercent: '+6.03'
    },
    {
      earningsDate: 'Feb 02, 2023, 4 PM EST',
      epsEstimate: '1.94',
      reportedEPS: '1.88',
      surprisePercent: '-2.88'
    },
    {
      earningsDate: 'Oct 27, 2022, 4 PM EDT',
      epsEstimate: '1.27',
      reportedEPS: '1.29',
      surprisePercent: '+1.55'
    },
    {
      earningsDate: 'Jul 28, 2022, 4 PM EDT',
      epsEstimate: '1.16',
      reportedEPS: '1.2',
      surprisePercent: '+3.25'
    },
    {
      earningsDate: 'Apr 28, 2022, 4 PM EDT',
      epsEstimate: '1.43',
      reportedEPS: '1.52',
      surprisePercent: '+6.44'
    },
    {
      earningsDate: 'Jan 27, 2022, 4 PM EST',
      epsEstimate: '1.89',
      reportedEPS: '2.1',
      surprisePercent: '+11.17'
    },
    {
      earningsDate: 'Oct 28, 2021, 4 PM EDT',
      epsEstimate: '1.24',
      reportedEPS: '1.24',
      surprisePercent: '+0.3'
    },
    {
      earningsDate: 'Jul 27, 2021, 4 PM EDT',
      epsEstimate: '1.01',
      reportedEPS: '1.3',
      surprisePercent: '+29.12'
    },
    {
      earningsDate: 'Apr 28, 2021, 4 PM EDT',
      epsEstimate: '0.99',
      reportedEPS: '1.4',
      surprisePercent: '+41.89'
    },
    {
      earningsDate: 'Jan 27, 2021, 4 PM EST',
      epsEstimate: '1.41',
      reportedEPS: '1.68',
      surprisePercent: '+19.02'
    },
    {
      earningsDate: 'Oct 29, 2020, 4 PM EDT',
      epsEstimate: '0.7',
      reportedEPS: '0.73',
      surprisePercent: '+4.25'
    },
    {
      earningsDate: 'Jul 30, 2020, 4 PM EDT',
      epsEstimate: '0.51',
      reportedEPS: '0.65',
      surprisePercent: '+26.25'
    },
    {
      earningsDate: 'Apr 30, 2020, 4 PM EDT',
      epsEstimate: '0.57',
      reportedEPS: '0.64',
      surprisePercent: '+12.78'
    },
    {
      earningsDate: 'Jan 28, 2020, 4 PM EST',
      epsEstimate: '1.14',
      reportedEPS: '1.25',
      surprisePercent: '+9.73'
    },
    {
      earningsDate: 'Oct 30, 2019, 4 PM EDT',
      epsEstimate: '0.71',
      reportedEPS: '0.76',
      surprisePercent: '+6.71'
    },
    {
      earningsDate: 'Jul 30, 2019, 4 PM EDT',
      epsEstimate: '0.52',
      reportedEPS: '0.55',
      surprisePercent: '+3.9'
    },
    {
      earningsDate: 'Apr 30, 2019, 4 PM EDT',
      epsEstimate: '0.59',
      reportedEPS: '0.62',
      surprisePercent: '+4.18'
    },
    {
      earningsDate: 'Jan 29, 2019, 4 PM EST',
      epsEstimate: '1.04',
      reportedEPS: '1.05',
      surprisePercent: '+0.31'
    },
    {
      earningsDate: 'Nov 01, 2018, 4 PM EDT',
      epsEstimate: '0.7',
      reportedEPS: '0.73',
      surprisePercent: '+4.56'
    },
    {
      earningsDate: 'Jul 31, 2018, 4 PM EDT',
      epsEstimate: '0.55',
      reportedEPS: '0.59',
      surprisePercent: '+7.27'
    },
    {
      earningsDate: 'May 01, 2018, 4 PM EDT',
      epsEstimate: '0.67',
      reportedEPS: '0.68',
      surprisePercent: '+2.14'
    },
    {
      earningsDate: 'Feb 01, 2018, 4 PM EST',
      epsEstimate: '0.96',
      reportedEPS: '0.97',
      surprisePercent: '+0.87'
    },
    {
      earningsDate: 'Nov 02, 2017, 4 PM EDT',
      epsEstimate: '0.47',
      reportedEPS: '0.52',
      surprisePercent: '+10.85'
    },
    {
      earningsDate: 'Aug 01, 2017, 4 PM EDT',
      epsEstimate: '0.39',
      reportedEPS: '0.42',
      surprisePercent: '+6.27'
    },
    {
      earningsDate: 'May 02, 2017, 4 PM EDT',
      epsEstimate: '0.5',
      reportedEPS: '0.53',
      surprisePercent: '+3.97'
    },
    {
      earningsDate: 'Jan 31, 2017, 4 PM EST',
      epsEstimate: '0.8',
      reportedEPS: '0.84',
      surprisePercent: '+4.55'
    },
    {
      earningsDate: 'Oct 25, 2016, 4 PM EDT',
      epsEstimate: '0.41',
      reportedEPS: '0.42',
      surprisePercent: '+0.84'
    },
    {
      earningsDate: 'Jul 26, 2016, 4 PM EDT',
      epsEstimate: '0.35',
      reportedEPS: '0.36',
      surprisePercent: '+2.6'
    },
    {
      earningsDate: 'Apr 26, 2016, 4 PM EDT',
      epsEstimate: '0.5',
      reportedEPS: '0.48',
      surprisePercent: '-4.89'
    },
    {
      earningsDate: 'Jan 26, 2016, 4 PM EST',
      epsEstimate: '0.81',
      reportedEPS: '0.82',
      surprisePercent: '+1.63'
    },
    {
      earningsDate: 'Oct 27, 2015, 4 PM EDT',
      epsEstimate: '0.47',
      reportedEPS: '0.49',
      surprisePercent: '+4.26'
    },
    {
      earningsDate: 'Jul 21, 2015, 4 PM EDT',
      epsEstimate: '0.45',
      reportedEPS: '0.46',
      surprisePercent: '+2.13'
    },
    {
      earningsDate: 'Apr 27, 2015, 4 PM EDT',
      epsEstimate: '0.54',
      reportedEPS: '0.58',
      surprisePercent: '+7.93'
    },
    {
      earningsDate: 'Jan 27, 2015, 4 PM EST',
      epsEstimate: '0.65',
      reportedEPS: '0.77',
      surprisePercent: '+17.52'
    },
    {
      earningsDate: 'Oct 20, 2014, 4 PM EDT',
      epsEstimate: '0.33',
      reportedEPS: '0.36',
      surprisePercent: '+8.8'
    },
    {
      earningsDate: 'Jul 22, 2014, 12 A MEDT',
      epsEstimate: '0.31',
      reportedEPS: '0.32',
      surprisePercent: '+3.98'
    },
    {
      earningsDate: 'Apr 23, 2014, 12 A MEDT',
      epsEstimate: '0.36',
      reportedEPS: '0.42',
      surprisePercent: '+13.99'
    },
    {
      earningsDate: 'Jan 27, 2014, 12 A MEST',
      epsEstimate: '0.5',
      reportedEPS: '0.52',
      surprisePercent: '+3.08'
    },
    {
      earningsDate: 'Oct 28, 2013, 12 A MEDT',
      epsEstimate: '0.28',
      reportedEPS: '0.3',
      surprisePercent: '+3.82'
    },
    {
      earningsDate: 'Jul 23, 2013, 12 A MEDT',
      epsEstimate: '0.26',
      reportedEPS: '0.27',
      surprisePercent: '+2.05'
    },
    {
      earningsDate: 'Apr 23, 2013, 12 A MEDT',
      epsEstimate: '0.36',
      reportedEPS: '0.36',
      surprisePercent: '+0.88'
    },
    {
      earningsDate: 'Jan 23, 2013, 12 A MEST',
      epsEstimate: '0.48',
      reportedEPS: '0.49',
      surprisePercent: '+2.52'
    },
    {
      earningsDate: 'Oct 25, 2012, 12 A MEDT',
      epsEstimate: '0.31',
      reportedEPS: '0.31',
      surprisePercent: '-0.92'
    },
    {
      earningsDate: 'Jul 24, 2012, 12 A MEDT',
      epsEstimate: '0.37',
      reportedEPS: '0.33',
      surprisePercent: '-10.12'
    },
    {
      earningsDate: 'Apr 24, 2012, 12 A MEDT',
      epsEstimate: '0.36',
      reportedEPS: '0.44',
      surprisePercent: '+22.56'
    },
    {
      earningsDate: 'Jan 24, 2012, 12 A MEST',
      epsEstimate: '0.36',
      reportedEPS: '0.5',
      surprisePercent: '+36.46'
    },
    {
      earningsDate: 'Oct 18, 2011, 12 A MEDT',
      epsEstimate: '0.26',
      reportedEPS: '0.25',
      surprisePercent: '-4.54'
    },
    {
      earningsDate: 'Jul 19, 2011, 12 A MEDT',
      epsEstimate: '0.21',
      reportedEPS: '0.28',
      surprisePercent: '+33.58'
    },
    {
      earningsDate: 'Apr 20, 2011, 12 A MEDT',
      epsEstimate: '0.19',
      reportedEPS: '0.23',
      surprisePercent: '+19.09'
    },
    {
      earningsDate: 'Jan 18, 2011, 12 A MEST',
      epsEstimate: '0.19',
      reportedEPS: '0.23',
      surprisePercent: '+19.03'
    },
    {
      earningsDate: 'Oct 18, 2010, 12 A MEDT',
      epsEstimate: '0.15',
      reportedEPS: '0.17',
      surprisePercent: '+13.65'
    },
    {
      earningsDate: 'Jul 20, 2010, 12 A MEDT',
      epsEstimate: '0.11',
      reportedEPS: '0.13',
      surprisePercent: '+12.68'
    },
    {
      earningsDate: 'Apr 20, 2010, 12 A MEDT',
      epsEstimate: '0.09',
      reportedEPS: '0.12',
      surprisePercent: '+36.11'
    },
    {
      earningsDate: 'Jan 25, 2010, 12 A MEST',
      epsEstimate: '0.07',
      reportedEPS: '0.13',
      surprisePercent: '+76'
    },
    {
      earningsDate: 'Oct 19, 2009, 12 A MEDT',
      epsEstimate: '0.05',
      reportedEPS: '0.07',
      surprisePercent: '+27.8'
    },
    {
      earningsDate: 'Jul 21, 2009, 12 A MEDT',
      epsEstimate: '0.04',
      reportedEPS: '0.05',
      surprisePercent: '+15.03'
    },
    {
      earningsDate: 'Apr 22, 2009, 12 A MEDT',
      epsEstimate: '0.04',
      reportedEPS: '0.05',
      surprisePercent: '+22.05'
    },
    {
      earningsDate: 'Jan 21, 2009, 12 A MEST',
      epsEstimate: '0.05',
      reportedEPS: '0.06',
      surprisePercent: '+28.27'
    },
    {
      earningsDate: 'Oct 21, 2008, 12 A MEDT',
      epsEstimate: '0.04',
      reportedEPS: '0.05',
      surprisePercent: '+13.29'
    },
    {
      earningsDate: 'Jul 21, 2008, 12 A MEDT',
      epsEstimate: '0.04',
      reportedEPS: '0.04',
      surprisePercent: '+10.39'
    },
    {
      earningsDate: 'Apr 23, 2008, 12 A MEDT',
      epsEstimate: '0.04',
      reportedEPS: '0.04',
      surprisePercent: '+8.12'
    },
    {
      earningsDate: 'Jan 22, 2008, 12 A MEST',
      epsEstimate: '0.06',
      reportedEPS: '0.06',
      surprisePercent: '+8.87'
    },
    {
      earningsDate: 'Oct 22, 2007, 12 A MEDT',
      epsEstimate: '0.03',
      reportedEPS: '0.04',
      surprisePercent: '+17.88'
    },
    {
      earningsDate: 'Jul 25, 2007, 12 A MEDT',
      epsEstimate: '0.03',
      reportedEPS: '0.03',
      surprisePercent: '+27.07'
    },
    {
      earningsDate: 'Apr 25, 2007, 12 A MEDT',
      epsEstimate: '0.02',
      reportedEPS: '0.03',
      surprisePercent: '+35.91'
    },
    {
      earningsDate: 'Jan 17, 2007, 12 A MEST',
      epsEstimate: '0.03',
      reportedEPS: '0.04',
      surprisePercent: '+45.34'
    },
    {
      earningsDate: 'Oct 18, 2006, 12 A MEDT',
      epsEstimate: '0.02',
      reportedEPS: '0.02',
      surprisePercent: '+22.52'
    },
    {
      earningsDate: 'Jul 19, 2006, 12 A MEDT',
      epsEstimate: '0.02',
      reportedEPS: '0.02',
      surprisePercent: '+22.87'
    },
    {
      earningsDate: 'Apr 19, 2006, 12 A MEDT',
      epsEstimate: '0.02',
      reportedEPS: '0.02',
      surprisePercent: '+8.25'
    },
    {
      earningsDate: 'Jan 18, 2006, 12 A MEST',
      epsEstimate: '0.02',
      reportedEPS: '0.02',
      surprisePercent: '+7.06'
    },
    {
      earningsDate: 'Oct 11, 2005, 12 A MEDT',
      epsEstimate: '0.01',
      reportedEPS: '0.01',
      surprisePercent: '+2.11'
    },
    {
      earningsDate: 'Jul 13, 2005, 12 A MEDT',
      epsEstimate: '0.01',
      reportedEPS: '0.01',
      surprisePercent: '+17.95'
    },
    {
      earningsDate: 'Apr 13, 2005, 12 A MEDT',
      epsEstimate: '0.01',
      reportedEPS: '0.01',
      surprisePercent: '+39.7'
    },
    {
      earningsDate: 'Jan 12, 2005, 12 A MEST',
      epsEstimate: '0.01',
      reportedEPS: '0.01',
      surprisePercent: '+43.84'
    },
    {
      earningsDate: 'Oct 18, 2000, 12 A MEDT',
      epsEstimate: '0.01',
      reportedEPS: '0.01',
      surprisePercent: '-3.94'
    },
    {
      earningsDate: 'Jul 18, 2000, 12 A MEDT',
      epsEstimate: '0.01',
      reportedEPS: '0.01',
      surprisePercent: '+3.08'
    },
    {
      earningsDate: 'Apr 19, 2000, 12 A MEDT',
      epsEstimate: '0.01',
      reportedEPS: '0.01',
      surprisePercent: '+9.62'
    },
    {
      earningsDate: 'Jan 19, 2000, 12 A MEST',
      epsEstimate: '0.01',
      reportedEPS: '0.01',
      surprisePercent: '+11.21'
    }
  ]
}
```
</details>


### Get Financials

`var stockFinancials = await Stock.getFinancials()`

Specifc Financial Data
```js
var incomeStatement = true
var balanceSheet = true 
var cashFlow = false
var stockFinancials = await Stock.getFinancials(incomeStatement, balanceSheet, cashFlow)`
```

```
stockFinancials: [
    {
      fiscalYear: '2023',
      totalRevenue: 383285000,
      costOfRevenue: 214137000,
      grossProfit: 169148000,
      operatingExpense: 54847000,
      operatingIncome: 114301000,
      netNonOperatingInterestExpense: -183000,
      otherIncomeExpense: -382000,
      pretaxIncome: 113736000,
      taxProvision: 16741000,
      netIncomeCommonStockholders: 96995000,
      dilutedNIAvailableToCommonStockholders: 96995000,
      basicEPS: 6.16,
      dilutedEPS: 6.13,
      basicAverageShares: 15744231,
      dilutedAverageShares: 15812547,
      totalOperatingIncomeAsReported: 114301000,
      totalExpenses: 268984000,
      netIncomeFromContinuingAndDiscontinuedOperation: 96995000,
      normalizedIncome: 96995000,
      interestIncome: 3750000,
      interestExpense: 3933000,
      netInterestIncome: -183000,
      reconciledCostOfRevenue: 214137000,
      reconciledDeprecation: 11519000,
      netIncomeFromContinuingOperationNetMinorityInterest: 96995000,
      normalizedEBITDA: 129188000,
      taxRateForCalcs: 0,
      ebit: 117669000,
      ebitda: 129188000
    },
    {
      fiscalYear: '2023',
      totalAssets: 352583000,
      totalLiabilitiesNetMinorityInterest: 290437000,
      totalEquityGrossMinorityInterest: 62146000,
      totalCapitalization: 157427000,
      commonStockEquity: 62146000,
      capitalLeaseObligations: 12842000,
      netTangibleAssets: 62146000,
      workingCapital: -1742000,
      investedCapital: 173234000,
      tangibleBookValue: 62146000,
      totalDebt: 123930000,
      netDebt: 81123000,
      shareIssued: 15550061,
      ordinarySharesNumber: 15550061
    }
  ]
}
```
