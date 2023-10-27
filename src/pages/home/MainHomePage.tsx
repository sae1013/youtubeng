import React from 'react';
import styles from './MainHomePage.module.scss';

function MainHomePage() {
  // 브라우저 크기를 계속 읽어서, 렌더링할갯수를 정해야함
  return (
    <div className={styles['main-container']}>
      <section className={styles['main-sidebar']}>sidebar</section>
      <section className={styles['main-content']}>
        {/* grid container */}
        <div></div>
      </section>
    </div>
  );
}

export default MainHomePage;
