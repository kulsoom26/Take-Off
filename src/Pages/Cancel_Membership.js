import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faClose } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  background-color: #f0f4f8;
  height: 94vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-right: 10px;

  &:hover {
    color: #007BFF;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ImpactList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
`;

const ImpactItem = styled.li`
  display: flex;
  align-items: flex-start;
  font-size: 16px;
  margin-bottom: 5vh;
`;

const ImpactIcon = styled(FontAwesomeIcon)`
  color: red;
  margin-right: 10px;
  margin-top: 5px;
`;

const ImpactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImpactTitle = styled.span`
  font-weight: bold;
`;

const ImpactDescription = styled.span`
  font-weight: normal;
`;

const CancelButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const KeepButton = styled.button`
 background-color: #46b3f6;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 20px;
  width: 20vw;
  cursor: pointer;
  margin: 0 auto;  

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelMembership = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
        <Title>Do you want to cancel your membership?</Title>
      </Header>
      <Description>If you cancel your credit Account completely, it might negatively impact your score:</Description>
      <ImpactList>
        <ImpactItem>
          <ImpactIcon icon={faClose} />
          <ImpactText>
            <ImpactTitle>Less Positive payment history</ImpactTitle>
            <ImpactDescription>You'll no longer build positive history with Take off</ImpactDescription>
          </ImpactText>
        </ImpactItem>
        <ImpactItem>
          <ImpactIcon icon={faClose} />
          <ImpactText>
            <ImpactTitle>Higher overall credit utilization</ImpactTitle>
            <ImpactDescription>$5,000 will be removed from your overall credit line</ImpactDescription>
          </ImpactText>
        </ImpactItem>
        <ImpactItem>
          <ImpactIcon icon={faClose} />
          <ImpactText>
            <ImpactTitle>Lower overall credit account age</ImpactTitle>
            <ImpactDescription>Your take off account will no longer be included on credit reports</ImpactDescription>
          </ImpactText>
        </ImpactItem>
      </ImpactList>
      <CancelButton>Cancel membership</CancelButton>
      <KeepButton>Keep it open</KeepButton>
    </Container>
  );
};

export default CancelMembership;
