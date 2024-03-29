import Image from 'next/image';
import { ProductViewItemsOrder } from './ProductViewItemsOrder';
import styles from './ProductView.module.scss';
// import { useRouter } from 'next/navigation';
import { SanitizeHTML } from 'app/components/shared/SanitizeHTML';
interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  // const router = useRouter();

  // if (!product) {
  //   router.push('/');
  // }
  return (
    <main className={styles.ProductView}>
      <section className={styles.images}>
        <Image
          loading="eager"
          src={product?.image}
          width={500}
          height={500}
          quality={80}
          alt={product?.title}
        />
      </section>
      <section className={styles.info}>
        <h1 className={styles.title}>{product?.title}</h1>
        <p className={styles.category}>{product?.tags}</p>
        <SanitizeHTML tag="p">{product.description}</SanitizeHTML>
        <span className={styles.price}>$ {product?.price}</span>
        <ProductViewItemsOrder
          maxQuantity={product.quantity}
          product={product}
        />
      </section>
    </main>
  );
};
