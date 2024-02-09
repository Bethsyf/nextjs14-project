import { Roboto } from 'next/font/google';
import { Header } from 'app/components/shared/Header';
import { Footer } from 'app/components/shared/Footer';
import styles from 'app/sass/global.module.scss';
import Head from 'next/head';

const roboto = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${styles.body}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
