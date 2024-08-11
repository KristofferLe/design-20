import styled from "styled-components";
import React from "react";
import colors from "../../styles/colors";
import { H3, Body } from "../../styles/styledComponents";

const StyledProjectCard = styled.article`
  width: 320px;
  height: 487px;

  img {
    width: 100%;
    height: 100%;
    max-height: 350px;
  }

  .card-text {
    width: 100%;
    padding: 32px;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
    background-color: ${colors.veryLightPeach};

    h3 {
      color: ${colors.peach};
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 310px;
    display: flex;

    .card-text {
      align-items: center;
      justify-content: center;
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-rows: 320px 1fr;

    img {
      object-fit: cover;
    }
  }
`;

export default function ProjectCard({ img, title, desc }) {
  return (
    <StyledProjectCard>
      <img src={img} alt={title} />
      <span className="card-text">
        <H3>{title}</H3>
        <Body>{desc}</Body>
      </span>
    </StyledProjectCard>
  );
}
