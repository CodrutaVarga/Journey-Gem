import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  WHITE_NEUTRAL,
  DARK_GREEN,
  BEIGE,
  LIGHT_GRAY,
  DARK_GRAY,
  LIGHT_GREEN,
} from "../../constants/color";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ $isOpaque }) =>
    $isOpaque ? WHITE_NEUTRAL : "transparent"};
  transition: background-color 1s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 10px 20px;
  margin: 0;
  position: fixed;
  top: 0px;
  z-index: 999;
`;

export const ZonaDeLogo = styled(Link)`
  background-color: transparent;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export const TitluAppText = styled.div`
  font-weight: 1000;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const LinkNavStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 8px 16px;
  margin: 0;
  color: black;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: ${({ isActive }) => (isActive ? DARK_GRAY : "transparent")};
  color: ${({ isActive }) => (isActive ? WHITE_NEUTRAL : "black")};

  &:hover {
    background-color: ${LIGHT_GRAY};
    color: ${DARK_GREEN};
  }

  &.active {
    background-color: ${DARK_GRAY};
    color: white;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 250px;
  position: absolute;
  top: 80px;
  right: 0;
  display: none;
  background-color: ${({ isOpaque }) =>
    isOpaque ? BEIGE : "rgba(255, 255, 255, 0.5)"};
  border-bottom-left-radius: 10px;
  padding: 10px 0px;
  transition: background-color 1s ease;
  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  a {
    margin-bottom: 8px;
  }

  a:last-child {
    margin-bottom: 0;
  }
`;

export const LinkContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 10px;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ButtonDropdown = styled.button`
  width: 40px;
  height: 40px;
  color: ${DARK_GREEN};
  background: none;
  display: none;
  padding: 0;
  margin: 0;
  border: none;
  position: absolute;
  top: 20px;
  right: 90px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 820px) {
    display: block;
  }
`;
