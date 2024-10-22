import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FiCopy } from 'react-icons/fi'; 
import { media } from '../../responsive';

const Card = styled.div`
  background-color: white;
  padding: 20px 20px 5px 20px;
  border-radius: 8px;
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  ${media.small`
    padding: 15px 15px 5px 15px;
    width: 93%;
  `}
  ${media.mobile`
    padding: 15px 15px 5px 15px;
    width: 93%;
  `}
  ${media.extraSmall`
    padding: 10px 10px 5px 10px;
    width: 93%;
  `}
`;

const Text = styled.span`
  font-size: 15px;
  font-weight: 400;
  margin-top: 1vh;
  ${media.small`
    font-size: 14px;
  `}
  ${media.extraSmall`
    font-size: 13px;
  `}
`;

const TextFieldWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 2vh;
`;

const TextField = styled.input`
  flex: 1;
  padding: 10px 40px 10px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  ${media.small`
    padding: 8px 35px 8px 8px;
    font-size: 14px;
  `}
  ${media.extraSmall`
    padding: 6px 30px 6px 6px;
    font-size: 12px;
  `}
`;

const CopyButton = styled.button`
  position: absolute;
  right: 10px;
  display: flex;
  width: 30px;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 8px;

  &:hover {
    color: #007bff;
  }
`;

const FooterText = styled.p`
  font-size: 16px;
  color: #46B3F6;
  ${media.small`
    font-size: 14px;
  `}
  ${media.extraSmall`
    font-size: 12px;
  `}
`;

const Card2 = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const textFieldRef = useRef(null);

  const copyToClipboard = () => {
    textFieldRef.current.select();
    document.execCommand('copy');
    setCopySuccess('Copied!');
    setTimeout(() => setCopySuccess(''), 2000);
  };

  return (
    <Card>
      <Text>Give $5, get $5</Text>
      <Text>Each time a friend signs up for takeOff, you both get $5 credit.</Text>
      <TextFieldWrapper>
        <TextField ref={textFieldRef} value="https://takeoff.com/refer/MSUY" readOnly />
        <CopyButton onClick={copyToClipboard}>
          <FiCopy size={15} />
          <span>Copy</span>
        </CopyButton>
      </TextFieldWrapper>
      {copySuccess && <Text>{copySuccess}</Text>}
      <FooterText>Share TakeOff</FooterText>
    </Card>
  );
};

export default Card2;
