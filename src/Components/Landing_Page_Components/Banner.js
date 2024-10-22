import styled from "styled-components";
import { media } from "../../responsive";
import bannerImage from "../../assets/images/Banner_logo.png";

const Container = styled.div`
  height: 90vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  ${media.extraSmall`
    padding: 10px;
    height: 40vh;
  `}
  ${media.small`
    padding: 15px;
    height: 50vh;
  `}
  ${media.mobile`
    padding: 20px;
    height: 60vh;
  `}
  ${media.tablet`
    padding: 25px;
    height: 90vh;
  `}
  ${media.desktop`
    padding: 30px;
    height: 90vh;
  `}
  ${media.largeDesktop`
    padding: 40px;
    height: 90vh;
  `}
`;

const BannerImage = styled.img`
  width: 80%;
  height: auto; 
  max-height: 30vh; 
  ${media.extraSmall`
    width: 50%;
    max-height: 20vh;
  `}
  ${media.small`
    width: 60%;
    max-height: 25vh;
  `}
  ${media.mobile`
    width: 70%;
    max-height: 30vh;
  `}
  ${media.tablet`
    width: 80%;
    max-height: 35vh;
  `}
  ${media.desktop`
    width: 90%;
    max-height: 40vh;
  `}
  ${media.largeDesktop`
    width: 100%;
    max-height: 50vh;
  `}
`;

const Button = styled.button`
  width: 245px;
  height: 46px;
  background-color: #46b3f6;
  border: none;
  border-radius: 50px;
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
  ${media.extraSmall`
    width: 180px;
    height: 36px;
    font-size: 14px;
    margin-top: 30px;
  `}
  ${media.small`
    width: 200px;
    height: 40px;
    font-size: 16px;
    margin-top: 40px;
  `}
  ${media.mobile`
    width: 220px;
    height: 42px;
    font-size: 18px;
    margin-top: 45px;
  `}
  ${media.tablet`
    width: 245px;
    height: 46px;
    font-size: 20px;
    margin-top: 50px;
  `}
  ${media.desktop`
    width: 260px;
    height: 48px;
    font-size: 22px;
    margin-top: 55px;
  `}
  ${media.largeDesktop`
    width: 280px;
    height: 50px;
    font-size: 24px;
    margin-top: 60px;
  `}
`;

const LandingPageBanner = () => {
  return (
    <Container>
      <BannerImage src={bannerImage} alt="Banner Logo Image"/>
      <Button>Learn More</Button>
    </Container>
  );
};

export default LandingPageBanner;
