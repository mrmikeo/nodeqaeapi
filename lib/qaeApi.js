/*
* A Promised NodeJS Module for connecting with the Qredit QAE API
*/

const request = require("request");
const Big = require('big.js');
const qreditApi = require("nodeQreditApi");
const qreditjs = require("qreditjs");
const qapi = new qreditApi.default();

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
    
    qaeApi.prototype.generateToken = function (passPhrase = '', secondPassphrase = null, tokenName = '', tokenTicker = '', tokenQuantity = 0, tokenDecimals = 8, tokenUri = '', tokenNote = '', tokenPausable = false, tokenMintable = false)
    {
        
	return new Promise((resolve, reject) => {
		    
	    (async () => {
		
	        var error = false;
		    
                try {

		    var name = tokenName;
                    var ticker = tokenTicker;
                    var quantity = Big(tokenQuantity);
                    var decimals = parseInt(tokenDecimals);
                    var uri = tokenUri;
                    var note = tokenNote;
                    var pausable = tokenPausable;
                    var mintable = tokenMintable;
  
                    if (!name || !ticker || !quantity || !decimals)
                        error = 'Missing required fields'
            
                    if (name == '' || ticker == '' || quantity.lte(0))
                        error = 'Invalid Data'

		    if (error == false)
		    {

                        var expon = new Big('1e' + decimals);
                        var rawquantity = new Big(quantity).times(expon).toFixed(0);
        
                        var jsontemplate = {"qae1":{"tp":"GENESIS","na":name,"sy":ticker,"de":decimals.toString(),"qt":rawquantity,"du":uri,"no":note,"pa":pausable,"mi":mintable}};
                        var body = JSON.stringify(jsontemplate);

		        var toAddress = 'QjeTQp29p9xRvTcoox4chc6jQZAHwq87JC'; // QAE-1 Master Address
                        var feeOverride = 2000000;  // 0.02 XQR
                        var qreditAmount = 1; // 0.00000001 XQR
                        var vendorField = body;
                        var version = null; // Not typically used

		        var transaction = qreditjs.transaction.createTransaction(toAddress, qreditAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);
console.log(transaction);
                        var transactionId = transaction.id;
  
                        var sendResult = await qapi.createTransaction([transaction]);
console.log(sendResult);
                        if (sendResult.data && sendResult.data.accept[0] == transactionId)
                        {
                            // Successful Transaction
                            var txid = transactionId;
                            var error = null;
				
			    resolve({success: true, txid: txid, message: ''});
                        }
                        else
                        {
                            // Failed Transaction
                            var txid = null;

console.log(sendResult.errors[0]);
				
			    if (sendResult.errors)
                                var error = sendResult.errors[0];
			    else
				var error = 'Unknown Error';
			    
			    resolve({success: false, txid: null, message: error});
                        }			
			
		    }
            
                } catch (e) {
                    resolve({success: false, txid: null, message: e});
                }
                		
	    })();
	
	});

    }; 
    
    qaeApi.prototype.mintToken = function (passPhrase = '', secondPassphrase = null, tokenId = '', mintQuantity = 0, transactionNote = '')
    {

        var error = false;
        
        try {
		
	    ////
	    //  Get token info
            
            var tokenId = tokenId;
            var note = transactionNote;
            
            if (!tokenId)
                error = 'Missing required fields'
            
            if (tokenId == '')
                error = 'Invalid Data'
            
            var expon = new Big('1e' + decimals);
            var rawquantity = new Big(quantity).times(expon).toFixed(0);
        
            var jsontemplate = {"qae1":{"tp":"MINT","id":tokenId,"qt":rawquantity,"no":note}};

            var body = JSON.stringify(jsontemplate);
            
        } catch (e) {
            return e;
        }
                
        if (error) {
            return error;
        }
        
        return error;

    }; 
	
    qaeApi.prototype.burnToken = function (passPhrase = '', secondPassphrase = null, tokenId = '', burnQuantity = 0, transactionNote = '')
    {

	return false;

    }; 

    qaeApi.prototype.createSendJson = function (passPhrase = '', secondPassphrase = null, tokenId = '', toAddress = '', sendQuantity = 0, transactionNote = '')
    {

	return false;

    }; 
	
    qaeApi.prototype.createPauseJson = function (passPhrase = '', secondPassphrase = null, tokenId = '', transactionNote = '')
    {

	return false;

    }; 

    qaeApi.prototype.createResumeJson = function (passPhrase = '', secondPassphrase = null, tokenId = '', transactionNote = '')
    {

	return false;

    }; 

    qaeApi.prototype.createNewOwnerJson = function (passPhrase = '', secondPassphrase = null, tokenId = '', newOwnerAddress = '', transactionNote = '')
    {

	return false;

    }; 
    
    return qaeApi;
    
}());

exports.default = qaeApi;
