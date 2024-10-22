import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { media } from '../../responsive'; // Importing media queries

const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  width: 93%;
  height: 28vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    padding: 15px;
  `}
  ${media.mobile`
    padding: 10px;
  `}
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;

  &:nth-of-type(2) {
    margin-top: 1.5rem;
  }
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

const Square = styled.div`
  width: 16px;
  height: 16px;
  background-color: rgba(70, 179, 246, 0.26);
  border-radius: 2px;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin-top: 2vh;
  color: #46B3F6;
`;

const ChooseButton = styled.button`
  padding: 10px 0; 
  width: 15vw;
  margin: auto;
  border: none;
  border-radius: 5px;
  background-color: #46B3F6;
  color: white;
  cursor: pointer;
  font-size: 16px;
  ${media.mobile`
    width: 100%;
  `}
`;

const CreditBuilderLoanCard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home/payment-page');
  };

  return (
    <Card>
      <Row1>
        <Title>Credit Builder Loan</Title>
        <Square />
      </Row1>
      <Row>
        <Text>Next Payment</Text>
        <Text>N/A</Text>
      </Row>
      <Row>
        <Text>Next Due Date</Text>
        <Text>N/A</Text>
      </Row>
      <Row>
        <Text>AutoPay-visa***01916</Text>
        <Text>N/A</Text>
      </Row>
      <FooterText>PAYABLE AFTER 4/10/2024</FooterText>
      <ChooseButton onClick={handleButtonClick}>View Details</ChooseButton>
    </Card>
  );
};

export default CreditBuilderLoanCard;
