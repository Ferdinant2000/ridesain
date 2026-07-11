import styles from './Doctors.module.css';
import BackButton from '../backButton/BackButton';
import Image from 'next/image';

export default function Doctors() {
  const doctorsData = [
    { id: 1, name: 'Dr. John Doe', role: 'Chief Designer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: '/images/doctor_john_doe.png' },
    { id: 2, name: 'Jane Smith', role: 'Interior Architect', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: '/images/doctor_jane_smith.png' },
    { id: 3, name: 'Michael Brown', role: 'Consultant', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: '/images/doctor_michael_brown.png' },
    { id: 4, name: 'Emily White', role: 'Space Planner', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: '/images/doctor_emily_white.png' },
  ];

  return (
    <section className={styles.doctorsSection}>
      <div className={`global_container ${styles.container}`}>
        <BackButton text="Back to Home" />
        <h1 className={styles.pageTitle}>Our Specialists</h1>
        <p className={styles.pageDescription}>Meet our team of experienced designers and consultants.</p>
        
        <div className={styles.grid}>
          {doctorsData.map((doc) => (
            <div key={doc.id} className={styles.card}>
              <div className={styles.imgWrapper}>
                <Image src={doc.img} alt={doc.name} fill className={styles.img} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{doc.name}</h3>
                <p className={styles.cardRole}>{doc.role}</p>
                <p className={styles.cardDescription}>{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
