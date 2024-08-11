import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { Circle } from "../../components/CTA";
import { H1, Body } from "../../styles/styledComponents";
import talentImg from "../../images/talent.png";

const StyledTalent = styled.section`
  background-color: ${colors.veryLightPeach};
  height: 640px;
  border-radius: 15px;
  position: relative;
  display: grid;
  grid-template-columns: 40% 60%;
  overflow: hidden;

  img {
    z-index: 2;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 736px;

    img {
      width: 100%;
      height: 320px;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 768px) {
    border-radius: 0px;
    height: 865px;
  }
`;

const TalentText = styled.article`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 120px;
  padding-right: 40px;
  gap: 32px;

  .talent-head {
    color: ${colors.peach};
  }

  @media screen and (max-width: 1024px) {
    text-align: center;
    padding: 40px;
    gap: 48px;

    .talent-head {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 768px) {
    border-radius: 0px;
  }
`;

export default function Talent() {
  return (
    <StyledTalent>
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
      <img src={talentImg} alt="image of a woman who looks at pictures" />
      <TalentText>
        <H1 className="talent-head">World-class talent</H1>
        <Body>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </Body>
        <Body>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission
        </Body>
      </TalentText>
    </StyledTalent>
  );
}
