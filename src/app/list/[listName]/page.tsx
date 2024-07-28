import { getBooks } from '@/lib/apis';
import styles from './page.module.css';
import { formatTitleCase } from '@/lib/utils';
import Book, { IBook } from '@/components/book';

interface PageProps {
  params: {
    listName: string;
  };
}

export default async function ListId({ params }: PageProps) {
  const { listName } = params;
  const {
    results: { books },
  } = await getBooks(listName);

  return (
    <section>
      <div className={styles['section-title']}>
        <h1 className={styles['section-title__text']}>
          {formatTitleCase(listName)}
        </h1>
      </div>

      <ul className={`${styles['ul-inline-block']} ${styles['hover-border']}`}>
        {books.map((book: IBook) => (
          <Book book={book} key={book.book_uri} />
        ))}
      </ul>
    </section>
  );
}
