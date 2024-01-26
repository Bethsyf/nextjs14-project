import styles from './page.module.css';

export default function Home() {
  console.log('first page home');
  return (
    <main className={styles.main}>
      <div className={styles.description}>Hola Mundo</div>
    </main>
  );
}
