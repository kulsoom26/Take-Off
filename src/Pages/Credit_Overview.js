import React from "react";
import styled from "styled-components";
import CreditOverviewCard from "../Components/Home_Page_Components/Credit_Overview_Card";
import Footer from "../Components/Footer2";
import Builder2 from "../assets/images/builder2.jpeg";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #f2f5f7;
`;

const ContentRow = styled.div`
  display: flex;
  padding: 2rem;
`;

const Column = styled.div`
  flex: 1;
  margin-right: 0px;
  &:last-child {
    margin-right: 0;
  }
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImageStyled = styled.img`
  width: 100px;
`;

const DetailsLabel = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
  font-size:2rem;
`;

const CreditOverview = () => {
  return (
    <Container>
      <ContentRow>
        <Column>
          <CreditOverviewCard />
        </Column>
        <VerticalContainer>
          <CardImageStyled src={Builder2} alt="Card" style={{ width: '70%' }} />
          <DetailsLabel>Time to Get Your Credit Strong!</DetailsLabel>
        </VerticalContainer>
      </ContentRow>
      <Footer />
    </Container>
  );
};

export default CreditOverview;
