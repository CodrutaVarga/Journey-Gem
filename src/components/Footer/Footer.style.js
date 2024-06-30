import styled from "styled-components";
import {
  WHITE_NEUTRAL,
  DARK_GREEN,
  LIGHT_GREEN,
  DARK_GRAY,
  LIGHT_GRAY,
  BEIGE,
  LIGHT_BLUE,
  PALE_YELLOW,
} from "/src/constants/color.js";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${WHITE_NEUTRAL};
  width: 100%;
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #8fbc8f;
  height: 150px;
  width: 100%;
  font-family: "Playwrite CA", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;

  @media screen and (min-width: 350px) and (max-width: 700px) {
    height: 100px;
    font-size: 10px;
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #5c8d6f;
  height: 50px;
  width: 100%;
  font-family: "Indie Flower", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
`;
