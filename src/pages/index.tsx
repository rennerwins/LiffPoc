import * as React from 'react';
import { Button } from '../components';

export default function Home() {
  const handleLogout = async () => {
    const liff = (await import('@line/liff')).default;

    liff.logout();
  };

  return (
    <div>
      <main>
        <h1 className="text-3xl">Home</h1>
        <Button onClick={handleLogout}>Log out</Button>
      </main>
    </div>
  );
}
