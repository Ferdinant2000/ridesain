'use client';

import { motion } from 'framer-motion';
import styles from "./Assortment.module.css";
import Image from 'next/image';

const items = [
  { src: '/images/dining.png', label: 'Dining' },
  { src: '/images/living.png', label: 'Living' },
  { src: '/images/bedroom.png', label: 'Bedroom' },
];

export default function Assortment() {
  return (
    <section className={styles.assortment}>
      <div className={`global_container ${styles.container}`}>
        <motion.h1
          className={styles.assortmentTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Browse The Range
        </motion.h1>
        <motion.p
          className={styles.assortmentDescription}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore handpicked collections for dining, living, and bedroom — crafted for every corner of your home.
        </motion.p>
        <div className={styles.assortmentImages}>
          {items.map((item, idx) => (
            <motion.div
              key={item.label}
              className={styles.assortmentItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.15 }}
            >
              <div className={styles.assortmentImgWrapper}>
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className={styles.assortmentImg}
                />
              </div>
              <span className={styles.assortmentCaption}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}