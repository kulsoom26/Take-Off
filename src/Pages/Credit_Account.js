import React from "react";
import styled from "styled-components";
import { FaCog, FaArrowLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import CardImage from "../assets/images/cardImage.png";
import { Link, useNavigate } from 'react-router-dom';
import Builder2 from '../assets/images/builder2.jpeg';

const Container = styled.div`
  padding: 20px;
  padding-right: 5vw;
  background-color: #f0f4f8;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 0px;
`;

const Plan = styled.p`
  color: black;
  font-size: 15px;
`;

const PlanSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

const AccountInfo = styled.div`
  display: flex;
  gap: 15rem;
  margin-top: 5vh;
  margin-bottom: 8vh;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 2vh;
`;

const Value = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const NextPaymentSection = styled.div`
  margin: 20px 0;
`;

const PaymentInfo = styled.p`
  margin-top: 2vh;
  font-size: 14px;
  font-weight: 500;
`;

const ManageButton = styled.button`
  background-color: #46b3f6;
  width: 20vw;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
`;

const AddBackupPayment = styled.div`
  margin: 5vh 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddText = styled.p`
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
`;

const CardImageStyled = styled.img`
  width: 100px;
`;

const DetailsSection = styled.div`
  margin: 20px 0;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DetailsLabel = styled.p`
  font-weight: bold;
`;

const DetailsList = styled.div`
  margin: 10px 0;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

const Icon = styled(FaChevronRight)`
  margin-left: 5px;
`;

const BoldAddText = styled(AddText)`
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0vh;
  font-size: 14px;
`;

const ProgressText = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

const ProgressLabel = styled.span`
  margin-right: 10px;
`;

const ProgressBarBackground = styled.div`
  flex: 1;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 8vh;
  height: 10px;
  width: 100%;
`;

const ProgressBarFill = styled.div`
  background-color: #46b3f6;
  width: ${props => props.percentage}%;
  height: 100%;
  border-radius: 5px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 2vh;
  margin-right: 2vw;
`;

const CreditAccount = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft size={24} />
          </BackButton>
          <Title>Credit Account</Title>
        </div>
        <Link to='/home/settings'>
          <FaCog size={24} />
        </Link>
      </Header>
      <PlanSection>
        <div>
          <Plan>Ultimate Plan</Plan>
          <Link to="/home/payment-page">
            <ManageButton style={{ width: '8vw', borderRadius: "10px" }}>Pay Now</ManageButton>
          </Link>
          <AccountInfo>
        <InfoItem>
          <Label>Credit Line</Label>
          <Value>$5,000</Value>
        </InfoItem>
        <InfoItem>
          <Label>Credit Utilization</Label>
          <Value>
            11% <span style={{ color: "green", fontSize: "8px" }}>Good</span>
          </Value>
        </InfoItem>
      </AccountInfo>
      <NextPaymentSection>
        <Title style={{ fontSize: "18px" }}>Next monthly payment</Title>
        <PaymentInfo>
          Your next monthly payment of $40 will be processed on April 12th using{" "}
          <span style={{ fontWeight: "600" }}>Visa**** 3296</span>
        </PaymentInfo>
        <Link to="/home/payment-schedule">
          <ManageButton>Manage Autopay</ManageButton>
        </Link>
      </NextPaymentSection>
        </div>
        <CardImageStyled src={Builder2} alt="Card" style={{width: '20%'}}/>
        
      </PlanSection>
      
      <AddBackupPayment>
        <InfoItem>
          <AddText>Add backup payment method to ensure on-time payments</AddText>
          <BoldAddText>
            Add <Icon />
          </BoldAddText>
        </InfoItem>
        <CardImageStyled src={CardImage} alt="Card" />
      </AddBackupPayment>
      <DetailsSection>
        <DetailHeader>
          <DetailsLabel>Add Details</DetailsLabel>
          <FaChevronDown />
        </DetailHeader>
        <AddBackupPayment style={{ margin: '0vh' }}>
          <InfoItem>
            <ProgressLabel>Add account details to ensure on-time payments</ProgressLabel>
            <ProgressText>11% Good</ProgressText>
          </InfoItem>
          <Value>$5,000</Value>
        </AddBackupPayment>
        <ProgressBarBackground>
          <ProgressBarFill percentage={11} />
        </ProgressBarBackground>
        <DetailsList>
          <DetailItem>
            <ProgressText>Next payment due</ProgressText>
            <ProgressText>April 10, 2025</ProgressText>
          </DetailItem>
          <DetailItem>
            <ProgressText>Next payment amount</ProgressText>
            <ProgressText>$0.00</ProgressText>
          </DetailItem>
          <DetailItem>
            <ProgressText>Statement Balance</ProgressText>
            <ProgressText>$420.00</ProgressText>
          </DetailItem>
          <DetailItem>
            <ProgressText>APR</ProgressText>
            <ProgressText>0%</ProgressText>
          </DetailItem>
          <DetailItem>
            <ProgressText>Available store credit</ProgressText>
            <ProgressText>$1,478.00</ProgressText>
          </DetailItem>
          <DetailItem>
            <ProgressText>Totals store credit limit</ProgressText>
            <ProgressText>$1,478.00</ProgressText>
          </DetailItem>
          <DetailItem>
            <ProgressText>Account open date</ProgressText>
            <ProgressText>April 10, 2024</ProgressText>
          </DetailItem>
          <DetailItem>
            <ProgressText>Next closing date</ProgressText>
            <ProgressText>April 10, 2024</ProgressText>
          </DetailItem>
        </DetailsList>
      </DetailsSection>
    </Container>
  );
};

export default CreditAccount;
