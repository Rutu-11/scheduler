import React, { useContext, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ScheduleView } from "react-schedule-view";
import "./Event.css";
import vector1 from "../../assets/vector1.svg";
import EventEditModal from "./EventEditModal";
import { AiOutlineEdit } from "react-icons/ai";
import AddEventModal from "./AddEventModal";
import CustomDayHeader from "./CustomDayHeader";
import { AiFillCaretDown } from "react-icons/ai";
import { FcNext, FcPrevious } from "react-icons/fc";
import { IoIosAddCircleOutline } from "react-icons/io";
import renderEvent from "./RenderEvent";
import eventData from "../DataBase/data";
import { FaRegEdit } from "react-icons/fa";

const CustomInput = ({ value, onClick }) => (
  <button
    type="button"
    className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-blue-500 font-bold bg-transparent border-none appearance-none focus:outline-none"
    onClick={onClick}
  >
    <span>{value}</span> &nbsp;&nbsp;&nbsp;
    <AiFillCaretDown />
  </button>
);

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editableRow, setEditableRow] = useState(null);
  const [addEvent, setaddEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventValue, setEventValue] = useState({});

  const storedData = localStorage.getItem("events");
  const DATA = storedData ? JSON.parse(storedData) : eventData || [];

  console.log("DATA", DATA);
  const currentDateEvents = DATA.filter((day) => {
    return (
      day.name === selectedDate.toLocaleDateString("en-US", { weekday: "long" })
    );
  });

  useEffect(() => {
    // This effect will run whenever 'data' changes
    // You can add any additional logic here
  }, [DATA]); // Run this effect whenever 'data' changes

  const handleEventClick = (event) => {
    setSelectedEvent(event);

    if (event) {
      const eventStartTime = event.date;
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split("T")[0];
      handleEditClick();
      setEventValue(event);
    } else {
      handleSaveShiftClick();
    }
  };

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    setSelectedDate(nextDay);
  };

  const handlePreviousDay = () => {
    const previousDay = new Date(selectedDate);
    previousDay.setDate(selectedDate.getDate() - 1);
    setSelectedDate(previousDay);
  };

  const handleSaveShiftClick = () => {
    setaddEvent(!addEvent);
  };

  const handleEditClick = () => {
    setEditableRow(!editableRow);
  };

  const handleSaveClick = () => {
    setEditableRow(null);
  };

  const handleCancelEdit = () => {
    setEditableRow(null);
  };

  const handleCancelShift = () => {
    setaddEvent(false);
  };

  return (
    <div className="flex flex-col h-screen dark-mode:bg-gray-800 dark-mode:text-white light-mode:bg-gray-100 light-mode:text-black">
      <div className="flex items-center justify-between border-red-300 px-2 py-2 heading_grey">
        <p className="text-lg font-bold uppercase">Calendar</p>
        <button
          className="p-1 font-medium text-md leading-[19.36px] px-5 min-w-[20px] min-h-[38px] rounded-md shadow-md hover:shadow-lg font-inter items-center gap-2 flex"
          onClick={handleSaveShiftClick}
        >
          <FaRegEdit style={{ fontSize: "1.5rem" }} />
        </button>
      </div>
      <div className="flex justify-between sm:flex-row gap-2 px-2 items-center">
        <div className="flex-grow border-none bg-white rounded-lg pr-2">
          <ReactDatePicker
            onChange={(date) => setSelectedDate(date)}
            selected={selectedDate}
            highlightDates={[new Date()]}
            calendarClassName="w-full"
            className="w-full px-3 py-2 rounded-lg text-blue-500 font-bold appearance-none"
            dateFormat="E, dd MMMM"
            customInput={<CustomInput />}
          />
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="bg-gradient-to-r from-purple-600 to-indigo-700 font-medium text-md mr-4 leading-[19.36px] px-5 min-w-[15px] min-h-[38px] rounded-md shadow-md hover:shadow-lg font-inter"
            onClick={handlePreviousDay}
          >
            <FcPrevious />
          </button>
          <button
            className="bg-gradient-to-r from-purple-600 to-indigo-700 font-medium text-md leading-[19.36px] px-5 min-w-[15px] min-h-[38px] rounded-md shadow-md hover:shadow-lg font-inter"
            onClick={handleNextDay}
          >
            <FcNext />
          </button>
        </div>
      </div>

      <div className="flex flex-grow overflow-y-auto">
        <div className="w-full">
          <ScheduleView
            daySchedules={currentDateEvents}
            viewStartTime={6}
            viewEndTime={30}
            customDayHeader={CustomDayHeader}
            handleEventClick={handleEventClick}
            eventRenderer={renderEvent}
            theme="google"
          />
        </div>
        <EventEditModal
          isOpen={editableRow}
          onSave={handleSaveClick}
          onCancel={handleCancelEdit}
          initialdata={eventValue}
        />
        <AddEventModal
          isOpen={addEvent}
          onSave={handleSaveShiftClick}
          onCancel={handleCancelShift}
        />
      </div>
    </div>
  );
};

export default Events;
