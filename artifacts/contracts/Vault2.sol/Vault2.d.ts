// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Vault2$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Vault2",
  "sourceName": "contracts/Vault2.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_launchpadContract",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "MAX_DEPOSIT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_PARTICIPANTS",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MIN_DEPOSIT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "TOTAL_PARTICIPANTS",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "allowedToTransfer",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAddressWithHighestShare",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "launchpadContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "participants",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "transferToLaunchpad",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60a06040523462000040576200001e620000186200011f565b6200023c565b6200002862000046565b6111846200025e82396080518161056c015261118490f35b6200004c565b60405190565b600080fd5b601f801991011690565b634e487b7160e01b600052604160045260246000fd5b906200007d9062000051565b810190811060018060401b038211176200009657604052565b6200005b565b90620000b3620000ab62000046565b928362000071565b565b600080fd5b60018060a01b031690565b620000d090620000ba565b90565b620000de81620000c5565b03620000e657565b600080fd5b90505190620000fa82620000d3565b565b9060208282031262000119576200011691600001620000eb565b90565b620000b5565b62000142620013e28038038062000136816200009c565b928339810190620000fc565b90565b60001b90565b906200015a6000199162000145565b9181191691161790565b90565b90565b90565b62000186620001806200018c9262000164565b6200016a565b62000167565b90565b90565b90620001ac620001a6620001b4926200016d565b6200018f565b82546200014b565b9055565b90620001cb60018060a01b039162000145565b9181191691161790565b620001ee620001e8620001f492620000ba565b6200016a565b620000ba565b90565b6200020290620001d5565b90565b6200021090620001f7565b90565b90565b90620002306200022a620002389262000205565b62000213565b8254620001b8565b9055565b6200025b906200024f6000600562000192565b33608052600062000216565b56fe60806040526004361015610013575b61073d565b61001e6000356100fd565b80630fec1959146100f8578063116136da146100f357806312065fe0146100ee57806318160ddd146100e957806319507d2c146100e457806335c1d349146100df57806342373e74146100da57806370a08231146100d557806374244bc9146100d05780638da5cb5b146100cb578063d0e30db0146100c6578063dd5967c3146100c1578063e1e158a5146100bc5763f3baf0700361000e57610708565b61069c565b61062a565b6105c3565b61058e565b610535565b6104f0565b61040f565b6103da565b6102e7565b6102a2565b610234565b6101d9565b610129565b60e01c90565b60405190565b600080fd5b600080fd5b600091031261011e57565b61010e565b60000190565b3461015757610139366004610113565b610141610a66565b610149610103565b8061015381610123565b0390f35b610109565b1c90565b60018060a01b031690565b61017b906008610180930261015c565b610160565b90565b9061018e915461016b565b90565b61019c600080610183565b90565b60018060a01b031690565b6101b39061019f565b90565b6101bf906101aa565b9052565b91906101d7906000602085019401906101b6565b565b34610209576101e9366004610113565b6102056101f4610191565b6101fc610103565b918291826101c3565b0390f35b610109565b90565b61021a9061020e565b9052565b919061023290600060208501940190610211565b565b3461026457610244366004610113565b61026061024f610a75565b610257610103565b9182918261021e565b0390f35b610109565b90565b61027c906008610281930261015c565b610269565b90565b9061028f915461026c565b90565b61029f6002600090610284565b90565b346102d2576102b2366004610113565b6102ce6102bd610292565b6102c5610103565b9182918261021e565b0390f35b610109565b6102e46004600090610183565b90565b34610317576102f7366004610113565b6103136103026102d7565b61030a610103565b918291826101c3565b0390f35b610109565b6103258161020e565b0361032c57565b600080fd5b9050359061033e8261031c565b565b9060208282031261035a5761035791600001610331565b90565b61010e565b634e487b7160e01b600052603260045260246000fd5b5490565b600052602060002090565b61038d81610375565b8210156103a85761039f600191610379565b91020190600090565b61035f565b60016103b881610375565b8210156103d5576103d2916103cc91610384565b90610183565b90565b600080fd5b3461040a576104066103f56103f0366004610340565b6103ad565b6103fd610103565b918291826101c3565b0390f35b610109565b3461043f5761041f366004610113565b61043b61042a610b42565b610432610103565b918291826101c3565b0390f35b610109565b61044d816101aa565b0361045457565b600080fd5b9050359061046682610444565b565b906020828203126104825761047f91600001610459565b90565b61010e565b90565b61049e6104996104a39261019f565b610487565b61019f565b90565b6104af9061048a565b90565b6104bb906104a6565b90565b906104c8906104b2565b600052602052604060002090565b6104ed906104e86003916000926104be565b610284565b90565b346105205761051c61050b610506366004610468565b6104d6565b610513610103565b9182918261021e565b0390f35b610109565b6105326005600090610284565b90565b3461056557610545366004610113565b610561610550610525565b610558610103565b9182918261021e565b0390f35b610109565b7f000000000000000000000000000000000000000000000000000000000000000090565b346105be5761059e366004610113565b6105ba6105a961056a565b6105b1610103565b918291826101c3565b0390f35b610109565b6105ce366004610113565b6105d6610e29565b6105de610103565b806105e881610123565b0390f35b90565b6106036105fe610608926105ec565b610487565b61020e565b90565b61061c67011c37937e0800006105ef565b90565b61062761060b565b90565b3461065a5761063a366004610113565b61065661064561061f565b61064d610103565b9182918261021e565b0390f35b610109565b90565b61067661067161067b9261065f565b610487565b61020e565b90565b61068e668e1bc9bf040000610662565b90565b61069961067e565b90565b346106cc576106ac366004610113565b6106c86106b7610691565b6106bf610103565b9182918261021e565b0390f35b610109565b90565b6106e86106e36106ed926106d1565b610487565b61020e565b90565b6106fa60646106d4565b90565b6107056106f0565b90565b3461073857610718366004610113565b6107346107236106fd565b61072b610103565b9182918261021e565b0390f35b610109565b600080fd5b60001c90565b61075461075991610742565b610160565b90565b6107669054610748565b90565b60209181520190565b60007f4e6f7420616c6c6f77656420746f207472616e736665722066756e6473000000910152565b6107a7601d602092610769565b6107b081610772565b0190565b6107ca906020810190600081830391015261079a565b90565b156107d457565b6107dc610103565b62461bcd60e51b8152806107f2600482016107b4565b0390fd5b61081b610803600461075c565b61081561080f336101aa565b916101aa565b146107cd565b6108236108ca565b565b61083161083691610742565b610269565b90565b6108439054610825565b90565b60007f5661756c74206973206e6f742066756c6c207965740000000000000000000000910152565b61087b6015602092610769565b61088481610846565b0190565b61089e906020810190600081830391015261086e565b90565b156108a857565b6108b0610103565b62461bcd60e51b8152806108c660048201610888565b0390fd5b6108f66108d76005610839565b6108f06108ea6108e56106f0565b61020e565b9161020e565b146108a1565b6108fe6109f0565b565b90565b61091761091261091c92610900565b610487565b61019f565b90565b61092890610903565b90565b60007f4c61756e636870616420636f6e7472616374206e6f7420736574000000000000910152565b610960601a602092610769565b6109698161092b565b0190565b6109839060208101906000818303910152610953565b90565b1561098d57565b610995610103565b62461bcd60e51b8152806109ab6004820161096d565b0390fd5b6109b89061048a565b90565b6109c4906109af565b90565b6109d0906104a6565b90565b6109dc906104a6565b90565b6109e7610103565b3d6000823e3d90fd5b610a1f6109fd600061075c565b610a18610a12610a0d600061091f565b6101aa565b916101aa565b1415610986565b6000808080610a3d610a38610a338361075c565b6109bb565b6109c7565b610a46306109d3565b3190828215610a5d575bf115610a5857565b6109df565b506108fc610a50565b610a6e6107f6565b565b600090565b610a7d610a70565b50610a87306109d3565b3190565b600090565b60007f537562736372697074696f6e206e6f7420656e64656400000000000000000000910152565b610ac56016602092610769565b610ace81610a90565b0190565b610ae89060208101906000818303910152610ab8565b90565b15610af257565b610afa610103565b62461bcd60e51b815280610b1060048201610ad2565b0390fd5b90565b610b2b610b26610b3092610b14565b610487565b61020e565b90565b6001610b3f910161020e565b90565b610b4a610a8b565b50610b77610b586005610839565b610b71610b6b610b666106f0565b61020e565b9161020e565b14610aeb565b610b8d610b876001600090610384565b90610183565b610bb6610bb16003610bab610ba56001600090610384565b90610183565b906104be565b610839565b610bc06001610b17565b5b80610bdd610bd7610bd26001610375565b61020e565b9161020e565b1015610c5657610bf8610bf260018390610384565b90610183565b610c0c610c07600383906104be565b610839565b610c1e610c188561020e565b9161020e565b11610c33575b50610c2e90610b33565b610bc1565b91509150610c2e610c4e610c49600384906104be565b610839565b919290610c24565b505090565b610c6f610c6a610c7492610900565b610487565b61020e565b90565b60007f557365722068617320616c7265616479206465706f7369746564000000000000910152565b610cac601a602092610769565b610cb581610c77565b0190565b610ccf9060208101906000818303910152610c9f565b90565b15610cd957565b610ce1610103565b62461bcd60e51b815280610cf760048201610cb9565b0390fd5b60007f496e76616c6964206465706f73697420616d6f756e7400000000000000000000910152565b610d306016602092610769565b610d3981610cfb565b0190565b610d539060208101906000818303910152610d23565b90565b15610d5d57565b610d65610103565b62461bcd60e51b815280610d7b60048201610d3d565b0390fd5b60207f65206465706f7369747300000000000000000000000000000000000000000000917f5661756c742069732066756c6c2c2063616e6e6f7420616363657074206d6f7260008201520152565b610dda602a604092610769565b610de381610d7f565b0190565b610dfd9060208101906000818303910152610dcd565b90565b15610e0757565b610e0f610103565b62461bcd60e51b815280610e2560048201610de7565b0390fd5b610e59610e40610e3b600333906104be565b610839565b610e53610e4d6000610c5b565b9161020e565b14610cd2565b34610e73610e6d610e6861067e565b61020e565b9161020e565b101580610ebd575b610e8490610d56565b610eb1610e916005610839565b610eaa610ea4610e9f6106f0565b61020e565b9161020e565b1115610e00565b610ebb343361108f565b565b50610e8434610edb610ed5610ed061060b565b61020e565b9161020e565b11159050610e7b565b634e487b7160e01b600052601160045260246000fd5b610f09610f0f9193929361020e565b9261020e565b8201809211610f1a57565b610ee4565b60001b90565b90610f3260001991610f1f565b9181191691161790565b610f50610f4b610f559261020e565b610487565b61020e565b90565b90565b90610f70610f6b610f7792610f3c565b610f58565b8254610f25565b9055565b90565b634e487b7160e01b600052604160045260246000fd5b600052602060002090565b5490565b610fac81610f9f565b821015610fc757610fbe600191610f94565b91020190600090565b61035f565b1b90565b91906008610ff0910291610fea60018060a01b0384610fcc565b92610fcc565b9181191691161790565b90565b919061101361100e61101b936104b2565b610ffa565b908354610fd0565b9055565b908154916801000000000000000083101561104f578261104791600161104d95018155610fa3565b90610ffd565b565b610f7e565b9061106560018060a01b0391610f1f565b9181191691161790565b9061108461107f61108b926104b2565b610ffa565b8254611054565b9055565b6110d761110c926110b36110ac826110a76002610839565b610efa565b6002610f5b565b6110d16110c2600385906104be565b916110cc83610839565b610efa565b90610f5b565b6110fd6110f66110e76001610b17565b6110f16005610839565b610efa565b6005610f5b565b6111076001610f7b565b61101f565b6111166005610839565b61112f6111296111246106f0565b61020e565b9161020e565b14611137575b565b611149611142610b42565b600461106f565b61113556fea26469706673582212209e7a95a88229539cd61b24809120a3bca32e80ebd84e2f575b847c88e4d15b4164736f6c63430008180033",
  "deployedBytecode": "0x60806040526004361015610013575b61073d565b61001e6000356100fd565b80630fec1959146100f8578063116136da146100f357806312065fe0146100ee57806318160ddd146100e957806319507d2c146100e457806335c1d349146100df57806342373e74146100da57806370a08231146100d557806374244bc9146100d05780638da5cb5b146100cb578063d0e30db0146100c6578063dd5967c3146100c1578063e1e158a5146100bc5763f3baf0700361000e57610708565b61069c565b61062a565b6105c3565b61058e565b610535565b6104f0565b61040f565b6103da565b6102e7565b6102a2565b610234565b6101d9565b610129565b60e01c90565b60405190565b600080fd5b600080fd5b600091031261011e57565b61010e565b60000190565b3461015757610139366004610113565b610141610a66565b610149610103565b8061015381610123565b0390f35b610109565b1c90565b60018060a01b031690565b61017b906008610180930261015c565b610160565b90565b9061018e915461016b565b90565b61019c600080610183565b90565b60018060a01b031690565b6101b39061019f565b90565b6101bf906101aa565b9052565b91906101d7906000602085019401906101b6565b565b34610209576101e9366004610113565b6102056101f4610191565b6101fc610103565b918291826101c3565b0390f35b610109565b90565b61021a9061020e565b9052565b919061023290600060208501940190610211565b565b3461026457610244366004610113565b61026061024f610a75565b610257610103565b9182918261021e565b0390f35b610109565b90565b61027c906008610281930261015c565b610269565b90565b9061028f915461026c565b90565b61029f6002600090610284565b90565b346102d2576102b2366004610113565b6102ce6102bd610292565b6102c5610103565b9182918261021e565b0390f35b610109565b6102e46004600090610183565b90565b34610317576102f7366004610113565b6103136103026102d7565b61030a610103565b918291826101c3565b0390f35b610109565b6103258161020e565b0361032c57565b600080fd5b9050359061033e8261031c565b565b9060208282031261035a5761035791600001610331565b90565b61010e565b634e487b7160e01b600052603260045260246000fd5b5490565b600052602060002090565b61038d81610375565b8210156103a85761039f600191610379565b91020190600090565b61035f565b60016103b881610375565b8210156103d5576103d2916103cc91610384565b90610183565b90565b600080fd5b3461040a576104066103f56103f0366004610340565b6103ad565b6103fd610103565b918291826101c3565b0390f35b610109565b3461043f5761041f366004610113565b61043b61042a610b42565b610432610103565b918291826101c3565b0390f35b610109565b61044d816101aa565b0361045457565b600080fd5b9050359061046682610444565b565b906020828203126104825761047f91600001610459565b90565b61010e565b90565b61049e6104996104a39261019f565b610487565b61019f565b90565b6104af9061048a565b90565b6104bb906104a6565b90565b906104c8906104b2565b600052602052604060002090565b6104ed906104e86003916000926104be565b610284565b90565b346105205761051c61050b610506366004610468565b6104d6565b610513610103565b9182918261021e565b0390f35b610109565b6105326005600090610284565b90565b3461056557610545366004610113565b610561610550610525565b610558610103565b9182918261021e565b0390f35b610109565b7f000000000000000000000000000000000000000000000000000000000000000090565b346105be5761059e366004610113565b6105ba6105a961056a565b6105b1610103565b918291826101c3565b0390f35b610109565b6105ce366004610113565b6105d6610e29565b6105de610103565b806105e881610123565b0390f35b90565b6106036105fe610608926105ec565b610487565b61020e565b90565b61061c67011c37937e0800006105ef565b90565b61062761060b565b90565b3461065a5761063a366004610113565b61065661064561061f565b61064d610103565b9182918261021e565b0390f35b610109565b90565b61067661067161067b9261065f565b610487565b61020e565b90565b61068e668e1bc9bf040000610662565b90565b61069961067e565b90565b346106cc576106ac366004610113565b6106c86106b7610691565b6106bf610103565b9182918261021e565b0390f35b610109565b90565b6106e86106e36106ed926106d1565b610487565b61020e565b90565b6106fa60646106d4565b90565b6107056106f0565b90565b3461073857610718366004610113565b6107346107236106fd565b61072b610103565b9182918261021e565b0390f35b610109565b600080fd5b60001c90565b61075461075991610742565b610160565b90565b6107669054610748565b90565b60209181520190565b60007f4e6f7420616c6c6f77656420746f207472616e736665722066756e6473000000910152565b6107a7601d602092610769565b6107b081610772565b0190565b6107ca906020810190600081830391015261079a565b90565b156107d457565b6107dc610103565b62461bcd60e51b8152806107f2600482016107b4565b0390fd5b61081b610803600461075c565b61081561080f336101aa565b916101aa565b146107cd565b6108236108ca565b565b61083161083691610742565b610269565b90565b6108439054610825565b90565b60007f5661756c74206973206e6f742066756c6c207965740000000000000000000000910152565b61087b6015602092610769565b61088481610846565b0190565b61089e906020810190600081830391015261086e565b90565b156108a857565b6108b0610103565b62461bcd60e51b8152806108c660048201610888565b0390fd5b6108f66108d76005610839565b6108f06108ea6108e56106f0565b61020e565b9161020e565b146108a1565b6108fe6109f0565b565b90565b61091761091261091c92610900565b610487565b61019f565b90565b61092890610903565b90565b60007f4c61756e636870616420636f6e7472616374206e6f7420736574000000000000910152565b610960601a602092610769565b6109698161092b565b0190565b6109839060208101906000818303910152610953565b90565b1561098d57565b610995610103565b62461bcd60e51b8152806109ab6004820161096d565b0390fd5b6109b89061048a565b90565b6109c4906109af565b90565b6109d0906104a6565b90565b6109dc906104a6565b90565b6109e7610103565b3d6000823e3d90fd5b610a1f6109fd600061075c565b610a18610a12610a0d600061091f565b6101aa565b916101aa565b1415610986565b6000808080610a3d610a38610a338361075c565b6109bb565b6109c7565b610a46306109d3565b3190828215610a5d575bf115610a5857565b6109df565b506108fc610a50565b610a6e6107f6565b565b600090565b610a7d610a70565b50610a87306109d3565b3190565b600090565b60007f537562736372697074696f6e206e6f7420656e64656400000000000000000000910152565b610ac56016602092610769565b610ace81610a90565b0190565b610ae89060208101906000818303910152610ab8565b90565b15610af257565b610afa610103565b62461bcd60e51b815280610b1060048201610ad2565b0390fd5b90565b610b2b610b26610b3092610b14565b610487565b61020e565b90565b6001610b3f910161020e565b90565b610b4a610a8b565b50610b77610b586005610839565b610b71610b6b610b666106f0565b61020e565b9161020e565b14610aeb565b610b8d610b876001600090610384565b90610183565b610bb6610bb16003610bab610ba56001600090610384565b90610183565b906104be565b610839565b610bc06001610b17565b5b80610bdd610bd7610bd26001610375565b61020e565b9161020e565b1015610c5657610bf8610bf260018390610384565b90610183565b610c0c610c07600383906104be565b610839565b610c1e610c188561020e565b9161020e565b11610c33575b50610c2e90610b33565b610bc1565b91509150610c2e610c4e610c49600384906104be565b610839565b919290610c24565b505090565b610c6f610c6a610c7492610900565b610487565b61020e565b90565b60007f557365722068617320616c7265616479206465706f7369746564000000000000910152565b610cac601a602092610769565b610cb581610c77565b0190565b610ccf9060208101906000818303910152610c9f565b90565b15610cd957565b610ce1610103565b62461bcd60e51b815280610cf760048201610cb9565b0390fd5b60007f496e76616c6964206465706f73697420616d6f756e7400000000000000000000910152565b610d306016602092610769565b610d3981610cfb565b0190565b610d539060208101906000818303910152610d23565b90565b15610d5d57565b610d65610103565b62461bcd60e51b815280610d7b60048201610d3d565b0390fd5b60207f65206465706f7369747300000000000000000000000000000000000000000000917f5661756c742069732066756c6c2c2063616e6e6f7420616363657074206d6f7260008201520152565b610dda602a604092610769565b610de381610d7f565b0190565b610dfd9060208101906000818303910152610dcd565b90565b15610e0757565b610e0f610103565b62461bcd60e51b815280610e2560048201610de7565b0390fd5b610e59610e40610e3b600333906104be565b610839565b610e53610e4d6000610c5b565b9161020e565b14610cd2565b34610e73610e6d610e6861067e565b61020e565b9161020e565b101580610ebd575b610e8490610d56565b610eb1610e916005610839565b610eaa610ea4610e9f6106f0565b61020e565b9161020e565b1115610e00565b610ebb343361108f565b565b50610e8434610edb610ed5610ed061060b565b61020e565b9161020e565b11159050610e7b565b634e487b7160e01b600052601160045260246000fd5b610f09610f0f9193929361020e565b9261020e565b8201809211610f1a57565b610ee4565b60001b90565b90610f3260001991610f1f565b9181191691161790565b610f50610f4b610f559261020e565b610487565b61020e565b90565b90565b90610f70610f6b610f7792610f3c565b610f58565b8254610f25565b9055565b90565b634e487b7160e01b600052604160045260246000fd5b600052602060002090565b5490565b610fac81610f9f565b821015610fc757610fbe600191610f94565b91020190600090565b61035f565b1b90565b91906008610ff0910291610fea60018060a01b0384610fcc565b92610fcc565b9181191691161790565b90565b919061101361100e61101b936104b2565b610ffa565b908354610fd0565b9055565b908154916801000000000000000083101561104f578261104791600161104d95018155610fa3565b90610ffd565b565b610f7e565b9061106560018060a01b0391610f1f565b9181191691161790565b9061108461107f61108b926104b2565b610ffa565b8254611054565b9055565b6110d761110c926110b36110ac826110a76002610839565b610efa565b6002610f5b565b6110d16110c2600385906104be565b916110cc83610839565b610efa565b90610f5b565b6110fd6110f66110e76001610b17565b6110f16005610839565b610efa565b6005610f5b565b6111076001610f7b565b61101f565b6111166005610839565b61112f6111296111246106f0565b61020e565b9161020e565b14611137575b565b611149611142610b42565b600461106f565b61113556fea26469706673582212209e7a95a88229539cd61b24809120a3bca32e80ebd84e2f575b847c88e4d15b4164736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Vault2",
    constructorArgs: [_launchpadContract: AbiParameterToPrimitiveType<{"name":"_launchpadContract","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Vault2$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/Vault2.sol:Vault2",
    constructorArgs: [_launchpadContract: AbiParameterToPrimitiveType<{"name":"_launchpadContract","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Vault2$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Vault2",
    constructorArgs: [_launchpadContract: AbiParameterToPrimitiveType<{"name":"_launchpadContract","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Vault2$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/Vault2.sol:Vault2",
    constructorArgs: [_launchpadContract: AbiParameterToPrimitiveType<{"name":"_launchpadContract","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Vault2$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Vault2",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Vault2$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/Vault2.sol:Vault2",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Vault2$Type["abi"]>>;
}
