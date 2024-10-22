import styled from "styled-components";
import { media } from "../../responsive";

const Container = styled.div`
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(128, 128, 128, 0.1);
  margin-top: 20px;
  padding: 0 20px; 
`;

const Text = styled.p`
  width: 40vw;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  ${media.tablet({ fontSize: "30px", width: "60vw" })} 
  ${media.mobile({ fontSize: "20px", width: "80vw" })}
`;

const Container3 = () => {
  return (
    <Container>
      <Text>Take Off can help those with no credit or low credit</Text>
    </Container>
  );
};

export default Container3;
