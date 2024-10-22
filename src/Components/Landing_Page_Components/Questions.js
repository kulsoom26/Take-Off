import React, { useState } from "react";
import styled from "styled-components";
import { media } from "../../responsive";

const Container = styled.div`
  height: auto;
  display: flex;
  margin-top: 20px;
  ${media.mobile({ flexDirection: "column", alignItems: "center" })}
`;

const Wrapper = styled.div`
  padding: 50px 90px;
  display: flex;
  justify-content: space-between;
  ${media.tablet({ flexDirection: "column", padding: "30px 20px",  })}
  ${media.mobile({ padding: "10px 20px", flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  padding: 50px 50px;
  ${media.tablet({ padding: "30px 20px", alignItems: "center" })}
  ${media.mobile({ padding: "20px 10px", alignItems: "center" })}
`;

const Desc = styled.p`
  font-size: 28px;
  ${media.tablet({ fontSize: "24px", textAlign: "center" })}
  ${media.mobile({ fontSize: "20px", textAlign: "center" })}
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  ${media.tablet({ paddingTop: "30px", justifyContent: "center" })}
  ${media.mobile({ paddingTop: "20px", justifyContent: "center" })}
`;

const ExpandableComponent = styled.div`
  width: 60vw;
  height: ${(props) => (props.expanded ? "auto" : "2vh")};
  background-color: ${(props) => (props.highlighted ? "rgba(128, 128, 128, 0.1)" : "transparent")};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  ${media.tablet({ width: "80vw" })}
  ${media.mobile({ width: "90vw" })}
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExpandableContent = styled.div`
  display: ${(props) => (props.expanded ? "block" : "none")};
  font-size: 15px;
  margin-top: 1vh;
`;

const PlusSign = styled.div`
  width: 24px;
  height: 24px;
  font-size: 30px;
  font-weight: 400;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.span`
  flex: 1;
  color: rgba(0,0,0,0.8);
  font-size: 18px;
  ${media.tablet({ fontSize: "16px" })}
  ${media.mobile({ fontSize: "14px" })}
`;

const MinusSign = styled(PlusSign)``;

const Container2 = () => {
  const [expanded, setExpanded] = useState([]);

  const titles = [
    "How will signing up with TAKE OFF help me build my credit?",
    "Can you tell me what kind of credit will be reporting to my credit?",
    "What credit bureaus does Take Off report to?",
    "How much will Take Off improve my credit score?",
    "Are there other fees?",
    "Is there a Take Off app?",
    "What can I purchase with Take Off?",
    "Can I cancel my Take Off Credit Account?"
  ];

  const handleToggleExpand = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Desc>Have Questions?</Desc>
        </Left>
        <Right>
          {titles.map((title, index) => (
            <ExpandableComponent key={index} onClick={() => handleToggleExpand(index)} highlighted={[1, 3, 5, 7].includes(index)} expanded={expanded[index]}>
              <Title>
                <TitleText>{title}</TitleText>
                {expanded[index] ? <MinusSign>-</MinusSign> : <PlusSign>+</PlusSign>}
              </Title>
              <ExpandableContent expanded={expanded[index]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus, metus in accumsan scelerisque, turpis lorem rhoncus nunc, et lobortis lectus sem nec orci. Nullam quis convallis velit, sed suscipit velit.
              </ExpandableContent>
            </ExpandableComponent>
          ))}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Container2;
