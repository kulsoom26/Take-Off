import React, { useState } from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom'; 
import {media} from "../../responsive";

ChartJS.register(ArcElement, Tooltip, Legend);

const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  height: 75vh, width: 50vw,
`;

const Title = styled.p`
  color: #242424;
  font-size: 20px;
  font-weight: 600;
`;

const GaugeChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh; 
  margin-bottom: 20px; 
`;

const StyledDropdown = styled.div`
  position: relative;
  width: 95%;
  margin: 0 auto 20px;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  border-bottom: 2px solid #ccc;
  display: flex;
  font-size:14px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 2px solid #ccc;
  background-color: white;
  margin: 0;
  padding: 0;
  list-style: none;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const DropdownListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropdownIcon = styled.span`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ open }) => (open ? 'rotate(225deg)' : 'rotate(45deg)')};
  transition: transform 0.2s;
`;

const GaugeChart = ({ value, score }) => {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['#0DA200', '#f2f2f2'],
        borderWidth: 0,
        cutout: '90%',
        rotation: -90,
        circumference: 180,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      <Doughnut data={data} options={options} />
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        fontFamily: 'Montserrat',
      }}>
        <div style={{ color: 'grey', fontSize: '1.5em', fontWeight: '500'}}>Credit</div>
        <div style={{ color: 'black', fontSize: '2em', fontWeight: 'bold' }}>{score}</div>
      </div>
    </div>
  );
};

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Report');

  const toggleDropdown = () => setOpen(!open);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  const options = [
    'Daily Credit Report',
    'Weekly Credit Report',
    'Monthly Credit Report',
    'Annual Credit Report',
  ];

  return (
    <StyledDropdown>
      <DropdownHeader onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        <DropdownIcon open={open} />
      </DropdownHeader>
      <DropdownList open={open}>
        {options.map((option, index) => (
          <DropdownListItem key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </DropdownListItem>
        ))}
      </DropdownList>
    </StyledDropdown>
  );
};

const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  margin-top: 20px;
`;

const DataItem = styled.div`
  flex: 1 1 40%; 
  margin: 10px;
`;

const DataValue = styled.div`
  font-size: 1.5em;
  font-weight: 500;
`;

const DataLabel = styled.div`
  font-size: 0.8em;
  color: grey;
  margin-bottom: 1vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`;

const CreditOverviewCard = () => {
  const creditScore = 669;
  const percentage = Math.round((creditScore / 1000) * 100);

  const dataItems = [
    { value: '100%', label: 'Payment History' },
    { value: '1', label: 'Credit Mix' },
    { value: '0', label: 'Derogatory Marks' },
    { value: '9', label: 'Credit Age', year: 'yrs', month: 'months', monthValue: '7'},
    {value: '', label: ''},
    { value: '100%', label: 'Hard Inquiries' },
    
  ];

  return (
    <StyledLink to= '/home/overview'>
      <Card >
          <Title>Credit Overview</Title>
          <GaugeChartContainer>
            <GaugeChart value={percentage} score={creditScore} />
          </GaugeChartContainer>
          <Dropdown />
          <DataContainer>
            {dataItems.map((item, index) => (
              <DataItem key={index}>
                <DataValue>{item.value}<span style={{fontSize: "0.5em", color: "grey"}}> {item.year} </span>{item.monthValue}<span style={{fontSize: "0.5em", color: "grey"}}> {item.month} </span> </DataValue>
                <DataLabel>{item.label}</DataLabel>
              </DataItem>
            ))}
          </DataContainer>
        </Card>
    </StyledLink>
     
      
  );
};

export default CreditOverviewCard;
