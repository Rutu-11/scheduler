import React, { useState, useEffect, useContext } from "react";
import { ImCross } from "react-icons/im";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import "react-time-picker/dist/TimePicker.css";
import "./Event.css";


function generateRandomColor() {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const green = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const blue = Math.floor(Math.random() * 256); // Random value between 0 and 255

  // Construct a CSS color string using the RGB values
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}



const AddEventModal = ({ isOpen, onSave, onCancel }) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);


  const DATA = JSON.parse(localStorage.getItem("events"));

  const [formData, setFormData] = useState({
    date: "",
    startTime: 0,
    endTime: 0,
    title: "",
    description: "",
    color:""
  });

  function timeStringToDecimal(timeString) {
    if (!timeString) return 0; // Return 0 if timeString is undefined, null, or empty string
    const [hours, minutes] = timeString.split(":").map(Number);
    const decimalTime = hours + minutes / 60;
    return parseFloat(decimalTime.toFixed(2)); // Convert to number with two decimal places
  }

  function getDayFromDate(dateStr) {
    const dateObj = new Date(dateStr);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = dateObj.getDay();
    return daysOfWeek[dayOfWeek];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const decimalStartTime = timeStringToDecimal(formData.startTime);
    const decimalEndTime = timeStringToDecimal(formData.endTime);

    const updatedFormData = {
      ...formData,
      startTime: decimalStartTime,
      endTime: decimalEndTime,
      id: Math.floor(Math.random() * 1000000), // Generate a random ID
      color:generateRandomColor()// Assign a random color to the event
    };

    onSave(updatedFormData);

    const dayName = getDayFromDate(updatedFormData.date);
    let DATA = JSON.parse(localStorage.getItem("events")) || [];

    DATA = DATA.map((day) => {
      if (day.name === dayName) {
        return {
          ...day,
          events: [...day.events, updatedFormData],
        };
      }
      return day;
    });

    localStorage.setItem("events", JSON.stringify(DATA));
    setIsOpenState(false);

    // Clear form inputs
    setFormData({
      date: "",
      startTime: 0,
      endTime: 0,
      title: "",
      description: "",
    });
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    setIsOpenState(isOpen);
  }, [isOpen]);

  if (!isOpenState) {
    return null;
  }

  return (
    <Dialog open={isOpenState} onClose={onCancel}>
      <DialogHeader>
        <div className="flex w-full items-center justify-center mb-3 h-[40px]">
          <h2 className="text-xl  font-bold">ADD EVENT</h2>
          {/* <button className="px-4 py-2 rounded" onClick={onCancel}>
            <ImCross />
          </button> */}
        </div>
      </DialogHeader>
      <DialogBody style={{ maxHeight: "60vh", overflowY: "auto" }}>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="modalinputs mb-4 flex ">
              <label className="block mb-1">Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="modalinputs mb-4">
              <label className="block mb-1">Start Time:</label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => handleChange("startTime", e.target.value)}
              />
            </div>
            <div className="modalinputs mb-4">
              <label className="block mb-1">End Time:</label>
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => handleChange("endTime", e.target.value)}
              />
            </div>
            <div className="modalinputs mb-4">
              <label className="block mb-1">Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="modalinputs mb-4">
              <label className="block mb-1">Description:</label>
              <input
                name="description"
                type="text"
                value={formData.description}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
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

export default AddEventModal;
