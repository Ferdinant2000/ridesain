'use client';

import { motion } from 'framer-motion';
import styles from "./News.module.css";

export default function News() {
  return (
    <section className={styles.news}>
      <div className={`global_container ${styles.container}`}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className={styles.headTitle}>New Arrival</h4>
          <h1 className={styles.title}>Discover Our <br /> New Collection</h1>
          <p className={styles.description}>
            Timeless furniture and thoughtful interiors — designed for comfort, built to elevate your home.
          </p>
          <button className={styles.button}>BUY NOW</button>
        </motion.div>
      </div>
    </section>
  );
}
