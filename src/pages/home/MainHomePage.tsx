import React, { useState, useRef } from 'react';
import styles from './MainHomePage.module.scss';
import { videoItems } from '@/data/videoItem';
import { shortsItems } from '@/data/shortsItem';
import Divider from '@/components/Divider';
import MainOverlay from './MainOverlay';
import { disableScroll } from '@/components/utils/utils';
function MainHomePage() {
  const [openOverlay, setOpenOverlay] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const handleClickVideo = (id: string) => {
    disableScroll();
    setOpenOverlay(true);
  };
  return (
    <div className={styles['main-container']}>
      {/* <section className={styles['main-sidebar']}>
        <div className={styles['sidebar-wrapper']}>
          <p>찜한 크리에이터</p>
          <Divider />
          <ul className={styles['sidebar-menu-wrapper']}>
            <li>빨모썜</li>
            <li>빨모썜</li>
          </ul>
        </div>
      </section> */}
      <section
        ref={mainRef}
        className={`${styles['main-content']} ${openOverlay ? styles['remove-scroll'] : ''}`}>
        <div className={styles['main-content-video']}>
          <h3>비디오</h3>
          <ul className={styles['grid-container']}>
            {videoItems.map(({ id, thumbnail, author, postedAt, title }) => {
              return (
                <li onClick={() => handleClickVideo(id)} className={styles['grid-item']}>
                  <div className={styles['item-image-wrapper']}>
                    <img src={thumbnail}></img>
                  </div>
                  <div className={styles['item-content']}>
                    <h1 className={styles['item-content__title']}>{title}</h1>
                    <div className={styles['item-content__sub-wrapper']}>
                      <p className={styles['sub-author']}>{author}</p>
                      <p className={styles['sub-created']}>{postedAt}</p>
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

      {openOverlay && <MainOverlay setOpenOverlay={setOpenOverlay}></MainOverlay>}
    </div>
  );
}

export default MainHomePage;
