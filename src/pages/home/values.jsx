import React from "react";
import styled from "styled-components";
import designer from "../../images/designer.svg";
import passionate from "../../images/passionate.svg";
import resourceful from "../../images/resourceful.svg";
import { Body, H3 } from "../../styles/styledComponents";

const StyledValuesContainer = styled.section`
  height: 412px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  text-align: center;
  gap: 32px;
  margin-bottom: -150px;

  @media screen and (max-width: 1024px) {
    height: 670px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    align-items: start;
  }

  @media screen and (max-width: 768px) {
    gap: 0px;
    height: 1400px;
  }
`;

const StyledValue = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 48px;

  img {
    height: 202px;
    width: 202px;
    margin: 0 auto;
  }

  .value-text {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .value-title {
    letter-spacing: 5px;
  }

  .value-desc {
    font-size: 16px;
    font-weight: 400;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    text-align: start;
    align-items: center;

    .value-text {
      gap: 16px;
      width: 439px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .value-text {
      gap: 32px;
    }
  }
`;

function Value({ img, title, text }) {
  return (
    <StyledValue>
      <img src={img} alt={title} />
      <span className="value-text">
        <H3 className="value-title">{title}</H3>
        <Body className="value-desc">{text}</Body>
      </span>
    </StyledValue>
  );
}

export default function Values() {
  const valuesArr = [
    {
      img: designer,
      name: "PASSIONATE",
      text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      img: resourceful,
      name: "RESOURCEFUL",
      text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
    {
      img: passionate,
      name: "FRIENDLY",
      text: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    },
  ];

  return (
    <StyledValuesContainer>
      {valuesArr.map((value) => (
        <Value
          img={value.img}
          title={value.name}
          text={value.text}
          key={value.name}
        />
      ))}
    </StyledValuesContainer>
  );
}
