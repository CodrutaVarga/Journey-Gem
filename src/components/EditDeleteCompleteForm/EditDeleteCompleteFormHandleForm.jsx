import { useState } from "react";
import {
  EditLabel,
  EditInput,
  ErrorP,
  ExclamationErrorIcon,
  StyledDatePicker,
} from "./EditDeleteCompleteForm.style";

const formatLabel = (str) => {
  const customMappings = {
    tara: "Country" ,
    oras: "City",
    pachet: "Resort",
    concediu: "Vacation",
    nr: "Number",
    zile: "Days",
    pers: "People",
    pret: "Price",
    sejur: "Resort",
    moneda: "Currency",
    imagine: "Image",
    mod: "Mod of",
    transport: "Transport",
    check: "Check",
    in: "In",
    out: "Out",
    zi: 'Day'
  };

  return str
    .split("_")
    .map((word) =>
      customMappings[word]
        ? customMappings[word]
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
};

export const EditForm = ({ name, handleChange, type, value, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div style={{ position: "relative", width: "60%", left: "6%" }}>
        <EditInput
          placeholder=""
          defaultValue={value}
          onBlur={(e) => {
            handleChange(e, name);
            setIsFocused(false);
          }}
          type={type}
          onFocus={() => setIsFocused(true)}
        />
        <EditLabel
          isfocused={isFocused ? isFocused.toString() : undefined}
          hasvalue={value ? value : undefined}
        >
          {formatLabel(name)}
        </EditLabel>
      </div>
      {error && (
        <ErrorP>
          <ExclamationErrorIcon />
          {error}
        </ErrorP>
      )}
    </>
  );
};

export const EditFormDatePicker = ({ name, error, handleChange, selected }) => {
  return (
    <>
      <div style={{ position: "relative", width: "60%", left: "6%" }}>
        <StyledDatePicker
          dateFormat={"dd.MM.yyyy"}
          placeholderText=""
          selected={selected}
          onChange={(date) => handleChange(date, name)}
        />
        <EditLabel hasvalue={selected ? selected : undefined}>
          {formatLabel(name)}
        </EditLabel>
      </div>
      {error && (
        <ErrorP>
          <ExclamationErrorIcon />
          {error}
        </ErrorP>
      )}
    </>
  );
};
