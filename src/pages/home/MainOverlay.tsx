import React, { Fragment, Dispatch, SetStateAction } from 'react';
import { enableScroll } from '@/components/utils/utils';
import styles from './MainOverlay.module.scss';
import styled from 'styled-components';
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
    background-color: rgba(0, 0, 0, 0.4);
  `;

  const ModalContents = styled.div`
    position: fixed;
    top: calc(100px + 20px);
    height: 90vh;
    z-index: 100;
    width: 100%;
    border-top-right-radius: 10rem;
    border-top-left-radius: 10rem;
    background-color: white;
    overflow: scroll;

    p {
      font-size: 10rem;
    }
  `;
  return (
    <Fragment>
      <Overlay></Overlay>
      <ModalContents>
        <button
          onClick={() => {
            setOpenOverlay(false);
            enableScroll();
          }}>
          모달닫기
        </button>
      </ModalContents>
    </Fragment>
  );
}

export default MainOverlay;
