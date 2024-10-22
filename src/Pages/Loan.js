import React from "react";
import styled from "styled-components";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  background-color: #f2f5f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ScoreContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%; 
  max-width: 1200px; 
`;

const BackIcon = styled(FaArrowLeft)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

const ScoreHeader = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 15vh;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 8vh;
  margin-top: 5vh;
`;

const ScoreValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5vh;
`;

const ScoreDescription = styled.div`
  color: grey;
`;

const ProgressBarContainer = styled.div`
  width: 60%;
  margin: 20px 0;
`;

const ProgressBar = styled.div`
  height: 10px;
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: 20%;
  background: green;
`;

const Days = styled.span`
  font-size: 0.7em;
  color: #555;
  font-weight: 400;
  margin-right: 2vw;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 2.5vw;
  width: 43%;
`;

const FooterText = styled.div`
  width: 70%;
  font-size: 14px;
  color: #555;
`;

const AccountTypesFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 10px;
  height: 13vh;
  width: 43%; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

const AccountTypesFooterText = styled.div`
  font-size: 14px;
  color: #555;
`;

const Row = styled.div`
  display: flex;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 128, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10vw;
`;

const Loan = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ScoreContainer>
        <BackIcon size={20} onClick={() => navigate(-1)} />
        <ScoreHeader>
          <Title>Credit Mix</Title>
          <ScoreValue>0</ScoreValue>
          <ScoreDescription>
            <strong>Unchanged</strong> Since February
          </ScoreDescription>
        </ScoreHeader>
        <ProgressBarContainer>
          <ProgressBar>
            <Progress />
          </ProgressBar>
        </ProgressBarContainer>
        <Row>
          <Days>Jan</Days>
          <Days>Feb</Days>
          <Days>Mar</Days>
          <Days>Apr</Days>
          <Days>May</Days>
          <Days>Jun</Days>
          <Days>Jul</Days>
          <Days>Aug</Days>
          <Days>Sep</Days>
          <Days>Oct</Days>
        </Row>
        <Row style={{ marginTop: "5vh" }}>
          <ScoreValue style={{ marginRight: "1vw" }}>Rating:</ScoreValue>
          <Circle>
            <span
              style={{ color: "Green", fontSize: "18px", fontWeight: "bold" }}
            >
              A
            </span>
          </Circle>
          <ScoreValue>Impact: High</ScoreValue>
        </Row>
      </ScoreContainer>
      <Row>
        <Footer>
          <FooterText>
            You have 1 total accounts types keeping different types of accounts
            (like credit cards and loans well-maintained is a good way to boost
            your credit score)
          </FooterText>
        </Footer>

        <AccountTypesFooter>
          <ScoreValue>Account types</ScoreValue>
          <Row>
            <AccountTypesFooterText>
              Revolving
            </AccountTypesFooterText>
            <AccountTypesFooterText>
              1 Open <FaChevronDown size={10} />
            </AccountTypesFooterText>
          </Row>
        </AccountTypesFooter>
      </Row>
    </Container>
  );
};

export default Loan;
