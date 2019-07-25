/*
* A Promised NodeJS Module for connecting with the Qredit QAE API
*/

var request = require("request");

var qaeApi = /** @class */ (function () 
{

    function qaeApi(apiURL) 
    {
        if (apiURL === void 0)
            this.apiURL = 'https://qae.qredit.cloud/api';
        else
            this.apiURL = apiURL;
            
        return this;
    }
    
    qaeApi.prototype.getApiUrl = function ()
    {
    
        return this.apiURL;
    
    };
    
  
    return qaeApi;
    
}());

exports.default = qaeApi;
