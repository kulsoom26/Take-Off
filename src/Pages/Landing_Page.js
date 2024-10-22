import React, { useRef } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LandingPageBanner from "../Components/Landing_Page_Components/Banner";
import Container2 from "../Components/Landing_Page_Components/Container2";
import Container3 from "../Components/Landing_Page_Components/Container3";
import Container4 from "../Components/Landing_Page_Components/Container4";
import CreditTable from "../Components/Landing_Page_Components/Table_Container";
import Questions from "../Components/Landing_Page_Components/Questions";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const LandingPage = () => {
  const navigate = useNavigate();
  const questionsRef = useRef(null);

  const scrollToFAQs = () => {
    if (questionsRef.current) {
      questionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <Navbar scrollToFAQs={scrollToFAQs} />
        <LandingPageBanner />
        <Container2 />
        <Container3 />
        <Container4 />
        <CreditTable />
        <div ref={questionsRef}>
          <Questions />
        </div>
      </ContentWrapper>
      <Footer scrollToFAQs={scrollToFAQs} />
    </PageContainer>
  );
};

export default LandingPage;
