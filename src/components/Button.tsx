import React, { ButtonHTMLAttributes } from 'react';
import styled, { CSSProperties, css } from 'styled-components';
import { createCSSString } from './utils/helper';

export interface BaesButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  shape?: 'default' | 'round';
  onClick?: () => void;
  sx?: CSSProperties;
  buttonSx?: CSSProperties;
  textSx?: CSSProperties;
}

export const BaseStyledButton = styled.button<Partial<BaesButtonProps>>`
  background-color: ${(props) => props.theme.color['black-500']};
  box-sizing: border-box;
  border-radius: ${(props) => (props.shape === 'round' ? '5rem' : '2rem')};
  cursor: pointer;
  border: none;
  padding: 0 2.4rem;

  transition: all 0.2s ease;
  &:hover {
    opacity: 0.7;
    &:not(:disabled) {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }
  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
  ${(props) =>
    props.buttonSx &&
    css`
      ${createCSSString(props.buttonSx)}
    `}

  > span {
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    ${(props) =>
      props.textSx &&
      css`
        ${createCSSString(props.textSx)}
      `};
  }
`;

export default function Button({ children, onClick, ...props }: BaesButtonProps) {
  return (
    <BaseStyledButton onClick={onClick} {...props}>
      <span>{children}</span>
    </BaseStyledButton>
  );
}
