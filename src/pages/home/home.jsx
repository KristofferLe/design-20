import React from "react";
import { PageTemplate } from "../../styles/styledComponents";
import Banner from "./banner";
import styled from "styled-components";
import ProjectLink from "../../components/projectPageLink";
import app from "../../images/appDesign.png";
import web from "../../images/webDesign.png";
import graphic from "../../images/graphicDesign.png";
import Values from "./values";
import CTA from "../../components/CTA";

const LinkContainer = styled.section`
  width: 100%;
  height: 640px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 798px;
  }
`;

export default function Home() {
  return (
    <PageTemplate>
      <Banner />
      <LinkContainer>
        <ProjectLink $big title="WEB DESIGN" img={web} to="/webDesign" />
        <ProjectLink title="APP DESIGN" img={app} to="/appDesign" />
        <ProjectLink title="GRAPHIC DESIGN" img={graphic} to="/graphicDesign" />
      </LinkContainer>
      <Values />
      <CTA />
    </PageTemplate>
  );
}
