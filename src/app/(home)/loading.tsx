import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <div
        className={styles['main-view-container__scroll-node-child-spacer']}
      ></div>

      <main tabIndex={-1} className={styles.main}>
        <h2 className={styles['section-title']}>Loading...</h2>
      </main>
    </div>
  );
}
