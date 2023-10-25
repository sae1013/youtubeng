import React, { ButtonHTMLAttributes } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  shape?: 'default' | 'round';
  onClick?: () => void;
  sx?: React.CSSProperties;
}

const StyledButton = styled.button<Partial<ButtonProps>>`
  background-color: ${(props) => props.theme.color['black-500']};
  box-sizing: border-box;
  border-radius: ${(props) => (props.shape === 'round' ? '5rem' : '2rem')};
  cursor: pointer;
  border: none;
  color: white;
  padding: 0 2.4rem;

  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme.color['grey-500']};
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
  ${(props) => (props.sx ? css(props.sx as any) : css({}))}
`;
export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}
