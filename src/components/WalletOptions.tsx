import * as React from 'react'
import { type Connector, useConnect } from 'wagmi'
import Button from './Button'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  ))
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector
  onClick: () => void
}) {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    ; (async () => {
      const provider = await connector.getProvider()
      setReady(!!provider)
    })()
  }, [connector])

  return (
    <Button disabled={!ready} className="bg-orange-500 p-2 rounded" onclick={onClick}>
      {connector.name}
    </Button>
  )
}