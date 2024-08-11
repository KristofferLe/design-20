import styled, { css } from "styled-components";
import colors from "../../styles/colors";

export const StyledHeader = styled.header`
  margin: 0 auto;
  max-width: 1110px;
  min-width: 375px;
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    height: 96px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 32px;
  letter-spacing: 5px;

  .error {
    color: red;
  }

  .nav-link {
    cursor: pointer;
    text-decoration: none;
    color: ${colors.black};
    font-weight: 400;
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    left: 0;
    top: 96px;
    height: 235px;
    background-color: ${colors.black};
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    transform: translateX(-100%);
    z-index: 999;

    ${(props) =>
      props.$menuOpen &&
      css`
        transform: translateX(0);
        transition: transform 0.3s ease-in-out;
      `}

    .nav-link {
      color: ${colors.white};
      font-size: 20px;
    }
  }
`;
