import { getBestSellersLists, getBooks } from '@/lib/apis';
import styles from './page.module.css';
import { EMOJI } from '@/lib/constants/inedx';
import Link from 'next/link';
import { startupSnapshot } from 'v8';

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

// const b = await getBooks('combined-print-and-e-book-fiction');

// "status": "OK",
// "copyright": "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
// "num_results": 59,
// "results": [
//   {
//     "list_name": "Combined Print and E-Book Fiction",
//     "display_name": "Combined Print & E-Book Fiction",
//     "list_name_encoded": "combined-print-and-e-book-fiction",
//     "oldest_published_date": "2011-02-13",
//     "newest_published_date": "2024-08-04",
//     "updated": "WEEKLY"
//   },
// ]

// {
//   status: 'OK',
//   copyright: 'Copyright (c) 2024 The New York Times Company.  All Rights Reserved.',
//   num_results: 15,
//   last_modified: '2024-07-24T22:25:05-04:00',
//   results: {
//     list_name: 'Combined Print and E-Book Fiction',
//     list_name_encoded: 'combined-print-and-e-book-fiction',
//     bestsellers_date: '2024-07-20',
//     published_date: '2024-08-04',
//     published_date_description: 'latest',
//     next_published_date: '',
//     previous_published_date: '2024-07-28',
//     display_name: 'Combined Print & E-Book Fiction',
//     normal_list_ends_at: 15,
//     updated: 'WEEKLY',
//     books: [
//     {
//   rank: 1,
//   rank_last_week: 0,
//   weeks_on_list: 1,
//   asterisk: 0,
//   dagger: 0,
//   primary_isbn10: '059372478X',
//   primary_isbn13: '9780593724781',
//   publisher: 'Ballantine',
//   description: 'The fifth book in the All Souls series. Diana faces her family’s dark past
//                  and determines to forge a different future.',
//   price: '0.00',
//   title: 'THE BLACK BIRD ORACLE',
//   author: 'Deborah Harkness',
//   contributor: 'by Deborah Harkness',
//   contributor_note: '',
//   book_image: 'https://storage.googleapis.com/du-prd/books/images/9780593724774.jpg',
//   book_image_width: 331,
//   book_image_height: 500,
//   amazon_product_url: 'https://www.amazon.com/dp/0593724771?tag=thenewyorktim-20',
//   age_group: '',
//   book_review_link: '',
//   first_chapter_link: '',
//   sunday_review_link: '',
//   article_chapter_link: '',
//   isbns: [ [Object], [Object] ],
//   buy_links: [ [Object], [Object], [Object], [Object], [Object] ],
//   book_uri: 'nyt://book/75317d22-cc0e-58f2-b0fb-2ae714921333'
// },
//     ],
//     corrections: []
//   }
// }
