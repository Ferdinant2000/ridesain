import styles from "./News.module.css";

export default function News() {
  return (
    <section className={styles.news}>
      <div className={styles.card}>
        <h4 className={styles.headTitle}>New Arrival</h4>
        <h1 className={styles.title}>Discover Our <br /> New Collection</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className={styles.button}>BUY NOW</button>
      </div>
    </section>
  );
}
