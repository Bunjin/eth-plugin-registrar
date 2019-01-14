pragma solidity >=0.4.21;

contract PluginRegistrar {

  struct Plugin {
    address contractAddress;
    string scriptUrl;
  }
  mapping (address => Plugin) public pluginsByDevAddress;


  function pluginAddress(address authorAddress) public constant returns(address){
    return pluginsByDevAddress[authorAddress].contractAddress;
  }
  
  constructor() public {
    pluginsByDevAddress[0x6cCB1DEf4Ff8C4b953B084a220ec51817B65fD87] = Plugin(0x6cCB1DEf4Ff8C4b953B084a220ec51817B65fD87, "http://localhost:8888");
  }

  function register(address contractAddress, string scriptUrl) public {
    pluginsByDevAddress[msg.sender] = Plugin(contractAddress, scriptUrl);
  }

}
