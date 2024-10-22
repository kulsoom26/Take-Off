import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/images/builder1.jpeg";
import { media } from "../responsive";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f0f4f8;
  padding: 20px;
  ${media.mobile(css`
    flex-direction: column;
    padding: 5rem;
  `)}
`;

const Image = styled.img`
  max-width: 50%;
  height: auto;
  margin-bottom: 20px;
  ${media.mobile(css`
    max-width: 80%;
  `)}
`;

const MessageBox = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  margin-left: 2vw;
  width: 90%;
  ${media.mobile(css`
    padding-left: 5rem;
    margin-top: 20px;
    width: 100%;
    max-width: 100%;
    padding: 20px;
  `)}
`;

const Message = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
  ${media.mobile(css`
    font-size: 16px;
  `)}
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 2px solid gray;
  border-radius: 4px;
  ${media.mobile(css`
    padding: 8px;
    font-size: 14px;
  `)}
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #46b3f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #1d9bf0;
  }
  ${media.mobile(css`
    padding: 8px;
    font-size: 14px;
  `)}
`;

const AccountVerification = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <Wrapper>
      <Image src={backgroundImage} alt="Banner Logo" />
      <MessageBox>
        <Message>
          Please check your email address and enter the 4-digit code sent to your email to verify your account!
        </Message>
        <Input type="text" maxLength="4" placeholder="Enter 4-digit code" />
        <Button onClick={handleBack}>Verify Account</Button>
      </MessageBox>
    </Wrapper>
  );
};

export default AccountVerification;
