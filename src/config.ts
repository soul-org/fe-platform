import { createConfig, http } from 'wagmi'
import { avalancheFuji, polygonAmoy } from 'wagmi/chains'

export const config = createConfig({
  chains: [avalancheFuji, polygonAmoy],
  transports: {
    [avalancheFuji.id]: http(),
    [polygonAmoy.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}