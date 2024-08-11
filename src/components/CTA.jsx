import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { H2, Body, ButtonDark } from "../styles/styledComponents";
import { useNavigate } from "react-router-dom";

const StyledCTA = styled.section`
  width: 100%;
  height: 292px;
  transform: translateY(90px);
  border-radius: 16px;
  background-color: ${colors.peach};
  position: relative;
  overflow: hidden;
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  z-index: 10;

  .cta-content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cta-text {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (max-width: 1024px) {
    height: 350px;
    .cta-content {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      width: 80%;
      margin: 0 auto;
    }
    .cta-text {
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    height: 450px;
    width: 90%;
    .cta-content {
      width: 100%;
      margin: 0 auto;
      gap: 48px;

      h2 {
        width: 329px;
        margin: 0 auto;
      }
    }
  }
`;

export const BackgroundCircleContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  transform: translateY(-150px) rotate(180deg);
  position: absolute;
  right: 1px;
  z-index: -1;
`;

export const Circle = styled.span`
  height: 292px;
  width: 292px;
  border-radius: 50%;
  background: linear-gradient(80deg, rgba(0, 0, 0, 0.05), transparent);
`;

export default function CTA() {
  const navigate = useNavigate();
  function toContact() {
    navigate("/contact");
  }

  return (
    <StyledCTA>
      <BackgroundCircleContainer>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </BackgroundCircleContainer>
      <section className="cta-content">
        <span className="cta-text">
          <H2>
            Let's talk about <br /> your project
          </H2>
          <Body>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </Body>
        </span>
        <ButtonDark onClick={toContact}>GET IN TOUCH</ButtonDark>
      </section>
    </StyledCTA>
  );
}
