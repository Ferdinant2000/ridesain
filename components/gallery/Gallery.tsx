import styles from './Gallery.module.css';
import BackButton from '../backButton/BackButton';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    { id: 1, src: '/images/bedroom.png', alt: 'Bedroom' },
    { id: 2, src: '/images/dining.png', alt: 'Dining' },
    { id: 3, src: '/images/living.png', alt: 'Living Room' },
    { id: 4, src: '/images/interior-has-yellow-armchair-empty-gray-wall-background.png', alt: 'Yellow Armchair' },
    { id: 5, src: '/images/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering.png', alt: 'Blue Sofa' },
    { id: 6, src: '/images/scandinavian-interior-mockup-wall-decal-background.png', alt: 'Scandi' },
  ];

  return (
    <section className={styles.gallerySection}>
      <div className={`global_container ${styles.container}`}>
        <BackButton text="Back to Home" />
        <h1 className={styles.pageTitle}>Inspiration Gallery</h1>
        <p className={styles.pageDescription}>A collection of beautifully designed spaces.</p>
        
        <div className={styles.grid}>
          {images.map((img) => (
            <div key={img.id} className={styles.imgWrapper}>
              <Image src={img.src} alt={img.alt} fill className={styles.img} />
              <div className={styles.overlay}>
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
