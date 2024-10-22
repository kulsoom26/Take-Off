import React from "react";
import styled from "styled-components";
import { FaPen, FaChevronRight, FaCreditCard, FaUser } from "react-icons/fa";

const ProfileCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  width:40vw;
  height: 7vh;
  margin-right: 2vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InfoCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  width:40vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  padding: 20px;
  background-color: #f7f9fc;
  height:95vh;
`;

const MainContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;


const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3vw;
`;

const ProfileName = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CardDetails = styled.div`
  flex: 1;
`;

const CardNumber = styled.p`
  margin: 0;
`;

const CardLabel = styled.p`
  margin: 0;
  font-size: 12px;
  color: #888;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
`;

const LinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5vh;
  font-size: 16px;
  color: #555;
`;

const LinkAction = styled.a`
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
`;

const RightPanel = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PersonalInformation = styled.div`
  margin-bottom: 5vh;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InfoLabel = styled.p`
  font-weight: 300;
  color: grey;
`;

const InfoValue = styled.div`
  display: flex;
  align-items: center;
`;

const Confirmed = styled.span`
  background-color: #d4f4d2;
  color: green;
  font-size: 12px;
  border-radius: 30px;
  padding: 2px 4px;
  margin-left: 10px;
`;

const EditIcon = styled(FaPen)`
  margin-left: 10px;
  cursor: pointer;
  color: #888;
`;

const Security = styled.div``;

const SecurityLink = styled.a`
  display: block;
  color: #007bff;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Account = () => {
  return (
    <Container>
      <Title>Account Information</Title>
      <MainContainer>

      <Content>
        <ProfileCard>
          <ProfileSection>
            <ProfileImage>
              <FaUser size={30} color="#ffffff" />
            </ProfileImage>
            <ProfileName>Felix lip</ProfileName>
          </ProfileSection>
        </ProfileCard>
        <InfoCard>
          <CardSection>
            <CardInfo>
              <FaCreditCard size={26} color="grey" style={{ marginRight: '1vw' }} />
              <CardDetails>
                <CardNumber>Visa****8485</CardNumber>
              </CardDetails>
              <FaChevronRight />
            </CardInfo>
            <CardLabel>Preferred</CardLabel>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur. In consequat nec id
              natoque. Facilisis amet adipiscing aliquam proin dui neque. In
              quam blandit varius nisi et id felis ac in. Adipiscing pulvinar
              quam mi nulla morbi laoreet mattis. Aliquet ante ut eu elit
              ullamcorper tincidunt posuere arcu. Ac odio volutpat praesent
              tellus dui.
            </CardDescription>
            <Links>
              <LinkItem>
                Linked Bank Accounts <LinkAction>Add new</LinkAction>
              </LinkItem>
              <LinkItem>
                Support and FAQs <LinkAction>Help me</LinkAction>
              </LinkItem>
            </Links>
          </CardSection>
            
            
           
            
            
          
        </InfoCard>
      </Content>
        <RightPanel>
          <PersonalInformation>
            <SectionTitle>Personal Information</SectionTitle>
            <InfoItem>
              <InfoLabel>Account Number</InfoLabel>
              <InfoValue>zlp89sghnzopa</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Legal name</InfoLabel>
              <InfoValue>Felix lip</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoValue style={{gap:'18em'}}><InfoLabel>Phone number<Confirmed>Confirmed</Confirmed></InfoLabel>  <EditIcon /></InfoValue>
              
              <InfoValue>
                +1 (2489) 938-6027 
              
              </InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoValue style={{gap:'22em'}}><InfoLabel>Email<Confirmed>Confirmed</Confirmed>
                </InfoLabel><EditIcon /></InfoValue>
              
              <InfoValue>
                Felixlip@gmail.com 
              </InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoValue style={{gap:'21em'}}><InfoLabel>Address<Confirmed>Confirmed</Confirmed></InfoLabel> <EditIcon /></InfoValue>
              
              <InfoValue>
                233935dd jdklnkdnlkj,kfiejojo 
               
              </InfoValue>
            </InfoItem>
          </PersonalInformation>
          <Security>
            <SectionTitle>Security</SectionTitle>
            <SecurityLink>Change password</SecurityLink>
            <SecurityLink>Close Accounts</SecurityLink>
          </Security>
        </RightPanel>
      </MainContainer>
      
      
    </Container>
  );
};





export default Account;
