'use client';
import Image from 'next/image';
import styles from 'app/sass/global-error.module.scss';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function GloablError({ reset }: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h1 className={styles.title}>Ha ocurrido un error</h1>
      <Image src="/images/error.png" width={500} height={500} alt="Error" />
      <p className={styles.message}>
        Al parecer ha ocurrido un error, pero no te sientas mal
      </p>
      <button className={styles.button} onClick={reset}>
        Volver a intentar
      </button>
    </main>
  );
}
