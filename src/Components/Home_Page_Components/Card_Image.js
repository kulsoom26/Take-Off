import React from 'react';
import styled, { css } from 'styled-components';
import cardImage from '../../assets/images/navbar_logo.png';
import { media } from '../../responsive';

const Card = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  width: auto;
  height: 38vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.mobile(css`
    padding: 15px;
    height: 30vh;
  `)}
  ${media.small(css`
    padding: 10px;
    height: 25vh;
  `)}
  ${media.extraSmall(css`
    padding: 5px;
    height: 20vh;
  `)}
`;

const Image = styled.img`
  width: 90%;
  height: 100%;
  object-fit: contain;
  ${media.mobile(css`
    width: 80%;
  `)}
  ${media.small(css`
    width: 70%;
  `)}
  ${media.extraSmall(css`
    width: 60%;
  `)}
`;

const CardImage = () => {
  return (
    <Card>
      <Image src={cardImage} alt='Credit card Image' />
    </Card>
  );
};

export default CardImage;
