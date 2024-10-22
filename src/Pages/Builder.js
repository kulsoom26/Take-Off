import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background-color: #f0f4f8;
`;

const Title = styled.h1`
  margin-bottom: 4vh;
  margin-left: 3vw;
  font-size: 24px;
  font-weight: 600;
`;

const PlanCard = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 3vh;
  margin-right: 5vw;
  margin-left: 3vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const PlanLevel = styled.h2`
  margin-bottom: 1vh;
  font-size: 17px;
  font-weight: 600;
`;

const Payments = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3vh;
`;

const Payment = styled.div`
  text-align: center;
`;

const PaymentAmount = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1vh;
`;

const PaymentDuration = styled.p`
  margin: 0;
  color: grey;
  font-size: 12px;
`;

const ActivateButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ActivateButton = styled.button`
  background-color: #46b3f6;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 15vw;
  &:hover {
    background-color: #0056b3;
  }
`;

const Builder = () => {
  const plans = [
    {
      level: "Level one",
      monthlyPayments: [
        { amount: "$300", duration: "Loan Amount" },
        { amount: "$25", duration: "For 12 months" },
        { amount: "$12.50", duration: "For 24 months" },
      ],
    },
    {
      level: "Advantage",
      monthlyPayments: [
        { amount: "$600", duration: "Loan Amount" },
        { amount: "$50", duration: "For 12 months" },
        { amount: "$25", duration: "For 24 months" },
      ],
    },
    {
      level: "Ultimate",
      monthlyPayments: [
        { amount: "$1200", duration: "Loan Amount" },
        { amount: "$100", duration: "For 12 months" },
        { amount: "$50", duration: "For 24 months" },
      ],
    },
  ];

  return (
    <Container>
      <Title>Credit Builder Loans</Title>
      {plans.map((plan, index) => (
        <PlanCard key={index}>
          <PlanLevel>{plan.level}</PlanLevel>
          <Payments>
            {plan.monthlyPayments.map((payment, idx) => (
              <Payment key={idx}>
                <PaymentAmount>
                  {payment.amount}
                  {idx !== 0 && (
                    <span style={{ color: "grey", fontSize: "12px" }}>
                      /month
                    </span>
                  )}
                </PaymentAmount>
                <PaymentDuration>{payment.duration}</PaymentDuration>
              </Payment>
            ))}
          </Payments>
          <ActivateButtonContainer>
            <ActivateButton>Activate now</ActivateButton>
          </ActivateButtonContainer>
        </PlanCard>
      ))}
    </Container>
  );
};

export default Builder;
