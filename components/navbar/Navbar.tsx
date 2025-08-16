import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
    <nav>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">Furniture</a>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="*">Home</a></li>
          <li><a href="*">Services</a></li>
          <li><a href="*">Doctors</a></li>
          <li><a href="*">Products</a></li>
          <li><a href="*">Gallery</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}