import Link from 'next/link';
import styles from './book.module.css';
import Image from 'next/image';

export interface IBook {
  dagger: number;
  description: string;
  title: string;
  author: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  amazon_product_url: string;
  book_uri: string;
}

export default function Book({ book }: { book: IBook }) {
  return (
    <li className={styles['li-container']} >
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
          <span className={styles['description']}>{book.description}</span>
        </span>
      </Link>
    </li>
  );
}
