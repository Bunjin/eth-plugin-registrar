var PluginRegistrar = artifacts.require("./PluginRegistrar.sol");

module.exports = function(deployer) {
  deployer.deploy(PluginRegistrar)
}


