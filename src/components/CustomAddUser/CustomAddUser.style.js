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

export const CustomAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: flex-start;
  justify-content: center;
  margin-top: 120px;
  margin-left: 5%;
  margin-bottom: 30px;
  gap: 40px;
`;

export const PentruPozaAntete = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
`;

export const StilPentruPozaLink = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
  gap: 40px;
`;

export const CustomPackageImage = styled.img`
  height: 30%;
  width: 30%;
  border-radius: 10px;
`;

export const SubmitCustomPackageButton = styled.button`
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${DARK_GREEN};
  background-color: ${WHITE_NEUTRAL};
  color: ${DARK_GREEN};
  font-size: 17px;
  font-weight: 700;

  &:hover {
    background-color: ${DARK_GREEN};
    color: ${WHITE_NEUTRAL};
  }

  &:active {
    background-color: ${PALE_YELLOW};
    color: black;
    border: 2px solid ${LIGHT_GREEN};
  }
`;
