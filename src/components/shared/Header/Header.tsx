import Link from 'next/link';
import styles from './Header.module.scss';

import { validateAccessToken } from 'app/utils/auth/validateAccesToken';
import dynamic from 'next/dynamic';

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), {
  ssr: false,
});

export const Header = async () => {
  const customer = await validateAccessToken();

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/store">Tienda</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.user}>
        {customer?.firstName ? (
          <Link href="/my-account">Hola! {customer.firstName}</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <NoSSRShoppingCart />
      </div>
    </header>
  );
};
