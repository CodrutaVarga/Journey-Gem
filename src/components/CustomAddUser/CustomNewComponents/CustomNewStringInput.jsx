import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CustomNewStringInput({
  myString,
  setMyString,
  myLabel,
}) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label={myLabel}
        value={myString}
        onChange={(event) => {
          setMyString(event.target.value);
        }}
      />
    </Box>
  );
}
