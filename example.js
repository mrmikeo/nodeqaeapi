/*
  Example of using this library without NPM install
*/

const qaeApi = require("./lib/qaeApi");
const qae = new qaeApi.default();


(async () => {
  
  var tokenList = await qae.listTokens();
  
  console.log(tokenList);
  
})();
