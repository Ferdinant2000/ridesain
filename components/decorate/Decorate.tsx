'use client';

import { motion } from 'framer-motion';
import styles from "./Decorate.module.css";
import Image from 'next/image';

export default function Decorate() {
  return (
    <section className={styles.decorate}>
      <div className={`global_container ${styles.container}`}>
        <motion.div
          className={styles.decorateLeft}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.decorateTitle}>Beautify Your Space</h1>
          <p className={styles.decorateDescription}>
            Transform any room with elegant pieces and refined details that reflect your personal style.
          </p>
          <button className={styles.decorateButton}>Learn More</button>
        </motion.div>
        <motion.div
          className={styles.decorateRight}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.decorateCircle} />
          <div className={styles.decorateImageWrapper}>
            <Image
              src="/images/image97.png"
              alt="Beautify Your Space"
              fill
              className={styles.decorateImage}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}