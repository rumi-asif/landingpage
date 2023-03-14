import React from 'react'
import styled from 'styled-components';
import pic from "../Navbar/assets/hello.png";
import { FaMobileAlt } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
// import { BiMessageSquare } from "react-icons/bi"
import { FaGlobe } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


export default function Footer() {
  return (
    <Container>
        <div>
          <ul>
            <li><a href='/'> <img src={pic} alt='' width={60} height={60}></img> Hello</a></li>
            <li className='location'> <IoLocationSharp/> <a href='/'> Jan-Mangus janssonin aukio 1 00560 Helsinki Finland </a> </li>
            <li> <FaMobileAlt/> <a href='/'>+5548 (0)294584 235</a></li>
          </ul>
        </div>
        <div>
          <ul style={{display: "flex", justifyContent:"space-between"}}>
            <li><a href='/'><FaLinkedinIn/></a></li>
            <li><a href='/'><FaInstagram/></a></li>
            <li><a href='/'><FaFacebook/></a></li>
            <li><a href='/'><FaTwitter/></a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><FaGlobe/> <a href="/"> Byt sprak / Vaihda Kieli </a></li>
            <li> <IoChatbox /><a href="/">  Questions? Contact us</a></li>
            <li><IoCheckmarkCircleSharp/><a href="/"> Accessibility and data protection</a></li>
          </ul>
        </div>
    </Container>
  )
}


const Container = styled.div`
display: flex;
font-family: PT Sans;
justify-content: space-evenly; 
background-color: #000000;
color: #ffffff;
text-decoration: none;
font-size: 1.40625rem;
word-spacing: 0.16em;
line-height: 1.5;
item-align: center;
padding: 20px 0 20px 20px;
margin: none;
max-width: 100vw;
border: 0;
grid-column: 1/-1;
box-sizing: border-box;

ul{
  list-style-type: none;
 
  .location{
    display: flex;
    align-items: start;

    a{
      width: 50%;
    }
  }
}

ul li{
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  align-items: center;
  
  a{
    margin-left: 14px;
    color: #fff;
    text-decoration: none;
    under-line: none
  }
}

`