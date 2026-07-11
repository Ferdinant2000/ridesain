'use client';

import { motion } from 'framer-motion';
import styles from "./Works.module.css";
import Image from 'next/image';

const steps = [
  {
    title: 'Purchase Securely',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img1: '/images/furniture-website/purchase-securely-1.png',
    img2: '/images/furniture-website/purchase-securely-2.png',
    num: '1.',
  },
  {
    title: 'Ships From Warehouse',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img1: '/images/furniture-website/ships-from-warehouse-1.png',
    img2: '/images/furniture-website/ships-from-warehouse-2.png',
    num: '2.',
  },
  {
    title: 'Style Your Room',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img1: '/images/furniture-website/style-your-room-1.png',
    img2: '/images/furniture-website/style-your-room-2.png',
    num: '3.',
  },
];

export default function Works() {
  return (
    <section className={styles.worksSection}>
      <div className={`global_container ${styles.container}`}>
        <motion.h2
          className={styles.worksTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className={styles.worksSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.p>
        <div className={styles.worksSteps}>
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className={styles.worksStep}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.15 }}
            >
              <div className={styles.worksImageWrapper}>
                <div className={styles.worksImgInner}>
                  <Image src={step.img1} alt={step.title} fill className={styles.worksImage} />
                </div>
                <div className={`${styles.worksImgInner} ${styles.worksImageHoverWrapper}`}>
                  <Image src={step.img2} alt="" fill className={styles.worksImageHover} />
                </div>
                <div className={styles.worksNumber}>{step.num}</div>
              </div>
              <h3 className={styles.worksStepTitle}>{step.title}</h3>
              <p className={styles.worksStepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}