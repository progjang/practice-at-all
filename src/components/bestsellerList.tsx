import Link from 'next/link';
import styles from './bestsellerList.module.css';
import { EMOJI } from '@/lib/constants/inedx';

export interface List {
  display_name: string;
  list_name_encoded: string;
}

export default function BestsellerList({ list }: { list: List }) {
  return (
    <li className={styles['list-container']}>
      <Link
        className={styles['list-link']}
        href={`/list/${list.list_name_encoded}`}
      >
        <div
          className={styles['list-content']}
          style={{
            backgroundColor: EMOJI[list.list_name_encoded].backgroundColor,
          }}
        >
          <div className={styles['list-emoji']}>
            {EMOJI[list.list_name_encoded].emoji}
          </div>
          <div className={styles['list-name']}>{list.display_name}</div>
        </div>
      </Link>
    </li>
  );
}
