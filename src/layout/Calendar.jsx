import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDateTimePicker from "@mui/lab/DesktopDateTimePicker";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPeriodActions } from "store";
import { dateToString } from "utils/dateToString";

function Calendar({ setTime, disabled, label, ...rest }) {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const saveDate = () => {
    switch (label) {
      case "exposure start":
        value &&
          dispatch(setPeriodActions.exposureCalenderStart(dateToString(value)));
        break;
      case "exposure end":
        value &&
          dispatch(setPeriodActions.exposureCalenderEnd(dateToString(value)));
        break;
      case "sales start":
        value &&
          dispatch(setPeriodActions.salesCalenderStart(dateToString(value)));
        break;
      case "sales end":
        value &&
          dispatch(setPeriodActions.salesCalenderEnd(dateToString(value)));
        break;
      default:
        break;
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateTimePicker
        disabled={disabled || false}
        label={label}
        value={value}
        inputFormat={"yyyy.MM.dd hh:mm"}
        mask={"____.__.__ __:__"}
        onChange={(newValue) => {
          setValue(newValue);
          setTime && setTime(newValue.getTime());
          saveDate();
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default Calendar;
