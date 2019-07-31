/*
* A Promised NodeJS Module for connecting with the Qredit QAE API
*/

var request = require("request");
var Big = require('big.js');

var qaeApi = /** @class */ (function () 
{

    function qaeApi(apiURL) 
    {
        if (apiURL === void 0)
            this.apiURL = 'https://qae.qredit.cloud/api';
        else
            this.apiURL = apiURL;
            
        return this;
    };
    
    qaeApi.prototype.getApiUrl = function ()
    {
    
        return this.apiURL;
    
    };
    
    /* Status */
    
    qaeApi.prototype.getStatus = function ()
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/status', {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };
    
    qaeApi.prototype.getPeerInfo = function ()
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/peerinfo', {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };

    /* Tokens */
    
    qaeApi.prototype.listTokens = function (limit = 100, page = 1)
    {
       
        var querystring = "";
        
        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/tokens?' + querystring, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };

    qaeApi.prototype.getToken = function (tokenid)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/token/' + tokenid, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };
    
    qaeApi.prototype.getTokensByOwner = function (address = '', limit = 100, page = 1)
    {
       
        var querystring = "";
        
        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";
        
        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/tokensByOwner/' + address + '?' + querystring, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };
    
    /* Addresses */

    qaeApi.prototype.listAddresses = function (limit = 100, page = 1)
    {
       
        var querystring = "";
        
        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/addresses?' + querystring, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };
    
    qaeApi.prototype.getAddress = function (address)
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/address/' + address, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };

    qaeApi.prototype.getAddressesByTokenId = function (tokenid = '', limit = 100, page = 1)
    {
       
        var querystring = "";
        
        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/addressesByTokenId/' + tokenid + '?' + querystring, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };
    
    /* Balance */
    
    qaeApi.prototype.getBalance = function (tokenid = '', address = '')
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/balance/' + tokenid + '/' + address, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };
    
    /* Transactions */

    qaeApi.prototype.listTransactions = function (limit = 100, page = 1)
    {
       
        var querystring = "";
        
        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/transactions?' + querystring, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };

    qaeApi.prototype.getTransaction = function (transactionid = '')
    {

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/transaction/' + transactionid, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };
    
    qaeApi.prototype.listTokenTransactions = function (tokenid = '', limit = 100, page = 1)
    {
       
        var querystring = "";
        
        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/transactions/' + tokenid + '?' + querystring, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };    

    qaeApi.prototype.listTokenAddressTransactions = function (tokenid = '', address = '', limit = 100, page = 1)
    {
       
        var querystring = "";
        
        if (page !== undefined) querystring += 'page=' + page + "&";
        if (limit !== undefined) querystring += 'limit=' + limit + "&";

        return new Promise((resolve, reject) => {
        
            request.get(this.apiURL + '/transactions/' + tokenid + '/' + address + '?' + querystring, {json:true}, function (error, response, body)
            {

                if (error) {
                    reject(error); return;
                }
                resolve(body);
                                                        
            });
            
        });

    };   
    
    qaeApi.prototype.createGenerateJson = function (tokenName = '', tokenTicker = '', tokenQuantity = 0, tokenDecimals = 8, tokenUri = '', tokenNote = '', tokenPausable = false, tokenMintable = false)
    {

        var error = false;
        
        try {
            
            var name = tokenName;
		    var ticker = tokenTicker;
		    var quantity = tokenQuantity;
		    var decimals = parseInt(tokenDecimals);
		    var uri = tokenUri;
		    var note = tokenNote;
            var pausable = tokenPausable;
            var mintable = tokenMintable;
            
            if (!name || !ticker || !quantity || !decimals)
                error = 'Missing required fields'
            
            if (name == '' || ticker == '' || quantity == 0)
                error = 'Invalid Data'
            
		    var expon = new Big('1e' + decimals);
		    var rawquantity = new Big(quantity).times(expon).toFixed(0);
        
		    var jsontemplate = {"qae1":{"tp":"GENESIS","na":name,"sy":ticker,"de":decimals.toString(),"qt":rawquantity,"du":uri,"no":note,"pa":pausable,"mi":mintable}};

            var body = JSON.stringify(jsontemplate);
            
        } catch (e) {
            return e;
        }
                
        if (error) {
            return error;
        }
        
        return body;

    }; 
    
    
    return qaeApi;
    
}());

exports.default = qaeApi;
