import { getBestSellersLists, getBooks } from '@/lib/apis';
import styles from './page.module.css';
import { EMOJI } from '@/lib/constants/inedx';
import Link from 'next/link';

export interface List {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export default async function Home() {
  const { results } = await getBestSellersLists();

  return (
    <div className={styles.container}>
      <div
        className={styles['main-view-container__scroll-node-child-spacer']}
      ></div>

      <main tabIndex={-1} className={styles.main}>
        <section>
          <h1 className={styles['section-title']}>모두 둘러보기</h1>
          <ul className={styles['lists-container']}>
            {results.map((list: List) => (
              <li
                className={styles['list-container']}
                key={list.list_name_encoded}
              >
                <Link
                  className={styles['list-link']}
                  href={`/list/${list.list_name_encoded}`}
                >
                  <div
                    className={styles['list-content']}
                    style={{
                      backgroundColor:
                        EMOJI[list.list_name_encoded].backgroundColor,
                    }}
                  >
                    <div className={styles['list-emoji']}>
                      {EMOJI[list.list_name_encoded].emoji}
                    </div>
                    <div className={styles['list-name']}>
                      {list.display_name}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles['main-view-container__mh-footer-container']}>
          © 2024, Hyeongwoo Kim
        </div>
      </main>
    </div>
  );
}
