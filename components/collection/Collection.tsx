'use client';

import { motion } from 'framer-motion';
import styles from "./Collection.module.css";
import Image from 'next/image';

export default function Collection() {
  return (
    <section>
      <div className={`global_container ${styles.collection}`}>
        <motion.h1
          className={styles.collectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Inspiration Collection
        </motion.h1>
        <motion.p
          className={styles.collectionDescription}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Curated furniture pieces that turn everyday rooms into inspiring living spaces.
        </motion.p>
        <div className={styles.collectionImages}>
          <motion.div
            className={styles.imgWrapper}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/images/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering.png"
              alt="Living Room"
              fill
              className={styles.img}
            />
          </motion.div>
          <motion.div
            className={`${styles.imgWrapper} ${styles.imgMiddle}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/scandinavian-interior-mockup-wall-decal-background.png"
              alt="Scandinavian"
              fill
              className={styles.img}
            />
          </motion.div>
          <motion.div
            className={`${styles.imgWrapper} ${styles.imageWithOverlay} group`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/images/interior-has-yellow-armchair-empty-gray-wall-background.png"
              alt="Armchair"
              fill
              className={styles.img}
            />
            <div className={styles.overlay}>
              <Image
                src="/images/light-lamp-white-wall.png"
                alt="Lamp"
                width={100}
                height={100}
                className={`${styles.overlayImg} transition-all duration-300 group-hover:scale-105`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}