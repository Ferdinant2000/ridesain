import styles from './Products.module.css';
import BackButton from '../backButton/BackButton';
import Image from 'next/image';

export default function Products() {
  const productsData = [
    { id: 1, name: 'Minimalist Sofa', price: '$899', img: '/images/living.png' },
    { id: 2, name: 'Dining Table Set', price: '$1200', img: '/images/dining.png' },
    { id: 3, name: 'Modern Bed', price: '$1500', img: '/images/bedroom.png' },
    { id: 4, name: 'Accent Chair', price: '$450', img: '/images/interior-has-yellow-armchair-empty-gray-wall-background.png' },
    { id: 5, name: 'Living Room Setup', price: '$2200', img: '/images/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering.png' },
    { id: 6, name: 'Scandi Decor', price: '$320', img: '/images/scandinavian-interior-mockup-wall-decal-background.png' },
  ];

  return (
    <section className={styles.productsSection}>
      <div className={`global_container ${styles.container}`}>
        <BackButton text="Back to Home" />
        <h1 className={styles.pageTitle}>Our Products</h1>
        <p className={styles.pageDescription}>Browse our premium selection of modern furniture.</p>
        
        <div className={styles.grid}>
          {productsData.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imgWrapper}>
                <Image src={product.img} alt={product.name} fill className={styles.img} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <p className={styles.cardPrice}>{product.price}</p>
                <button className={styles.button}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
