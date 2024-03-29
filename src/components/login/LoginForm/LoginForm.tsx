'use client';
import { handleLogin } from 'app/actions';
import styles from './LoginForm.module.scss';
import Link from 'next/link';

export const LoginForm = () => {
  const handleSubmit = async (event: any) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    await handleLogin(formData);
  };

  return (
    <div className={styles.NewAccountForm}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" name="submit" value="Login" />
      </form>
      <div className={styles.signup}>
        <Link href="/signup">Crear Cuenta</Link>
      </div>
    </div>
  );
};
