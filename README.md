# Node Qredit QAE API Helper

[![Build Status](https://travis-ci.org/mrmikeo/nodeqaeapixxx.svg?branch=master)](https://travis-ci.org/mrmikeo/nodeqaeapixxx)
[![https://telegram.me/@MrMike_O](https://img.shields.io/badge/💬%20Telegram-MrMike__O-blue.svg)](https://telegram.me/@MrMike_O)


A Promised NodeJS Module for connecting with the Qredit QAE API

A Full Integration Guide for both QreditAPI and QAE can be found here:  [Qredit Integration Guide](https://github.com/mrmikeo/nodeqreditintegration)

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
