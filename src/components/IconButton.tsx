import React from 'react';
import { BaseStyledButton, BaesButtonProps } from './Button';
import { styled, css } from 'styled-components';
import { IconType } from 'react-icons';
import { createCSSString } from './utils/helper';

interface IconButtonProps extends BaesButtonProps {
  icon: IconType;
  iconPosition: 'left' | 'right' | 'center';
}

const IconStyledButton = styled(BaseStyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  > span {
    margin-left: 2rem;
    ${(props) =>
      props.textSx &&
      css`
        ${createCSSString(props.textSx)}
      `}
  }
`;

function IconButton({
  icon: Icon,
  onClick,
  children,

  ...props
}: IconButtonProps) {
  return (
    <IconStyledButton onClick={onClick} {...props}>
      <Icon />
      <span>{children}</span>
    </IconStyledButton>
  );
}

export default IconButton;
