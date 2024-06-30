import styled , {createGlobalStyle , css} from "styled-components";
import { DARK_GREEN , LIGHT_GREEN, PALE_YELLOW, WHITE_NEUTRAL } from "../../constants/color";
import { ShieldExclamation } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const StyledDatePicker = styled(DatePicker)`
  height: 30px;
  border-radius: 10px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid black;
  background-color: ${WHITE_NEUTRAL};
  position: relative;
  
  &:hover {
    border: 2px solid ${LIGHT_GREEN};
    margin-top: -1.6px;
  }

  &:focus-within {
    background-color: ${WHITE_NEUTRAL};
    border: 2px solid ${DARK_GREEN};
    margin-top: -1.6px;
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #E0F7E9;
  }
`;
export const ComponentContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  gap: 40px;
`;

export const EditLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  color: ${DARK_GREEN};
  pointer-events: none;

  ${({ isfocused, hasvalue }) =>
    (isfocused || hasvalue) &&
    css`
      top: -12px;
      font-size: 19px;
      color: ${DARK_GREEN};
    `}
`;

export const EditInput = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 10px;
  padding: 10px 10px 10px 35px;
  border: none;
  border-bottom: 2px solid black;
  background-color: ${WHITE_NEUTRAL};
  position: relative;

  &:hover {
    border: 2px solid ${LIGHT_GREEN};
    margin-top: -1.6px;
  }

  &:focus {
    background-color: ${WHITE_NEUTRAL};
    border: 2px solid ${DARK_GREEN};
    margin-top: -1.6px;
  }

  &:focus + ${EditLabel}, &:not(:placeholder-shown) + ${EditLabel} {
    top: -15px;
    font-size: 19px;
    color: ${DARK_GREEN};
  }
`;

export const ErrorP = styled.p`
  color: red;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

export const ExclamationErrorIcon = styled(ShieldExclamation)`
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;
export const ButtonsContainer = styled.div`
display: flex;
align-items: center;
gap: 30px;
`
export const EditButton = styled.button`
  margin: 25px 0;
  width: 110px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${DARK_GREEN};
  background-color: ${WHITE_NEUTRAL};
  color: ${DARK_GREEN};
  font-size: 15px;
  font-weight: 700;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out;

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
export const DeletePackageButton = styled.button`
margin: 25px 0;
  width: 110px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid red;
  background-color: ${WHITE_NEUTRAL};
  color: red;
  font-size: 15px;
  font-weight: 700;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out;

  &:hover {
    background-color: red;
    color: ${WHITE_NEUTRAL};
  }

  &:active {
    background-color: ${PALE_YELLOW};
    color: black;
    border: 2px solid ${LIGHT_GREEN};
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalDeleteContainer = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const ModalDeleteMessage = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ModalDeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkred;
  }
`;

export const ModalDeleteCancel = styled.button`
  background-color: lightgray;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkgray;
  }
`;