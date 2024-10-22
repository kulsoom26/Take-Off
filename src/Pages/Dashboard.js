import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import CreditOverview from './Credit_Overview';
import HomeContent from './Home';
import Loan from './Loan';
import History from './History';
import Account from './Account';
import Builder from './Builder';
import LevelOne from './Level_One';
import UltimatePlan from './Ultimate_Plan';
import AdvantagePlan from './Advantage_Plan';
import PaymentPage from './Payment_Page';
import CreditAccount from './Credit_Account';
import PaymentSchedule from './Payment_Schedule';
import Overview from './Overview';
import Settings from './Settings';
import BuildMore from './Build_More';
import CancelMembership from './Cancel_Membership';

const HomeContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const Dashboard = () => {
  return (
    <HomeContainer>
      {/* <Sidebar /> */}
      <Content>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="loan" element={<Loan />} />
          <Route path="history" element={<History />} />
          <Route path="account" element={<Account />} />
          <Route path="builder" element={<Builder />} />
          <Route path="level-one" element={<LevelOne />} />
          <Route path="ultimate-plan" element={<UltimatePlan />} /> 
          <Route path="advantage-plan" element={<AdvantagePlan />} />
          <Route path="payment-page" element={<PaymentPage />} />
          <Route path="credit-account" element={<CreditAccount />} />
          <Route path="payment-schedule" element={<PaymentSchedule />} />
          <Route path="overview" element={<Overview />} />
          <Route path='credit-overview' element={<CreditOverview/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='build-more' element={<BuildMore/>}/>
          <Route path='cancel-membership' element={<CancelMembership/>}/>
        </Routes>
      </Content>
    </HomeContainer>
  );
};

export default Dashboard;
