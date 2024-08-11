import React from "react";
import styled, { css } from "styled-components";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";

const StyledLogo = styled.aside`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  img {
    height: 24px;
    width: 24px;
  }

  .logo {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 4px;
  }
`;

export default function Logo() {
  const navigate = useNavigate();
  const toHomepage = () => {
    navigate("/");
  };

  return (
    <StyledLogo onClick={toHomepage} aria-label="Designo Company Logo">
      <img src={logo} alt="Designo Company Logo" />
      <h3 className="logo">DESIGNO</h3>
    </StyledLogo>
  );
}
