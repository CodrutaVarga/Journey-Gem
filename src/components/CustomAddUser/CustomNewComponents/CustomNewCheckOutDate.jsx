import * as React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/ro";
import TextField from "@mui/material/TextField";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.locale("ro");

export default function CustomNewCheckOutDate({ ziCheckOut, setZiCheckOut }) {
  const handleDateChange = (newValue) => {
    const formattedDate = dayjs(newValue).format("DD.MM.YYYY");
    setZiCheckOut(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem label="Introduceti ziua de check out:">
          <DateCalendar
            value={dayjs(ziCheckOut, "DD.MM.YYYY")}
            onChange={handleDateChange}
          />
        </DemoItem>
        <DemoItem label="Data aleasa pentru check out:">
          <TextField
            value={ziCheckOut}
            onChange={(event) =>
              setZiCheckOut(
                dayjs(event.target.value, "DD.MM.YYYY").format("DD.MM.YYYY")
              )
            }
            InputProps={{
              readOnly: true,
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
