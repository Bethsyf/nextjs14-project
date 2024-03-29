'use client';
import { useState } from 'react';
import styles from './Description.module.scss';
import Image from 'next/image';
import classNames from 'classnames/bind';

const PLACEHOLDER_IMAGE =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAlACUDASIAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAAAAMFAgQGAf/EACAQAAIDAAMAAgMAAAAAAAAAAAABAgMEERIhBSIjMUH/xAAYAQADAQEAAAAAAAAAAAAAAAAAAwQCAf/EAB4RAAMAAgIDAQAAAAAAAAAAAAABAgMREjEEISJB/9oADAMBAAIRAxEAPwDh3AZTD7GxOvwyzQTkijHW0ZyR+mxTU3EXqqaiyxloTivBW+niD8FNfQKtLRytq4mwGaVxYwKVXoxxN+2a4Pcs13RNnp5/p7n0cT/YiFxHTSpHZY5rohXyMl0ZPy6+Ir0x2ae0X6cb2xNLTI2p/lYCb582MBqQcyb3Y2mT7IAC+jPiMqZ7JcGd020AE89lGUn2P7AAFSImf//Z';
export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);
  const handleClick = () => setHasBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx('button', {
    'button-border': hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>

      <div className={styles.Description__text}>
        <h2>Lleva el futuro hoy</h2>
        <p>
          Mundo Futuro: ¡Tu Puerta de Entrada a la Tecnología del Mañana!
          Sumérgete en un mundo de dispositivos y equipamiento de vanguardia.
          Mantente a la vanguardia y redefine tu estilo de vida digital con
          nosotros.
        </p>
      </div>
    </section>
  );
};
