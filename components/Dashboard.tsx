
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Simulate wallet connection
    setConnected(true);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to WebStreet</h1>
      {connected ? (
        <p>Your wallet is connected. Explore AI-powered finance.</p>
      ) : (
        <p>Connect your wallet to get started.</p>
      )}
    </div>
  );
}
