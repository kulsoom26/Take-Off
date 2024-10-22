import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bannerImage from "../assets/images/Banner_logo.png";
import { media } from "../responsive";

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
  ${media.mobile({ display:'none'})}
`;

const LoginText = styled.span`
  margin: 0 10px;
  font-size: 24px;
  font-weight: 600;
  ${media.mobile({ fontSize: "20px" })}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  ${media.mobile({ flexDirection: "column", alignItems: "center" })}
`;

const FormGroup = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${media.mobile({ alignItems: "center" })}
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
  color: black;
  ${media.mobile({ fontSize: "16px" })}
`;

const InputWrapper = styled.div`
  position: relative;
  width: 40vw;
  ${({ error }) => css`
    margin-bottom: ${error ? "0vh" : "5vh"};
  `}
  ${media.mobile({ width: "80vw" })}
`;

const Input = styled.input`
  width: 100%;
  height: 4vh;
  padding: 8px 10px 8px 8px;
  border: 2px solid ${(props) => (props.error ? "red" : "gray")};
  border-radius: 4px;
  font-size: 16px;
  ${media.mobile({ height: "5vh", fontSize: "14px" })}
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5vh;
  ${media.mobile({ fontSize: "10px" })}
`;

const Button = styled.button`
  width: 42vw;
  height: 46px;
  background-color: #46b3f6;
  border: none;
  border-radius: 4px;
  color: white;
  margin-top: 4vh;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #1d9bf0;
  }
  ${media.mobile({ width: "80vw", height: "40px", fontSize: "16px" })}
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (validateEmail(newEmail)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (validatePassword(newPassword)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must be at least 8 characters long, contain upper and lower case letters, a number, and a special character"
      );
    }
  };

  const handleSubmit = () => {
    if (validateEmail(email) && validatePassword(password)) {
      toast.success("Welcome back!", {
        icon: "✅",
        style: {
          borderRadius: "8px",
          background: "#fff",
          color: "#28a745",
        },
      });
      setTimeout(() => {
        navigate("/otpVerification");
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
        <Row>
          <Line />
          <LoginText>LOGIN</LoginText>
          <Line />
        </Row>

        <FormGroup>
          <Label>Email</Label>
          <InputWrapper error={emailError}>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={!!emailError}
            />
          </InputWrapper>
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          <Label>Password</Label>
          <InputWrapper error={passwordError}>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
            />
          </InputWrapper>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          <Button onClick={handleSubmit}>LOGIN</Button>
        </FormGroup>
      </Right>
    </Container>
  );
};

export default Login;
