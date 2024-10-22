import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import InputMask from "react-input-mask";

Modal.setAppElement('#root');

const Container = styled.div`
  height: 100vh;
  padding: 20px;
  background-color: #f2f5f7;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-left: 3vw;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  margin-top: 5vh;
  margin-left: 3vw;
  color: #333;
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 3vw;
`;

const ListItem = styled.li`
  color: #333;
  display: flex;
  align-items: center;

  &:before {
    content: "✔";
    color: #46b3f6;
    margin-right: 2vw;
  }

  & > span {
    font-weight: bold;
  }

  &:not(:last-child) {
    margin-bottom: 3vh;
  }
`;

const Details = styled.div`
  margin-left: 3vw;
`;

const DetailItem1 = styled.p`
  margin-bottom: 0vh;
  font-size: 15px;
  color: grey;
`;

const DetailItem = styled.p`
  margin-bottom: 2vh;
  font-size: 14px;
`;

const Button = styled.button`
  margin-top: 20px;
  margin-left: 3vw;
  padding: 10px 20px;
  background-color: #46b3f6;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  width: 20vw;
  &:hover {
    background-color: #1d9bf0;
  }
`;

// Modal and form styled components
const ModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormGroup = styled.div`
  margin-bottom: 1vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
  color: black;
  width: 100%;
`;

const Input = styled.input`
  width: 40vw;
  height: 4vh;
  padding: 8px;
  border: 2px solid gray;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 2vh;

  &:not(:last-child) {
    margin-right: 1vw;
  }
`;

const MaskedInput = styled(InputMask)`
  width: 40vw;
  height: 4vh;
  padding: 8px;
  border: 2px solid gray;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 2vh;
`;

const ModalButton = styled.button`
  width: 12vw;
  height: 46px;
  background-color: #46b3f6;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #1d9bf0;
  }
`;

const LevelOne = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <Container>
      <Title>Level One</Title>
      <SectionTitle>Your Benefits</SectionTitle>
      <List>
        <ListItem>
          A credit account with $5,000 reported credit line for lowering credit
          utilization and reporting payment history
        </ListItem>
        <ListItem>
          <span>Monthly</span> 3-Bureau full credit reports
        </ListItem>
        <ListItem>
          <span>Weekly</span> credit score updates
        </ListItem>
        <ListItem>
          Dispute Inaccurate or erroneous terms to Equifax with free mailing
        </ListItem>
        <ListItem>Privacy Protection</ListItem>
        <ListItem>Priority phone support</ListItem>
      </List>
      <SectionTitle>Details</SectionTitle>
      <Details>
        <DetailItem1>Plan</DetailItem1>
        <DetailItem>12-month plan at $35 per month</DetailItem>
        <DetailItem1>Enrolled since</DetailItem1>
        <DetailItem>January 8, 2023</DetailItem>
        <DetailItem1>Auto renewal date</DetailItem1>
        <DetailItem>June 10, 2024</DetailItem>
      </Details>
      <Button onClick={openModal}>SignUp Now</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Sign Up Form"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <ModalContainer>
          <h2>Let's take your payment information</h2>
          <FormGroup>
            <Label>Full Name</Label>
            <Input type="text" placeholder="First Name" style={{ width: "13vw" }} />
            <Input type="text" placeholder="Middle Name" style={{ width: "13vw" }} />
            <Input type="text" placeholder="Last Name" style={{ width: "13vw" }} />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Input type="text" placeholder="Street" style={{ width: "24vw" }} />
            <Input type="text" placeholder="City" style={{ width: "8vw" }} />
            <Input type="text" placeholder="Zip Code" style={{ width: "7vw" }} />
          </FormGroup>
          <FormGroup>
            <Label>Date of Birth</Label>
            <Input type="date" placeholder="MM-DD-YYYY" style={{ width: "43vw" }}/>
          </FormGroup>
          <FormGroup>
            <Label>Social Security Number</Label>
            <MaskedInput mask="***-**-9999" maskChar="*" placeholder="XXX-XX-1234" style={{ width: "43vw" }}/>
          </FormGroup>
          <FormGroup>
            <Label>Mobile Phone Number</Label>
            <MaskedInput mask="(999) 999-9999" placeholder="(123) 456-7890" style={{ width: "43vw" }}/>
          </FormGroup>
          <ModalButton onClick={closeModal}>Submit</ModalButton>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default LevelOne;
