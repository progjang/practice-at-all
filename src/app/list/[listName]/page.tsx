import { getBooks } from '@/lib/apis';

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
  // isbns: [ [Object]; [Object] ];
  // buy_links: [ [Object]; [Object]; [Object]; [Object], [Object] ],
  book_uri: string;
}

export default async function ListId({ params }: PageProps) {
  const { listName } = params;
  const {
    results: { books },
  } = await getBooks(listName);

  return (
    <ul>
      {books.map((book: Book) => (
        <li key={book.book_uri}>{book.title}</li>
      ))}
    </ul>
  );
}
