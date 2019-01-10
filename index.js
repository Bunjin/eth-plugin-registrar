const EthContract = require('ethjs-contract')
const Eth = require('ethjs-query')
const pluginRegistrarContract = require("./eth/build/contracts/PluginRegistrar.json")
const SafeEventEmitter = require('safe-event-emitter')

class PluginRegistrar extends SafeEventEmitter {
  constructor (opts = {}) {
    super()
    this.eth = new Eth(this.provider)
    this.contract = new EthContract(this.eth)
    this.pluginRegistrarContract = this.contract(pluginRegistrarContract.abi)
    this.contract = this.PluginRegistrarContract.at(pluginRegistrarContract.address)    

    this.pluginAddress()


  }

  async pluginAddress(){
    console.log(await this.contract[pluginAddress]("0x6cCB1DEf4Ff8C4b953B084a220ec51817B65fD87"))
  }
  
}

module.exports = PluginRegistrar
