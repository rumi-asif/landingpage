import React from 'react';
import styled from 'styled-components';

export default function Paragraph ({ content }) {
  return (
    <StyledPara>
    <p>{content.text}</p>

    </StyledPara>
  );
};

const StyledPara = styled.div`
  display: flex;
  justify-content: center;
  item-align: center;
  margin: 20px;

  & p {
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
`


