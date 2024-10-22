import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { media } from "../../responsive";

const creditData = [
  { id: "wx899uwt298", date: "12th, Mar 2024", amount: "2.4%", status: "+4%" },
  { id: "f2yy72j00kwt", date: "10th, Feb 2024", amount: "2.0%", status: "+3%" },
  { id: "zft13w209kilw", date: "2nd, Jan 2024", amount: "2.0%", status: "+8%" },
  { id: "cla41089gh66", date: "12th, Dec 2023", amount: "2.1%", status: "+1%" },
  { id: "gentle5320enc", date: "24th, Oct 2023", amount: "2.0%", status: "-12%" },
  { id: "Dolla79mysm9a", date: "31st, Aug 2023", amount: "2.4%", status: "+10%" },
  { id: "des09809jsk09", date: "28, Jul 2023", amount: "2.4%", status: "+10%" },
];

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4vh;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin-left: 1vw;

  ${media.extraSmall(css`
    font-size: 24px;
  `)}

  ${media.small(css`
    font-size: 26px;
  `)}
`;

const BackIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 1.5em;
`;

const TableContainer = styled.div`
  margin: 0vh 5vh 5vh 5vh;
  display: flex;
  flex-direction: column;
`;

const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;

  ${media.tablet(css`
    width: 95%;
  `)}

  ${media.desktop(css`
    width: 100%;
  `)}
`;

const Thead = styled.thead`
  background-color: #46b3f6;
  color: white;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #e0e0e0;
  }
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  color: ${(props) => (props.statusColor ? props.statusColor : "black")};
`;

const StatusTd = styled(Td)`
  font-weight: 600;
  color: ${(props) => getStatusColor(props.status)};
`;

const getStatusColor = (status) => {
  if (status.includes("+")) return "green";
  if (status.includes("-")) return "red";
  return "black";
};

const CreditHistory = () => {
  const history = useNavigate();

  const handleBackClick = () => {
    history(-1);
  };

  return (
    <TableContainer>
      <Heading>
        <BackIcon icon={faArrowLeft} onClick={handleBackClick} />
        <Title>Recent Credit History</Title>
      </Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Credit ID</Th>
            <Th>Date</Th>
            <Th>Credit amount</Th>
            <Th>Score Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {creditData.map((credit) => (
            <Tr key={credit.id}>
              <Td>{credit.id}</Td>
              <Td>{credit.date}</Td>
              <Td>{credit.amount}</Td>
              <StatusTd status={credit.status}>
                {credit.status.includes("+") ? (
                  <FontAwesomeIcon icon={faArrowUp} />
                ) : (
                  <FontAwesomeIcon icon={faArrowDown} />
                )}{" "}
                {credit.status}
              </StatusTd>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CreditHistory;
