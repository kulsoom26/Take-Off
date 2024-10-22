import styled from "styled-components";
import { media } from "../../responsive";
import bannerImage from "../../assets/images/landing_page_container2_image.png";
import { ArrowForward } from "@mui/icons-material";

const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  ${media.mobile({ height: "auto", marginTop: "10px",})}
  ${media.tablet({ height: "auto", marginTop: "10px",})}
`;

const Wrapper = styled.div`
  padding: 50px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.tablet({ flexDirection: "column", padding: "30px 20px" })}
  ${media.mobile({ padding: "10px 5px", flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px 50px;
  ${media.tablet({ padding: "30px 20px",  })}
  ${media.mobile({ padding: "20px 10px",  })}
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 0px;
  ${media.tablet({ fontSize: "50px", })}
  ${media.mobile({ fontSize: "35px", })}
  ${media.desktop({ fontSize: "60px", })}
`;

const Desc = styled.p`
  font-size: 20px;
  ${media.tablet({ fontSize: "18px", })}
  ${media.mobile({ fontSize: "16px", })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  ${media.tablet({ flexDirection: "column",  })}
  ${media.mobile({ flexDirection: "column", })}
`;

const ListItem = styled.li`
  font-size: 17px;
  cursor: pointer;
  position: relative;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  ${media.tablet({ fontSize: "15px", })}
  ${media.mobile({ fontSize: "14px", })}
`;

const ArrowIcon = styled(ArrowForward)`
  margin-left: 5px;
  color: #46b3f6;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  padding: 50px 50px 20px 50px;
  ${media.tablet({ padding: "20px 10px" })}
  ${media.mobile({ padding: "10px 5px" })}
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 50vh;
  justify-self: center;
  ${media.tablet({ maxHeight: "40vh" })}
  ${media.mobile({ width: "100%", maxHeight: "30vh" })}
`;

const Button = styled.button`
  width: 320px;
  height: 46px;
  background-color: #46b3f6;
  border-width: 0px;
  border-radius: 50px;
  color: white;
  margin-top: 10px;
  font-weight: 600;
  font-size: 17px;
  ${media.tablet({ width: "50%", fontSize: "16px" })}
  ${media.mobile({ width: "40%", fontSize: "15px", marginTop: "20px" })}
`;

const Container2 = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Build Credit With Take Off</Title>
          <Desc>
            Join one of the best credit builder programs and watch your credit
            score Take Off
          </Desc>
          <List>
            <ListItem>
              <ArrowIcon />
              No credit check
            </ListItem>
            <ListItem>
              <ArrowIcon />
              Open your account instantly
            </ListItem>
            <ListItem>
              <ArrowIcon />
              0% interest with $0 in fees
            </ListItem>
          </List>
          <Button>Get Started</Button>
        </Left>
        <Right>
          <Image src={bannerImage} alt="Website mockup" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Container2;
