'use client';
import Link from 'next/link';
import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.container}>
      <ul className={styles['nav-lists']}>
        <li
          className={
            path === '/' ? styles['nav-list-active'] : styles['nav-list']
          }
        >
          <Link href="/">HOME</Link>
        </li>
        <li
          className={
            path === '/about' ? styles['nav-list-active'] : styles['nav-list']
          }
        >
          <Link href="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}
