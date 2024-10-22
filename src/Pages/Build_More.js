import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import bookImage from '../assets/images/book.png'; 

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

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-right: 10px;

  &:hover {
    color: #007BFF;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProductList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  margin: 5px 0 0 0;
`;

const BuildMore = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
        <Title>Take Off Store</Title>
      </Header>
      <Subtitle>Click on an item to see details and process to checkout</Subtitle>
      <ProductList>
        <Column>
          <ProductItem >
            <ProductImage src={bookImage} alt="Book" />
            <ProductDetails>
              <ProductTitle>ZERO MONEY DOWN REAL ESTATE INVESTMENT COURSE</ProductTitle>
              <ProductDescription>
                Learn how to flip investment properties with no money out of pocket.
              </ProductDescription>
            </ProductDetails>
          </ProductItem>
          <ProductItem>
            <ProductImage src={bookImage} alt="Book" />
            <ProductDetails>
              <ProductTitle>TURO CAR RENTAL BUSINESS COURSE</ProductTitle>
              <ProductDescription>
                Use your good credit to create income using the TURO car rental app. Learn how to start and build a fleet of rental cars.
              </ProductDescription>
            </ProductDetails>
          </ProductItem>
          <ProductItem>
            <ProductImage src={bookImage} alt="Book" />
            <ProductDetails>
              <ProductTitle>DO-IT-YOURSELF CREDIT REPAIR COURSE</ProductTitle>
              <ProductDescription>
                Stop paying credit repair companies to fix your credit. Learn the secrets to removing all of the negative items from your credit report.
              </ProductDescription>
            </ProductDetails>
          </ProductItem>
        </Column>
        <Column>
          <ProductItem>
            <ProductImage src={bookImage} alt="Book" />
            <ProductDetails>
              <ProductTitle>BUSINESS CREDIT BUILDER COURSE</ProductTitle>
              <ProductDescription>
                Learn how to back your business with personal credit to establish your business credit and how to build it with no personal guarantee.
              </ProductDescription>
            </ProductDetails>
          </ProductItem>
          <ProductItem>
            <ProductImage src={bookImage} alt="Book" />
            <ProductDetails>
              <ProductTitle>AIRBNB BUSINESS COURSE</ProductTitle>
              <ProductDescription>
                Learn the most lucrative AIRBNB business model to be profitable as a private property rental host.
              </ProductDescription>
            </ProductDetails>
          </ProductItem>
        </Column>
      </ProductList>
    </Container>
  );
};

export default BuildMore;
