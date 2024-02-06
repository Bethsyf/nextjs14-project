'use client';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useShoppingCart } from 'app/hooks/useShoppingCart';
import styles from './ShoppingCart.module.scss';

export const ShoppingCart = () => {
  const { cart } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  console.log(cart);

  return (
    <button className={styles.ShoppingCart} onClick={handleOpen}>
      <span className={styles.counter}>{cart.length}</span>
      <FaShoppingCart />
      {isOpen && (
        <div className={styles.items}>
          {cart.map((item) => (
            <>
              <p key={item?.id}>{item?.title}</p>
              <p>Cantidad: {item.quantity}</p>
            </>
          ))}
          <button className={styles.buyButton}>Buy</button>
        </div>
      )}
    </button>
  );
};
