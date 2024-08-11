import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { H2, Body } from "../styles/styledComponents";
import colors from "../styles/colors";
import { MdChevronRight as Chevron } from "react-icons/md";

const StyledProjectLink = styled(Link)`
  width: 100%;
  max-width: 541px;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  .text-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    color: white;

    .body {
      letter-spacing: 4px;
      font-size: 20px;
    }

    #chevron {
      transform: translateY(3px);
      color: ${colors.peach};
      transition: transform 0.3s ease;
    }

    &:hover {
      background-color: rgba(255, 173, 155, 0.4);
      #chevron {
        transform: translateX(10px) translateY(3px);
      }
    }
    transition: all 0.2s ease;
  }

  ${({ $big }) =>
    $big &&
    css`
      grid-row: span 2;
      @media screen and (max-width: 768px) {
        grid-row: span 1;
      }
    `}

  @media screen and (max-width: 1024px) {
    max-width: none;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    min-height: 250px;
  }
`;

export default function ProjectLink({ to, title, $big, img }) {
  return (
    <StyledProjectLink
      $big={$big}
      style={{ backgroundImage: `url(${img})` }}
      to={to}
    >
      <section className="text-container">
        <H2>{title}</H2>
        <Body className="body">
          View Projects <Chevron id="chevron" />
        </Body>
      </section>
    </StyledProjectLink>
  );
}
