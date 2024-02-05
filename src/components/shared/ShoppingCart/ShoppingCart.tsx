'use client';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './ShoppingCart.module.scss';

export const ShoppingCart = () => {
  const [countItems, setCountItems] = useState(0);

  return (
    <button className={styles.ShoppingCart}>
      <span className={styles.counter}>{countItems}</span>
      <FaShoppingCart />
    </button>
  );
};
