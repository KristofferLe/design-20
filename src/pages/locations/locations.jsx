import React from "react";
import styled, { css } from "styled-components";
import CTA from "../../components/CTA";
import { Circle } from "../../components/CTA";
import colors from "../../styles/colors";
import { H2, PageTemplate } from "../../styles/styledComponents";
import canada from "../../images/locations/canada.png";
import au from "../../images/locations/au.png";
import uk from "../../images/locations/uk.png";

const LocationContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-bottom: -120px;
`;

const LocationWrapper = styled.article`
  height: 326px;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 730px 350px;
  ${(props) =>
    props.$reverse &&
    css`
      grid-template-columns: 350px 730px;
    `}
  gap: 24px;

  ul {
    list-style: none;
    background-color: transparent;
  }

  .bold {
    font-weight: 600;
  }

  .address {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-left: 80px;
    gap: 16px;
    background-color: ${colors.veryLightPeach};
    border-radius: 16px;
    position: relative;
    z-index: 2;
    h2 {
      color: ${colors.peach};
    }
  }

  .address-lists {
    display: flex;
    gap: 92px;
    z-index: 2;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 676px;
    ${(props) =>
      props.$reverse &&
      css`
        flex-direction: column-reverse;
      `}
    img {
      height: 326px;
      object-fit: cover;
    }

    .address {
      height: 326px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 714px;
    gap: 0;
    flex-direction: column-reverse;
    ${(props) =>
      props.$reverse &&
      css`
        flex-direction: column;
      `}

    .address {
      border-radius: 0;
      align-items: center;
      padding: 0 20px;
      text-align: center;
      gap: 16px;
    }

    .address-lists {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 0;
    }
  }
`;

export default function Locations() {
  return (
    <PageTemplate>
      <LocationContainer>
        <LocationWrapper>
          <section className="address">
            <Circle
              style={{ position: "absolute", zIndex: "1", left: "150px" }}
            />
            <H2>Canada</H2>
            <span className="address-lists">
              <ul>
                <li className="bold">Designo Central Office</li>
                <li>3886 Wellington Street</li>
                <li>Toronto, Ontario M9C 3J5</li>
              </ul>
              <ul>
                <li className="bold">Contact</li>
                <li>P : +1 253-863-8967</li>
                <li>M : contact@designo.com</li>
              </ul>
            </span>
          </section>
          <img src={canada} alt="canada office location on maps" />
        </LocationWrapper>
        <LocationWrapper $reverse>
          <img src={au} alt="canada office location on maps" />
          <section className="address">
            <Circle
              style={{ position: "absolute", zIndex: "1", right: "50px" }}
            />
            <H2>Canada</H2>
            <span className="address-lists">
              <ul>
                <li className="bold">Designo Central Office</li>
                <li>3886 Wellington Street</li>
                <li>Toronto, Ontario M9C 3J5</li>
              </ul>
              <ul>
                <li className="bold">Contact</li>
                <li>P : +1 253-863-8967</li>
                <li>M : contact@designo.com</li>
              </ul>
            </span>
          </section>
        </LocationWrapper>
        <LocationWrapper>
          <section className="address">
            <Circle
              style={{ position: "absolute", zIndex: "1", right: "50px" }}
            />
            <H2>Canada</H2>
            <span className="address-lists">
              <ul>
                <li className="bold">Designo Central Office</li>
                <li>3886 Wellington Street</li>
                <li>Toronto, Ontario M9C 3J5</li>
              </ul>
              <ul>
                <li className="bold">Contact</li>
                <li>P : +1 253-863-8967</li>
                <li>M : contact@designo.com</li>
              </ul>
            </span>
          </section>
          <img src={uk} alt="canada office location on maps" />
        </LocationWrapper>
      </LocationContainer>
      <CTA />
    </PageTemplate>
  );
}
