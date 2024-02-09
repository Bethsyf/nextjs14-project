import { MainProducts } from 'app/components/home/MainProducts';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: '✨ Future world',
  description: 'Welcome to the future world, an ecommerce from another century',
  keywords: ['ecommerce', 'future', 'world', 'technology'],
};

export default function Home() {
  return (
    <>
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
      <main>
        <MainProducts />
      </main>
    </>
  );
}
