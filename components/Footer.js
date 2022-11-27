import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        {/* First Col */}
        <div className={styles.col}>
          <h4>MONOGRAM</h4>
          <p>
            305 King St. W.
            <br /> Suite 502 Kitchener, ON <br />
            Canada
          </p>
        </div>

        {/* Second Col */}
        <div className={styles.col}>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <Link href='#'>Home</Link>
            </li>
            <li>
              <Link href='#'>How it Works</Link>
            </li>
            <li>
              <Link href='#'>Shop</Link>
            </li>
            <li>
              <Link href='#'>Download</Link>
            </li>
          </ul>
        </div>
        {/* Third Col */}
        <div className={styles.col}>
          <h4>HELP</h4>
          <ul>
            <li>
              <Link href='#'>FAQs</Link>
            </li>
            <li>
              <Link href='#'>Support Center</Link>
            </li>
            <li>
              <Link href='#'>Shipping and Sales</Link>
            </li>
          </ul>
        </div>
        {/* Fouth Col */}
        <div className={styles.col}>
          <h4>INFORMATION</h4>
          <ul>
            <li>
              <Link href='#'>About Us</Link>
            </li>
            <li>
              <Link href='#'>Work with us</Link>
            </li>
            <li>
              <Link href='#'>Privacy Policy</Link>
            </li>
            <li>
              <Link href='#'>Terms of Use</Link>
            </li>
            <li>
              <Link href='#'>Press Kit</Link>
            </li>
          </ul>
        </div>
        {/* Fifth Col */}
        <div className={styles.col}>
          <h4>SUBSCRIBE TO MONOGRAM</h4>
          <p>
            Master productivity with Creative Console and get all the latest
            Monogram news.
          </p>
          <div className={styles.input}>
            <input type='text' placeholder='Email Address' />
            <button>SUBMIT</button>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <p>i</p>
            </div>
            <div className={styles.icon}>
              <p>c</p>
            </div>
            <div className={styles.icon}>
              <p>o</p>
            </div>
            <div className={styles.icon}>
              <p>n</p>
            </div>
          </div>
          <p>© For Study Purpose Only - 2022 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
