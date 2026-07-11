'use client';

import { motion } from 'framer-motion';
import styles from "./someInfo.module.css";
import { LuShieldCheck } from "react-icons/lu";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function Info() {
  return (
    <section className={styles.info}>
      <div className={`global_container ${styles.container}`}>
        {/* card 1 */}
        <motion.div
          className={styles.infoCard}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <svg className={styles.infoIcon} width="84" height="51" viewBox="0 0 84 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.038 20.3621H2.22852C0.997617 20.3621 0 21.36 0 22.5906C0 23.8212 0.997617 24.8191 2.22852 24.8191H3.038C4.26828 24.8191 5.26657 23.8212 5.26657 22.5906C5.26657 21.36 4.26859 20.3621 3.038 20.3621Z" fill="#111111" />
            <path d="M83.3369 24.5136L72.6408 12.8147C72.219 12.3526 71.6215 12.0895 70.9957 12.0895H58.3498V2.61916C58.3498 1.38825 57.3522 0.390625 56.1212 0.390625H15.5083C14.2774 0.390625 13.2798 1.38857 13.2798 2.61916C13.2798 3.84975 14.2774 4.84769 15.5083 4.84769H53.8924V40.3352H34.6721C33.7094 37.1014 30.7114 34.7362 27.1697 34.7362C23.6279 34.7362 20.6293 37.1014 19.6676 40.3352H15.5083C14.2774 40.3352 13.2798 41.3328 13.2798 42.5634C13.2798 43.7946 14.2774 44.792 15.5083 44.792H19.6676C20.6293 48.0251 23.6279 50.3906 27.1697 50.3906C30.7114 50.3906 33.7094 48.0251 34.6721 44.792H56.1209H61.4037C62.3664 48.0251 65.365 50.3906 68.9061 50.3906C72.4485 50.3906 75.4465 48.0251 76.4088 44.792H81.6919C82.9228 44.792 83.9204 43.7943 83.9204 42.5634V26.0172C83.9211 25.4613 83.7122 24.9245 83.3369 24.5136Z" fill="#111111" />
          </svg>
          <div className={styles.infoContent}>
            <h2 className={styles.infoTitle}>Free Delivery</h2>
            <p className={styles.infoDescription}>Everywhere in the city — fast, free delivery on every order.</p>
          </div>
        </motion.div>

        {/* card 2 */}
        <motion.div
          className={styles.infoCard}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <svg className={styles.infoIcon} width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.7354 23.8765C59.4511 23.384 58.9253 23.0803 58.3568 23.0803H54.5938C54.2146 17.0898 51.7023 11.5095 47.4195 7.22723C42.7596 2.56738 36.5641 0.0012207 29.9743 0.0012207C29.095 0.0012207 28.3823 0.713875 28.3823 1.59295C28.3823 2.47247 29.0952 3.18489 29.9743 3.18489C41.2871 3.18489 50.5855 11.9727 51.4028 23.0805H47.751C47.182 23.0805 46.6567 23.3843 46.3724 23.8767C46.0877 24.3694 46.0877 24.9762 46.3724 25.4689L51.675 34.6537C51.9597 35.1464 52.4851 35.4495 53.0536 35.4495C53.6225 35.4495 54.1481 35.1464 54.4323 34.6537L59.7351 25.4689C60.0194 24.976 60.0194 24.3691 59.7354 23.8765Z" fill="#111111" />
          </svg>
          <div className={styles.infoContent}>
            <h2 className={styles.infoTitle}>Support 24/7</h2>
            <p className={styles.infoDescription}>We are always here to help — day or night.</p>
          </div>
        </motion.div>

        {/* card 3 */}
        <motion.div
          className={styles.infoCard}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <LuShieldCheck className={styles.infoIcon} />
          <div className={styles.infoContent}>
            <h2 className={styles.infoTitle}>100% Authentic</h2>
            <p className={styles.infoDescription}>100% original premium materials, crafted to last.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}