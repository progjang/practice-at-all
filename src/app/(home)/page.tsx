import { getBestSellersLists, getBooks } from '@/lib/apis';
import styles from './page.module.css';
import BestsellerList, { List } from '@/components/bestsellerList';

export default async function Home() {
  const { results } = await getBestSellersLists();

  return (
    <section>
      <h1 className={styles['section-title']}>모두 둘러보기</h1>
      <ul className={styles['lists-container']}>
        {results.map((list: List) => (
          <BestsellerList
            list={list}
            key={list.list_name_encoded}
          ></BestsellerList>
        ))}
      </ul>
    </section>
  );
}
