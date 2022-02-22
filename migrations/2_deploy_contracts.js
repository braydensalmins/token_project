var pSDAToken = artifacts.require("./pSDAToken.sol");
var pSDATokenSale = artifacts.require("./pSDATokenSale.sol");

module.exports = function (deployer) {
  deployer.deploy(pSDAToken, 1000000).then(function () {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(pSDATokenSale, pSDAToken.address, tokenPrice);
  });
};
