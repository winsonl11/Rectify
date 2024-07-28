import Image from "next/image";
import styles from "/styles/page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Let's correct that playlist. </p>
      </div>
      <div className={styles.center}>
      
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Next.js Logo"
          width={200}
          height={50}
          priority
        />
      </div>
      <button className={styles.button}>Log into Spotify</button>
      

      
    </main>
  );
}
