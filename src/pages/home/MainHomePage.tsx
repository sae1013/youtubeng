import React from 'react';
import styles from './MainHomePage.module.scss';
import { videoItems } from '@/data/videoItem';

function MainHomePage() {
  return (
    <div className={styles['main-container']}>
      <section className={styles['main-sidebar']}>sidebar</section>
      <section className={styles['main-content']}>
        <ul className={styles['grid-container']}>
          {videoItems.map((video) => {
            return (
              <li className={styles['grid-item']}>
                <div className={styles['item-image-wrapper']}>
                  <img src={video.thumbnail}></img>
                </div>
                <div className={styles['item-content']}>
                  <h1 className={styles['item-content__title']}>{video.title}</h1>
                  <div className={styles['item-content__sub-wrapper']}>
                    <p className={styles['sub-author']}>{video.author}</p>
                    <p className={styles['sub-created']}>{video.postedAt}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div></div>
      </section>
    </div>
  );
}

export default MainHomePage;
