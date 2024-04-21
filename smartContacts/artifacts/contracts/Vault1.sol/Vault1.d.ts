// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface Vault1$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "Vault1",
  "sourceName": "contracts/Vault1.sol",
  "abi": [
    {
      "inputs": [],
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
      "name": "getAddressAllowedToTransfer",
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
      "name": "getSecondUserShare",
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
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "makeTotalParticipant99",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_launchpadContract",
          "type": "address"
        }
      ],
      "name": "setLaunchpadContractAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
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
  "bytecode": "0x60a0604052346200003d5762000014620000c1565b6200001e62000043565b611725620000d682396080518181816106a90152610edc015261172590f35b62000049565b60405190565b600080fd5b60001b90565b9062000063600019916200004e565b9181191691161790565b90565b90565b90565b6200008f6200008962000095926200006d565b62000073565b62000070565b90565b90565b90620000b5620000af620000bd9262000076565b62000098565b825462000054565b9055565b620000cf600060056200009b565b3360805256fe60806040526004361015610013575b6108ef565b61001e60003561013d565b806304c4fd901461013857806306dd74a5146101335780630fec19591461012e578063116136da1461012957806312065fe01461012457806318160ddd1461011f57806319507d2c1461011a57806335c1d3491461011557806342373e741461011057806370a082311461010b57806374244bc9146101065780637cda8ed5146101015780638da5cb5b146100fc5780638eaaf2d3146100f7578063d0e30db0146100f2578063dd5967c3146100ed578063e1e158a5146100e85763f3baf0700361000e576108ba565b61084e565b6107dc565b610776565b610743565b6106cb565b610674565b61063f565b6105fa565b610519565b6104e4565b6103f1565b61037b565b61030d565b6102d8565b610233565b6101f8565b61019d565b60e01c90565b60405190565b600080fd5b600080fd5b600091031261015e57565b61014e565b60018060a01b031690565b61017790610163565b90565b6101839061016e565b9052565b919061019b9060006020850194019061017a565b565b346101cd576101ad366004610153565b6101c96101b8610920565b6101c0610143565b91829182610187565b0390f35b610149565b90565b6101de906101d2565b9052565b91906101f6906000602085019401906101d5565b565b3461022857610208366004610153565b61022461021361095c565b61021b610143565b918291826101e2565b0390f35b610149565b60000190565b3461026157610243366004610153565b61024b610c3b565b610253610143565b8061025d8161022d565b0390f35b610149565b1c90565b60018060a01b031690565b61028590600861028a9302610266565b61026a565b90565b906102989154610275565b90565b6102a660008061028d565b90565b6102b290610163565b90565b6102be906102a9565b9052565b91906102d6906000602085019401906102b5565b565b34610308576102e8366004610153565b6103046102f361029b565b6102fb610143565b918291826102c2565b0390f35b610149565b3461033d5761031d366004610153565b610339610328610c45565b610330610143565b918291826101e2565b0390f35b610149565b90565b61035590600861035a9302610266565b610342565b90565b906103689154610345565b90565b610378600260009061035d565b90565b346103ab5761038b366004610153565b6103a761039661036b565b61039e610143565b918291826101e2565b0390f35b610149565b60018060a01b031690565b6103cb9060086103d09302610266565b6103b0565b90565b906103de91546103bb565b90565b6103ee60046000906103d3565b90565b3461042157610401366004610153565b61041d61040c6103e1565b610414610143565b91829182610187565b0390f35b610149565b61042f816101d2565b0361043657565b600080fd5b9050359061044882610426565b565b90602082820312610464576104619160000161043b565b90565b61014e565b634e487b7160e01b600052603260045260246000fd5b5490565b600052602060002090565b6104978161047f565b8210156104b2576104a9600191610483565b91020190600090565b610469565b60016104c28161047f565b8210156104df576104dc916104d69161048e565b906103d3565b90565b600080fd5b34610514576105106104ff6104fa36600461044a565b6104b7565b610507610143565b91829182610187565b0390f35b610149565b3461054957610529366004610153565b610545610534610d0d565b61053c610143565b91829182610187565b0390f35b610149565b6105578161016e565b0361055e57565b600080fd5b905035906105708261054e565b565b9060208282031261058c5761058991600001610563565b90565b61014e565b90565b6105a86105a36105ad92610163565b610591565b610163565b90565b6105b990610594565b90565b6105c5906105b0565b90565b906105d2906105bc565b600052602052604060002090565b6105f7906105f26003916000926105c8565b61035d565b90565b3461062a57610626610615610610366004610572565b6105e0565b61061d610143565b918291826101e2565b0390f35b610149565b61063c600560009061035d565b90565b3461066f5761064f366004610153565b61066b61065a61062f565b610662610143565b918291826101e2565b0390f35b610149565b346106a257610684366004610153565b61068c610fa7565b610694610143565b8061069e8161022d565b0390f35b610149565b7f000000000000000000000000000000000000000000000000000000000000000090565b346106fb576106db366004610153565b6106f76106e66106a7565b6106ee610143565b91829182610187565b0390f35b610149565b610709816102a9565b0361071057565b600080fd5b9050359061072282610700565b565b9060208282031261073e5761073b91600001610715565b90565b61014e565b346107715761075b610756366004610724565b611007565b610763610143565b8061076d8161022d565b0390f35b610149565b610781366004610153565b6107896111e2565b610791610143565b8061079b8161022d565b0390f35b90565b6107b66107b16107bb9261079f565b610591565b6101d2565b90565b6107ce668e1bc9bf0400006107a2565b90565b6107d96107be565b90565b3461080c576107ec366004610153565b6108086107f76107d1565b6107ff610143565b918291826101e2565b0390f35b610149565b90565b61082861082361082d92610811565b610591565b6101d2565b90565b61084066470de4df820000610814565b90565b61084b610830565b90565b3461087e5761085e366004610153565b61087a610869610843565b610871610143565b918291826101e2565b0390f35b610149565b90565b61089a61089561089f92610883565b610591565b6101d2565b90565b6108ac6064610886565b90565b6108b76108a2565b90565b346108ea576108ca366004610153565b6108e66108d56108af565b6108dd610143565b918291826101e2565b0390f35b610149565b600080fd5b600090565b60001c90565b61090b610910916108f9565b6103b0565b90565b61091d90546108ff565b90565b6109286108f4565b506109336004610913565b90565b600090565b61094761094c916108f9565b610342565b90565b610959905461093b565b90565b610964610936565b5061098c610987600361098161097b60018061048e565b906103d3565b906105c8565b61094f565b90565b60209181520190565b60007f4e6f7420616c6c6f77656420746f207472616e736665722066756e6473000000910152565b6109cd601d60209261098f565b6109d681610998565b0190565b6109f090602081019060008183039101526109c0565b90565b156109fa57565b610a02610143565b62461bcd60e51b815280610a18600482016109da565b0390fd5b610a41610a296004610913565b610a3b610a353361016e565b9161016e565b146109f3565b610a49610acf565b565b60007f5661756c74206973206e6f742066756c6c207965740000000000000000000000910152565b610a80601560209261098f565b610a8981610a4b565b0190565b610aa39060208101906000818303910152610a73565b90565b15610aad57565b610ab5610143565b62461bcd60e51b815280610acb60048201610a8d565b0390fd5b610afb610adc600561094f565b610af5610aef610aea6108a2565b6101d2565b916101d2565b14610aa6565b610b03610bed565b565b610b11610b16916108f9565b61026a565b90565b610b239054610b05565b90565b90565b610b3d610b38610b4292610b26565b610591565b610163565b90565b610b4e90610b29565b90565b610b5a906105b0565b90565b60007f4c61756e636870616420636f6e7472616374206e6f7420736574000000000000910152565b610b92601a60209261098f565b610b9b81610b5d565b0190565b610bb59060208101906000818303910152610b85565b90565b15610bbf57565b610bc7610143565b62461bcd60e51b815280610bdd60048201610b9f565b0390fd5b610bea906105b0565b90565b610c1c610bfa6000610b19565b610c15610c0f610c0a6000610b45565b61016e565b91610b51565b1415610bb8565b610c39610c296000610b19565b610c3230610be1565b31906114b4565b565b610c43610a1c565b565b610c4d610936565b50610c5730610be1565b3190565b60007f537562736372697074696f6e206e6f7420656e64656400000000000000000000910152565b610c90601660209261098f565b610c9981610c5b565b0190565b610cb39060208101906000818303910152610c83565b90565b15610cbd57565b610cc5610143565b62461bcd60e51b815280610cdb60048201610c9d565b0390fd5b90565b610cf6610cf1610cfb92610cdf565b610591565b6101d2565b90565b6001610d0a91016101d2565b90565b610d156108f4565b50610d42610d23600561094f565b610d3c610d36610d316108a2565b6101d2565b916101d2565b14610cb6565b610d58610d52600160009061048e565b906103d3565b610d81610d7c6003610d76610d70600160009061048e565b906103d3565b906105c8565b61094f565b610d8b6001610ce2565b5b80610da8610da2610d9d600161047f565b6101d2565b916101d2565b1015610e2157610dc3610dbd6001839061048e565b906103d3565b610dd7610dd2600383906105c8565b61094f565b610de9610de3856101d2565b916101d2565b11610dfe575b50610df990610cfe565b610d8c565b91509150610df9610e19610e14600384906105c8565b61094f565b919290610def565b505090565b60207f6f6e000000000000000000000000000000000000000000000000000000000000917f4f6e6c79206f776e65722063616e20706572666f726d2074686973206163746960008201520152565b610e81602260409261098f565b610e8a81610e26565b0190565b610ea49060208101906000818303910152610e74565b90565b15610eae57565b610eb6610143565b62461bcd60e51b815280610ecc60048201610e8e565b0390fd5b610f0c33610f06610f007f000000000000000000000000000000000000000000000000000000000000000061016e565b9161016e565b14610ea7565b610f14610f91565b565b90565b610f2d610f28610f3292610f16565b610591565b6101d2565b90565b60001b90565b90610f4860001991610f35565b9181191691161790565b610f66610f61610f6b926101d2565b610591565b6101d2565b90565b90565b90610f86610f81610f8d92610f52565b610f6e565b8254610f3b565b9055565b610fa5610f9e6063610f19565b6005610f71565b565b610faf610ed0565b565b90610fc260018060a01b0391610f35565b9181191691161790565b610fd590610594565b90565b610fe190610fcc565b90565b90565b90610ffc610ff761100392610fd8565b610fe4565b8254610fb1565b9055565b611012906000610fe7565b565b61102861102361102d92610b26565b610591565b6101d2565b90565b60007f557365722068617320616c7265616479206465706f7369746564000000000000910152565b611065601a60209261098f565b61106e81611030565b0190565b6110889060208101906000818303910152611058565b90565b1561109257565b61109a610143565b62461bcd60e51b8152806110b060048201611072565b0390fd5b60007f496e76616c6964206465706f73697420616d6f756e7400000000000000000000910152565b6110e9601660209261098f565b6110f2816110b4565b0190565b61110c90602081019060008183039101526110dc565b90565b1561111657565b61111e610143565b62461bcd60e51b815280611134600482016110f6565b0390fd5b60207f65206465706f7369747300000000000000000000000000000000000000000000917f5661756c742069732066756c6c2c2063616e6e6f7420616363657074206d6f7260008201520152565b611193602a60409261098f565b61119c81611138565b0190565b6111b69060208101906000818303910152611186565b90565b156111c057565b6111c8610143565b62461bcd60e51b8152806111de600482016111a0565b0390fd5b6112126111f96111f4600333906105c8565b61094f565b61120c6112066000611014565b916101d2565b1461108b565b3461122c611226611221610830565b6101d2565b916101d2565b101580611276575b61123d9061110f565b61126a61124a600561094f565b61126361125d6112586108a2565b6101d2565b916101d2565b11156111b9565b6112743433611630565b565b5061123d3461129461128e6112896107be565b6101d2565b916101d2565b11159050611234565b60007f416464726573733a20696e73756666696369656e742062616c616e6365000000910152565b6112d2601d60209261098f565b6112db8161129d565b0190565b6112f590602081019060008183039101526112c5565b90565b156112ff57565b611307610143565b62461bcd60e51b81528061131d600482016112df565b0390fd5b905090565b61133260008092611321565b0190565b61133f90611326565b90565b601f801991011690565b634e487b7160e01b600052604160045260246000fd5b9061136c90611342565b810190811067ffffffffffffffff82111761138657604052565b61134c565b9061139e611397610143565b9283611362565b565b67ffffffffffffffff81116113be576113ba602091611342565b0190565b61134c565b906113d56113d0836113a0565b61138b565b918252565b606090565b3d6000146113fc576113f03d6113c3565b903d6000602084013e5b565b6114046113da565b906113fa565b60207f6563697069656e74206d61792068617665207265766572746564000000000000917f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201520152565b611465603a60409261098f565b61146e8161140a565b0190565b6114889060208101906000818303910152611458565b90565b1561149257565b61149a610143565b62461bcd60e51b8152806114b060048201611472565b0390fd5b6000611510926114ea82936114e56114cb30610be1565b316114de6114d8866101d2565b916101d2565b10156112f8565b610b51565b906114f3610143565b90816114fe81611336565b03925af161150a6113df565b5061148b565b565b634e487b7160e01b600052601160045260246000fd5b61153761153d919392936101d2565b926101d2565b820180921161154857565b611512565b90565b600052602060002090565b5490565b6115688161155b565b8210156115835761157a600191611550565b91020190600090565b610469565b1b90565b919060086115ac9102916115a660018060a01b0384611588565b92611588565b9181191691161790565b90565b91906115cf6115ca6115d7936105bc565b6115b6565b90835461158c565b9055565b908154916801000000000000000083101561160b57826116039160016116099501815561155f565b906115b9565b565b61134c565b9061162561162061162c926105bc565b6115b6565b8254610fb1565b9055565b6116786116ad9261165461164d82611648600261094f565b611528565b6002610f71565b611672611663600385906105c8565b9161166d8361094f565b611528565b90610f71565b61169e6116976116886001610ce2565b611692600561094f565b611528565b6005610f71565b6116a8600161154d565b6115db565b6116b7600561094f565b6116d06116ca6116c56108a2565b6101d2565b916101d2565b146116d8575b565b6116ea6116e3610d0d565b6004611610565b6116d656fea26469706673582212200660741ab8442433aa5b12fc64821ee8873f47b7525a24e6e28f25e45500178a64736f6c63430008180033",
  "deployedBytecode": "0x60806040526004361015610013575b6108ef565b61001e60003561013d565b806304c4fd901461013857806306dd74a5146101335780630fec19591461012e578063116136da1461012957806312065fe01461012457806318160ddd1461011f57806319507d2c1461011a57806335c1d3491461011557806342373e741461011057806370a082311461010b57806374244bc9146101065780637cda8ed5146101015780638da5cb5b146100fc5780638eaaf2d3146100f7578063d0e30db0146100f2578063dd5967c3146100ed578063e1e158a5146100e85763f3baf0700361000e576108ba565b61084e565b6107dc565b610776565b610743565b6106cb565b610674565b61063f565b6105fa565b610519565b6104e4565b6103f1565b61037b565b61030d565b6102d8565b610233565b6101f8565b61019d565b60e01c90565b60405190565b600080fd5b600080fd5b600091031261015e57565b61014e565b60018060a01b031690565b61017790610163565b90565b6101839061016e565b9052565b919061019b9060006020850194019061017a565b565b346101cd576101ad366004610153565b6101c96101b8610920565b6101c0610143565b91829182610187565b0390f35b610149565b90565b6101de906101d2565b9052565b91906101f6906000602085019401906101d5565b565b3461022857610208366004610153565b61022461021361095c565b61021b610143565b918291826101e2565b0390f35b610149565b60000190565b3461026157610243366004610153565b61024b610c3b565b610253610143565b8061025d8161022d565b0390f35b610149565b1c90565b60018060a01b031690565b61028590600861028a9302610266565b61026a565b90565b906102989154610275565b90565b6102a660008061028d565b90565b6102b290610163565b90565b6102be906102a9565b9052565b91906102d6906000602085019401906102b5565b565b34610308576102e8366004610153565b6103046102f361029b565b6102fb610143565b918291826102c2565b0390f35b610149565b3461033d5761031d366004610153565b610339610328610c45565b610330610143565b918291826101e2565b0390f35b610149565b90565b61035590600861035a9302610266565b610342565b90565b906103689154610345565b90565b610378600260009061035d565b90565b346103ab5761038b366004610153565b6103a761039661036b565b61039e610143565b918291826101e2565b0390f35b610149565b60018060a01b031690565b6103cb9060086103d09302610266565b6103b0565b90565b906103de91546103bb565b90565b6103ee60046000906103d3565b90565b3461042157610401366004610153565b61041d61040c6103e1565b610414610143565b91829182610187565b0390f35b610149565b61042f816101d2565b0361043657565b600080fd5b9050359061044882610426565b565b90602082820312610464576104619160000161043b565b90565b61014e565b634e487b7160e01b600052603260045260246000fd5b5490565b600052602060002090565b6104978161047f565b8210156104b2576104a9600191610483565b91020190600090565b610469565b60016104c28161047f565b8210156104df576104dc916104d69161048e565b906103d3565b90565b600080fd5b34610514576105106104ff6104fa36600461044a565b6104b7565b610507610143565b91829182610187565b0390f35b610149565b3461054957610529366004610153565b610545610534610d0d565b61053c610143565b91829182610187565b0390f35b610149565b6105578161016e565b0361055e57565b600080fd5b905035906105708261054e565b565b9060208282031261058c5761058991600001610563565b90565b61014e565b90565b6105a86105a36105ad92610163565b610591565b610163565b90565b6105b990610594565b90565b6105c5906105b0565b90565b906105d2906105bc565b600052602052604060002090565b6105f7906105f26003916000926105c8565b61035d565b90565b3461062a57610626610615610610366004610572565b6105e0565b61061d610143565b918291826101e2565b0390f35b610149565b61063c600560009061035d565b90565b3461066f5761064f366004610153565b61066b61065a61062f565b610662610143565b918291826101e2565b0390f35b610149565b346106a257610684366004610153565b61068c610fa7565b610694610143565b8061069e8161022d565b0390f35b610149565b7f000000000000000000000000000000000000000000000000000000000000000090565b346106fb576106db366004610153565b6106f76106e66106a7565b6106ee610143565b91829182610187565b0390f35b610149565b610709816102a9565b0361071057565b600080fd5b9050359061072282610700565b565b9060208282031261073e5761073b91600001610715565b90565b61014e565b346107715761075b610756366004610724565b611007565b610763610143565b8061076d8161022d565b0390f35b610149565b610781366004610153565b6107896111e2565b610791610143565b8061079b8161022d565b0390f35b90565b6107b66107b16107bb9261079f565b610591565b6101d2565b90565b6107ce668e1bc9bf0400006107a2565b90565b6107d96107be565b90565b3461080c576107ec366004610153565b6108086107f76107d1565b6107ff610143565b918291826101e2565b0390f35b610149565b90565b61082861082361082d92610811565b610591565b6101d2565b90565b61084066470de4df820000610814565b90565b61084b610830565b90565b3461087e5761085e366004610153565b61087a610869610843565b610871610143565b918291826101e2565b0390f35b610149565b90565b61089a61089561089f92610883565b610591565b6101d2565b90565b6108ac6064610886565b90565b6108b76108a2565b90565b346108ea576108ca366004610153565b6108e66108d56108af565b6108dd610143565b918291826101e2565b0390f35b610149565b600080fd5b600090565b60001c90565b61090b610910916108f9565b6103b0565b90565b61091d90546108ff565b90565b6109286108f4565b506109336004610913565b90565b600090565b61094761094c916108f9565b610342565b90565b610959905461093b565b90565b610964610936565b5061098c610987600361098161097b60018061048e565b906103d3565b906105c8565b61094f565b90565b60209181520190565b60007f4e6f7420616c6c6f77656420746f207472616e736665722066756e6473000000910152565b6109cd601d60209261098f565b6109d681610998565b0190565b6109f090602081019060008183039101526109c0565b90565b156109fa57565b610a02610143565b62461bcd60e51b815280610a18600482016109da565b0390fd5b610a41610a296004610913565b610a3b610a353361016e565b9161016e565b146109f3565b610a49610acf565b565b60007f5661756c74206973206e6f742066756c6c207965740000000000000000000000910152565b610a80601560209261098f565b610a8981610a4b565b0190565b610aa39060208101906000818303910152610a73565b90565b15610aad57565b610ab5610143565b62461bcd60e51b815280610acb60048201610a8d565b0390fd5b610afb610adc600561094f565b610af5610aef610aea6108a2565b6101d2565b916101d2565b14610aa6565b610b03610bed565b565b610b11610b16916108f9565b61026a565b90565b610b239054610b05565b90565b90565b610b3d610b38610b4292610b26565b610591565b610163565b90565b610b4e90610b29565b90565b610b5a906105b0565b90565b60007f4c61756e636870616420636f6e7472616374206e6f7420736574000000000000910152565b610b92601a60209261098f565b610b9b81610b5d565b0190565b610bb59060208101906000818303910152610b85565b90565b15610bbf57565b610bc7610143565b62461bcd60e51b815280610bdd60048201610b9f565b0390fd5b610bea906105b0565b90565b610c1c610bfa6000610b19565b610c15610c0f610c0a6000610b45565b61016e565b91610b51565b1415610bb8565b610c39610c296000610b19565b610c3230610be1565b31906114b4565b565b610c43610a1c565b565b610c4d610936565b50610c5730610be1565b3190565b60007f537562736372697074696f6e206e6f7420656e64656400000000000000000000910152565b610c90601660209261098f565b610c9981610c5b565b0190565b610cb39060208101906000818303910152610c83565b90565b15610cbd57565b610cc5610143565b62461bcd60e51b815280610cdb60048201610c9d565b0390fd5b90565b610cf6610cf1610cfb92610cdf565b610591565b6101d2565b90565b6001610d0a91016101d2565b90565b610d156108f4565b50610d42610d23600561094f565b610d3c610d36610d316108a2565b6101d2565b916101d2565b14610cb6565b610d58610d52600160009061048e565b906103d3565b610d81610d7c6003610d76610d70600160009061048e565b906103d3565b906105c8565b61094f565b610d8b6001610ce2565b5b80610da8610da2610d9d600161047f565b6101d2565b916101d2565b1015610e2157610dc3610dbd6001839061048e565b906103d3565b610dd7610dd2600383906105c8565b61094f565b610de9610de3856101d2565b916101d2565b11610dfe575b50610df990610cfe565b610d8c565b91509150610df9610e19610e14600384906105c8565b61094f565b919290610def565b505090565b60207f6f6e000000000000000000000000000000000000000000000000000000000000917f4f6e6c79206f776e65722063616e20706572666f726d2074686973206163746960008201520152565b610e81602260409261098f565b610e8a81610e26565b0190565b610ea49060208101906000818303910152610e74565b90565b15610eae57565b610eb6610143565b62461bcd60e51b815280610ecc60048201610e8e565b0390fd5b610f0c33610f06610f007f000000000000000000000000000000000000000000000000000000000000000061016e565b9161016e565b14610ea7565b610f14610f91565b565b90565b610f2d610f28610f3292610f16565b610591565b6101d2565b90565b60001b90565b90610f4860001991610f35565b9181191691161790565b610f66610f61610f6b926101d2565b610591565b6101d2565b90565b90565b90610f86610f81610f8d92610f52565b610f6e565b8254610f3b565b9055565b610fa5610f9e6063610f19565b6005610f71565b565b610faf610ed0565b565b90610fc260018060a01b0391610f35565b9181191691161790565b610fd590610594565b90565b610fe190610fcc565b90565b90565b90610ffc610ff761100392610fd8565b610fe4565b8254610fb1565b9055565b611012906000610fe7565b565b61102861102361102d92610b26565b610591565b6101d2565b90565b60007f557365722068617320616c7265616479206465706f7369746564000000000000910152565b611065601a60209261098f565b61106e81611030565b0190565b6110889060208101906000818303910152611058565b90565b1561109257565b61109a610143565b62461bcd60e51b8152806110b060048201611072565b0390fd5b60007f496e76616c6964206465706f73697420616d6f756e7400000000000000000000910152565b6110e9601660209261098f565b6110f2816110b4565b0190565b61110c90602081019060008183039101526110dc565b90565b1561111657565b61111e610143565b62461bcd60e51b815280611134600482016110f6565b0390fd5b60207f65206465706f7369747300000000000000000000000000000000000000000000917f5661756c742069732066756c6c2c2063616e6e6f7420616363657074206d6f7260008201520152565b611193602a60409261098f565b61119c81611138565b0190565b6111b69060208101906000818303910152611186565b90565b156111c057565b6111c8610143565b62461bcd60e51b8152806111de600482016111a0565b0390fd5b6112126111f96111f4600333906105c8565b61094f565b61120c6112066000611014565b916101d2565b1461108b565b3461122c611226611221610830565b6101d2565b916101d2565b101580611276575b61123d9061110f565b61126a61124a600561094f565b61126361125d6112586108a2565b6101d2565b916101d2565b11156111b9565b6112743433611630565b565b5061123d3461129461128e6112896107be565b6101d2565b916101d2565b11159050611234565b60007f416464726573733a20696e73756666696369656e742062616c616e6365000000910152565b6112d2601d60209261098f565b6112db8161129d565b0190565b6112f590602081019060008183039101526112c5565b90565b156112ff57565b611307610143565b62461bcd60e51b81528061131d600482016112df565b0390fd5b905090565b61133260008092611321565b0190565b61133f90611326565b90565b601f801991011690565b634e487b7160e01b600052604160045260246000fd5b9061136c90611342565b810190811067ffffffffffffffff82111761138657604052565b61134c565b9061139e611397610143565b9283611362565b565b67ffffffffffffffff81116113be576113ba602091611342565b0190565b61134c565b906113d56113d0836113a0565b61138b565b918252565b606090565b3d6000146113fc576113f03d6113c3565b903d6000602084013e5b565b6114046113da565b906113fa565b60207f6563697069656e74206d61792068617665207265766572746564000000000000917f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201520152565b611465603a60409261098f565b61146e8161140a565b0190565b6114889060208101906000818303910152611458565b90565b1561149257565b61149a610143565b62461bcd60e51b8152806114b060048201611472565b0390fd5b6000611510926114ea82936114e56114cb30610be1565b316114de6114d8866101d2565b916101d2565b10156112f8565b610b51565b906114f3610143565b90816114fe81611336565b03925af161150a6113df565b5061148b565b565b634e487b7160e01b600052601160045260246000fd5b61153761153d919392936101d2565b926101d2565b820180921161154857565b611512565b90565b600052602060002090565b5490565b6115688161155b565b8210156115835761157a600191611550565b91020190600090565b610469565b1b90565b919060086115ac9102916115a660018060a01b0384611588565b92611588565b9181191691161790565b90565b91906115cf6115ca6115d7936105bc565b6115b6565b90835461158c565b9055565b908154916801000000000000000083101561160b57826116039160016116099501815561155f565b906115b9565b565b61134c565b9061162561162061162c926105bc565b6115b6565b8254610fb1565b9055565b6116786116ad9261165461164d82611648600261094f565b611528565b6002610f71565b611672611663600385906105c8565b9161166d8361094f565b611528565b90610f71565b61169e6116976116886001610ce2565b611692600561094f565b611528565b6005610f71565b6116a8600161154d565b6115db565b6116b7600561094f565b6116d06116ca6116c56108a2565b6101d2565b916101d2565b146116d8575b565b6116ea6116e3610d0d565b6004611610565b6116d656fea26469706673582212200660741ab8442433aa5b12fc64821ee8873f47b7525a24e6e28f25e45500178a64736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "Vault1",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Vault1$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/Vault1.sol:Vault1",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<Vault1$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "Vault1",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Vault1$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/Vault1.sol:Vault1",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<Vault1$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "Vault1",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Vault1$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/Vault1.sol:Vault1",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<Vault1$Type["abi"]>>;
}