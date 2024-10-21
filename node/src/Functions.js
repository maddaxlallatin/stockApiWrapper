var baseURL = "https://api.maddaxlallatin.com/stock/v1/";

async function getEndpoint(url) {
    axios = require("axios");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: url,
      headers: {},
    };

    var response = await axios.request(config);
    
    return response.data;
  }

  async function getTrending(){
    var url = `${baseURL}trending`
    return await getEndpoint(url);
  }

  async function getGainers(){
    var url = `${baseURL}gainers`
    return await getEndpoint(url);
  }

  async function getLosers(){
    var url = `${baseURL}losers`
    return await getEndpoint(url);
  }

  async function getSectors(){
    var url = `${baseURL}sectors`
    return await getEndpoint(url);
  }

module.exports = getGainers;
module.exports = getLosers;
module.exports = getSectors;
module.exports = getTrending; 