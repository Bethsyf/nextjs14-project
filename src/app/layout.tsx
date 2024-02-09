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
      <Head>
        <title>Future World</title>
        <meta
          name="description"
          content="Welcome to the future world, an ecommerce from other century"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmaviub4l/image/upload/v1707489187/shd1faovk8kmygkcsg08.png"
        />
        <meta
          property="og:url"
          content="https://bethsyf.github.io/portfolio/"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${roboto.className} ${styles.body}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
