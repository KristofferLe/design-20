import React from "react";
import styled from "styled-components";

const StyledHamburger = styled.button`
  background-color: transparent;
  border: none;
  display: grid;
  gap: 4px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 40px;

  .bar {
    width: 24px;
    height: 4px;
    background-color: black;
    transform: ${(props) =>
      props.$menuOpen ? "rotate(45deg) translateY(11px)" : "none"};

    &:nth-child(2) {
      opacity: ${(props) => (props.$menuOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.$menuOpen ? "rotate(-45deg) translateY(-11px)" : ""};
    }

    transition: all 0.3s ease-in-out;
  }
`;

export default function Hamburger({ setMenuOpen, $menuOpen }) {
  return (
    <StyledHamburger onClick={setMenuOpen} $menuOpen={$menuOpen}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </StyledHamburger>
  );
}
