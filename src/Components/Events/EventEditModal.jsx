import React, { useState, useEffect, useContext } from "react";
import { ImCross } from "react-icons/im";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import "./Event.css";

const initialdata1 = {
  date: " ",
  startTime: 12,
  endTime: 12,
  title: "",
  description: "",
};

const formatTime = (time) => {
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${formattedHours}:${formattedMinutes}`;
};

const EventEditModal = ({ isOpen, onSave, onCancel, initialdata }) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    title: "",
    description: "",
  });
  console.log("initialdata", initialdata);
  useEffect(() => {
    setIsOpenState(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      if (initialdata) {
        const formattedStartTime = formatTime(initialdata.startTime);
        const formattedEndTime = formatTime(initialdata.endTime);

        setFormData({
          date: initialdata?.date,
          startTime: formattedStartTime,
          endTime: formattedEndTime,
          title: initialdata.title,
          description: initialdata.description,
          id: initialdata.id,
        });
      }
    }
  }, [isOpen, initialdata]);

  if (!isOpenState) {
    return null;
  }

  function timeStringToDecimal(timeString) {
    if (!timeString) return 0; // Return 0 if timeString is undefined, null, or empty string
    const [hours, minutes] = timeString.split(":").map(Number);
    const decimalTime = hours + minutes / 60;
    return parseFloat(decimalTime.toFixed(2)); // Convert to number with two decimal places
  }

  const handleInputChange = (field, value) => {
    // Update the formData state when input changes
    setFormData({ ...formData, [field]: value });
  };

  const DATA = JSON.parse(localStorage.getItem("events"));

  const handleSubmit = (e) => {
    e.preventDefault();
    const decimalStartTime = timeStringToDecimal(formData.startTime);
    const decimalEndTime = timeStringToDecimal(formData.endTime);

    const updatedEvent = {
      date: formData.date,
      startTime: decimalStartTime,
      endTime: decimalEndTime,
      title: formData.title,
      description: formData.description,
      id: formData.id,
    };

    const updatedData = DATA.map((day) => {
      const updatedEvents = day.events.map((event) => {
        if (event.id === formData.id) {
          return updatedEvent;
        }
        return event;
      });
      return { ...day, events: updatedEvents };
    });

    localStorage.setItem("events", JSON.stringify(updatedData));
    onSave(updatedData);
    setIsOpenState(false);
  };

  return (
    <Dialog open={isOpenState} onClose={onCancel}>
      <DialogHeader>
        <div className="flex w-full items-center justify-center mb-3 h-[40px]">
          <h2 className="text-xl  font-bold">EDIT EVENT</h2>
          {/* <button className="px-4 py-2 rounded" onClick={onCancel}>
        <ImCross />
      </button> */}
        </div>
      </DialogHeader>
      <DialogBody style={{ maxHeight: "60vh", overflowY: "auto" }}>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="modalinputs mb-4">
              <label className="block mb-1">Date:</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
              />
            </div>
            <div className="modalinputs mb-4">
              <label className="block mb-1">Start Time:</label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => handleInputChange("startTime", e.target.value)}
              />
            </div>
            <div className="modalinputs mb-4">
              <label className="block mb-1">End Time:</label>
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => handleInputChange("endTime", e.target.value)}
              />
            </div>
            <div className="modalinputs mb-4">
              <label className="block mb-1">Title:</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </div>
            <div className="modalinputs mb-4">
              <label className="block mb-1">Description:</label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
              />
            </div>
            <div className="buttondiv ">
              <button
                type="submit"
                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </DialogBody>
      <DialogFooter></DialogFooter>
    </Dialog>
  );
};

export default EventEditModal;
