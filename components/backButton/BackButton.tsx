'use client';

import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './BackButton.module.css';

export default function BackButton({ text = "Back to Home", href = "/" }) {
  return (
    <Link href={href} className={styles.backBtn}>
      <FiArrowLeft size={20} />
      <span>{text}</span>
    </Link>
  );
}
