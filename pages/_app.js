import '../styles/globals.css';
import * as React from 'react';

const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

function MyApp({ Component, pageProps }) {
  React.useEffect(async () => {
    const liff = (await import('@line/liff')).default;

    try {
      await liff.init({ liffId });
    } catch (error) {
      console.error('liff init error', error.message);
    }

    if (!liff.isLoggedIn()) {
      liff.login();
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
