
import { connectorsForWallets, getDefaultConfig, getDefaultWallets } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import { argentWallet, trustWallet } from '@rainbow-me/rainbowkit/wallets';
import { http } from 'viem';

const { wallets } = getDefaultWallets();

const transports = {
  [mainnet.id]: http(),
  [polygon.id]: http(),
  [optimism.id]: http(),
  [arbitrum.id]: http(),
  [base.id]: http(),
};

export const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  transports,
  wallets: [
    ...wallets,
    {
      groupName: 'More',
      wallets: [
        argentWallet,
        trustWallet,
      ],
    },
  ],
});