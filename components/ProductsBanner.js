import Image from "next/image";
import styles from "../styles/ProductBanner.module.css";
import Card from "./Card";

const ProductsBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Card
          img='/img/product1.webp'
          title='mini console + care'
          price='249'
          desc='Ideal for everyday shortcuts. Adaptable to any workflow.'
        />
        <Card
          img='/img/product2.webp'
          title='mini console + care'
          price='499'
          desc='Ideal for music & audio. Adaptable to any workflow.'
        />
        <Card
          img='/img/product3.webp'
          title='mini console + care'
          price='349'
          desc='Ideal for photo & video. Adaptable to any workflow.'
        />
        <Card
          img='/img/product1.webp'
          title='mini console + care'
          price='249'
          desc='Ideal for everyday shortcuts. Adaptable to any workflow.'
        />
      </div>
    </div>
  );
};

export default ProductsBanner;
