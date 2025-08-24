import styles from "./Works.module.css";

export default function Works() {
  return (
    <section className={styles.worksSection}>
      <h2 className={styles.worksTitle}>How It Works</h2>
      <p className={styles.worksSubtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.worksSteps}>
        <div className={styles.worksStep}>
          <div className={styles.worksImageWrapper}>
            <img src="/images/furniture-website/purchase-securely-1.png" alt="Purchase Securely" className={styles.worksImage} />
            <img src="/images/furniture-website/purchase-securely-2.png" alt="" className={styles.worksImageHover} />
            <div className={styles.worksNumber}>1.</div>
          </div>
          <h3 className={styles.worksStepTitle}>Purchase Securely</h3>
          <p className={styles.worksStepDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className={styles.worksStep}>
          <div className={styles.worksImageWrapper}>
            <img src="/images/furniture-website/ships-from-warehouse-1.png" alt="Ships From Warehouse" className={styles.worksImage} />
            <img src="/images/furniture-website/ships-from-warehouse-2.png" alt="" className={styles.worksImageHover} />
            <div className={styles.worksNumber}>2.</div>
          </div>
          <h3 className={styles.worksStepTitle}>Ships From Warehouse</h3>
          <p className={styles.worksStepDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className={styles.worksStep}>
          <div className={styles.worksImageWrapper}>
            <img src="/images/furniture-website/style-your-room-1.png" alt="Style Your Room" className={styles.worksImage} />
            <img src="/images/furniture-website/style-your-room-2.png" alt="" className={styles.worksImageHover} />
            <div className={styles.worksNumber}>3.</div>
          </div>
          <h3 className={styles.worksStepTitle}>Style Your Room</h3>
          <p className={styles.worksStepDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}