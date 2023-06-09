import React, { useEffect, useState } from 'react';
import { VenomConnect } from 'vcon';

import ConnectWallet from './components/ConnectWallet';
import SaleForm from './components/SaleForm';

type Props = {
  venomConnect: VenomConnect | undefined;
};

function Main({ venomConnect }: Props) {
  const [venomProvider, setVenomProvider] = useState<any>();
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState();

  const getAddress = async (provider: any) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.address.toString();
  };

  const getBalance = async (provider: any) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.balance.toString();
  };

  const checkAuth = async (_venomConnect: any) => {
    const auth = await _venomConnect?.checkAuth();
    if (auth) {
      await getAddress(_venomConnect);
      await getBalance(_venomConnect);
    }
  };

  const onConnect = async (provider: any) => {
    setVenomProvider(provider);
    await onProviderReady(provider);
  };

  const onDisconnect = async () => {
    venomProvider?.disconnect();
    setAddress(undefined);
    setBalance(undefined);
  };

  const onProviderReady = async (provider: any) => {
    const venomWalletAddress = provider ? await getAddress(provider) : undefined;
    const venomWalletBalance = provider ? await getBalance(provider) : undefined;
    setAddress(venomWalletAddress);
    setBalance(venomWalletBalance);
  };

  useEffect(() => {
    const off = venomConnect?.on('connect', onConnect);
    if (venomConnect) {
      checkAuth(venomConnect);
    }

    return () => {
      off?.();
    };
  }, [venomConnect]);

  return (
    <div className="App">
      {address && (
        <header>
          <p>{address}</p>
          <p>{balance}</p>
          <a className="logout" onClick={onDisconnect}>
            <img src="img" alt="Log out" />
          </a>
        </header>
      )}
      {address ? (
        <SaleForm
          address={address}
          balance={balance}
          venomConnect={venomConnect}
          provider={venomProvider}
          getBalance={getBalance}
        />
      ) : (
        <ConnectWallet venomConnect={venomConnect} />
      )}
    </div>
  );
}

export default Main;
