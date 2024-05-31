import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import Button from './Button'
import { shortenAddress } from '../helpers/shortenAddress'

export function Account() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

    const shortAddress = shortenAddress(address);
    return (
        <>
            <div className="flex space-x-4">
                {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
                {address && <div>{ensName ? `${ensName} (${shortAddress})` : shortAddress}</div>}
            </div>
            <div className="flex space-x-4">
                <Button onclick={() => disconnect()} className="bg-orange-500 p-2 rounded" >
                    Disconnect
                </Button>
            </div>
        </>
    )
}