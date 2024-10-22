import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { FaArrowLeft,FaChevronRight } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  padding: 20px;
  background-color: #f2f5f7;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GaugeChart = ({ value, score, label }) => {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['#0DA200', '#B2BEB5'],
        borderWidth: 0,
        cutout: '90%',
        rotation: -90,
        circumference: 180,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <ChartContainer>
      <Doughnut data={data} options={options} />
      <ChartLabel>
        <div>{label}</div>
        <div>{score}</div>
      </ChartLabel>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  position: relative;
  width: 250px;
  height: 200px;
`;

const ChartLabel = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  div:first-child {
    color: grey;
    font-size: 1.2em;
    font-weight: 500;
  }
  div:last-child {
    color: black;
    font-size: 1.7em;
    font-weight: bold;
  }
`;

const ChartTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #555;
  margin-top: 10px; 
`;

const TableContainer = styled.div`
  display: flex;
  margin-bottom: 5vh;  
  justify-content: center;
`;

const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  th, td {
    padding: 10px;
  }
  th {
    border-bottom: 2px solid #ccc; 
  }
  .left-align {
    text-align: left;
  }
  .center-align {
    text-align: center;
  }
  .right-align {
    text-align: right;
  }
`;

const Date = styled.div`
  width: 100%;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: #555;
  margin-bottom: 1vh;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
  justify-content: center;
`;

const Section = styled.div`
  margin-bottom: 2em;
  justify-content: center;
`;

const SectionTitle = styled.h5`
  font-size: 1em;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.5em;
  
`;

const Row = styled.div`
  display: flex;

`;

const Overview = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <FaArrowLeft size={20} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
      </Header>
      <Title>Overview</Title>
      <ChartsContainer>
        <ChartWrapper>
          <GaugeChart value={67} score={669} label="Credit Score" />
          <ChartTitle>Equifax</ChartTitle>
        </ChartWrapper>
        <ChartWrapper>
          <GaugeChart value={0} label="" />
          <ChartTitle>Transunion</ChartTitle>
        </ChartWrapper>
        <ChartWrapper>
          <GaugeChart value={0} label="" />
          <ChartTitle>Experian</ChartTitle>
        </ChartWrapper>
      </ChartsContainer>
      <Date>
        <p>Mar 29, 2024</p>
      </Date>
      <Date>
        <p style={{textDecoration: 'underline', marginBottom: '15vh'}}>Send feedback</p>
      </Date>
      <Title style={{fontSize: '1.2em', marginLeft: '4vw'}}>Overview</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th className="left-align">Equifax</th>
              <th className="center-align">Transunion</th>
              <th className="right-align">Experian</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="left-align">3</td>
              <td className="center-align">Total accounts</td>
              <td className="right-align">-</td>
            </tr>
            <tr>
              <td className="left-align">3</td>
              <td className="center-align">Open accounts</td>
              <td className="right-align">-</td>
            </tr>
            <tr>
              <td className="left-align">3</td>
              <td className="center-align">Closed accounts</td>
              <td className="right-align">-</td>
            </tr>
            <tr>
              <td className="left-align">3</td>
              <td className="center-align">Hard inquiries</td>
              <td className="right-align">-</td>
            </tr>
            <tr>
              <td className="left-align">3</td>
              <td className="center-align">Total accounts</td>
              <td className="right-align">-</td>
            </tr>
            <tr>
              <td className="left-align">3</td>
              <td className="center-align">Total accounts</td>
              <td className="right-align">-</td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
      <ListContainer >
        <Section>
          <SectionTitle>Personal Info</SectionTitle>
          <Table style={{alignContent: 'center'}}>
            <tbody>
              <tr>
                <th className="left-align" style={{fontWeight:'400'}}>Equifax</th>
                <th className="center-align" style={{fontWeight:'400'}}>Transunion</th>
                <th className="right-align" style={{fontWeight:'400'}}>Experian</th>
              </tr>
              <tr>
                <td className="left-align">VINCENT A ROGERS</td>
                <td className="center-align">Name</td>
                <td className="right-align"></td>
              </tr>
              <tr>
                <td className="left-align"></td>
                <td className="center-align">-</td>
                <td className="right-align"></td>
              </tr>

              <tr>
                <td className="left-align"></td>
                <td className="center-align">Aliases</td>
                <td className="right-align">-</td>
              </tr>
              <tr>
                <td className="left-align"></td>
                <td className="center-align">-</td>
                <td className="right-align"></td>
              </tr>
              <tr>
                <td className="left-align">VINCENT A ROGERS</td>
                <td className="center-align">Date of birth</td>
                <td className="right-align">-</td>
              </tr>
              <tr>
                <td className="left-align"></td>
                <td className="center-align">-</td>
                <td className="right-align"></td>
              </tr>
              <tr>
                <td className="left-align">VINCENT A ROGERS</td>
                <td className="center-align">Employers</td>
                <td className="right-align">-</td>
              </tr>
              <tr>
                <td className="left-align"></td>
                <td className="center-align">-</td>
                <td className="right-align"></td>
              </tr>
            </tbody>
          </Table>
        </Section>
        <Section>
          <SectionTitle>Address</SectionTitle>
          <Table>
            <tbody>
              <tr>
                <th className="left-align" style={{fontWeight:'400'}}>Equifax</th>
                <th className="center-align" style={{fontWeight:'400'}}>Transunion</th>
                <th className="right-align" style={{fontWeight:'400'}}>Experian</th>
              </tr>
              <tr>
                <td className="left-align">2065 kale avenue<br></br> westland MI48186</td>
                <td className="center-align">Current address</td>
                <td className="right-align">-</td>
              </tr>
              <tr>
                <td className="left-align">2065 kale avenue<br></br> westland MI48186</td>
                <td className="center-align">Previous address</td>
                <td className="right-align">-</td>
              </tr>
            </tbody>
          </Table>
        </Section>
        
        
      </ListContainer>
      <Section style={{width: '90%'}}>
          <SectionTitle>Revolving</SectionTitle>
          <Table>
            <tbody>
              <tr>
                <td className="left-align">
                  <p>JPMCB - CARD SERVICES</p>
                  <Row>
                  <p style={{ color: 'green',  marginRight:'1vw' }}>on time</p>
                  <p style={{color: '#555'}}>-closed</p>
                  </Row>
                  
                  
                </td>
              
                <td className="right-align">
                  
                  <p>$0</p>
                  <p>Reported Jan 26, 2020</p>
                </td>
                <td>
                <FaChevronRight size={20} color='#555' onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </td>
                
              </tr>
              <tr>
                <td className="left-align">
                  <p>JPMCB - CARD SERVICES</p>
                  <Row>
                  <p style={{ color: 'green', marginRight:'1vw' }}>on time</p>
                  <p style={{color: '#555'}}>-closed</p>
                  </Row>
                </td>
                <td className="right-align">
                  <p>$0</p>
                  <p>Reported Jan 26, 2020</p>
                </td>
                <td>
                <FaChevronRight size={20} color='#555' onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </td>
              </tr>
            </tbody>
          </Table>
        </Section>
      <Section style={{width: '90%'}}>
          <SectionTitle>Other</SectionTitle>
          <Table>
            <tbody>
              <tr>
                <td className="left-align">
                  <p>JPMCB - CARD SERVICES</p>
                  <Row>
                  <p style={{ color: 'green',  marginRight:'1vw' }}>on time</p>
                  <p style={{color: '#555'}}>-closed</p>
                  </Row>
                  
                  
                </td>
              
                <td className="right-align">
                  
                  <p>$0</p>
                  <p>Reported Jan 26, 2020</p>
                </td>
                <td>
                <FaChevronRight size={20} color='#555' onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </td>
                
              </tr>
              <tr>
                <td className="left-align">
                  <p>JPMCB - CARD SERVICES</p>
                  <Row>
                  <p style={{ color: 'green', marginRight:'1vw' }}>on time</p>
                  <p style={{color: '#555'}}>-closed</p>
                  </Row>
                </td>
                <td className="right-align">
                  <p>$0</p>
                  <p>Reported Jan 26, 2020</p>
                </td>
                <td>
                <FaChevronRight size={20} color='#555' onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                </td>
              </tr>
            </tbody>
          </Table>
        </Section>
    </Container>
  );
};

export default Overview;
