import React from "react";
import styled from "styled-components";
import CreditHistory from '../Components/Home_Page_Components/Credit_History';



const Container = styled.div`
  
  background-color: #f2f5f7;
  height: 100vh;
`;




const History = () => {
  return (
      <Container>
      <CreditHistory/>
      
    </Container>
    
  );
};
export default History;
