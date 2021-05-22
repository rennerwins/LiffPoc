import type { AppProps } from 'next/app';
import * as React from 'react';
import { RecoilRoot } from 'recoil';
import '../../styles/globals.css';
import { OnBoarding } from '../components';
import 'swiper/swiper.min.css';

const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const initLiff = async () => {
    const liff = (await import('@line/liff')).default;

    try {
      await liff.init({ liffId });
      console.log('ready');
    } catch (err) {
      console.error('liff init error', err.message);
    }

    setIsLoggedIn(liff.isLoggedIn());
    setIsLoading(false);
  };

  React.useEffect(() => {
    initLiff();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-gray-100">
        <div className="flex flex-1 h-full justify-center items-center">
          <h1 className="text-2xl">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!isLoading && !isLoggedIn) {
    return <OnBoarding />;
  }

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
