import Link from 'next/link';
import { getCollections } from 'app/services/shopify/collections';
import styles from './StoreLayout.module.scss';
import { ChatLink } from 'app/components/store/ChatLink';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {collections?.map((collection: any) => (
            <Link
              key={collection.id}
              href={'/store/' + collection.handle}
              className={styles.StoreLayout__chip}
            >
              {collection.title}
            </Link>
          ))}
        </ul>
        <ChatLink />
      </nav>
      {children}
    </main>
  );
}
