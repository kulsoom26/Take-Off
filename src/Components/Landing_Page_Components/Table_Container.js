import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { media } from "../../responsive";

const Container = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  ${media.tablet`
    height: auto;
    margin-top: 30px;
  `}
  ${media.mobile`
    height: auto;
    margin-top: 30px;
  `}
`;

const Text = styled.p`
  width: 50vw;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  padding: 0px;
  margin: 0px;
  ${media.tablet`
    width: 70vw;
    font-size: 22px;
  `}
  ${media.mobile`
    width: 80vw;
    font-size: 20px;
  `}
  ${media.small`
    width: 90vw;
    font-size: 18px;
  `}
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 60%;
  ${media.tablet`
    width: 70%;
    margin-top: 50px;
  `}
  ${media.mobile`
    width: 80%;
    margin-top: 40px;
  `}
  ${media.small`
    width: 90%;
    margin-top: 20px;
  `}
`;

const Row = styled.div`
  display: flex;
  border-bottom: ${(props) => (props.last ? "none" : "2px solid grey")};
  height: auto; 
  ${media.tablet`
    flex-direction: row;
  `}
  ${media.mobile`
    height: auto;
    flex-direction: row;
  `}
`;

const Cell = styled.div`
  flex: 1;
  padding: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  ${(props) =>
    props.lastColumn &&
    `
    background-color: rgba(70, 179, 246, 0.2);
  `}
  ${media.tablet`
    font-size: 17px;
    padding: 8px;
  `}
  ${media.mobile`
    font-size: 15px;
    padding: 8px;
  `}
  ${media.small`
    font-size: 13px;
    padding: 6px;
  `}
`;

const FirstColumnCell = styled(Cell)`
  font-size: 18px;
  font-weight: 600;
  ${media.tablet`
    font-size: 17px;
  `}
  ${media.mobile`
    font-size: 16px;
  `}
  ${media.small`
    font-size: 13px;
  `}
`;

const FirstRowCell = styled(Cell)`
  font-size: 18px;
  ${media.tablet`
    font-size: 17px;
  `}
  ${media.mobile`
    font-size: 14px;
  `}
  ${media.small`
    font-size: 13px;
  `}
`;

const ButtonContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  ${media.tablet`
    flex-wrap: wrap;
  `}
  ${media.mobile`
    flex-wrap: wrap;
  `}
`;

const Button = styled.button`
  width: 220px;
  height: 46px;
  background-color: #46b3f6;
  border-width: 0px;
  border-radius: 50px;
  color: white;
  margin-left: 4vw;
  font-size: 20px;
  font-weight: 600;
  ${media.tablet`
    width: 150px;
    font-size: 16px;
    margin-left: 2vw;
    margin-top: 4px;
  `}
  ${media.mobile`
    width: 100px;
    font-size: 14px;
    margin-left: 1vw;
    margin-top: 4px;
  `}
  ${media.small`
    width: 80px;
    font-size: 12px;
    margin-left: 1vw;
    margin-top: 4px;
  `}
`;

const CreditTable = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signup');
  };

  const data = [
    [
      "",
      "Take Off Credit Line",
      "Take Off credit Line (ADVANTAGE)",
      "Take Off credit Line (ULTIMATE)",
    ],
    ["Amount", "$1000", "$2500", "$5000"],
    ["Price", "$10 per month", "$25 per month", "$45 per month"],
    ["Interest", "0%", "0%", "0%"],
    ["Extra Fees", "$0", "$0", "$0"],
    ["Terms", "Revolving", "Revolving", "Revolving"],
  ];

  return (
    <Container>
      <Text>Check out our Zero interest Line of credit</Text>
      <TableWrapper>
        {data.map((row, rowIndex) => (
          <Row key={rowIndex} last={rowIndex === data.length - 1}>
            {row.map((cellData, colIndex) => {
              const CellComponent =
                rowIndex === 0
                  ? FirstRowCell
                  : colIndex === 0
                  ? FirstColumnCell
                  : Cell;
              return (
                <CellComponent
                  key={colIndex}
                  lastColumn={colIndex === row.length - 1}
                >
                  {cellData}
                </CellComponent>
              );
            })}
          </Row>
        ))}
        <ButtonContainer>
          <Button onClick={handleGetStartedClick}>Get Started</Button>
          <Button onClick={handleGetStartedClick}>Get Started</Button>
          <Button style={{ marginRight: '1vw' }} onClick={handleGetStartedClick}>Get Started</Button>
        </ButtonContainer>
      </TableWrapper>
    </Container>
  );
};

export default CreditTable;
