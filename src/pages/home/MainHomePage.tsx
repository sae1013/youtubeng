import React from 'react';
import styles from './MainHomePage.module.scss';
import { videoItems } from '@/data/videoItem';
import { shortsItems } from '@/data/shortsItem';
import Divider from '@/components/Divider';

function MainHomePage() {
  return (
    <div className={styles['main-container']}>
      <section className={styles['main-sidebar']}>
        <div className={styles['sidebar-wrapper']}>
          <p>찜한 크리에이터</p>
          <Divider />
          <ul className={styles['sidebar-menu-wrapper']}>
            <li>빨모썜</li>
            <li>빨모썜</li>
          </ul>
        </div>
      </section>
      <section className={styles['main-content']}>
        <div className={styles['main-content-video']}>
          <h3>비디오</h3>
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
        </div>

        <div className={styles['main-content-shorts']}>
          <h3>쇼츠</h3>
          <ul className={styles['grid-container']}>
            {shortsItems.map((video) => {
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
        </div>
      </section>
    </div>
  );
}

export default MainHomePage;
