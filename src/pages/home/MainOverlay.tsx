import React, { Fragment, Dispatch, SetStateAction } from 'react';
import { enableScroll } from '@/components/utils/utils';
import styles from './MainOverlay.module.scss';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface MainOverlayProps {
  setOpenOverlay: Dispatch<SetStateAction<boolean>>;
}

function MainOverlay({ setOpenOverlay }: MainOverlayProps) {
  const Overlay = styled.div`
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  `;

  const Container = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const ModalContents = styled(motion.div)`
    position: fixed;
    top: calc(100px + 20px);
    height: 90vh;
    z-index: 100;
    width: 100%;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    background-color: white;
    overflow: scroll;

    p {
      font-size: 10rem;
    }
  `;
  return (
    <Container>
      <Overlay></Overlay>
      <ModalContents
        layout
        initial={{ y: '50vh', width: '90%' }}
        animate={{ y: '1rem', width: '100%' }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut',
        }}>
        <button
          onClick={() => {
            setOpenOverlay(false);
            enableScroll();
          }}>
          모달닫기
        </button>
        <div className={styles['contents--container']}>
          <section className={styles['contents--left']}>
            <div className={styles['video--contents']}>
              <div className={styles['video--wrapper']}>
                <iframe
                  src='https://www.youtube.com/embed/0sR7mxlXd6w/'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </div>
            </div>
          </section>
          <section className={styles['contents--right']}>
            <div className={styles['editor--wrapper']}></div>
          </section>
        </div>
      </ModalContents>
    </Container>
  );
}

export default MainOverlay;
