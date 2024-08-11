import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { Circle } from "../../components/CTA";
import { H1, Body } from "../../styles/styledComponents";
import realDeal from "../../images/realDeal.png";

const StyledRealDeal = styled.section`
  background-color: ${colors.veryLightPeach};
  height: 640px;
  border-radius: 15px;
  position: relative;
  display: grid;
  grid-template-columns: 60% 40%;
  overflow: hidden;

  img {
    z-index: 2;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    height: 736px;
    align-items: start;
    justify-content: start;

    img {
      width: 100%;
      height: 320px;
      object-fit: cover;
      border-radius: 15px 15px 0 0;
    }
  }

  @media screen and (max-width: 768px) {
    border-radius: 0px;
    height: 865px;
    margin-bottom: -150px;

    img {
      border-radius: 0px;
    }
  }
`;

const DealText = styled.article`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 120px;
  padding-right: 40px;
  gap: 32px;

  .deal-head {
    color: ${colors.peach};
  }

  @media screen and (max-width: 1024px) {
    text-align: center;
    padding: 40px;
    gap: 48px;

    .deal-head {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 768px) {
    border-radius: 0px;
    padding: 80px 40px;
  }
`;

export default function RealDeal() {
  return (
    <StyledRealDeal>
      <Circle
        style={{
          position: "absolute",
          right: "40%",
          bottom: "0",
          zIndex: "1",
          opacity: "40%",
        }}
      />
      <Circle
        style={{
          position: "absolute",
          right: "13%",
          bottom: "0",
          zIndex: "1",
          opacity: "35%",
        }}
      />
      <DealText>
        <H1 className="deal-head">The real deal</H1>
        <Body>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </Body>
        <Body>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </Body>
      </DealText>
      <img src={realDeal} alt="image of a woman who looks at pictures" />
    </StyledRealDeal>
  );
}
