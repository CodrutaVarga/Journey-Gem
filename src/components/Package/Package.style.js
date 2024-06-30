import styled from "styled-components";
import { CardImg } from "../Packages/PackageCard/PackageCard.style";
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

export const PackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 48px 0;
  padding: 64px;
  color: ${DARK_GREEN};
`;

export const PackageDetailsImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PackageDetailsImage = styled.img`
  height: auto;
  width: 600px;
  border-radius: 10%;
  object-fit: contain;
`;

export const PackageAllDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
`;

export const PackageAllDetailsLinieDetaliu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 25px;
`;

export const PackageAllDetailsAntet = styled.div`
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
`;

export const PackageAllDetailsValoare = styled.div`
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

export const ReserveButton = styled.button`
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${DARK_GREEN};
  font-size: 17px;
  font-weight: 700;
  background-color: ${WHITE_NEUTRAL};
  color: ${DARK_GREEN};

  &:hover {
    background-color: ${DARK_GREEN};
    color: ${WHITE_NEUTRAL};
  }
`;

export const ReservedText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 20px;
  font-weight: 700;
  text-decoration: underline;
`;
