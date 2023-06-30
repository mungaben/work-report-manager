import React, { useEffect, useState } from "react";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/en"; // Import the desired locale file (e.g., English)
import weekday from "dayjs/plugin/weekday";
import { useDatetime } from "../../../app/utils/Stores/Datetime";

dayjs.extend(weekday); // Extend dayjs with the weekday plugin

type CalenderProps = {
  settoggle: (toggle: boolean) => void;
  toggle: boolean;
  setDay: (day: Date) => void;
  day: Date;
};
const Calender: React.FC<CalenderProps> = ({ settoggle, toggle }) => {
  const { date, setDate } = useDatetime();
  const [ActualDtae, setActualDtae] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(date);

  console.log("selectedDate", selectedDate);

  const handleDateChange = () => {
    // event.preventDefault();
    const date = ActualDtae;
    console.log("date", date);

    setDate(date);
    setSelectedDate(date);

    settoggle(!toggle);
  };

  const TodayDate = dayjs().endOf("day").toDate();
  useEffect(() => {
    handleDateChange();
  }, [ActualDtae]);

  return (
    <div className=" transition animate-bounce delay-[2000] hover:animate-none  hover:delay-500">
      <div className="flex flex-col ">
        <h1 className=" flex justify-center items-center text-[#333333]/60 p-2">
          Selected Date: {selectedDate.toLocaleDateString()}
        </h1>
        <Calendar
          onChange={(date) => setActualDtae(new Date())}
          value={selectedDate}
          maxDate={TodayDate}
        />
      </div>
    </div>
  );
};

export default Calender;
