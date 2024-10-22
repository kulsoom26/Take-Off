import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  padding: 20px;
  background-color: #f0f4f8;
  height: 94vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BackArrow = styled(FaArrowLeft)`
  cursor: pointer;
  margin-right: 10px;
  color: black;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  margin-bottom: 2vh;
  &:hover {
    color: #007BFF;
  }
`;

const Settings = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <BackArrow onClick={handleBack} size={24} />
        <Title>Settings</Title>
      </Header>
      <List>
        <ListItem onClick={() => handleNavigation('/home/overview')}>Statements</ListItem>
        <ListItem onClick={() => handleNavigation('/home/payment-schedule')}>Payment Schedule</ListItem>
        <ListItem onClick={() => handleNavigation('/home/history')}>Transaction History</ListItem>
        <ListItem onClick={() => handleNavigation('/home/build-more')}>Take Off Store</ListItem>
        <ListItem onClick={() => handleNavigation('/home/build-more')}>Build More</ListItem>
        <ListItem onClick={() => handleNavigation('/home/cancel-membership')}>Cancel Membership</ListItem>
      </List>
    </Container>
  );
};

export default Settings;
