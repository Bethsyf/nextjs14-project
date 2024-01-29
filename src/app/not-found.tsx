import Image from 'next/image';
import Link from 'next/link';
import styles from 'app/sass/not-found.module.scss';

export default function NotFound() {
  return (
    <main className={styles.NotFound}>
      <h1 className={styles.title}>404</h1>
      <Image src="/images/404.png" alt="404" width={300} height={300} />
      <h2 className={styles.subtitle}>
        ¡Uy, parece que el enlace se escondió!
      </h2>
      <p className={styles.description}>
        Pero nuestra tienda está abierta las 24/7
      </p>
      <Link className={styles.link} href="/store">
        ¡Vamos de compras!
      </Link>
    </main>
  );
}
