import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>Future World © {new Date().getFullYear()}</p>
    </footer>
  );
};
