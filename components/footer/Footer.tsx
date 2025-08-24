import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <h2 className={styles.footerTitle}>Beauty Care</h2>
        <p className={styles.footerText}>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <h2 className={styles.footerSubtitle}>Follow Us</h2>
      </div>
      <div className={styles.footerRight}>
        <h2 className={styles.footerTitle}>Instagram Shop</h2>
        <div className={styles.footerImages}>
          <img src="/images/footer-images/image-94.png" alt="" className={styles.footerImg} />
          <img src="/images/footer-images/image-95.png" alt="" className={styles.footerImg} />
          <img src="/images/footer-images/image-96.png" alt="" className={styles.footerImg} />
          <img src="/images/footer-images/image-98.png" alt="" className={styles.footerImg} />
        </div>
      </div>
    </footer>
  );
};