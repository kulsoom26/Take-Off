import styled from "styled-components";
import { media } from "../responsive";
import logo from "../assets/images/navbar_logo.png";
import React from "react";
import { FaHome, FaCreditCard, FaUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: white;
  ${media.mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px 50px 20px 50px;
  margin-left: 50px;
  ${media.mobile({ marginLeft: "0px" })}
`;

const LogoImg = styled.img`
  width: 245px;
  height: 55px;
  ${media.mobile({ width: "85px", height: "35px" })}
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 70px 20px 50px;

  ${media.tablet({ flexDirection: "column", alignItems: "flex-start" })}
  ${media.mobile({ flexDirection: "column", alignItems: "flex-start", padding: "20px" })}
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  margin-left: 20px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  font-family: Segoe UI;
  position: relative;
  color: ${({ active }) => (active ? "black" : "grey")};

  svg {
    margin-right: 8px;
    fill: ${({ active }) => (active ? "black" : "none")};
    stroke: ${({ active }) => (active ? "black" : "grey")};
  }

  &:after {
    content: "";
    display: ${({ active }) => (active ? "block" : "none")};
    width: 100%;
    height: 2px;
    background-color: black;
    position: absolute;
    bottom: -3px;
  }

  ${media.tablet({ fontSize: "16px", marginLeft: "0px", marginBottom: "10px" })}
  ${media.mobile({ fontSize: "14px", marginLeft: "0px", marginBottom: "10px" })}
`;

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveMenuItem = () => {
    switch (location.pathname) {
      case "/home":
        return 0;
      case "/home/credit-overview":
        return 1;
      case "/home/credit-account":
        return 2;
      case "/home/history":
        return 3;
      default:
        return null;
    }
  };

  const activeMenuItem = getActiveMenuItem();

  const handleMenuItemClick = (index, path) => {
    navigate(path);
  };

  return (
    <Container>
      <Left>
        <LogoImg src={logo} alt="Navbar Logo" />
      </Left>
      <Center>
        <MenuItem
          active={activeMenuItem === 0}
          onClick={() => handleMenuItemClick(0, "/home")}
        >
          <FaHome />
          Home
        </MenuItem>
        <MenuItem
          active={activeMenuItem === 1}
          onClick={() => handleMenuItemClick(1, "/home/credit-overview")}
        >
          <FaCreditCard />
          Credit Score
        </MenuItem>
        <MenuItem
          active={activeMenuItem === 2}
          onClick={() => handleMenuItemClick(2, "/home/account")}
        >
          <FaUser />
          Account
        </MenuItem>
      </Center>
    </Container>
  );
};

export default Footer;
