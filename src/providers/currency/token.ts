export interface Token {
  name: string;
  symbol: string;
  decimal: number;
  address: string;
}

export const TokenOpts = {
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
    name: 'USD Coin',
    symbol: 'USDC',
    decimal: 6,
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
  },
  '0x8e870d67f660d95d5be530380d0ec0bd388289e1': {
    name: 'Paxos Standard',
    symbol: 'PAX',
    decimal: 18,
    address: '0x8e870d67f660d95d5be530380d0ec0bd388289e1'
  },
  '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd': {
    name: 'Gemini Dollar',
    symbol: 'GUSD',
    decimal: 2,
    address: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd'
  },
  '0x4fabb145d64652a948d72533023f6e7a623c7c53': {
    name: 'Binance USD Coin',
    symbol: 'BUSD',
    decimal: 18,
    address: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
  },
  '0xe3c864307b5592404431649de541c259497e2bd1': {
    name: 'LoveChain Coin',
    symbol: 'LOV',
    decimal: 8,
    address: '0xe3c864307b5592404431649de541c259497e2bd1'
  },
  '0x97e0d16620a781b5fbd51054c67e955ab5d51a34': {
    name: 'NextGenius Coin',
    symbol: 'NGC',
    decimal: 0,
    address: '0x97e0d16620a781b5fbd51054c67e955ab5d51a34'
  }
};
