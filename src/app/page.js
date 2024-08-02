
"use client"
import styles from "/styles/page.module.css";
import { signIn } from 'next-auth/react';



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Let's correct that playlist. </p>
      </div>
      <div className={styles.center}>
          <p className={styles.logo}>Rectify.</p>
      </div>
      <button className={styles.button} onClick={() => signIn('spotify')}>Log into Spotify</button>
    </main>
  );
}
