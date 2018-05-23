var StableToken = artifacts.require("./StableToken.sol");
var StableTokenSale = artifacts.require("./StableTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(StableToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(StableTokenSale, StableToken.address, tokenPrice);
  });
};
