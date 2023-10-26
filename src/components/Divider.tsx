import React from 'react';
import { styled, css } from 'styled-components';
import { createCSSString } from './utils/helper';

interface StyledButtonProp {
  content?: string;
  sx?: React.CSSProperties;
}
const StyledDivider = styled.hr<StyledButtonProp>`
  margin: 3rem 0;
  background-color: #e7e7e9;
  color: #6e6d7a;
  text-align: center;

  ::after {
    content: ${(props) => props.content && props.content};
    display: inline;
  }

  ${(props) =>
    props.sx &&
    css`
      ${createCSSString(props.sx)}
    `}
`;

interface DividerProps {
  content?: string;
  sx?: React.CSSProperties;
}

function Divider({ content, sx }: DividerProps) {
  return <StyledDivider content={content} sx={sx}></StyledDivider>;
}

export default Divider;
