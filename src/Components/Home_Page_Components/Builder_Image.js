import React from 'react';
import styled, { css } from 'styled-components';
import builderImage from '../../assets/images/builder.png'; 
import { media } from '../../responsive';

const OuterRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.mobile(css`
    align-items: flex-start;
  `)}
`;

const InnerRow = styled.div`
  display: flex;
  align-items: center;
  ${media.mobile(css`
    flex-direction: column;
    align-items: flex-start;
  `)}
`;

const Image = styled.img`
  width: 30%; 
  height: auto;
  ${media.mobile(css`
    width: 50%;
    margin-bottom: 10px;
  `)}
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 2vh;
  margin-left: 1vw;
  ${media.mobile(css`
    font-size: 24px;
    margin-left: 10px;
  `)}
`;

const RowComponent = () => {
  return (
    <OuterRow>
      <InnerRow>
        <Image src={builderImage} alt="Example" />
        <Text>Time to start <span style={{color:'#46B3F6'}}>building</span>!!</Text>
      </InnerRow>
    </OuterRow>
  );
};

export default RowComponent;
