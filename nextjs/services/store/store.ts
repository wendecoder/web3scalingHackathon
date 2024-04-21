import { create } from "zustand";
import scaffoldConfig from "~~/scaffold.config";
import { ChainWithAttributes } from "~~/utils/scaffold-eth";

/**
 * Zustand Store
 *
 * You can add global state to the app using this useGlobalState, to get & set
 * values from anywhere in the app.
 *
 * Think about it as a global useState.
 */

// const data = [
//   {
//     "id": "1",
//     "title": "CryptoLaunch",
//     "public": true,
//     "featured":{

//       "total_raised": 500000,
//       "token_price": 0.10,
//       "start_date": "2024-05-10",
//       "refund_term": "6 months",
//       "type": "public",
//       "market_maker": "TokenDynamics Inc."
//     }
//   },
//   {
//     "id": "2",
//     "title": "DeFiGems",
//     "public": true,
//     "featured":{

//       "total_raised": 800000,
//       "token_price": "TBA",
//       "start_date": "2024-05-15",
//       "refund_term": "3 months",
//       "type": "public",
//       "market_maker": "Blockchain Solutions Ltd."
//     }
//   },
//   {
//     "id": "3",
//     "title": "NFTLaunch",
//     "public": false,
//     "featured":{

//       "total_raised": 300000,
//       "token_price": 0.50,
//       "start_date": "2024-05-20",
//       "refund_term": "9 months",
//       "type": "private",
//       "market_maker": "NFT Ventures"
//     }
//   },
//   {
//     "id": "4",
//     "title": "MetaverseICO",
//     "public": true,
//     "featured":{

//       "total_raised": 1200000,
//       "token_price": 0.25,
//       "start_date": "2024-06-01",
//       "refund_term": "6 months",
//       "type": "public",
//       "market_maker": "MetaSolutions Inc."
//     }
//   },
//   {
//     "id": "5",
//     "title": "BlockchainFund",
//     "public": true,
//     "featured":{

//       "total_raised": 600000,
//       "token_price": 0.20,
//       "start_date": "2024-06-05",
//       "refund_term": "12 months",
//       "type": "public",
//       "market_maker": "CryptoCapital Ventures"
//     }
//   },
//   {
//     "id": "6",
//     "title": "TokenizeIt",
//     "public": true,
//     "featured":{

//       "total_raised": 950000,
//       "token_price": "TBA",
//       "start_date": "2024-06-10",
//       "refund_term": "4 months",
//       "type": "public",
//       "market_maker": "Tokenize Solutions"
//     }
//   },
//   {
//     "id": "7",
//     "title": "CryptoGrowth",
//     "public": false,
//     "featured":{

//       "total_raised": 400000,
//       "token_price": 0.30,
//       "start_date": "2024-06-15",
//       "refund_term": "8 months",
//       "type": "private",
//       "market_maker": "Crypto Ventures LLC"
//     }
//   },
//   {
//     "id": "8",
//     "title": "DecentralizeNow",
//     "public": true,
//     "featured":{

//       "total_raised": 700000,
//       "token_price": 0.15,
//       "start_date": "2024-06-20",
//       "refund_term": "10 months",
//       "type": "public",
//       "market_maker": "Decentralized Solutions Group"
//     }
//   },
//   {
//     "id": "9",
//     "title": "StableCoinICO",
//     "public": true,
//     "featured":{

//       "total_raised": 1500000,
//       "token_price": "TBA",
//       "start_date": "2024-07-01",
//       "refund_term": "6 months",
//       "type": "public",
//       "market_maker": "Stable Capital Ltd."
//     }
//   },
//   {
//     "id": "10",
//     "title": "SmartContractsFund",
//     "public": true,
//     "featured":{

//       "total_raised": 550000,
//       "token_price": 0.18,
//       "start_date": "2024-07-05",
//       "refund_term": "12 months",
//       "type": "public",
//       "market_maker": "Smart Contracts Inc."
//     }
//   },
//   {
//     "id": "11",
//     "title": "AIInvest",
//     "public": false,
//     "featured":{

//       "total_raised": 850000,
//       "token_price": 0.40,
//       "start_date": "2024-07-10",
//       "refund_term": "9 months",
//       "type": "private",
//       "market_maker": "AI Solutions Group"
//     }
//   },
//   {
//     "id": "12",
//     "title": "HealthTechToken",
//     "public": true,
//     "featured":{

//       "total_raised": 1100000,
//       "token_price": 0.22,
//       "start_date": "2024-07-15",
//       "refund_term": "6 months",
//       "type": "public",
//       "market_maker": "HealthTech Innovations Ltd."
//     }
//   }
// ]

type IDOFeatures = {
  total_raised: number;
  token_price: number | string;
  start_date: string;
  refund_term: string;
  type: 'public' | 'private';
  market_maker: string;
};

type IDO = {
  id: string;
  title: string;
  public: boolean;
  featured: IDOFeatures; // Features field containing other IDO properties
};

type GlobalState = {
  nativeCurrencyPrice: number;
  setNativeCurrencyPrice: (newNativeCurrencyPriceState: number) => void;
  targetNetwork: ChainWithAttributes;
  setTargetNetwork: (newTargetNetwork: []) => void;
  idos: IDO[];
  setIdos: (newIdos: IDO[]) => void;
  addIDO: (newIDO: IDO) => void;
};

export const useGlobalState = create<GlobalState>(set => ({
  nativeCurrencyPrice: 0,
  setNativeCurrencyPrice: (newValue: number): void => set(() => ({ nativeCurrencyPrice: newValue })),
  targetNetwork: scaffoldConfig.targetNetworks[0],
  setTargetNetwork: (newTargetNetwork: ChainWithAttributes) => set(() => ({ targetNetwork: newTargetNetwork })),
  idos: [
    {
      "id": "1",
      "title": "CryptoLaunch",
      "public": true,
      "featured":{

        "total_raised": 500000,
        "token_price": 0.10,
        "start_date": "2024-05-10",
        "refund_term": "6 months",
        "type": "public",
        "market_maker": "TokenDynamics Inc."
      }
    },
    {
      "id": "2",
      "title": "DeFiGems",
      "public": true,
      "featured":{

        "total_raised": 800000,
        "token_price": "TBA",
        "start_date": "2024-05-15",
        "refund_term": "3 months",
        "type": "public",
        "market_maker": "Blockchain Solutions Ltd."
      }
    },
    {
      "id": "3",
      "title": "NFTLaunch",
      "public": false,
      "featured":{

        "total_raised": 300000,
        "token_price": 0.50,
        "start_date": "2024-05-20",
        "refund_term": "9 months",
        "type": "private",
        "market_maker": "NFT Ventures"
      }
    },
    {
      "id": "4",
      "title": "MetaverseICO",
      "public": true,
      "featured":{

        "total_raised": 1200000,
        "token_price": 0.25,
        "start_date": "2024-06-01",
        "refund_term": "6 months",
        "type": "public",
        "market_maker": "MetaSolutions Inc."
      }
    },
    {
      "id": "5",
      "title": "BlockchainFund",
      "public": true,
      "featured":{

        "total_raised": 600000,
        "token_price": 0.20,
        "start_date": "2024-06-05",
        "refund_term": "12 months",
        "type": "public",
        "market_maker": "CryptoCapital Ventures"
      }
    },
    {
      "id": "6",
      "title": "TokenizeIt",
      "public": true,
      "featured":{

        "total_raised": 950000,
        "token_price": "TBA",
        "start_date": "2024-06-10",
        "refund_term": "4 months",
        "type": "public",
        "market_maker": "Tokenize Solutions"
      }
    },
    {
      "id": "7",
      "title": "CryptoGrowth",
      "public": false,
      "featured":{

        "total_raised": 400000,
        "token_price": 0.30,
        "start_date": "2024-06-15",
        "refund_term": "8 months",
        "type": "private",
        "market_maker": "Crypto Ventures LLC"
      }
    },
    {
      "id": "8",
      "title": "DecentralizeNow",
      "public": true,
      "featured":{

        "total_raised": 700000,
        "token_price": 0.15,
        "start_date": "2024-06-20",
        "refund_term": "10 months",
        "type": "public",
        "market_maker": "Decentralized Solutions Group"
      }
    },
    {
      "id": "9",
      "title": "StableCoinICO",
      "public": true,
      "featured":{

        "total_raised": 1500000,
        "token_price": "TBA",
        "start_date": "2024-07-01",
        "refund_term": "6 months",
        "type": "public",
        "market_maker": "Stable Capital Ltd."
      }
    },
    {
      "id": "10",
      "title": "SmartContractsFund",
      "public": true,
      "featured":{

        "total_raised": 550000,
        "token_price": 0.18,
        "start_date": "2024-07-05",
        "refund_term": "12 months",
        "type": "public",
        "market_maker": "Smart Contracts Inc."
      }
    },
    {
      "id": "11",
      "title": "AIInvest",
      "public": false,
      "featured":{

        "total_raised": 850000,
        "token_price": 0.40,
        "start_date": "2024-07-10",
        "refund_term": "9 months",
        "type": "private",
        "market_maker": "AI Solutions Group"
      }
    },
    {
      "id": "12",
      "title": "HealthTechToken",
      "public": true,
      "featured":{

        "total_raised": 1100000,
        "token_price": 0.22,
        "start_date": "2024-07-15",
        "refund_term": "6 months",
        "type": "public",
        "market_maker": "HealthTech Innovations Ltd."
      }
    }
  ], // Initialize with empty array
  setIdos: (newIdos: IDO[]) => set(() => ({ idos: newIdos })),
  addIDO: (newIDO: IDO) => set(state => ({ idos: [...state.idos, { ...newIDO, data: null }] })),
}));
