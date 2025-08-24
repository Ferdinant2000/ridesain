import styles from "./Assortment.module.css";

export default function Assortment() {
  return (
    <section className={styles.assortment}>
      <h1 className={styles.assortmentTitle}>Browse The Range</h1>
      <p className={styles.assortmentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className={styles.assortmentImages}>
        <div className={styles.assortmentItem}>
          <img src="/images/dining.png" alt="Dining" className={styles.assortmentImg} />
          <span className={styles.assortmentCaption}>Dining</span>
        </div>
        <div className={styles.assortmentItem}>
          <img src="/images/living.png" alt="Living" className={styles.assortmentImg} />
          <span className={styles.assortmentCaption}>Living</span>
        </div>
        <div className={styles.assortmentItem}>
          <img src="/images/bedroom.png" alt="Bedroom" className={styles.assortmentImg} />
          <span className={styles.assortmentCaption}>Bedroom</span>
        </div>
      </div>
    </section>
  )
}