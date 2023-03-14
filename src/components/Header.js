import React from 'react';
import styled from 'styled-components';
import headrPic from './images/headrPic.jpg'

export default function Header({title}) {
  return ( 
    <HeaderContainer backgroundImg= {headrPic}>
      <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
position: relative;
  background-image: url(${props => props.backgroundImg});
   background-size: cover;
   background-color: #cca5d0;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px
`;

const HeaderTitle = styled.h1`
position: absulote;
  font-size: 36px;
  font-waight: bold;
  color: white;
  margin-right: 800px;
  margin-top: 244px;;
  text-shadow: 1px 1px 2px black;
  background-color: #812990;
  padding: 15px;
`;