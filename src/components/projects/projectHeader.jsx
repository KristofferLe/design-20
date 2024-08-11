import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { H1, Body } from "../../styles/styledComponents";
import { BackgroundCircleContainer, Circle } from "../../components/CTA";

const StyledProjectHeader = styled.section`
  height: 252px;
  width: 100%;
  border-radius: 15px;
  background-color: ${colors.peach};
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  position: relative;
  overflow: hidden;

  h1 {
    z-index: 10;
  }

  .desc {
    width: 38%;
    text-align: center;
    z-index: 10;
  }

  @media screen and (max-width: 1024px) {
    height: 320px;
    padding: 0 16px;

    h1 {
      font-size: 2.5rem;
    }
    .desc {
      font-size: 1rem;
      width: auto;
    }
  }
  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
`;

export default function ProjectHeader({ title, desc }) {
  return (
    <StyledProjectHeader>
      <BackgroundCircleContainer
        style={{ zIndex: "5", transform: `translateY(-50px) rotate(90deg)` }}
      >
        <Circle style={{ zIndex: "5" }} />
        <Circle style={{ zIndex: "5" }} />
        <Circle style={{ zIndex: "5" }} />
        <Circle style={{ zIndex: "5" }} />
        <Circle style={{ zIndex: "5" }} />
      </BackgroundCircleContainer>
      <H1>{title}</H1>
      <Body className="desc">{desc}</Body>
    </StyledProjectHeader>
  );
}
