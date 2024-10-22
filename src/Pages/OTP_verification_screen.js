import React, { useRef } from "react";
import styled from "styled-components";
import bannerImage from "../assets/images/Banner_logo.png";
import { media } from "../responsive";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  ${media.mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.mobile({ flex: 0.4 })}
`;

const BannerImage = styled.img`
  width: 80%;
  height: auto;
  max-height: 30vh;
  ${media.mobile({ width: "50%", height: "auto", maxHeight: "20vh" })}
`;

const Right = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  ${media.mobile({ flex: 0.6 })}
`;

const Line = styled.div`
  width: 100px;
  height: 2px;
  background-color: black;
  ${media.mobile({ display:"none" })}
`;

const LoginText = styled.span`
  margin: 0 10px;
  font-size: 24px;
  font-weight: 600;
  ${media.mobile({ fontSize: "20px" })}
`;

const Row1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5vh;
  ${media.mobile({ flexDirection: "column", alignItems: "center" })}
`;

const OTPContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  ${media.mobile({ width: "80%" })}
`;

const OTPInput = styled.input`
  width: 4rem;
  height: 4rem;
  margin: 0 0.5rem;
  font-size: 2rem;
  text-align: center;
  border: 2px solid gray;
  border-radius: 8px;
  ${media.mobile({ width: "3rem", height: "3rem", fontSize: "1.5rem" })}
`;

const ButtonContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  width: 100%;
  ${media.mobile({ marginTop: "5vh" })}
`;

const Button = styled.button`
  width: 20vw;
  height: 46px;
  background-color: #46b3f6;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #1d9bf0;
  }
  ${media.mobile({ width: "40vw", height: "40px", fontSize: "16px" })}
`;

const OTPVerification = () => {
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const allInputsFilled = inputRefs.current.every(input => input.value.trim() !== "");

    if (allInputsFilled) {
      toast.success("Successfully Logged in!", {
        icon: "✅",
        style: {
          borderRadius: "8px",
          background: "#fff",
          color: "#28a745",
        },
      });
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      toast.error("Invalid credentials, please try again!", {
        icon: "❌",
        style: {
          borderRadius: "8px",
          background: "#fff",
          color: "#dc3545",
        },
      });
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Left>
        <BannerImage src={bannerImage} alt="Banner Logo Image" />
      </Left>
      <Right>
        <Row1>
          <Line />
          <LoginText>INPUT OTP CODE</LoginText>
          <Line />
        </Row1>
        <OTPContainer>
          {Array(4).fill("").map((_, index) => (
            <OTPInput
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </OTPContainer>
        <ButtonContainer>
          <Button onClick={handleSubmit}>SUBMIT</Button>
        </ButtonContainer>
      </Right>
    </Container>
  );
};

export default OTPVerification;
