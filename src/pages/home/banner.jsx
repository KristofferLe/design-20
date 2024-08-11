import styled from "styled-components";
import colors from "../../styles/colors";
import phone from "../../images/phoneBanner.png";
import { H2, Body, ButtonDark } from "../../styles/styledComponents";
import { useNavigate } from "react-router-dom";

const StyledBanner = styled.section`
  width: 100%;
  height: 640px;
  background-color: ${colors.peach};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 80px;

  .phone {
    position: absolute;
    right: 10%;
    bottom: 0;
    filter: drop-shadow(15px -25px 30px rgba(0, 0, 0, 0.6));
    z-index: 1;
  }

  .banner-text {
    width: 100%;
    max-width: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: ${colors.white};
    z-index: 10;
  }

  @media screen and (max-width: 1024px) {
    height: 843px;
    align-items: start;
    justify-content: center;
    padding: 40px 0;
    text-align: center;

    .phone {
      bottom: -120px;
      height: 550px;
      right: 50%;
      transform: translateX(50%);
    }

    .banner-text {
      align-items: center;
    }
  }

  @media screen and (max-width: 500px) {
    border-radius: 0;
    .phone {
      height: 500px;
    }
  }
`;

const BackgroundCircle = styled.span`
  position: absolute;
  right: 0;
  height: 640px;
  width: 640px;
  border-radius: 50%;
  background: linear-gradient(160deg, rgba(0, 0, 0, 0.15), transparent);
`;

export default function Banner() {
  const navigate = useNavigate();
  const toAbout = () => {
    navigate("/about");
  };

  return (
    <StyledBanner>
      <BackgroundCircle />
      <img src={phone} alt="phone" className="phone" />
      <span className="banner-text">
        <H2>
          Award-winning custom <br /> designs and digital <br /> branding
          solutions
        </H2>
        <Body>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </Body>
        <ButtonDark onClick={toAbout}>LEARN MORE</ButtonDark>
      </span>
    </StyledBanner>
  );
}
