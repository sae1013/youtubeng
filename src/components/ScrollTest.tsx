import React, { useState } from 'react';
import { videoItems } from '@/data/videoItem';
import styled from 'styled-components';

function ScrollTest() {
  const [isOpen, setIsOpen] = useState(false);

  const Container = styled.div``;

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
    <Container>
      {videoItems.map(({ thumbnail }) => {
        return (
          <li
            onClick={() => {
              setIsOpen(true);
              document.body.style.overflow = 'hidden';
            }}>
            <img src={thumbnail}></img>
          </li>
        );
      })}
      {isOpen && (
        <React.Fragment>
          <Overlay></Overlay>
          <ModalContents>
            <button
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = 'auto';
              }}>
              모달닫기
            </button>
            <p>
              helhelhlehlehlelhehlehlehle asdfhelhelhlehlehlelhehlehlehle
              asdfhelhelhlehlehlelhehlehlehle asdfhelhelhlehlehlelhehlehlehle
              asdfhelhelhlehlehlelhehlehlehle asdfhelhelhlehlehlelhehlehlehle
              asdfhelhelhlehlehlelhehlehlehle asdfhelhelhlehlehlelhehlehlehle
              asdfhelhelhlehlehlelhehlehlehle asdfhelhelhlehlehlelhehlehlehle
              asdfhelhelhlehlehlelhehlehlehle asdfhelhelhlehlehlelhehlehlehle
              asdfhelhelhlehlehlelhehlehlehle asdfhelhelhlehlehlelhehlehlehle
              asdfhelhelhlehlehlelhehlehlehle asdf
            </p>
          </ModalContents>
        </React.Fragment>
      )}
    </Container>
  );
}

export default ScrollTest;
