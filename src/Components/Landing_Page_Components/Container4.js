import styled from "styled-components";
import { media } from "../../responsive";
import bannerImage1 from "../../assets/images/landing_page_container4_image1.png";
import bannerImage2 from "../../assets/images/landing_page_container4_image2.png";
import bannerImage3 from "../../assets/images/landing_page_container4_image3.png";

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  ${media.mobile({ height: "auto", marginTop: "30px" })}
`;

const Text = styled.p`
  width: 80vw;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  padding: 0px;
  margin: 0px;
  ${media.tablet({ fontSize: "24px" })}
  ${media.mobile({ fontSize: "20px" })}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  ${media.tablet({ flexDirection: "column" })}
  ${media.mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px 50px;
  ${media.tablet({ padding: "30px 20px", alignItems: "center" , order: 1})}
  ${media.mobile({ padding: "20px 10px", alignItems: "center", order: 1 })}
`;

const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 0px;
  ${media.tablet({ fontSize: "20px", textAlign: "center" })}
  ${media.mobile({ fontSize: "18px", textAlign: "center" })}
`;

const Desc = styled.p`
  font-size: 20px;
  text-align: justify;
  font-weight: 300;
  margin-top: 0px;
  ${media.tablet({ fontSize: "18px", textAlign: "center" })}
  ${media.mobile({ fontSize: "16px", textAlign: "center" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  padding: 50px 50px 20px 50px;
  ${media.mobile({ padding: "10px 5px", order: 2 })}
  ${media.tablet({ padding: "20px 10px", })}
  ${media.mobile({ padding: "10px 5px", order: 2 })}
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 50vh;
  justify-self: center;
  ${media.tablet({ maxHeight: "40vh" })}
  ${media.mobile({ width: "100%", maxHeight: "30vh" })}
`;

const Container4 = () => {
  return (
    <Container>
      <Text>How It Works</Text>
      <Wrapper>
        <Left>
          <Title>Sign up for a Take Off Credit Line Account</Title>
          <Desc>Sign up and get an instant line of credit approval with no credit check</Desc>
        </Left>
        <Right>
          <Image src={bannerImage1} alt="Website mockup" />
        </Right>
      </Wrapper>
      <Wrapper>
        <Right>
          <Image src={bannerImage2} alt="Website mockup" />
        </Right>
        <Left>
          <Title>Make a purchase using your Take Off Credit Line</Title>
          <Desc>Make on-time payments each month and watch your credit score Take Off! We will remind you monthly when your payments are due, so don't worry about ever being late. Cancel any time with no penalties</Desc>
        </Left>
      </Wrapper>
      <Wrapper>
        <Left>
          <Title>Establish great payment history</Title>
          <Desc>Get a minimum $1000 line of credit for 12 months. You can also add more history if you like by making another purchase from us with your line of credit</Desc>
        </Left>
        <Right>
          <Image src={bannerImage3} alt="Website mockup" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Container4;
