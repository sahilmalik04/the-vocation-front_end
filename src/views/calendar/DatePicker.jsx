import React from 'react';
import DatePicker from "react-multi-date-picker"


const DatePickerFunc = ({changeValue}) => {


   
// console.log(values)
    return (
        <DatePicker
            multiple
            // value={values}
            onChange={changeValue}
            minDate={new Date()}
            placeholder={"Select Date"}
        />

    );
}

export default DatePickerFunc