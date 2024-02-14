import React, { useState, useEffect } from 'react';
import { ImCross } from 'react-icons/im';
const initialdata1={
    date: ' ',
    startTime: 12,
    endTime: 12,
    title: '',
    description: '',
}
const formatTime = (time) => {
    const hours = Math.floor(time);
    const minutes = Math.round((time - hours) * 60);
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${formattedHours}:${formattedMinutes}`;
};
const ShidtEditModal = ({ isOpen, onSave, onCancel,initialdata }) => {
    const [isOpenState, setIsOpenState] = useState(isOpen);
    const [formData, setFormData] = useState({
        date: '',
        startTime: '',
        endTime: '',
        title: '',
        description: '',
    });
console.log("initialdata",initialdata)
    useEffect(() => {
        setIsOpenState(isOpen);

    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
           if ( initialdata) {
            const formattedStartTime = formatTime(initialdata.startTime);
            const formattedEndTime = formatTime(initialdata.endTime);

            setFormData({
                date: initialdata?.date,
                startTime: formattedStartTime,
                endTime: formattedEndTime,
                title: initialdata.title,
                description: initialdata.description,
            });
        }
        }
    }, [isOpen,initialdata]);
  
    if (!isOpenState) {
        return null;
    }

    const handleInputChange = (field, value) => {
        // Update the formData state when input changes
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        onSave(formData);
        setIsOpenState(false);
        console.log("FormData after Save:", formData); // Log the formData
    };

   

    return (
        <div className={`border-2 border-custom-blue-400 fixed top-0 right-0 h-full w-2/5 bg-white transition-transform ease-in-out duration-300 ${isOpenState ? 'transform translate-x-0' : 'transform translate-x-full'} overflow-y-auto`}>
            <div className="p-4">
                <div className="flex items-center justify-between mb-3 h-[40px]">
                    <h2 className="text-xl font-medium">EDIT SHIFT</h2>
                    <button className="px-4 py-2 rounded" onClick={onCancel}>
                        <ImCross />
                    </button>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">Date:</label>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => handleInputChange('date', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Start Time:</label>
                            <input
                                type="time"
                                value={formData.startTime}
                                onChange={(e) => handleInputChange('startTime', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">End Time:</label>
                            <input
                                type="time"
                                value={formData.endTime}
                                onChange={(e) => handleInputChange('endTime', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Title:</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Description:</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">Save</button>
                        <button type="button" className="px-4 py-2 bg-gray-300 text-gray-700 rounded" onClick={onCancel}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ShidtEditModal;