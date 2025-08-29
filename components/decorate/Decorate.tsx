import styles from "./Decorate.module.css";

export default function Decorate() {
  return (
    <section className={styles.decorate}>
      <div className={`global_container ${styles.container}`}>
        <div className={styles.decorateLeft}>
          <h1 className={styles.decorateTitle}>Beautify Your Space</h1>
          <p className={styles.decorateDescription}>Do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris.</p>
          <button className={styles.decorateButton}>Learn More</button>
        </div>
        <div className={styles.decorateRight}>
          <div className={styles.decorateCircle}></div>
          <img className={styles.decorateImage} src="/images/image97.png" alt="" />
        </div>
      </div>
    </section>
  )
}