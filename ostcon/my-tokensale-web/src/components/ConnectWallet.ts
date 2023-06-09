import React from 'react';
import { VenomConnect } from 'venom-connect';

type Props = {
  venomConnect: VenomConnect | undefined;
};

const ConnectWallet: React.FC<Props> = ({ venomConnect }) => {
  const login = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };
  
  return (
    <div>
      <h1>Connect Wallet</h1>
      <p>Connect Wallet to continue</p>
      <button className="btn" onClick={login}>
        Connect wallet
      </button>
    </div>
  );
};

export default ConnectWallet;
