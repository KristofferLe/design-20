import React from "react";
import styled from "styled-components";
import { PageTemplate } from "../../styles/styledComponents";
import ProjectLink from "../../components/projectPageLink";
import web from "../../images/webDesign.png";
import app from "../../images/appDesign.png";
import CTA from "../../components/CTA";
import ProjectHeader from "../../components/projects/projectHeader";
import ProjectCard from "../../components/projects/projectCard";
import water from "../../images/graphic/boxedWater.png";
import science from "../../images/graphic/science.png";
import tim from "../../images/graphic/timBrown.jpg";

const GraphicDesignContainer = styled.section`
  height: 478px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0 20px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    height: 1514px;
    align-items: center;
    margin-top: -120px;

    justify-content: space-evenly;
  }
`;

const LinkContainer = styled.section`
  height: 308px;
  width: 100%;
  display: flex;
  gap: 16px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: 424px;
  }
`;

export default function GraphicDesign() {
  return (
    <PageTemplate>
      <ProjectHeader
        title="Graphic Design"
        desc={`We deliver eye-catching branding materials that are tailored to meet your business objectives.`}
      />
      <GraphicDesignContainer>
        <ProjectCard
          img={water}
          title="TIM BROWN"
          desc="A book cover designed for 
          Tim Brown’s new release, ‘Change’"
        />
        <ProjectCard
          img={science}
          title="SCIENCE!"
          desc="A poster made in collaboration with the Federal Art Project"
        />
        <ProjectCard
          img={tim}
          title="BOXED WATER"
          desc="A simple packaging concept made for Boxed Water"
        />
      </GraphicDesignContainer>
      <LinkContainer>
        <ProjectLink title="WEB DESIGN" img={web} to="/webDesign" />
        <ProjectLink title="APP DESIGN" img={app} to="/appDesign" />
      </LinkContainer>
      <CTA />
    </PageTemplate>
  );
}
