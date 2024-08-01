"use client"
import Image from "next/image";
import styles from "/styles/page.module.css";
import "@/styles/globals.css";
import DropDownMenu from "@/components/dropdown.js"

const dashboard = () => {
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Let's correct that playlist. </p>
      </div>
      <div className={styles.center}>
          <p className={styles.logo}>Rectify</p>
      </div>
      <DropDownMenu/>
    </main>
  );
}

export default dashboard