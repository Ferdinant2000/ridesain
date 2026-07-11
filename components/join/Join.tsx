'use client';

import { motion } from 'framer-motion';
import styles from "./Join.module.css";

export default function Join() {
  return (
    <section className={styles.join}>
      <div className={`global_container ${styles.container}`}>
        <motion.h1
          className={styles.joinTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Join Our Mailing List
        </motion.h1>
        <motion.p
          className={styles.joinDescription}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Sign up to receive inspiration, product updates, and special offers from our team.
        </motion.p>
        <motion.form
          className={styles.joinForm}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="email"
            className={styles.joinInput}
            placeholder="example@gmail.com"
          />
          <button type="submit" className={styles.joinButton}>
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}