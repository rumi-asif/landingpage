import styled from "styled-components";
import pic from "./assets/hello.png";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa"
 
function Navbar() {
  return (
    <Nav>
      <div>
      <Logo >
        <img
          src={pic}
          alt="logo.png"
          height="40px"
        />
        <span>Hello</span>
      </Logo>
      </div>
      <div style={{display: "flex", marginRight: 10}}>
      <Links >
        <A className="center">HOME <FaChevronDown /></A>
        <A>ABOUT US <FaChevronDown/></A>
        <A>RESOURCES <FaChevronDown/></A>
        <A>CONTACT US <FaChevronDown/></A>
      </Links>
      <Divider/>
      <Links>
        <A>ENG</A>
        <A>URDU</A>
        <A><FaSearch style={{justifyItem: "center"}}/></A>
      </Links>
      </div>
    </Nav>
  );
}

export default Navbar;



const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  padding: 8px;

  img{
    margin-top: 5px;
   margin-left: 60px;
  }

  &:hover .dropdown-menu {
    display: block;
  }
`;
const Logo = styled.div`
  margin-top: 5px;
   margin-left: 60px;
  `;

const Links = styled.div`
  display: flex;
  
  `

const A = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
  padding: 10px;

  "& svg": {
    padding: 0 10;
  }

  &:hover{
    color: #812990;
    cursor: pointer;
  }
`;

const Divider = styled.div`
border-left: 6px solid black;
height: 35px;
margin-left: -3px;
top: 0;
`;