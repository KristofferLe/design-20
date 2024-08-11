import styled from "styled-components";
import colors from "../../styles/colors";
import { H1, Body } from "../../styles/styledComponents";
import { Circle } from "../../components/CTA";
import aboutImg from "../../images/aboutImg.png";

export const StyledAboutBanner = styled.article`
  width: 100%;
  height: 480px;
  border-radius: 16px;
  background-color: ${colors.peach};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 55% 45%;
  color: white;
  padding-left: 80px;
  gap: 20px;

  .about-banner-img {
    width: 100%;
    height: 100%;
    margin-left: 20px;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    height: 632px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column-reverse;
    text-align: center;
    padding: 0;

    .about-banner-img {
      height: 50%;
      width: 100%;
      object-fit: cover;
      z-index: 2;
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    border-radius: 0px;
    height: 715px;
  }
`;

export const BannerContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 2;
  padding-bottom: 40px;
  @media screen and (max-width: 1024px) {
    padding: 40px 40px 80px 40px;
  }
`;

export default function AboutBanner() {
  return (
    <StyledAboutBanner>
      <Circle
        style={{
          height: "640px",
          width: "640px",
          transform: "rotate(240deg)",
          position: "absolute",
          right: "40%",
          bottom: "0",
          zIndex: "1",
        }}
      />
      <BannerContent className="about-text">
        <H1>About Us</H1>
        <Body>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </Body>
      </BannerContent>
      <img src={aboutImg} className="about-banner-img" alt="" />
    </StyledAboutBanner>
  );
}
