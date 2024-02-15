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

import { FcNext, FcPrevious } from "react-icons/fc";
import { IoIosAddCircleOutline } from "react-icons/io";
import renderEvent from "./RenderEvent";
import eventData from '../DataBase/data'
 

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editableRow, setEditableRow] = useState(null);
  const [addEvent, setaddEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventValue, setEventValue] = useState({});

  const DATA = JSON.parse(localStorage.getItem('events')) || eventData;
  console.log('DATA',DATA)
  const currentDateEvents = DATA.filter((day) => {
    return (
      day.name === selectedDate.toLocaleDateString("en-US", { weekday: "long" })
    );
  });
  console.log("currentDateEvents();",currentDateEvents)


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
    <div>
      <div className="flex w-full sm:w-5/6 md:max-w-[50%] overflow-x-auto overflow-y-auto font-Lato">
        <div className="w-full">
          <div className="flex">
            <div className="h-[110vh]   overflow-y-auto ">
              <div className="flex w-full  items-center  justify-between   border-red-300   px-2 py-2 heading_grey">
                <div>
                  <p className="text-lg font-bold uppercase">Calender</p>
                </div>

                <div className="p-1">
                  <button
                    className=" p-1 font-medium text-md leading-[19.36px] px-5   min-w-[15px]    min-h-[38px] rounded-md shadow-md hover:shadow-lg  font-inter  items-center gap-2 flex"
                    onClick={handleSaveShiftClick}
                  >
                    <IoIosAddCircleOutline />
                    Create
                  </button>
                </div>
              </div>
              <div className="flex w-full gap-2 px-2 justify-between">
                <div className="flex  border-2 border-gray bg-white rounded-lg pr-2">
                  <div>
                    <ReactDatePicker
                      onChange={(date) => setSelectedDate(date)}
                      selected={selectedDate}
                      highlightDates={[new Date()]}
                      calendarClassName="w-full"
                      className="w-full px-3 py-2 rounded-lg"
                    />
                  </div>
                  {/* <img src={vector1} alt="" /> */}
                </div>
                <div className="gap-2 flex">
                  <button
                    className="bg-gradient-to-r from-purple-600 to-indigo-700  file: font-medium text-md leading-[19.36px] px-5   min-w-[15px]    min-h-[38px] rounded-md shadow-md hover:shadow-lg  font-inter"
                    onClick={handlePreviousDay}
                  >
                    <FcPrevious />
                  </button>
                  <button
                    className="bg-gradient-to-r from-purple-600 to-indigo-700   font-medium text-md leading-[19.36px] px-5   min-w-[15px]    min-h-[38px] rounded-md shadow-md hover:shadow-lg  font-inter"
                    onClick={handleNextDay}
                  >
                    <FcNext />
                  </button>
                </div>
              </div>
              <div>
                <ScheduleView
                  daySchedules={currentDateEvents}
                  viewStartTime={6}
                  viewEndTime={30}
                  customDayHeader={CustomDayHeader}
                  handleEventClick={handleEventClick}
                  eventRenderer= {renderEvent}
                  theme="google"
                ></ScheduleView>
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
        </div>
      </div>
    </div>
  );
};

export default Events;
