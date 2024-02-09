import Image from 'next/image';
import styles from './MainProducts.module.scss';
import { getMainProducts } from 'app/services/shopify/products';

export const MainProducts = async () => {
  const products = await getMainProducts();

  return (
    <section className={styles.MainProducts}>
      <h3>✨ ¡Nuevos productos lanzados!</h3>
      <div className={styles.grid}>
        {products?.map((product: any) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} alt={product.title} fill loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
