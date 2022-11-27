import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* Hero Middle */}
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {/* Top Content */}
          <p>EARLY BLACK FRIDAY</p>
        </div>

        <div className={styles.midContent}>
          {/* Middle Content */}
          <div className={styles.item}>
            <Image
              src={"/img/header.webp"}
              width={150}
              height={150}
              alt='Header'
            />
          </div>
          <div className={styles.item}>
            Buy any console and get a free monogram case and care code
            &quot;freecase&quot;
          </div>
          <div className={`${styles.item} ${styles.right}`}>Code: Freecase</div>
        </div>

        <div className={styles.bottom}>
          {/* Bottom Content */}
          <p>Timer:</p>
          <p>00:00:00</p>
        </div>
      </div>

      {/* Arrow Scroll */}
      <div className={styles.arrow}>
        <Link href='#main' scroll={false}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
            fill='white'
            cursor='pointer'
          >
            <path d='M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z'></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
