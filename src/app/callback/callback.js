import Image from "next/image";
import styles from "/styles/page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Let's correct that playlist. </p>
      </div>
      <div className={styles.center}>
          <p className={styles.logo}>Rectify</p>
      </div>
      
      

      
    </main>
  );
}
