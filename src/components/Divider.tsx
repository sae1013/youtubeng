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
  border: none;
  height: 0.1rem;
  font-size: 1rem;

  &::after {
    content: ${(props) => (props.content ? props.content : '')};
    font-size: 1rem;
    display: inline-block;
    position: relative;

    top: -7px;
    padding: 0 16px;
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

function Divider(props: DividerProps) {
  return <StyledDivider {...props}></StyledDivider>;
}

export default Divider;
