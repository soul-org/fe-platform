import { useAccount } from 'wagmi'
import { Account } from './Account'
import { WalletOptions } from './WalletOptions'

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

interface NavbarProps {
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg mx-4 my-2">
      <img src="/logo.png" alt="logo" className="h-10" />
      <span className="text-3xl font-bold mx-4">{title}</span>
      <div className="flex space-x-4">
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Navbar;
