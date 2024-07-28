'use client';
import Link from 'next/link';
import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.container}>
      <ul className={styles['nav-lists']}>
        <li>
          <Link
            className={`${styles['nav-list']} ${
              path === '/' && styles['nav-list-active']
            }`}
            href="/"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            className={`${styles['nav-list']} ${
              path === '/about' && styles['nav-list-active']
            }`}
            href="/about"
          >
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
