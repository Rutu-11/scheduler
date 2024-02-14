import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ScheduleView } from "react-schedule-view";
import "./Shift.css";
import vector1 from "../../assets/vector1.svg";
import ShiftEditModal from "./ShiftEditModal";
import { AiOutlineEdit } from "react-icons/ai";
import AddShiftModal from "./AddShiftModal";
import CustomDayHeader from "./CustomDayHeader";
import data from "./data";

const Shift = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editableRow, setEditableRow] = useState(null);
  const [addShift, setAddShift] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventValue, setEventValue] = useState({});

  const currentDateEvents = data.filter((day) => {
    return (
      day.name === selectedDate.toLocaleDateString("en-US", { weekday: "long" })
    );
  });

  useEffect(() => {}, []);

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
    setAddShift(!addShift);
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
    setAddShift(false);
  };

  return (
    <div>
      <div className="flex w-full overflow-y-auto font-Lato">
        <div className="w-full">
          <div className="flex">
            <div>{/* SettingSidebar */}</div>
            <div className="h-[110vh]   overflow-y-auto ">
              <div className="w-full  ">
                <div className="flex w-full items-center justify-start gap-4 px-2 py-2 heading_grey">
                  <p className="text-lg font-bold uppercase">SHIFTS</p>
                  <div className="w-full flex justify-between items-center  ">
                    <div>
                      <button
                        className="bg-gradient-to-r from-purple-600 to-indigo-700   font-medium text-md leading-[19.36px] px-5   min-w-[15px]    min-h-[38px] rounded-md shadow-md hover:shadow-lg  font-inter"
                        onClick={handleSaveShiftClick}
                      >
                        Add New Shift
                      </button>
                    </div>
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
                      <img src={vector1} alt="" />
                    </div>
                    <div>
                      <button
                        className="bg-gradient-to-r from-purple-600 to-indigo-700  file: font-medium text-md leading-[19.36px] px-5   min-w-[15px]    min-h-[38px] rounded-md shadow-md hover:shadow-lg  font-inter"
                        onClick={handlePreviousDay}
                      >
                        Previous Day
                      </button>
                      <button
                        className="bg-gradient-to-r from-purple-600 to-indigo-700   font-medium text-md leading-[19.36px] px-5   min-w-[15px]    min-h-[38px] rounded-md shadow-md hover:shadow-lg  font-inter"
                        onClick={handleNextDay}
                      >
                        Next Day
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ScheduleView
                  daySchedules={currentDateEvents}
                  viewStartTime={6}
                  viewEndTime={30}
                  customDayHeader={CustomDayHeader}
                  handleEventClick={handleEventClick}
                  theme="google"
                ></ScheduleView>
              </div>
              <ShiftEditModal
                isOpen={editableRow}
                onSave={handleSaveClick}
                onCancel={handleCancelEdit}
                initialdata={eventValue}
              />
              <AddShiftModal
                isOpen={addShift}
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

export default Shift;

// import React, { useEffect, useState } from "react";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { ScheduleView } from "react-schedule-view";
// import "./Shift.css";
// import vector1 from "../../assets/vector1.svg";
// import ShidtEditModal from "./ShiftEditModal";
// import { AiOutlineEdit } from "react-icons/ai";
// import AddShiftModal from "./AddShiftModal";
//  import CustomDayHeader from "./CustomDayHeader";
// import data from "./data";
// import renderEvent from "./RenderEvent";
// import calculateStartOfWeek from "./calculateStartOfWeek";

// const Shift = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [editableRow, setEditableRow] = useState(null);
//   const [addShift, setAddShift] = useState(false);
//    const [selectedEvent, setSelectedEvent] = useState(null);
// const [eventvalue,seteventvalu]=useState({})
//   useEffect(() => {
//     // dispatch(getAllShifts())
//   }, []);

//   const handleSaveClick = () => {
//     setEditableRow(null);
//   };

//   const handleCancelEdit = () => {
//     setEditableRow(null);
//   };

//   const handleEditClick = () => {
//     setEditableRow(!editableRow);
//   };

//   const handleSaveShiftClick = () => {
//     console.log(addShift)
//     setAddShift(!addShift);
//   };

//   const handleCancelShift = () => {
//     setAddShift(false);
//   };

//   useEffect(() => {}, []);
//   const handleEventClick = (event) => {
//     setSelectedEvent(event);

//     if (event) {
//       console.log("dasdasdasd",event);
//       const eventStartTime = event.date;
//       const currentDate = new Date();
//       const formattedDate = currentDate.toISOString().split("T")[0];

//         // Event is in the past, open ShiftPriveModal
//         handleEditClick();
//      seteventvalu(event)
//     } else {
//       handleSaveShiftClick();
//     }
//   };

//   const daysOfWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   const startOfWeek = calculateStartOfWeek(selectedDate);

//   return (
//     <div>
//       <div className="flex w-full overflow-y-auto font-Lato">
//         {/* <MainSideBar /> */}
//         <div className="w-full">
//           {/* <TopNav /> */}
//           <div className="flex">
//             <div>{/* <SettingSidebar /> */}</div>
//             <div className="h-[110vh]   overflow-y-auto ">
//               <div className="w-full  ">
//                 <div className="flex w-full items-center justify-start gap-4 px-2 py-2 heading_grey">
//                   <p className="text-lg font-bold uppercase">SHIFTS</p>
//                   <div className="w-full flex justify-between items-center  ">
//                     <div className="flex  border-2 border-gray bg-white rounded-lg pr-2">
//                       <div>
//                         <ReactDatePicker
//                           onChange={(date) => setSelectedDate(date)}
//                           selected={selectedDate}
//                           highlightDates={[new Date()]}
//                           calendarClassName="w-full"
//                           className="w-full px-3 py-2 rounded-lg"
//                         />
//                       </div>
//                       <img src={vector1} alt="" />
//                     </div>

//                     <div>
//                       <button
//                         className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-medium text-md leading-[19.36px] px-5   min-w-[15px]    min-h-[38px] rounded-md shadow-md hover:shadow-lg  font-inter"
//                         onClick={handleSaveShiftClick}
//                       >
//                         Add New Shift
//                       </button>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//               <div>
//                 <ScheduleView
//                   daySchedules={data}
//                   viewStartTime={6}
//                   viewEndTime={30}
//                   customDayHeader={CustomDayHeader}
//                   handleEventClick={handleEventClick}
//                   theme="google"
//                   renderEvent={(event, startTime) => {
//                     const eventStartTime = new Date(startTime);
//                     const isPast = eventStartTime < new Date();

//                     const noData = !data.some((day) =>
//                       day.events.some(
//                         (e) =>
//                           e.startTime.getTime() === eventStartTime.getTime()
//                       )
//                     );

//                     // Conditionally apply the class for time slots without data
//                     const className = noData ? "no-data" : "";
//                     console.log("nodata", noData);
//                     return renderEvent(event, isPast, className);
//                   }}
//                 ></ScheduleView>
//               </div>

//               <ShidtEditModal
//                 isOpen={editableRow}
//                 onSave={handleSaveClick}
//                 onCancel={handleCancelEdit}
//                 initialdata={eventvalue}
//               />
//               <AddShiftModal
//                 isOpen={addShift}
//                 onSave={handleSaveShiftClick}
//                 onCancel={handleCancelShift}

//               />

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shift;
