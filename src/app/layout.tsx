import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';
import Navigation from '@/components/navigation';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        <div className={styles.container}>
          <main tabIndex={-1} className={styles.main}>
            {children}
            <footer className={styles['footer']}>© 2024, Hyeongwoo Kim</footer>
          </main>
        </div>
      </body>
    </html>
  );
}
