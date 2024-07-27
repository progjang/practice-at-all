import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">홈 </Link>
        </li>
        <li>
          <Link href="/about">어바웃 </Link>
        </li>
      </ul>
    </nav>
  );
}
