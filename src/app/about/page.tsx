import Link from 'next/link';
import styles from './page.module.css';

export default function About() {
  return (
    <>
      <div className={styles['container']}>
        <h2 className={styles['section-title']}>디자인 참고 사이트</h2>
        <ul>
          <li>
            <Link href="https://open.spotify.com/" target="_blank">
              https://open.spotify.com/
            </Link>
          </li>
          <li>
            <Link href="https://magazineworld.jp/magazines/" target="_blank">
              https://magazineworld.jp/magazines/
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['container']}>
        <h2 className={styles['section-title']}>해당 사이트 깃허브 저장소</h2>
        <ul>
          <li>
            <Link
              href="https://github.com/ha-il/practice-at-all"
              target="_blank"
            >
              https://github.com/ha-il/practice-at-all
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
