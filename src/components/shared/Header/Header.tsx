import Link from 'next/link';
import styles from './Header.module.scss';

import { validateAccessToken } from 'app/utils/auth/validateAccesToken';
import { ShoppingCart } from '../ShoppingCart';

export const Header = async () => {
  const customer = await validateAccessToken();

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.user}>
        {customer?.firstName ? (
          <p>Hola! {customer.firstName}</p>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <ShoppingCart />
      </div>
    </header>
  );
};
