import styles from "./Footer.module.css";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`global_container ${styles.container}`}>
        <div className={styles.footerLeft}>
          <h2 className={styles.footerTitle}>Beauty Care</h2>
          <p className={styles.footerText}>
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <h3 className={styles.footerSubtitle}>Follow Us</h3>
        </div>
        <div className={styles.footerRight}>
          <h2 className={styles.footerTitle}>Instagram Shop</h2>
          <div className={styles.footerImages}>
            {[
              '/images/footer-images/image-94.png',
              '/images/footer-images/image-95.png',
              '/images/footer-images/image-96.png',
              '/images/footer-images/image-98.png',
            ].map((src, i) => (
              <div key={i} className={styles.footerImgWrapper}>
                <Image
                  src={src}
                  alt={`Instagram ${i + 1}`}
                  fill
                  className={styles.footerImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}