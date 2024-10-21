class Stock {
    constructor(ticker) {
      this.axios = require("axios");
      this.baseURL = "https://api.maddaxlallatin.com/stock/v1/";
      this.ticker = ticker;
    }
  
    async getPrice() {
     var url = `${this.baseURL}${this.ticker}/price`
      return await this.getEndpoint(url);
    }
  
    async getHistory(startDate, endDate) {
      var url =`${this.baseURL}${this.ticker}/history`
      if(startDate){
        url += `?start_date=${startDate}`
      }
      if(startDate && endDate){
        url += `&end_date=${endDate}`
      }
      return await this.getEndpoint(url);
    }
    
    async getNews(number = 10) {
      var url = `${this.baseURL}${this.ticker}/news?number=${number}`
      if(number){
        url += ``
      }
      return await this.getEndpoint(url);
    }
  
    async getProfile(){
      var url = `${this.baseURL}${this.ticker}/profile`
      return await this.getEndpoint(url);
    }
  
    async getAnaylstRecommendations(){
      var url = `${this.baseURL}${this.ticker}/analyst_recommendations`
      return await this.getEndpoint(url);
    }
  
    async getDividends(number = 15){
      var url = `${this.baseURL}${this.ticker}/dividends?number_dividends=${number}`
      return await this.getEndpoint(url);
    }
  
    async getEarnings(){
      var url = `${this.baseURL}${this.ticker}/earnings`
      return await this.getEndpoint(url);
    }
  
    async getFinancials(incomeStatement = true, balanceSheet = true, cashFlow = true){

      var url = `${this.baseURL}${this.ticker}/financials?income_statement=${incomeStatement}&balance_sheet=${balanceSheet}&cash_flow=${cashFlow}`
      return await this.getEndpoint(url);
    }
  
  
    async getEndpoint(url) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: url,
        headers: {},
      };
  
      var response = await this.axios.request(config);
      
      return response.data;
    }
  }
  
  module.exports = Stock;