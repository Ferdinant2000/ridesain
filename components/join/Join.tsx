import styles from "./Join.module.css";

export default function Join() {
  return (
    <section className={styles.join}>
      <h1 className={styles.joinTitle}>Join Our Mailing List</h1>
      <p className={styles.joinDescription}>
        Sign up to receive inspiration, product updates,<br />
        and special offers from our team.
      </p>
      <form className={styles.joinForm}>
        <input
          type="email"
          className={styles.joinInput}
          placeholder="example@gmail.com"
        />
        <button type="submit" className={styles.joinButton}>
          Submit
        </button>
      </form>
    </section>
  );
}