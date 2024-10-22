import React from "react";
import styled from "styled-components";
import CardImage from "../Components/Home_Page_Components/Card_Image";
import CreditAccountCard from "../Components/Home_Page_Components/Credit_Account_Card";
import CreditBuilderLoanCard from "../Components/Home_Page_Components/Credit_Builder_Loan";
import Card2 from "../Components/Home_Page_Components/Card2";
import CreditLineOptions from "../Components/Home_Page_Components/Credit_Line_Options";
import Footer from "../Components/Footer2";
import Builders from "./Builder";
import RowComponent from "../Components/Home_Page_Components/Builder_Image";
import { media } from "../responsive";

const Container = styled.div`
  height: 100%;
  display: flex;
  width:auto;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #f2f5f7;
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-top: 2vh;
  margin-left: 1vw;
`;

const MainContainer = styled.div`
  padding: 1rem;
  display: flex;
  height: 50%;
  justify-content: space-between;
  background-color: #f2f5f7;
  
  ${media.tablet`
    flex-direction: column;
  `}
  ${media.mobile`
    flex-direction: column;
  `}
`;

const Column = styled.div`
  padding-top: 1vh;
  padding-bottom: 1vh;flex: 1;
  margin-right: 0px;
  
  &:last-child {
    margin-right: 0;
  }
  ${media.desktop`
    margin-right:1vw;
  `}
`;

const Home = () => {
  return (
    <Container>
      <Heading>Welcome Back John!</Heading>
      <RowComponent />
      <MainContainer>
        <Column>
          <CreditAccountCard />
          <CreditBuilderLoanCard />
        </Column>
        <Column>
          <CardImage />
          <Card2 />
        </Column>
      </MainContainer>
      <CreditLineOptions />
      <Builders />
      <Footer />
    </Container>
  );
};

export default Home;
