import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import "react-time-picker/dist/TimePicker.css";
import "./Shift.css";

const AddShiftModal = ({ isOpen, onSave, onCancel }) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSave(formData);
    setIsOpenState(false);
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
        <div className="flex w-full items-center justify-between mb-3 h-[40px]">
          <h2 className="text-xl font-medium">ADD EVENT</h2>
          <button className="px-4 py-2 rounded" onClick={onCancel}>
            <ImCross />
          </button>
        </div>
      </DialogHeader>
      <DialogBody style={{ maxHeight: "60vh", overflowY: "auto" }}>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex ">
              <label className="block mb-1">Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Start Time:</label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => handleChange("startTime", e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">End Time:</label>
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => handleChange("endTime", e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className="flex justify-end">
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

export default AddShiftModal;

//  import React, { useState, useEffect } from "react";
// import { ImCross } from "react-icons/im";
//  import 'react-time-picker/dist/TimePicker.css';
// import "./Shift.css"
// const AddShiftModal = ({ isOpen, onSave, onCancel }) => {
//   const [isOpenState, setIsOpenState] = useState(isOpen);
//   const [formData, setFormData] = useState({
//     date: '',
//     startTime: '',
//     endTime: '',
//     title: '',
//     description: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     onSave(formData);
//     setIsOpenState(false);
//   };

//   const handleChange = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   useEffect(() => {
//     setIsOpenState(isOpen);
//   }, [isOpen]);

//   if (!isOpenState) {
//     return null;
//   }

//   return (
//     <div className={`addmodal fixed top-0 right-0 h-100% w-2/5  transition-transform ease-in-out duration-300 ${isOpenState ? "transform translate-x-0" : "transform translate-x-full"} overflow-y-auto`}>
//       <div className="p-4">
//         <div className="flex items-center justify-between mb-3 h-[40px]">
//           <h2 className="text-xl font-medium">ADD SHIFT</h2>
//           <button className="px-4 py-2 rounded" onClick={onCancel}>
//             <ImCross />
//           </button>
//         </div>
//         <div>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block mb-1">Date:</label>
//               <input type="date" name="date" value={formData.date} onChange={(e) => handleChange(e.target.name, e.target.value)} />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1">Start Time:</label>
//               <input
//                 type="time"
//                 value={formData.startTime}
//                 onChange={(e) => handleChange('startTime', e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1">End Time:</label>
//               <input
//                 type="time"
//                 value={formData.endTime}
//                 onChange={(e) => handleChange('endTime', e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1">Title:</label>
//               <input type="text" name="title" value={formData.title} onChange={(e) => handleChange(e.target.name, e.target.value)} />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1">Description:</label>
//               <textarea name="description" value={formData.description} onChange={(e) => handleChange(e.target.name, e.target.value)} />
//             </div>
//             <div className="flex justify-end">
//               <button type="submit" className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">Save</button>
//               <button type="button" className="px-4 py-2 bg-gray-300 text-gray-700 rounded" onClick={onCancel}>Cancel</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddShiftModal;
