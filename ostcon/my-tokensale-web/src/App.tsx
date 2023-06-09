import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { initVenomConnect } from './vcon/configure';
import VenomConnect from 'venom-connect';

function App() {
  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      ...
    </div>
  );
}

export default App;