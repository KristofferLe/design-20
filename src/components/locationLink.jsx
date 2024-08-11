import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonLight, H3 } from "../styles/styledComponents";
import canada from "../images/canada.svg";
import australia from "../images/australia.svg";
import uk from "../images/uk.svg";

const StyledLocationLink = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    height: 202px;
    width: 202px;
  }
`;

const LinkContainer = styled.section`
  width: 100%;
  height: 364px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1024px) {
    height: 1230px;
    grid-template-columns: 1fr;
    gap: 48px;
  }

  @media screen and (max-width: 768px) {
    gap: 32px;
  }
`;

function LocationLink({ img, city }) {
  const navigate = useNavigate();
  function toLocations() {
    navigate("/locations");
  }

  return (
    <StyledLocationLink>
      <img src={img} alt={`image of ${city}`} />
      <H3>{city}</H3>
      <ButtonLight onClick={toLocations}>SEE LOCATION</ButtonLight>
    </StyledLocationLink>
  );
}

export default function LocationLinksContainer() {
  return (
    <LinkContainer>
      <LocationLink img={canada} city="CANADA" />
      <LocationLink img={australia} city="AUSTRALIA" />
      <LocationLink img={uk} city="UNITED KINGDOM" />
    </LinkContainer>
  );
}
