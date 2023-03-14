import React from "react";
import pic1 from "../Navbar/assets/image6.jpg";
import pic from "../Navbar/assets/images1.jpg";
import styled from "styled-components";
import { FaPlus } from 'react-icons/fa';

const data = [
  {
    id: 1,
    img: pic,
    title: "Big Data Analytics",
    subTitle: "Technology",
    date: "02.05.2023",
  },
  {
    id: 2,
    img: pic1,
    title: "International Business Management",
    subTitle: "Management",
    date: "02.05.2023",
  },
  {
    id: 3,
    img: pic,
    title: "Leadership for Nodric Healthcare",
    subTitle: "Health Science",
    date: "02.05.2023",
  },
  {
    id: 4,
    img: pic1,
    title: "Media Management",
    subTitle: "Media",
    date: "02.05.2023",
  },
];
export default function () {
  return (
    <Container>
      {data.map((value) => (
        <Wrapper key={value.id}>
            <img src={value.img} alt=""></img>
            <h2>{value.title}</h2>
            <Break />
            <h2>{value.subTitle}</h2>
            <h3>Begin date</h3>
            <h5>{value.date}</h5>
            <span className="addIcon"> <FaPlus /></span>
        </Wrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 40px 30px;
  max-height: 100%;
  flex-wrap: wrap;
  over-flow: break-word;
  word-break: break: word-break;
`;
const Wrapper = styled.div`
    font-family: PT Sans;
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 15px;
    flex-basis: 24%;
    max-width: 100%;
    max-height: 100%;
    margin-left: 60px;
    background-color: #ecdfee;
    
    span{
      position: absolute;
      z-index: 1;
      cursor: pointer;
    color: white;   
      right: 2rem;
      bottom: 2rem;
    }

    &:after {
      content: "";
      border-left: 5rem solid transparent;
      border-top: 5rem solid transparent;
      border-right: 5rem solid #812990;
      border-bottom: 5rem solid #812990;
      position: absolute;
      bottom: 0;
      right: 0;
     }

     h2{
      margin: 15px;
      margin-bottom: 0;
      word-spacing: 0.16em;
      line-height: 1.5;
    }
    h3{
      margin: 15px;
      padding: 15px 5px 10px 5px;
    }
    h5{
      margin: 15px;
      padding: 5px;
    }
   
`
const Break = styled.div`
  border-top: 3px solid #812990;
  border-width: 5px;
  border-radius: 5px;
  margin: 8px;

  :hover {
    border-width: 7px;
  }
`;
