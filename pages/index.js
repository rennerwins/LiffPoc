import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [profile, setProfile] = React.useState({});

  React.useEffect(async () => {
    const liff = (await import('@line/liff')).default;
    await liff.ready;
    const profile = await liff.getProfile();
    setProfile(profile);
  }, [profile.userId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1>Profile</h1>
        <p>{profile.displayName}</p>
      </main>
    </div>
  );
}
