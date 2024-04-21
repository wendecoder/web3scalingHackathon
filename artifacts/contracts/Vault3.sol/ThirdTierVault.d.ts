// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ThirdTierVault$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ThirdTierVault",
  "sourceName": "contracts/Vault3.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "allowTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "allowedToTransfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "revokeTransfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract IERC20",
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
    }
  ],
  "bytecode": "0x60c06040523462000057576200001e6200001862000136565b6200019d565b620000286200005d565b610ecc620001b282396080518181816102c80152818161075b0152610cb5015260a051816105e60152610ecc90f35b62000063565b60405190565b600080fd5b601f801991011690565b634e487b7160e01b600052604160045260246000fd5b90620000949062000068565b810190811060018060401b03821117620000ad57604052565b62000072565b90620000ca620000c26200005d565b928362000088565b565b600080fd5b60018060a01b031690565b620000e790620000d1565b90565b620000f581620000dc565b03620000fd57565b600080fd5b905051906200011182620000ea565b565b9060208282031262000130576200012d9160000162000102565b90565b620000cc565b620001596200107e803803806200014d81620000b3565b92833981019062000113565b90565b90565b62000178620001726200017e92620000d1565b6200015c565b620000d1565b90565b6200018c906200015f565b90565b6200019a9062000181565b90565b620001ac90336080526200018f565b60a05256fe60806040526004361015610013575b61066c565b61001e6000356100dd565b806312065fe0146100d857806318160ddd146100d357806370a08231146100ce5780638da5cb5b146100c9578063b3490bfc146100c4578063c51544c5146100bf578063d0e30db0146100ba578063d4d89996146100b5578063dd5967c3146100b0578063e1e158a5146100ab578063f3baf070146100a65763fc0c546a0361000e57610637565b6105af565b610543565b6104d0565b61045f565b610436565b610401565b610348565b61030d565b610291565b610199565b610129565b60e01c90565b60405190565b600080fd5b600080fd5b60009103126100fe57565b6100ee565b90565b61010f90610103565b9052565b919061012790600060208501940190610106565b565b34610159576101393660046100f3565b610155610144610682565b61014c6100e3565b91829182610113565b0390f35b6100e9565b1c90565b90565b61017590600861017a930261015e565b610162565b90565b906101889154610165565b90565b61019660008061017d565b90565b346101c9576101a93660046100f3565b6101c56101b461018b565b6101bc6100e3565b91829182610113565b0390f35b6100e9565b60018060a01b031690565b6101e2906101ce565b90565b6101ee816101d9565b036101f557565b600080fd5b90503590610207826101e5565b565b9060208282031261022357610220916000016101fa565b90565b6100ee565b90565b61023f61023a610244926101ce565b610228565b6101ce565b90565b6102509061022b565b90565b61025c90610247565b90565b9061026990610253565b600052602052604060002090565b61028e9061028960019160009261025f565b61017d565b90565b346102c1576102bd6102ac6102a7366004610209565b610277565b6102b46100e3565b91829182610113565b0390f35b6100e9565b7f000000000000000000000000000000000000000000000000000000000000000090565b6102f3906101d9565b9052565b919061030b906000602085019401906102ea565b565b3461033d5761031d3660046100f3565b6103396103286102c6565b6103306100e3565b918291826102f7565b0390f35b6100e9565b60000190565b346103765761036061035b366004610209565b6109e2565b6103686100e3565b8061037281610342565b0390f35b6100e9565b9061038590610253565b600052602052604060002090565b60ff1690565b6103a99060086103ae930261015e565b610393565b90565b906103bc9154610399565b90565b6103d6906103d160029160009261037b565b6103b1565b90565b151590565b6103e7906103d9565b9052565b91906103ff906000602085019401906103de565b565b346104315761042d61041c610417366004610209565b6103bf565b6104246100e3565b918291826103eb565b0390f35b6100e9565b6104413660046100f3565b610449610bbd565b6104516100e3565b8061045b81610342565b0390f35b3461048d57610477610472366004610209565b610dca565b61047f6100e3565b8061048981610342565b0390f35b6100e9565b90565b6104a96104a46104ae92610492565b610228565b610103565b90565b6104c26701aa535d3d0c0000610495565b90565b6104cd6104b1565b90565b34610500576104e03660046100f3565b6104fc6104eb6104c5565b6104f36100e3565b91829182610113565b0390f35b6100e9565b90565b61051c61051761052192610505565b610228565b610103565b90565b61053567011c37937e080000610508565b90565b610540610524565b90565b34610573576105533660046100f3565b61056f61055e610538565b6105666100e3565b91829182610113565b0390f35b6100e9565b90565b61058f61058a61059492610578565b610228565b610103565b90565b6105a1606461057b565b90565b6105ac610597565b90565b346105df576105bf3660046100f3565b6105db6105ca6105a4565b6105d26100e3565b91829182610113565b0390f35b6100e9565b7f000000000000000000000000000000000000000000000000000000000000000090565b61061190610247565b90565b61061d90610608565b9052565b919061063590600060208501940190610614565b565b34610667576106473660046100f3565b6106636106526105e4565b61065a6100e3565b91829182610621565b0390f35b6100e9565b600080fd5b600090565b61067f90610247565b90565b61068a610671565b5061069430610676565b3190565b60209181520190565b60207f6f6e000000000000000000000000000000000000000000000000000000000000917f4f6e6c79206f776e65722063616e20706572666f726d2074686973206163746960008201520152565b6106fc6022604092610698565b610705816106a1565b0190565b61071f90602081019060008183039101526106ef565b90565b1561072957565b6107316100e3565b62461bcd60e51b81528061074760048201610709565b0390fd5b6107909061078b3361078561077f7f00000000000000000000000000000000000000000000000000000000000000006101d9565b916101d9565b14610722565b610979565b565b60001c90565b6107a46107a991610792565b610162565b90565b6107b69054610798565b90565b60207f6c6f77207472616e736665720000000000000000000000000000000000000000917f5661756c74206973206e6f742066756c6c207965742c2063616e6e6f7420616c60008201520152565b610814602c604092610698565b61081d816107b9565b0190565b6108379060208101906000818303910152610807565b90565b1561084157565b6108496100e3565b62461bcd60e51b81528061085f60048201610821565b0390fd5b61086f61087491610792565b610393565b90565b6108819054610863565b90565b60207f6665722066756e64730000000000000000000000000000000000000000000000917f5573657220697320616c726561647920616c6c6f77656420746f207472616e7360008201520152565b6108df6029604092610698565b6108e881610884565b0190565b61090290602081019060008183039101526108d2565b90565b1561090c57565b6109146100e3565b62461bcd60e51b81528061092a600482016108ec565b0390fd5b60001b90565b9061094060ff9161092e565b9181191691161790565b610953906103d9565b90565b90565b9061096e6109696109759261094a565b610956565b8254610934565b9055565b6109e0906109a961098a60006107ac565b6109a361099d610998610597565b610103565b91610103565b1461083a565b6109ce6109c96109c36109be6002859061037b565b610877565b156103d9565b610905565b6109db600191600261037b565b610959565b565b6109eb9061074b565b565b60207f65206465706f7369747300000000000000000000000000000000000000000000917f5661756c742069732066756c6c2c2063616e6e6f7420616363657074206d6f7260008201520152565b610a48602a604092610698565b610a51816109ed565b0190565b610a6b9060208101906000818303910152610a3b565b90565b15610a7557565b610a7d6100e3565b62461bcd60e51b815280610a9360048201610a55565b0390fd5b60007f496e76616c6964206465706f73697420616d6f756e7400000000000000000000910152565b610acc6016602092610698565b610ad581610a97565b0190565b610aef9060208101906000818303910152610abf565b90565b15610af957565b610b016100e3565b62461bcd60e51b815280610b1760048201610ad9565b0390fd5b90565b610b32610b2d610b3792610b1b565b610228565b610103565b90565b634e487b7160e01b600052601160045260246000fd5b610b5f610b6591939293610103565b92610103565b91610b71838202610103565b928184041490151715610b8057565b610b3a565b634e487b7160e01b600052601260045260246000fd5b610ba7610bad91610103565b91610103565b908115610bb8570490565b610b85565b610be9610bca60006107ac565b610be3610bdd610bd8610597565b610103565b91610103565b10610a6e565b34610c03610bfd610bf8610524565b610103565b91610103565b101580610c7e575b610c1490610af2565b610c1c610671565b50610c2760006107ac565b610c3a610c346000610b1e565b91610103565b14600014610c4f57610c4d345b33610e50565b565b610c4d610c79610c6934610c6360006107ac565b90610b50565b610c7230610676565b3190610b9b565b610c47565b50610c1434610c9c610c96610c916104b1565b610103565b91610103565b11159050610c0b565b610cea90610ce533610cdf610cd97f00000000000000000000000000000000000000000000000000000000000000006101d9565b916101d9565b14610722565b610d96565b565b60207f66756e6473000000000000000000000000000000000000000000000000000000917f55736572206973206e6f7420616c6c6f77656420746f207472616e736665722060008201520152565b610d476025604092610698565b610d5081610cec565b0190565b610d6a9060208101906000818303910152610d3a565b90565b15610d7457565b610d7c6100e3565b62461bcd60e51b815280610d9260048201610d54565b0390fd5b610dc890610db6610db1610dac6002849061037b565b610877565b610d6d565b610dc3600091600261037b565b610959565b565b610dd390610ca5565b565b610de4610dea91939293610103565b92610103565b8201809211610df557565b610b3a565b90610e076000199161092e565b9181191691161790565b610e25610e20610e2a92610103565b610228565b610103565b90565b90565b90610e45610e40610e4c92610e11565b610e2d565b8254610dfa565b9055565b610e8e610e7f610e9493610e77610e7082610e6b60006107ac565b610dd5565b6000610e30565b92600161025f565b91610e89836107ac565b610dd5565b90610e30565b56fea2646970667358221220786a848c36e2c0b2b581fbc46e3d5b04334ebc75153f765d1853bb3b4ff7ee5364736f6c63430008180033",
  "deployedBytecode": "0x60806040526004361015610013575b61066c565b61001e6000356100dd565b806312065fe0146100d857806318160ddd146100d357806370a08231146100ce5780638da5cb5b146100c9578063b3490bfc146100c4578063c51544c5146100bf578063d0e30db0146100ba578063d4d89996146100b5578063dd5967c3146100b0578063e1e158a5146100ab578063f3baf070146100a65763fc0c546a0361000e57610637565b6105af565b610543565b6104d0565b61045f565b610436565b610401565b610348565b61030d565b610291565b610199565b610129565b60e01c90565b60405190565b600080fd5b600080fd5b60009103126100fe57565b6100ee565b90565b61010f90610103565b9052565b919061012790600060208501940190610106565b565b34610159576101393660046100f3565b610155610144610682565b61014c6100e3565b91829182610113565b0390f35b6100e9565b1c90565b90565b61017590600861017a930261015e565b610162565b90565b906101889154610165565b90565b61019660008061017d565b90565b346101c9576101a93660046100f3565b6101c56101b461018b565b6101bc6100e3565b91829182610113565b0390f35b6100e9565b60018060a01b031690565b6101e2906101ce565b90565b6101ee816101d9565b036101f557565b600080fd5b90503590610207826101e5565b565b9060208282031261022357610220916000016101fa565b90565b6100ee565b90565b61023f61023a610244926101ce565b610228565b6101ce565b90565b6102509061022b565b90565b61025c90610247565b90565b9061026990610253565b600052602052604060002090565b61028e9061028960019160009261025f565b61017d565b90565b346102c1576102bd6102ac6102a7366004610209565b610277565b6102b46100e3565b91829182610113565b0390f35b6100e9565b7f000000000000000000000000000000000000000000000000000000000000000090565b6102f3906101d9565b9052565b919061030b906000602085019401906102ea565b565b3461033d5761031d3660046100f3565b6103396103286102c6565b6103306100e3565b918291826102f7565b0390f35b6100e9565b60000190565b346103765761036061035b366004610209565b6109e2565b6103686100e3565b8061037281610342565b0390f35b6100e9565b9061038590610253565b600052602052604060002090565b60ff1690565b6103a99060086103ae930261015e565b610393565b90565b906103bc9154610399565b90565b6103d6906103d160029160009261037b565b6103b1565b90565b151590565b6103e7906103d9565b9052565b91906103ff906000602085019401906103de565b565b346104315761042d61041c610417366004610209565b6103bf565b6104246100e3565b918291826103eb565b0390f35b6100e9565b6104413660046100f3565b610449610bbd565b6104516100e3565b8061045b81610342565b0390f35b3461048d57610477610472366004610209565b610dca565b61047f6100e3565b8061048981610342565b0390f35b6100e9565b90565b6104a96104a46104ae92610492565b610228565b610103565b90565b6104c26701aa535d3d0c0000610495565b90565b6104cd6104b1565b90565b34610500576104e03660046100f3565b6104fc6104eb6104c5565b6104f36100e3565b91829182610113565b0390f35b6100e9565b90565b61051c61051761052192610505565b610228565b610103565b90565b61053567011c37937e080000610508565b90565b610540610524565b90565b34610573576105533660046100f3565b61056f61055e610538565b6105666100e3565b91829182610113565b0390f35b6100e9565b90565b61058f61058a61059492610578565b610228565b610103565b90565b6105a1606461057b565b90565b6105ac610597565b90565b346105df576105bf3660046100f3565b6105db6105ca6105a4565b6105d26100e3565b91829182610113565b0390f35b6100e9565b7f000000000000000000000000000000000000000000000000000000000000000090565b61061190610247565b90565b61061d90610608565b9052565b919061063590600060208501940190610614565b565b34610667576106473660046100f3565b6106636106526105e4565b61065a6100e3565b91829182610621565b0390f35b6100e9565b600080fd5b600090565b61067f90610247565b90565b61068a610671565b5061069430610676565b3190565b60209181520190565b60207f6f6e000000000000000000000000000000000000000000000000000000000000917f4f6e6c79206f776e65722063616e20706572666f726d2074686973206163746960008201520152565b6106fc6022604092610698565b610705816106a1565b0190565b61071f90602081019060008183039101526106ef565b90565b1561072957565b6107316100e3565b62461bcd60e51b81528061074760048201610709565b0390fd5b6107909061078b3361078561077f7f00000000000000000000000000000000000000000000000000000000000000006101d9565b916101d9565b14610722565b610979565b565b60001c90565b6107a46107a991610792565b610162565b90565b6107b69054610798565b90565b60207f6c6f77207472616e736665720000000000000000000000000000000000000000917f5661756c74206973206e6f742066756c6c207965742c2063616e6e6f7420616c60008201520152565b610814602c604092610698565b61081d816107b9565b0190565b6108379060208101906000818303910152610807565b90565b1561084157565b6108496100e3565b62461bcd60e51b81528061085f60048201610821565b0390fd5b61086f61087491610792565b610393565b90565b6108819054610863565b90565b60207f6665722066756e64730000000000000000000000000000000000000000000000917f5573657220697320616c726561647920616c6c6f77656420746f207472616e7360008201520152565b6108df6029604092610698565b6108e881610884565b0190565b61090290602081019060008183039101526108d2565b90565b1561090c57565b6109146100e3565b62461bcd60e51b81528061092a600482016108ec565b0390fd5b60001b90565b9061094060ff9161092e565b9181191691161790565b610953906103d9565b90565b90565b9061096e6109696109759261094a565b610956565b8254610934565b9055565b6109e0906109a961098a60006107ac565b6109a361099d610998610597565b610103565b91610103565b1461083a565b6109ce6109c96109c36109be6002859061037b565b610877565b156103d9565b610905565b6109db600191600261037b565b610959565b565b6109eb9061074b565b565b60207f65206465706f7369747300000000000000000000000000000000000000000000917f5661756c742069732066756c6c2c2063616e6e6f7420616363657074206d6f7260008201520152565b610a48602a604092610698565b610a51816109ed565b0190565b610a6b9060208101906000818303910152610a3b565b90565b15610a7557565b610a7d6100e3565b62461bcd60e51b815280610a9360048201610a55565b0390fd5b60007f496e76616c6964206465706f73697420616d6f756e7400000000000000000000910152565b610acc6016602092610698565b610ad581610a97565b0190565b610aef9060208101906000818303910152610abf565b90565b15610af957565b610b016100e3565b62461bcd60e51b815280610b1760048201610ad9565b0390fd5b90565b610b32610b2d610b3792610b1b565b610228565b610103565b90565b634e487b7160e01b600052601160045260246000fd5b610b5f610b6591939293610103565b92610103565b91610b71838202610103565b928184041490151715610b8057565b610b3a565b634e487b7160e01b600052601260045260246000fd5b610ba7610bad91610103565b91610103565b908115610bb8570490565b610b85565b610be9610bca60006107ac565b610be3610bdd610bd8610597565b610103565b91610103565b10610a6e565b34610c03610bfd610bf8610524565b610103565b91610103565b101580610c7e575b610c1490610af2565b610c1c610671565b50610c2760006107ac565b610c3a610c346000610b1e565b91610103565b14600014610c4f57610c4d345b33610e50565b565b610c4d610c79610c6934610c6360006107ac565b90610b50565b610c7230610676565b3190610b9b565b610c47565b50610c1434610c9c610c96610c916104b1565b610103565b91610103565b11159050610c0b565b610cea90610ce533610cdf610cd97f00000000000000000000000000000000000000000000000000000000000000006101d9565b916101d9565b14610722565b610d96565b565b60207f66756e6473000000000000000000000000000000000000000000000000000000917f55736572206973206e6f7420616c6c6f77656420746f207472616e736665722060008201520152565b610d476025604092610698565b610d5081610cec565b0190565b610d6a9060208101906000818303910152610d3a565b90565b15610d7457565b610d7c6100e3565b62461bcd60e51b815280610d9260048201610d54565b0390fd5b610dc890610db6610db1610dac6002849061037b565b610877565b610d6d565b610dc3600091600261037b565b610959565b565b610dd390610ca5565b565b610de4610dea91939293610103565b92610103565b8201809211610df557565b610b3a565b90610e076000199161092e565b9181191691161790565b610e25610e20610e2a92610103565b610228565b610103565b90565b90565b90610e45610e40610e4c92610e11565b610e2d565b8254610dfa565b9055565b610e8e610e7f610e9493610e77610e7082610e6b60006107ac565b610dd5565b6000610e30565b92600161025f565b91610e89836107ac565b610dd5565b90610e30565b56fea2646970667358221220786a848c36e2c0b2b581fbc46e3d5b04334ebc75153f765d1853bb3b4ff7ee5364736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "ThirdTierVault",
    constructorArgs: [_token: AbiParameterToPrimitiveType<{"name":"_token","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ThirdTierVault$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/Vault3.sol:ThirdTierVault",
    constructorArgs: [_token: AbiParameterToPrimitiveType<{"name":"_token","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ThirdTierVault$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ThirdTierVault",
    constructorArgs: [_token: AbiParameterToPrimitiveType<{"name":"_token","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ThirdTierVault$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/Vault3.sol:ThirdTierVault",
    constructorArgs: [_token: AbiParameterToPrimitiveType<{"name":"_token","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ThirdTierVault$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ThirdTierVault",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ThirdTierVault$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/Vault3.sol:ThirdTierVault",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ThirdTierVault$Type["abi"]>>;
}
