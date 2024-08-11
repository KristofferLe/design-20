import styled from "styled-components";
import colors from "../../styles/colors";

export const circleStyle = {
  position: "absolute",
  bottom: "0",
  left: "0",
  height: "640px",
  width: "640px",
  background: "linear-gradient(to top, rgba(0,0,0,.15), transparent)",
};

export const StyledContactForm = styled.form`
  position: relative;
  background-color: ${colors.peach};
  height: 460px;
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  border-radius: 15px;
  overflow: hidden;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 711px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
  }
  @media screen and (max-width: 768px) {
    height: 764px;
  }
`;

export const TextContainer = styled.aside`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  text-align: start;
  align-items: start;
  justify-content: center;
  width: 90%;
  gap: 16px;
  color: ${colors.white};
  z-index: 1;
  @media screen and (max-width: 1024px) {
    align-self: start;
    padding-left: 40px;
    gap: 32px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 90%;
  z-index: 1;

  .input-box {
    position: relative;
    width: 100%;
    input,
    textarea {
      width: 100%;
    }
    .validation-message {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      color: ${colors.white};
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 9px;
    }
  }

  input,
  textarea {
    padding: 8px 12px;
    border: none;
    border-bottom: solid 1px white;
    background: transparent;
    outline: none;
    color: rgba(255, 255, 255, 0.9);
    font-size: 12px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  button {
    align-self: end;
    @media screen and (max-width: 768px) {
      align-self: center;
    }
  }
`;
