'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`global_container ${styles.container}`}>
        <div className={styles.logo}>
          <Link href="/">Furniture</Link>
        </div>
        
        {/* Desktop Menu */}
        <ul className={styles.navLinks}>
          {navItems.map((item, idx) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className={styles.mobileToggle} onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <motion.div 
              className={styles.mobileDrawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className={styles.drawerHeader}>
                <div className={styles.logo}>
                  <Link href="/">Furniture</Link>
                </div>
                <button className={styles.closeBtn} onClick={toggleMenu}>
                  <FiX size={28} />
                </button>
              </div>
              <ul className={styles.mobileNavLinks}>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} onClick={toggleMenu}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
