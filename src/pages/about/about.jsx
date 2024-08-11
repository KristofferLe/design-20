import React from "react";
import styled from "styled-components";
import CTA from "../../components/CTA";
import { PageTemplate } from "../../styles/styledComponents";
import AboutBanner from "./aboutBanner";
import Talent from "./talent";
import RealDeal from "./realDeal";
import LocationLinksContainer from "../../components/locationLink";

const StyledAboutBannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 160px;
  @media screen and (max-width: 768px) {
    gap: 0;
  }
`;

export default function About() {
  return (
    <PageTemplate>
      <StyledAboutBannerContainer>
        <AboutBanner />
        <Talent />
      </StyledAboutBannerContainer>
      <LocationLinksContainer />
      <RealDeal />
      <CTA />
    </PageTemplate>
  );
}
