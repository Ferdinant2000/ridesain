import styles from './Services.module.css';
import BackButton from '../backButton/BackButton';
import Image from 'next/image';

export default function Services() {
  const servicesData = [
    { id: 1, title: 'Interior Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.', img: '/images/bedroom.png' },
    { id: 2, title: 'Furniture Assembly', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.', img: '/images/living.png' },
    { id: 3, title: 'Free Delivery', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.', img: '/images/dining.png' },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={`global_container ${styles.container}`}>
        <BackButton text="Back to Home" />
        <h1 className={styles.pageTitle}>Our Services</h1>
        <p className={styles.pageDescription}>Discover the premium services we offer to make your home beautiful.</p>
        
        <div className={styles.grid}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imgWrapper}>
                <Image src={service.img} alt={service.title} fill className={styles.img} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <button className={styles.button}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
