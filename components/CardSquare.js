import Image from "next/image";
import styles from "../styles/CardSquare.module.css";
import product1 from "../public/img/hover.webp";

const CardSquare = ({ img, title, price, desc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        {/* IMAGE */}
        <Image
          src={img}
          alt='product'
          width={600}
          height={600}
          className={styles.img}
        />
        <Image
          src={product1}
          alt='product'
          width={600}
          height={600}
          className={`${styles.img} ${styles.imgFront}`}
        />
      </div>
      <div className={styles.info}>
        {/* INFO */}
        <h3>
          {/* TITLE */}
          {title}
        </h3>
        <p>
          {/* PRICE */}
          {price}
        </p>
        <button className={styles.btn}>Shop Now</button>
      </div>
      {/* FLAG */}
      <div className={styles.flag}>
        <p>In Stock</p>
      </div>
    </div>
  );
};

export default CardSquare;
