import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  //  background-color: #f0f4f8;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f0f4f8;
`;

const MainHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const AboutUs = () => {
  return (
    <PageContainer>
        <Navbar/>
        <ContentWrapper>
        <MainHeading>About Us</MainHeading>

<SubHeading>Our Mission</SubHeading>
<Paragraph>
  Our mission is to provide the best services to our customers and ensure their satisfaction. We strive to innovate and improve our offerings constantly.
</Paragraph>
<Paragraph>
  We are committed to sustainability and aim to reduce our environmental impact. Our mission drives us to achieve excellence in every project we undertake.
</Paragraph>

<SubHeading>Our Vision</SubHeading>
<Paragraph>
  Our vision is to be the leading company in our industry, known for our commitment to quality and customer satisfaction. We aspire to set benchmarks in service and innovation.
</Paragraph>
<Paragraph>
  We envision a future where our company is synonymous with trust and reliability, making a positive impact on the lives of our customers and the community.
</Paragraph>

<SubHeading>Our Values</SubHeading>
<Paragraph>
  Integrity, excellence, and teamwork are the core values that guide us. We believe in doing business ethically and with transparency, ensuring fairness in all our dealings.
</Paragraph>
<Paragraph>
  Our values shape our culture and the way we interact with our clients, partners, and each other. We strive to uphold these principles in every aspect of our work.
</Paragraph>

<SubHeading>Our Team</SubHeading>
<Paragraph>
  Our team consists of dedicated professionals who are experts in their respective fields. We value diversity and encourage a collaborative work environment.
</Paragraph>
<Paragraph>
  We invest in our team’s growth and development, ensuring they have the skills and knowledge to deliver exceptional results for our clients.
</Paragraph>
        </ContentWrapper>
      <Footer/>
    </PageContainer>
  );
};

export default AboutUs;
