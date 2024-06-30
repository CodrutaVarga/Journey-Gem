import styled from "styled-components";
import {
  WHITE_NEUTRAL,
  DARK_GREEN,
  LIGHT_GREEN,
} from "../../constants/color";

export const ComponentsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 200px 30px;
  gap: 25px;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

export const ContainerShowHideSortbarButton = styled.div``;
export const ShowHideSortbarButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #388e3c;
    transform: scale(1.05);
  }
  &:active {
    background-color: #2e7d32;
  }
`;

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  margin: 30px 0px;
`;
export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: red;
  margin: 0 auto;
  width: 100%;
  margin: 30px 0px;
`;

export const PackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 250px;
  max-width: 100%;
  min-width: 250px;
  gap: 16px;
  color: black;
  font-weight: 700;
`;
export const SortingBarContainer = styled.div`
  margin: 0 9px;
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 400px;
  height: 350px;
  background-color: ${LIGHT_GREEN};
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1400px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const SortingBarInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${LIGHT_GREEN};
  background-color: ${WHITE_NEUTRAL};
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: ${DARK_GREEN};
    outline: none;
  }
`;

export const SortingBarDropdown = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${LIGHT_GREEN};
  background-color: ${WHITE_NEUTRAL};
  appearance: none;
  transition: border-color 0.3s ease-in-out;
  cursor: pointer;
  &:focus {
    border-color: ${DARK_GREEN};
    outline: none;
  }
`;
export const SortingBarDropdownContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 18px;
`;
export const SortingBarDropdownItems = styled.option`
  padding: 10px;
  margin-right: 10px;
`;
export const NoMatchMessage = styled.div`
  font-size: 20px;
  color: #e74c3c;
  margin-top: 10px;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #e74c3c;
    margin-top: 5px;
    width: 100%;
  }
`;
export const ClearSortBarButton = styled.button`
  background-color: red;
  color: ${WHITE_NEUTRAL};
  padding: 7px;
  width: 70px;
  border: 1px solid ${WHITE_NEUTRAL};
  cursor: pointer;
  border-radius: 9px;
  font-weight: 700;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out,
    border 0.3s ease-in-out;

  &:hover {
    background-color: ${WHITE_NEUTRAL};
    color: red;
    border: 1px solid red;
  }
`;
