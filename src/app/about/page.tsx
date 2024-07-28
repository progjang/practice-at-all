import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div
        className={styles['main-view-container__scroll-node-child-spacer']}
      ></div>

      <main tabIndex={-1} className={styles.main}>
        <h2 className={styles['section-title']}>디자인 참고 사이트</h2>
        <ul>
          <li>https://open.spotify.com/</li>
          <li>https://magazineworld.jp/magazines/</li>
        </ul>
      </main>
    </div>
  );
}
