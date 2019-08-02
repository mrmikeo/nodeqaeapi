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

			var transactionId = transaction.id;
  
                        var sendResult = await qapi.createTransaction([transaction]);

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
				
			    if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
			    else
				var error = 'Unknown Error';
			    
			    resolve({success: false, txid: null, message: error});
                        }			
			
		    }
		    else
		    {
			 resolve({success: false, txid: null, message: error});    
		    }
            
                } catch (e) {
                    resolve({success: false, txid: null, message: e});
                }
                		
	    })();
	
	});

    }; 
    
    qaeApi.prototype.mintToken = function (passPhrase = '', secondPassphrase = null, tokenId = '', mintQuantity = 0, transactionNote = '')
    {

        return new Promise((resolve, reject) => {
		    
	    (async () => {
		    
                var error = false;
        
                try {
		
	            ////
	            //  Get token info
			
		    var tokeninfo = await this.getToken(tokenId);
            
                    if (!tokenId)
                        error = 'Missing required fields';
            
                    if (tokenId == '')
                        error = 'Invalid Data';
			
		    if (tokeninfo[0] && tokeninfo[0].tokenDetails)
		    {
			var decimals = tokeninfo[0].tokenDetails.decimals;
			//var mintable = tokeninfo[0].tokenDetails.mintable;
			var mintable = true;
			    
			if (mintable == false)
			{
			    error = "Token not mintable";
			}
		    }
		    else
		    {
			error = 'Token not found';
		    }

		    if (error == false)
		    {
			
                        var expon = new Big('1e' + decimals);
                        var rawquantity = new Big(mintQuantity).times(expon).toFixed(0);
        
                        var jsontemplate = {"qae1":{"tp":"MINT","id":tokenId,"qt":rawquantity,"no":transactionNote}};

                        var body = JSON.stringify(jsontemplate);

		        var toAddress = 'QjeTQp29p9xRvTcoox4chc6jQZAHwq87JC'; // QAE-1 Master Address
                        var feeOverride = 2000000;  // 0.02 XQR
                        var qreditAmount = 1; // 0.00000001 XQR
                        var vendorField = body;
                        var version = null; // Not typically used

		        var transaction = qreditjs.transaction.createTransaction(toAddress, qreditAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

			var transactionId = transaction.id;
  
                        var sendResult = await qapi.createTransaction([transaction]);

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
				
			    if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
			    else
				var error = 'Unknown Error';
			    
			    resolve({success: false, txid: null, message: error});
                        }

		    }
		    else
		    {
			 resolve({success: false, txid: null, message: error});    
		    }
            
                } catch (e) {
                    resolve({success: false, txid: null, message: e});
                }

	    })();
	
	});
		    
    }; 
	
    qaeApi.prototype.burnToken = function (passPhrase = '', secondPassphrase = null, tokenId = '', burnQuantity = 0, transactionNote = '')
    {

        return new Promise((resolve, reject) => {
		    
	    (async () => {
		    
                var error = false;
        
                try {
		
	            ////
	            //  Get token info
			
		    var tokeninfo = await this.getToken(tokenId);
            
                    if (!tokenId)
                        error = 'Missing required fields';
            
                    if (tokenId == '')
                        error = 'Invalid Data';
			
		    if (tokeninfo[0] && tokeninfo[0].tokenDetails)
		    {
			var decimals = tokeninfo[0].tokenDetails.decimals;
		    }
		    else
		    {
			error = 'Token not found';
		    }

		    if (error == false)
		    {
			
                        var expon = new Big('1e' + decimals);
                        var rawquantity = new Big(mintQuantity).times(expon).toFixed(0);
        
                        var jsontemplate = {"qae1":{"tp":"BURN","id":tokenId,"qt":rawquantity,"no":transactionNote}};

                        var body = JSON.stringify(jsontemplate);

		        var toAddress = 'QjeTQp29p9xRvTcoox4chc6jQZAHwq87JC'; // QAE-1 Master Address
                        var feeOverride = 2000000;  // 0.02 XQR
                        var qreditAmount = 1; // 0.00000001 XQR
                        var vendorField = body;
                        var version = null; // Not typically used

		        var transaction = qreditjs.transaction.createTransaction(toAddress, qreditAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

			var transactionId = transaction.id;
  
                        var sendResult = await qapi.createTransaction([transaction]);

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
				
			    if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
			    else
				var error = 'Unknown Error';
			    
			    resolve({success: false, txid: null, message: error});
                        }

		    }
		    else
		    {
			 resolve({success: false, txid: null, message: error});    
		    }
            
                } catch (e) {
                    resolve({success: false, txid: null, message: e});
                }

	    })();
	
	});

    }; 

    qaeApi.prototype.createSendJson = function (passPhrase = '', secondPassphrase = null, tokenId = '', toAddress = '', sendQuantity = 0, transactionNote = '')
    {

        return new Promise((resolve, reject) => {
		    
	    (async () => {
		    
                var error = false;
        
                try {
		
	            ////
	            //  Get token info
			
		    var tokeninfo = await this.getToken(tokenId);
            
                    if (!tokenId)
                        error = 'Missing required fields';
            
                    if (tokenId == '')
                        error = 'Invalid Data';
			
		    if (tokeninfo[0] && tokeninfo[0].tokenDetails)
		    {
			var decimals = tokeninfo[0].tokenDetails.decimals;

			var senderkeys = qreditjs.crypto.getKeys(passPhrase);
			var senderpublickey = keys.publicKey;
			var senderaddress = qreditjs.crypto.getAddress(publickey);
			    
			var senderBalance = await this.getBalance(tokenId, senderaddress);
			    
			if (Big(senderBalance).lt(sendQuantity))
			{
			    error = 'Not enough balance';
			}
			    
		    }
		    else
		    {
			error = 'Token not found';
		    }

		    if (error == false)
		    {
			
                        var expon = new Big('1e' + decimals);
                        var rawquantity = new Big(mintQuantity).times(expon).toFixed(0);
        
                        var jsontemplate = {"qae1":{"tp":"SEND","id":tokenId,"qt":rawquantity,"no":transactionNote}};

                        var body = JSON.stringify(jsontemplate);

                        var feeOverride = 2000000;  // 0.02 XQR
                        var qreditAmount = 1; // 0.00000001 XQR
                        var vendorField = body;
                        var version = null; // Not typically used

		        var transaction = qreditjs.transaction.createTransaction(toAddress, qreditAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

			var transactionId = transaction.id;
  
                        var sendResult = await qapi.createTransaction([transaction]);

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
				
			    if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
			    else
				var error = 'Unknown Error';
			    
			    resolve({success: false, txid: null, message: error});
                        }

		    }
		    else
		    {
			 resolve({success: false, txid: null, message: error});    
		    }
            
                } catch (e) {
                    resolve({success: false, txid: null, message: e});
                }

	    })();
	
	});

    }; 
	
    qaeApi.prototype.createPauseJson = function (passPhrase = '', secondPassphrase = null, tokenId = '', transactionNote = '')
    {

        return new Promise((resolve, reject) => {
		    
	    (async () => {
		    
                var error = false;
        
                try {
		
	            ////
	            //  Get token info
			
		    var tokeninfo = await this.getToken(tokenId);
            
                    if (!tokenId)
                        error = 'Missing required fields';
            
                    if (tokenId == '')
                        error = 'Invalid Data';
			
		    if (tokeninfo[0] && tokeninfo[0].tokenDetails)
		    {
			//var pausable = tokeninfo[0].tokenDetails.pausable;
			var pausable = true;
			    
			if (pausable == false)
			{
			    error = "Token not pausable";
			}
		    }
		    else
		    {
			error = 'Token not found';
		    }

		    if (error == false)
		    {
        
                        var jsontemplate = {"qae1":{"tp":"PAUSE","id":tokenId,"no":transactionNote}};

                        var body = JSON.stringify(jsontemplate);

		        var toAddress = 'QjeTQp29p9xRvTcoox4chc6jQZAHwq87JC'; // QAE-1 Master Address
                        var feeOverride = 2000000;  // 0.02 XQR
                        var qreditAmount = 1; // 0.00000001 XQR
                        var vendorField = body;
                        var version = null; // Not typically used

		        var transaction = qreditjs.transaction.createTransaction(toAddress, qreditAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

			var transactionId = transaction.id;
  
                        var sendResult = await qapi.createTransaction([transaction]);

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
				
			    if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
			    else
				var error = 'Unknown Error';
			    
			    resolve({success: false, txid: null, message: error});
                        }

		    }
		    else
		    {
			 resolve({success: false, txid: null, message: error});    
		    }
            
                } catch (e) {
                    resolve({success: false, txid: null, message: e});
                }

	    })();
	
	});

    }; 

    qaeApi.prototype.createResumeJson = function (passPhrase = '', secondPassphrase = null, tokenId = '', transactionNote = '')
    {

        return new Promise((resolve, reject) => {
		    
	    (async () => {
		    
                var error = false;
        
                try {
		
	            ////
	            //  Get token info
			
		    var tokeninfo = await this.getToken(tokenId);
            
                    if (!tokenId)
                        error = 'Missing required fields';
            
                    if (tokenId == '')
                        error = 'Invalid Data';
			
		    if (tokeninfo[0] && tokeninfo[0].tokenDetails)
		    {
			//var pausable = tokeninfo[0].tokenDetails.pausable;
			var pausable = true;
			    
			if (pausable == false)
			{
			    error = "Token not pausable";
			}
		    }
		    else
		    {
			error = 'Token not found';
		    }

		    if (error == false)
		    {
			
                        var jsontemplate = {"qae1":{"tp":"RESUME","id":tokenId,"no":transactionNote}};

                        var body = JSON.stringify(jsontemplate);

		        var toAddress = 'QjeTQp29p9xRvTcoox4chc6jQZAHwq87JC'; // QAE-1 Master Address
                        var feeOverride = 2000000;  // 0.02 XQR
                        var qreditAmount = 1; // 0.00000001 XQR
                        var vendorField = body;
                        var version = null; // Not typically used

		        var transaction = qreditjs.transaction.createTransaction(toAddress, qreditAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

			var transactionId = transaction.id;
  
                        var sendResult = await qapi.createTransaction([transaction]);

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
				
			    if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
			    else
				var error = 'Unknown Error';
			    
			    resolve({success: false, txid: null, message: error});
                        }

		    }
		    else
		    {
			 resolve({success: false, txid: null, message: error});    
		    }
            
                } catch (e) {
                    resolve({success: false, txid: null, message: e});
                }

	    })();
	
	});

    }; 

    qaeApi.prototype.createNewOwnerJson = function (passPhrase = '', secondPassphrase = null, tokenId = '', newOwnerAddress = '', transactionNote = '')
    {

        return new Promise((resolve, reject) => {
		    
	    (async () => {
		    
                var error = false;
        
                try {
		
	            ////
	            //  Get token info
			
		    var tokeninfo = await this.getToken(tokenId);
            
                    if (!tokenId)
                        error = 'Missing required fields';
            
                    if (tokenId == '')
                        error = 'Invalid Data';
			
		    if (tokeninfo[0] && tokeninfo[0].tokenDetails)
		    {
			var currentOwner = tokeninfo[0].tokenDetails.ownerAddress;
			    
			var senderkeys = qreditjs.crypto.getKeys(passPhrase);
			var senderpublickey = keys.publicKey;
			var senderaddress = qreditjs.crypto.getAddress(publickey);
			    
			if (sendaddress != currentOwner)
			{
			    error = 'You are not the current owner';
			}
			    
		    }
		    else
		    {
			error = 'Token not found';
		    }

		    if (error == false)
		    {
                        var jsontemplate = {"qae1":{"tp":"NEWOWNER","id":tokenId,"no":transactionNote}};

                        var body = JSON.stringify(jsontemplate);

		        var toAddress = newOwnerAddress; // New token owner address
                        var feeOverride = 2000000;  // 0.02 XQR
                        var qreditAmount = 1; // 0.00000001 XQR
                        var vendorField = body;
                        var version = null; // Not typically used

		        var transaction = qreditjs.transaction.createTransaction(toAddress, qreditAmount, vendorField, passPhrase, secondPassphrase, version, feeOverride);

			var transactionId = transaction.id;
  
                        var sendResult = await qapi.createTransaction([transaction]);

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
				
			    if (sendResult.errors)
                                var error = sendResult.errors[transactionId][0].message;
			    else
				var error = 'Unknown Error';
			    
			    resolve({success: false, txid: null, message: error});
                        }

		    }
		    else
		    {
			 resolve({success: false, txid: null, message: error});    
		    }
            
                } catch (e) {
                    resolve({success: false, txid: null, message: e});
                }

	    })();
	
	});

    }; 
    
    return qaeApi;
    
}());

exports.default = qaeApi;
