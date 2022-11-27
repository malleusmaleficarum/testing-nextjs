import Image from "next/image";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <Image
        alt='banner'
        src='/img/banner.webp'
        width={1500}
        height={1000}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3>CREATE YOUR OWN CONSOLE</h3>
        <p>Add-on to make it perfect.</p>
      </div>
    </div>
  );
};

export default Banner;
