import '../styles/globals.css';
// import liff from '@line/liff';
import * as React from 'react';

function MyApp({ Component, pageProps }) {
  // console.log('liff', liff);
  React.useEffect(async () => {
    const liff = (await import('@line/liff')).default;
    console.log('liff:', liff);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
