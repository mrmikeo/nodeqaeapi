# Node Qredit QAE API Helper

A Promised NodeJS Module for connecting with the Qredit QAE API

## Install via git
```
git clone https://github.com/mrmikeo/nodeqaeapi
cd nodeqaeapi
npm install

node example.js
```

example.js:
```
const qaeApi = require("./lib/qaeApi");
const qae = new qaeApi.default();


(async () => {
  
  var tokenList = await qae.listTokens();
  
  console.log(tokenList);
  
})();
```

## Install via npm
```
npm install --save https://github.com/mrmikeo/nodeqaeapi
```

```
const qaeApi = require("nodeQaeApi");
const qae = new qaeApi.default();


(async () => {
  
  var tokenList = await qae.listTokens();
  
  console.log(tokenList);
  
})();
```
