import React from "react";
import styled from "styled-components";
import { PageTemplate } from "../../styles/styledComponents";
import ProjectLink from "../../components/projectPageLink";
import app from "../../images/appDesign.png";
import graphic from "../../images/graphicDesign.png";
import CTA from "../../components/CTA";
import ProjectHeader from "../../components/projects/projectHeader";
import ProjectCard from "../../components/projects/projectCard";
import express from "../../images/web/express.png";
import blogr from "../../images/web/blogr.png";
import builder from "../../images/web/builder.png";
import camp from "../../images/web/camp.png";
import photon from "../../images/web/photon.png";
import transfer from "../../images/web/transfer.png";

const WebDesignContainer = styled.section`
  height: 988px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0 20px;

  @media screen and (max-width: 1024px) {
    display: flex;
    height: auto;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    height: 3068px;
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

export default function WebDesign() {
  return (
    <PageTemplate>
      <ProjectHeader
        title="Web Design"
        desc={`We build websites that serve as powerful marketing tools and bring memorable brand experiences.`}
      />
      <WebDesignContainer>
        <ProjectCard
          img={express}
          title="EXPRESS"
          desc="A multi-carrier shipping website for ecommerce businesses"
        />
        <ProjectCard
          img={blogr}
          title="TRANSFER"
          desc="Site for low-cost money transfers and sending money within seconds"
        />
        <ProjectCard
          img={builder}
          title="PHOTON"
          desc="A state-of-the-art music player with high-resolution audio and DSP effects"
        />
        <ProjectCard
          img={camp}
          title="BUILDER"
          desc="Connects users with local contractors based on their location"
        />
        <ProjectCard
          img={photon}
          title="BLOGR"
          desc="Blogr is a platform for creating an online blog or publication"
        />
        <ProjectCard
          img={transfer}
          title="CAMP"
          desc="Get expert training in coding, data, design, and digital marketing"
        />
      </WebDesignContainer>
      <LinkContainer>
        <ProjectLink title="APP DESIGN" img={app} to="/appDesign" />
        <ProjectLink title="GRAPHIC DESIGN" img={graphic} to="/graphicDesign" />
      </LinkContainer>
      <CTA />
    </PageTemplate>
  );
}
