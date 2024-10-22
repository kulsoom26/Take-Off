import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { media } from "../responsive";
import logo from "../assets/images/navbar_logo1.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

const Container = styled.div`
  height: 75px;
  ${media.mobile({ height: "10vh" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.mobile({ padding: "1vh 5px" })}
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  ${media.mobile({ justifyContent: "flex-start" })}
`;

const LogoImg = styled.img`
  width: 12vw;
  height: 55px;
  ${media.mobile({ width: "20vw", height: "8vh" })}
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  ${media.tablet({ display: "none" })}
  ${media.mobile({ display: "none" })}
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 20px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  position: relative;
  color: ${({ active }) => (active ? "black" : "grey")};
  &:after {
    content: "";
    display: ${({ active }) => (active ? "block" : "none")};
    width: 100%;
    height: 2px;
    background-color: black;
    position: absolute;
    bottom: -3px;
    ${media.mobile({ display: "none" })}
  }
  ${media.mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

// const MobileMenuItem = styled(MenuItem)`
//   margin-left: 5vw;
//   margin-top: 2vh;
//   font-size: 18px;
//   &:after {
//     display: none;
//   }
//   ${media.mobile({ fontSize: "14px" })}
// `;


// const MenuItem = styled.div`
//   font-size: 20px;
//   cursor: pointer;
//   margin-left: 20px;
//   font-weight: ${({ active }) => (active ? "bold" : "normal")};
//   position: relative;
//   color: ${({ active }) => (active ? "black" : "grey")};
//   &:after {
//     content: "";
//     display: ${({ active }) => (active ? "block" : "none")};
//     width: 100%;
//     height: 2px;
//     background-color: black;
//     position: absolute;
//     bottom: -3px;
//   }
//   ${media.mobile({ fontSize: "12px", marginLeft: "10px" })}
// `;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tablet({ display: "none" })}
  ${media.mobile({ display: "none" })}
`;

const Button1 = styled.button`
  width: 85px;
  height: 36px;
  background-color: white;
  border-radius: 50px;
`;

const Button2 = styled.button`
  width: 85px;
  height: 36px;
  background-color: #46b3f6;
  border-width: 0px;
  border-radius: 50px;
  margin-left: 20px;
  color: white;
`;

const HamburgerIcon = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;
  display: none;
  ${media.tablet({ display: "block" })}
  ${media.mobile({ display: "block" })}
`;

const CloseIcon = styled(FaTimes)`
  font-size: 24px;
  cursor: pointer;
  display: none;
  ${media.tablet({ display: "block" })}
  ${media.mobile({ display: "block" })}
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 75px;
  right: 0;
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  ${media.mobile({ top: "10vh" })}
`;

const MobileMenuItem = styled(MenuItem)`
  margin-left: 5vw;
  margin-top: 2vh;
  font-size: 18px;
  ${media.mobile({ fontSize: "14px" })}
`;

const MobileButton1 = styled(Button1)`
  display: block;
  margin-left: 5vw;
  margin-top: 2vh;
`;

const MobileButton2 = styled(Button2)`
  display: block;
  margin-left: 5vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

const Navbar = ({ scrollToFAQs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItemClick = (index) => {
    setIsMenuOpen(false);
    if (index === 0) {
      navigate("/");
    } else if (index === 1) {
      scrollToFAQs();
    } else {
      navigate("/aboutUs");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getActiveMenuItem = () => {
    if (location.pathname === "/") {
      return 0;
    } else if (location.pathname === "/") {
      return 1;
    } else if (location.pathname === "/aboutUs") {
      return 2;
    } else {
      return null;
    }
  };

  const activeMenuItem = getActiveMenuItem();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoImg src={logo} alt="Navbar Logo" />
        </Left>
        <Center>
          <MenuItem active={activeMenuItem === 0} onClick={() => handleMenuItemClick(0)}>
            Home
          </MenuItem>
          <MenuItem active={activeMenuItem === 1} onClick={() => handleMenuItemClick(1)}>
            FAQs
          </MenuItem>
          <MenuItem active={activeMenuItem === 2} onClick={() => handleMenuItemClick(2)}>
            About Us
          </MenuItem>
        </Center>
        <Right>
          <Button1 onClick={handleLoginClick}>Login</Button1>
          <Button2 onClick={handleSignupClick}>Sign up</Button2>
        </Right>
        {isMenuOpen ? (
          <CloseIcon onClick={toggleMenu} />
        ) : (
          <HamburgerIcon onClick={toggleMenu} />
        )}
      </Wrapper>
      {isMenuOpen && (
        <MobileMenu>
          <MobileMenuItem active={activeMenuItem === 0} onClick={() => handleMenuItemClick(0)}>
            Home
          </MobileMenuItem>
          <MobileMenuItem active={activeMenuItem === 1} onClick={() => handleMenuItemClick(1)}>
            FAQs
          </MobileMenuItem>
          <MobileMenuItem active={activeMenuItem === 2} onClick={() => handleMenuItemClick(2)}>
            About Us
          </MobileMenuItem>
          <MobileButton1 onClick={handleLoginClick}>Login</MobileButton1>
          <MobileButton2 onClick={handleSignupClick}>Sign up</MobileButton2>
        </MobileMenu>
      )}
    </Container>
  );
};

export default Navbar;
