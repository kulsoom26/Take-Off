import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Container = styled.div`
  padding: 20px;
  padding-left: 5vw;
  background-color: #f0f4f8;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8vh;
`;

const BackIcon = styled(FaArrowLeft)`
  cursor: pointer;
  margin-right: 1vw;
  font-size: 1.5em;
`;

const Title = styled.h1`
  font-size: 26px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 2vh;
`;

const Cell = styled.div`
  flex: 1;
`;

const Status = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 50px;
  background-color: ${(props) =>
    props.status === "Completed"
      ? "rgba(0, 128, 0, 0.2)"
      : "rgba(255, 165, 0, 0.2)"};
  color: ${(props) => (props.status === "Completed" ? "green" : "orange")};

  &::before {
    content: "•";
    margin-right: 0.5em;
    color: ${(props) => (props.status === "Completed" ? "green" : "orange")};
  }
`;

const PaymentSchedule = () => {
  const history = useNavigate();
  const payments = [
    { date: "May 4, 2024", amount: "$50.00", status: "Scheduled" },
    { date: "May 4, 2024", amount: "$50.00", status: "Completed" },
    { date: "May 4, 2024", amount: "$50.00", status: "Completed" },
    { date: "May 4, 2024", amount: "$50.00", status: "Completed" },
    { date: "May 4, 2024", amount: "$50.00", status: "Completed" },
    { date: "May 4, 2024", amount: "$50.00", status: "Completed" },
    { date: "May 4, 2024", amount: "$50.00", status: "Completed" },
    { date: "May 4, 2024", amount: "$50.00", status: "Completed" },
    { date: "May 4, 2024", amount: "$50.00", status: "Completed" },
    { date: "May 4, 2024", amount: "$50.00", status: "Completed" },
  ];

  const handleBackClick = () => {
    history(-1);
  };

  return (
    <Container>
      <Header>
        <BackIcon onClick={handleBackClick} />
        <Title>Full Payment Schedule</Title>
      </Header>
      <Table>
        {payments.map((payment, index) => (
          <Row key={index}>
            <Cell>{payment.date}</Cell>
            <Cell>{payment.amount}</Cell>
            <Cell>
              <Status status={payment.status}>{payment.status}</Status>
            </Cell>
          </Row>
        ))}
      </Table>
    </Container>
  );
};

export default PaymentSchedule;
