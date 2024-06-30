import React, { useState } from "react";
import {
  AddContainer,
  AddButton,
  GlobalStyles,
  ComponentContainer,
} from "./Add.style";
import { AddForm, AddFormDatePicker } from "./AddForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [ziCheckIn, setZiCheckIn] = useState(new Date()); 
  const [ziCheckOut, setZiCheckOut] = useState(new Date());
  const [inputObject, setInputObject] = useState({
    tara: "",
    oras: "",
    imagine_pachet: "",
    nr_zile_concediu: "",
    zi_check_in: null,
    zi_check_out: null,
    nr_pers: "",
    mod_transport: "",
    pret_sejur: "",
    moneda_sejur: "",
  });

  const [error, setError] = useState({
    tara: undefined,
    oras: undefined,
    imagine_pachet: undefined,
    nr_zile_concediu: undefined,
    zi_check_in: undefined,
    zi_check_out: undefined,
    nr_pers: undefined,
    mod_transport: undefined,
    pret_sejur: undefined,
    moneda_sejur: undefined,
  });

  const handleChange = (e, name) => {
    const capitalizedValue =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setInputObject({ ...inputObject, [name]: capitalizedValue });
    handleError(capitalizedValue, name);
  };

  const handleDateChange = (value, name) => {
    const formattedDate = value.toLocaleDateString("ro-RO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setInputObject({ ...inputObject, [name]: formattedDate });
    handleError(formattedDate, name);
  };

  const handleError = (value, name) => {
    switch (name) {
      case "tara":
        if (value.length < 3) {
          setError({
            ...error,
            [name]: "The country name must be longer than 3 characters",
          });
        } else if (value === "tara") {
          setError({ ...error, [name]: "The country name is incorrect" });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "oras":
        if (value.length < 3) {
          setError({
            ...error,
            [name]: "The city name must be longer than 3 characters",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "imagine_pachet":
        if (!value) {
          setError({
            ...error,
            [name]: "You must upload an image",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "nr_zile_concediu":
        if (value <= 0) {
          setError({
            ...error,
            [name]: "The number of vacation days must be greater than 0",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "zi_check_in":
      case "zi_check_out":
        if (!value) {
          setError({
            ...error,
            [name]: `You must select a day of ${
              name === "zi_check_in" ? "check-in" : "check-out"
            }`,
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "nr_pers":
        if (value <= 0) {
          setError({
            ...error,
            [name]: "The number of people must be greater than 0",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "mod_transport":
        if (!value) {
          setError({
            ...error,
            [name]: "You must specify a mode of transport",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "pret_sejur":
        if (value <= 0) {
          setError({
            ...error,
            [name]: "The price of the stay must be greater than 0",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      case "moneda_sejur":
        if (!value) {
          setError({
            ...error,
            [name]: "You must select a currency for your stay",
          });
        } else {
          setError({ ...error, [name]: undefined });
        }
        break;
      default:
        break;
    }
  };

  const hasErrors = (errors) => {
    const hasValidationErrors = Object.values(errors).some(
      (error) => error !== undefined
    );
    const allInputsEmpty = Object.values(inputObject).some(
      (value) => value === "" || value === 0 || value === null
    );
    return hasValidationErrors || allInputsEmpty;
  };

  const handleSubmit = () => {
    if (hasErrors(error)) {
      if (Object.values(error).some((error) => error !== undefined)) {
        toast.error(
          "You cannot submit the form until all errors are resolved!",
          { autoClose: 2500 }
        );
      } else {
        toast.error("All fields must be filled in!", { autoClose: 2500 });
      }
      return;
    }
    fetch(`http://localhost:3001/pachete`, {
      method: "POST",
      body: JSON.stringify({
        ...inputObject,
        este_rezervat: 0,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast("Your package has just been added!", {
            autoClose: 2500,
            onClose: () => {
              window.location.href = "/all-packages";
            },
          });
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        toast.error("Error adding the package!");
      });
  };

  return (
    <ComponentContainer>
      <AddContainer>
        <GlobalStyles />
        {Object.keys(inputObject).map((el, index) => {
          if (el === "zi_check_in" || el === "zi_check_out") {
            return (
              <AddFormDatePicker
                key={index}
                name={el}
                selected={el === "zi_check_in" ? ziCheckIn : ziCheckOut}
                handleChange={(date) => {
                  if (el === "zi_check_in") {
                    setZiCheckIn(date);
                  } else {
                    setZiCheckOut(date);
                  }
                  handleDateChange(date, el);
                }}
                error={error[el] || (el === "zi_check_in" && !ziCheckIn) || (el === "zi_check_out" && !ziCheckOut) ? `You must select a day of ${el === "zi_check_in" ? "check-in" : "check-out"}` : undefined}
              />
            );
          } else {
            return (
              <AddForm
                key={index}
                name={el}
                type={
                  el === "nr_zile_concediu" ||
                  el === "nr_pers" ||
                  el === "pret_sejur"
                    ? "number"
                    : "text"
                }
                value={inputObject[el]}
                handleChange={handleChange}
                error={error[el]}
              />
            );
          }
        })}
        <AddButton onClick={handleSubmit}>Submit</AddButton>
        <ToastContainer />
      </AddContainer>
    </ComponentContainer>
  );
};

export default Add;