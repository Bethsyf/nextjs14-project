import { Inter } from 'next/font/google';

import { Header } from 'app/components/shared/Header';
import { Footer } from 'app/components/shared/Footer';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: {
//     template: '%s | Future world',
//     default: 'Future world',
//   },
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('hola layout');

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}