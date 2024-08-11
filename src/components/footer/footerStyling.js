import styled from "styled-components";
import colors from "../../styles/colors";

export const StyledFooter = styled.footer`
  height: 393px;
  width: 100%;
  background-color: #1d1c1e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media screen and (max-width: 768px) {
    height: 815px;
  }
`;

export const FooterNav = styled.nav`
  width: 95%;
  max-width: 1110px;
  height: 85px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: start;
  justify-content: space-between;
  color: white;
  transform: translateY(50px);

  .error {
    color: red;
  }

  .nav-links {
    display: flex;
    gap: 32px;
    letter-spacing: 2px;
    transform: translateY(10px);
  }

  .nav-link {
    cursor: pointer;
    text-decoration: none;
    color: ${colors.white};
    font-weight: 400;
    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
    .nav-link {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 32px;
    height: 250px;
    border: none;
    transform: translateY(-100px);
    .logo {
      font-size: 2.5rem;
      font-weight: 500;
    }

    .nav-links {
      display: grid;
      text-align: center;
      border-top: solid 1px rgba(255, 255, 255, 0.2);
      width: 100%;
      padding-top: 32px;

      .nav-link {
        font-size: 16px;
        width: 150px;
        margin: 0 auto;
      }
    }
  }
`;

export const ContactInformation = styled.section`
  width: 95%;
  max-width: 1110px;
  height: 78px;
  color: rgba(255, 255, 255, 0.6);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transform: translateY(50px);

  ul {
    list-style-type: none;
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .bold {
      font-weight: 600;
    }
  }

  .socials-list {
    display: flex;
    align-items: end;
    justify-content: end;
    gap: 16px;
    font-size: 1.5rem;
    color: ${colors.peach};
    li {
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        color: ${colors.white};
      }
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
    gap: 48px;
    transform: translateY(-50px);

    .socials-list {
      font-size: 2rem;
    }
  }
`;
