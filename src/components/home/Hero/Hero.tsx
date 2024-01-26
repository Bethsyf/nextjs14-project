import styles from './Hero.module.scss';
export const Hero = () => {
  console.log(styles);
  return (
    <section className={styles.Hero}>
      <h1>Future World</h1>
      <h2>Empowering Tour Tomorrow, Today!</h2>
    </section>
  );
};
