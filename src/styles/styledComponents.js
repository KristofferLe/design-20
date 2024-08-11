import styled, { css } from "styled-components";
import typo from "./typo";
import colors from "./colors";

// Page Template

export const PageTemplate = styled.section`
  borer: solid 1px red;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 160px;
  margin: 0 auto;
  max-width: 1110px;
  padding: 0 20px;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

// Styled Elements

export const H1 = styled.h1`
  font-weight: ${typo.h1.fontWeight};
  font-size: ${typo.h1.fontSize};
  line-height: ${typo.h1.lineHeight};
`;

export const H2 = styled.h2`
  font-weight: ${typo.h2.fontWeight};
  font-size: ${typo.h2.fontSize};
  line-height: ${typo.h2.lineHeight};
  letter-spacing: ${typo.h2.letterSpacing};
`;

export const H3 = styled.h3`
  font-weight: ${typo.h3.fontWeight};
  font-size: ${typo.h3.fontSize};
  line-height: ${typo.h3.lineHeight};
  letter-spacing: ${typo.h3.letterSpacing};
`;

export const Body = styled.p`
  font-weight: ${typo.body.fontWeight};
  font-size: ${typo.body.fontSize};
  line-height: ${typo.body.lineHeight};
`;

// Styled Buttons

const baseButton = css`
  width: 152px;
  min-height: 56px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 500;
  &:hover {
    background-color: ${colors.lightPeach};
  }
  transition: all 0.3s ease;
`;

export const ButtonDark = styled.button`
  ${baseButton}
  color: ${colors.black};
  background-color: ${colors.white};
  &:hover {
    color: ${colors.white};
  }
`;

export const ButtonLight = styled.button`
  ${baseButton}
  color: ${colors.white};
  background-color: ${colors.peach};
  transition: all 0.3s ease;
`;
