import React from "react";
import styled, { css } from "styled-components";
import rocket1 from "../../assets/images/rocket_active.png";
import rocket2 from "../../assets/images/rocket_inactive.png";
import { Link } from "react-router-dom";
import { media } from "../../responsive";

const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100%;
  background-color: #f0f4f8;
  padding: 2rem 0;

  ${media.small(css`
    padding: 1rem 0;
    height: 150vh;
  `)}
   ${media.tablet(css`
    height: 150vh;
  `)}
  ${media.mobile(css`
    height: 150vh;
  `)}
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;

  ${media.small(css`
    font-size: 32px;
    margin-bottom: 2rem;
  `)}
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

  ${media.tablet(css`
    flex-direction: column;
    align-items: center;
    width: 100%;
  `)}
  ${media.mobile(css`
    flex-direction: column;
    align-items: center;
    width: 100%;
  `)}

  ${media.small(css`
    width: 100%;
  `)}
`;

const CardContent = styled.div`
  flex-grow: 1;

  p {
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: "✔";
      color: black;
      position: absolute;
      left: 0;
      font-size: 1rem;
      line-height: 1;
    }
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin: 0 15px;
  border-radius: 10px;
  width: 25%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.1);
    background-color: #46b3f6;
    color: white;

    & img {
      content: url(${rocket1});
    }

    button {
      background-color: white;
      color: #46b3f6;
    }

    ${CardContent} p::before {
      color: white;
    }
  }

  ${media.tablet(css`
    width: 45%;
    margin: 10px;
  `)}
  ${media.mobile(css`
    width: 45%;
    margin: 10px;
  `)}

  ${media.small(css`
    width: 100%;
    margin: 10px 0;
  `)}
`;

const CardHeader = styled.h2`
  margin-bottom: 2vh;
  font-size: 20px;
  text-align: center;
`;

const Price = styled.div`
  font-size: 18px;
  margin: 20px 0;
  font-weight: 600;
`;

const DollarSign = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const PerMonth = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const ChooseButton = styled.button`
  padding: 10px 0;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #46b3f6;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: #1e90ff;
  }
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Rocket = styled.img`
  width: 30px;
  height: 40px;
  transition: content 0.3s ease;
`;

const CreditLineOptions = () => {
  return (
    <FullScreenContainer>
      <Heading>Choose Credit Line</Heading>

      <CardsContainer>
        <Card>
          <Row1>
            <CardHeader>Level one</CardHeader>
            <Rocket src={rocket2} alt="rocket" />
          </Row1>

          <CardContent>
            <p>$1000 in credit</p>
            <p>0% Interest</p>
            <p>$0 Extra fees</p>
            <p>Revolving terms</p>
          </CardContent>
          <Price>
            <DollarSign>$</DollarSign>10 <PerMonth>/month</PerMonth>
          </Price>
          <Link to="/home/level-one">
            <ChooseButton>Choose credit line</ChooseButton>
          </Link>
        </Card>
        <Card>
          <Row1>
            <CardHeader>Ultimate</CardHeader>
            <Rocket src={rocket2} alt="rocket" />
          </Row1>
          <CardContent>
            <p>$5000 in credit</p>
            <p>0% Interest</p>
            <p>$0 Extra fees</p>
            <p>Revolving terms</p>
          </CardContent>
          <Price>
            <DollarSign>$</DollarSign>45 <PerMonth>/month</PerMonth>
          </Price>
          <Link to="/home/ultimate-plan">
            <ChooseButton>Choose credit line</ChooseButton>
          </Link>
        </Card>
        <Card>
          <Row1>
            <CardHeader>Advantage</CardHeader>
            <Rocket src={rocket2} alt="rocket" />
          </Row1>
          <CardContent>
            <p>$2500 in credit</p>
            <p>0% Interest</p>
            <p>$0 Extra fees</p>
            <p>Revolving terms</p>
          </CardContent>
          <Price>
            <DollarSign>$</DollarSign>25 <PerMonth>/month</PerMonth>
          </Price>
          <Link to="/home/advantage-plan">
            <ChooseButton>Choose credit line</ChooseButton>
          </Link>
        </Card>
      </CardsContainer>
    </FullScreenContainer>
  );
};

export default CreditLineOptions;
