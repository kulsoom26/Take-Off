import React, { useState } from "react";
import styled from "styled-components";
import { media } from "../responsive";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/navbar_logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  ${media.mobile`
    flex-direction: column;
    align-items: center;
  `}
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px;
  ${media.mobile`
    align-items: center;
    padding: 20px;
  `}
`;

const LogoImg = styled.img`
  width: 245px;
  height: 55px;
  ${media.tablet`
    width: 120px;
    height: 40px;
  `}
  ${media.mobile`
    width: 85px;
    height: 35px;
  `}
`;

const Button2 = styled.button`
  width: 245px;
  height: 36px;
  background-color: #46b3f6;
  border: none;
  border-radius: 50px;
  margin-top: 20px;
  font-weight: 400;
  font-size: 19px;
  cursor: pointer;
  ${media.tablet`
    width: 200px;
    height: 36px;
    font-size: 16px;
  `}
  ${media.mobile`
    width: 150px;
    height: 30px;
    font-size: 14px;
  `}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.tablet`
    align-items: center;
  `}
  ${media.mobile`
    align-items: center;
  `}
`;

const ListItem = styled.li`
  font-size: 18px;
  cursor: pointer;
  position: relative;
  color: ${(props) => (props.active ? "black" : "grey")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  margin-bottom: 20px;
  ${media.tablet`
    font-size: 16px;
    margin-bottom: 15px;
  `}
  ${media.mobile`
    font-size: 15px;
    margin-bottom: 10px;
  `}
`;

const Footer = ({scrollToFAQs }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  const handleGetStartedClick = () => {
    navigate("/signup");
  };

  const handleListItemClick = (index) => {
    setActiveItem(index);
    switch (index) {
      case 0:
        navigate("/");
        break;
      case 1:
        scrollToFAQs();
        break;
      case 2:
        navigate("/aboutUs");
        break;
      case 3:
        navigate("/signup");
        break;
      case 4:
        navigate("/login");
        break;
      case 5:
        navigate("/login");
        break;
      case 6:
        navigate("/login");
        break;
      case 7:
        navigate("/login");
        break;
      case 8:
        navigate("/login");
        break;
      case 9:
        navigate("/login");
        break;
      case 10:
        navigate("/login");
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Section>
        <LogoImg src={logo} alt="Navbar Logo" />
        <Button2 onClick={handleGetStartedClick}>Get Started</Button2>
      </Section>
      <Section>
        <List>
          <ListItem active={activeItem === 0} onClick={() => handleListItemClick(0)}>
            Home
          </ListItem>
          <ListItem active={activeItem === 1} onClick={() => handleListItemClick(1)}>
            FAQs
          </ListItem>
          <ListItem active={activeItem === 2} onClick={() => handleListItemClick(2)}>
            About Us
          </ListItem>
        </List>
      </Section>
      <Section>
        <List>
          <ListItem active={activeItem === 3} onClick={() => handleListItemClick(3)}>
            Sign Up
          </ListItem>
          <ListItem active={activeItem === 4} onClick={() => handleListItemClick(4)}>
            Login
          </ListItem>
          <ListItem active={activeItem === 5} onClick={() => handleListItemClick(5)}>
            Builder Loans
          </ListItem>
          <ListItem active={activeItem === 6} onClick={() => handleListItemClick(6)}>
            Loans
          </ListItem>
        </List>
      </Section>
      <Section>
        <List>
          <ListItem active={activeItem === 7} onClick={() => handleListItemClick(7)}>
            Account
          </ListItem>
          <ListItem active={activeItem === 8} onClick={() => handleListItemClick(8)}>
            Builders
          </ListItem>
          <ListItem active={activeItem === 9} onClick={() => handleListItemClick(9)}>
            Overview
          </ListItem>
          <ListItem active={activeItem === 10} onClick={() => handleListItemClick(10)}>
            Payments
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Footer;
