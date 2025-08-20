import styles from "./Collection.module.css";

export default function Collection() {
  return (
    <section className={styles.collection}>
      <h1 className={styles.collectionTitle}>Inspiration Collection</h1>
      <p className={styles.collectionDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.collectionImages}>
        <img src="/images/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering.png" alt="" />
        <img src="/images/scandinavian-interior-mockup-wall-decal-background.png" alt="" />
        <div className={styles.imageWithOverlay}>
          <img src="/images/interior-has-yellow-armchair-empty-gray-wall-background.png" alt="" />
          <img src="/images/light-lamp-white-wall.png" alt="" className={styles.overlay} />
        </div>
      </div>
    </section>
  );
}