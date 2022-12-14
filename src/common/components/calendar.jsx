import { useState } from "react";
import { forwardRef } from "react";
import  DatePicker  from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
function Calendar ({ onDateChange, valueCurrent}) {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <DatePicker
      selected={valueCurrent}
      onChange={(date) => {
        setStartDate(date)
        onDateChange(date)
      }}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default Calendar