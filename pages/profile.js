import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Profile() {
  const [profile, setProfile] = React.useState({});

  React.useEffect(async () => {
    const liff = (await import('@line/liff')).default;
    await liff.ready;
    const profile = await liff.getProfile();
    console.log('profile:', profile);
    setProfile(profile);
  }, [profile.userId]);

  return (
    <section>
      <Head>
        <title>My Profile</title>
      </Head>
      <h1>Profile</h1>
      {/* <div>{profile}</div> */}
    </section>
  );
}
