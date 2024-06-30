import { useState } from "react";
import {
  AddLabel,
  AddInput,
  ErrorP,
  ExclamationErrorIcon,
  StyledDatePicker,
} from "./Add.style";

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

export const AddForm = ({ name, handleChange, type, value, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div style={{ position: "relative", width: "60%", left: "6%" }}>
        <AddInput
          placeholder=""
          defaultValue={value}
          onBlur={(e) => {
            handleChange(e, name);
            setIsFocused(false);
          }}
          type={type}
          onFocus={() => setIsFocused(true)}
        />
        <AddLabel
          isfocused={isFocused ? isFocused.toString() : undefined}
          hasvalue={value ? value : undefined}
        >
          {formatLabel(name)}
        </AddLabel>
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

export const AddFormDatePicker = ({ name, error, handleChange, selected }) => {
  return (
    <>
      <div style={{ position: "relative", width: "60%", left: "6%" }}>
        <StyledDatePicker
          dateFormat={"dd.MM.yyyy"}
          placeholderText=""
          selected={selected}
          onChange={(date) => handleChange(date, name)}
        />
        <AddLabel hasvalue={selected ? selected : undefined}>
          {formatLabel(name)}
        </AddLabel>
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
