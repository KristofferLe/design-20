import React from "react";
import styled from "styled-components";
import { PageTemplate } from "../../styles/styledComponents";
import ProjectLink from "../../components/projectPageLink";
import web from "../../images/webDesign.png";
import graphic from "../../images/graphicDesign.png";
import CTA from "../../components/CTA";
import ProjectHeader from "../../components/projects/projectHeader";
import ProjectCard from "../../components/projects/projectCard";
import air from "../../images/app/airfilter.png";
import eyecam from "../../images/app/eyecam.png";
import faceit from "../../images/app/faceit.png";
import todo from "../../images/app/todo.png";
import loopstudios from "../../images/app/loopstudios.png";

const AppDesignContainer = styled.section`
  height: 988px;
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
    height: 2550px;
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

export default function AppDesign() {
  return (
    <PageTemplate>
      <ProjectHeader
        title="App Design"
        desc={`Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.`}
      />
      <AppDesignContainer>
        <ProjectCard
          img={air}
          title="AIRFILTER"
          desc="Solving the problem of poor indoor air quality by filtering the air"
        />
        <ProjectCard
          img={eyecam}
          title="EYECAM"
          desc="Product that lets you edit your favorite photos and videos at any time"
        />
        <ProjectCard
          img={faceit}
          title="FACEIT"
          desc="Get to meet your favorite internet superstar with the faceit app"
        />
        <ProjectCard
          img={loopstudios}
          title="LOOPSTUDIOS"
          desc="A VR experience app made for Loopstudios"
        />
        <ProjectCard
          img={todo}
          title="TODO"
          desc="A todo app that features cloud sync with light and dark mode"
        />
      </AppDesignContainer>
      <LinkContainer>
        <ProjectLink title="WEB DESIGN" img={web} to="/webDesign" />
        <ProjectLink title="GRAPHIC DESIGN" img={graphic} to="/graphicDesign" />
      </LinkContainer>
      <CTA />
    </PageTemplate>
  );
}
