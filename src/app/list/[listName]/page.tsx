import { getBooks } from '@/lib/apis';
import styles from './page.module.css';
import { formatTitleCase } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps {
  params: {
    listName: string;
  };
}

interface Book {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  amazon_product_url: string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  buy_links: BuyLinks[];
  book_uri: string;
}

interface BuyLinks {
  name: string;
  url: string;
}

export default async function ListId({ params }: PageProps) {
  const { listName } = params;
  const {
    results: { books },
  } = await getBooks(listName);

  return (
    <div className={styles.container}>
      <div
        className={styles['main-view-container__scroll-node-child-spacer']}
      ></div>
      <main tabIndex={-1} className={styles.main}>
        <section>
          <div className={styles['section-title']}>
            <h1 className={styles['section-title__text']}>
              {formatTitleCase(listName)}
            </h1>
          </div>

          <ul
            className={`${styles['ul-inline-block']} ${styles['hover-border']}`}
          >
            {books.map((book: Book) => (
              <li className={styles['li-container']} key={book.book_uri}>
                <Link
                  className={styles['li-link']}
                  href={book.amazon_product_url}
                  target="_blank"
                >
                  <span className={styles['thumbnail']}>
                    <Image
                      className={styles['thumbnail']}
                      src={book.book_image}
                      alt=""
                      width={`${book.book_image_width}`}
                      height={`${book.book_image_height}`}
                    />
                  </span>
                  <span className={styles['meta']}>
                    <span className={styles['title']}>{book.title}</span>
                    <span className={styles['author']}>{book.author}</span>
                    <hr className={styles['hr']} />
                    <span className={styles['description']}>
                      {book.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
