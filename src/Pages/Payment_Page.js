import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCreditCard } from 'react-icons/fa';
import PayPal from '../assets/images/PayPal.png';
import MasterCard from '../assets/images/mastercard.png';
import Visa from '../assets/images/visa.png';
import Stripe from '../assets/images/stripe.png';

const PaymentPageContainer = styled.div`
  width: auto;
  height: auto;
  padding: 20px;
  background-color: #f0f4f8;
  display: flex;
  justify-content: center;
  
  // align-items: center;
`;

const Container = styled.div`
  max-width: 50%; 
  display: flex;
  flex-direction: column;
  height: 60%; 
  border-radius: 8px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  width: 30%;
  display: flex;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => (props.active ? '#46B3F6' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  border-bottom: 1px solid #ccc;
  border-top: none;
  border-left: none;
  border-right: none;
  &:hover {
    background-color: ${(props) => (props.active ? '#46B3F6' : '#ddd')};
  }
`;

const Form = styled.div`
  padding: 20px 0px 20px 0px;
  width: 100%;
`;

const PaymentMethods = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5vh;
  width: 100%;
`;

const PaymentLabel = styled.label`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 95%;
  height: 4vh;
  padding: 10px;
  margin-bottom: 5vh;
  margin-top: 10px;
  border: 1px solid white;
  border-radius: 8px;
  margin-right: 2vw;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: black;
`;

const CardDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LabelContainer = styled.div`
  width: 100%;
  display: flex;
`;

const PaymentButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #46B3F6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #46B3F6;
  }
`;

const Image = styled.img`
  width: 39.43px;
  height: 27px;
`;

const Card = styled.div`
  background-color: white;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-radius: 8px;
  width: auto;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;

  &:nth-of-type(2) {
    margin-top: 1.5rem; /* Adjust the value as needed */
  }
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title2 = styled.span`
  font-size: 16px;
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

const PaymentPage = () => {
  const [isCreditCard, setIsCreditCard] = useState(true);
  const [name, setName] = useState('');
  const [card1, setCard1] = useState('');
  const [card2, setCard2] = useState('');
  const [card3, setCard3] = useState('');
  const [card4, setCard4] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');

  return (
    <PaymentPageContainer>
      <Container>
      <Title>Payment</Title>
      <Card>
      <Row1>
        <Title2>Credit builder loan</Title2>
        <Square />
      </Row1>
      <Row>
        <Text>Next Payment</Text>
        <Text>$80</Text>
      </Row>
      <Row>
        <Text>Next Due Date</Text>
        <Text>5/12/2023</Text>
      </Row>
      <Row>
        <Text>AutoPay-visa***01916</Text>
        <Text>ON</Text>
      </Row>
      <FooterText>PAYABLE AFTER 4/10/2024</FooterText>
      
    </Card>
        
        <TabContainer>
          <TabButton active={isCreditCard} onClick={() => setIsCreditCard(true)}>
            <FaCreditCard /> Credit card
          </TabButton>
          <TabButton active={!isCreditCard} onClick={() => setIsCreditCard(false)}>
            <FaCreditCard /> Debit card
          </TabButton>
        </TabContainer>
        <Form>
          <PaymentMethods>
            <PaymentLabel>
              <Input type="radio" name="payment-method" value="paypal" style={{ marginRight: '0.5vw', height: '2vh' }} />
              <Image src={PayPal} />
            </PaymentLabel>
            <PaymentLabel>
              <Input type="radio" name="payment-method" value="mastercard" style={{ marginRight: '0.5vw', height: '2vh' }} />
              <Image src={MasterCard} />
            </PaymentLabel>
            <PaymentLabel>
              <Input type="radio" name="payment-method" value="stripe" style={{ marginRight: '0.5vw', height: '2vh' }} />
              <Image src={Stripe} />
            </PaymentLabel>
            <PaymentLabel>
              <Input type="radio" name="payment-method" value="visa" style={{ marginRight: '0.5vw', height: '2vh' }} />
              <Image src={Visa} />
            </PaymentLabel>
          </PaymentMethods>
          <Label>Name on Card</Label>
          <Input type="text" placeholder="John Gentle" value={name} onChange={(e) => setName(e.target.value)} />
          <Label>Card Number</Label>
          <CardDetails>
            <Input type="text" placeholder="3215" value={card1} onChange={(e) => setCard1(e.target.value)} style={{ marginRight: '1vw' }} />
            <Input type="text" placeholder="****" value={card2} onChange={(e) => setCard2(e.target.value)} style={{ marginRight: '1vw' }} />
            <Input type="text" placeholder="****" value={card3} onChange={(e) => setCard3(e.target.value)} style={{ marginRight: '1vw' }} />
            <Input type="text" placeholder="****" value={card4} onChange={(e) => setCard4(e.target.value)} style={{ marginRight: '1vw' }} />
          </CardDetails>
          <LabelContainer>
            <Label style={{ marginRight: '18vw' }}>Expiry date</Label>
            <Label>CVV Code</Label>
          </LabelContainer>
          <CardDetails>
            <Input type="text" placeholder="mm/yy" value={expiry} onChange={(e) => setExpiry(e.target.value)} style={{ width: '40vw', marginRight: '1vw' }} />
            <Input type="text" placeholder="****" value={cvv} onChange={(e) => setCVV(e.target.value)} style={{ width: '40vw', marginRight: '1vw' }} />
          </CardDetails>
          <PaymentButton>Make payment</PaymentButton>
        </Form>
      </Container>
    </PaymentPageContainer>
  );
};

export default PaymentPage;
