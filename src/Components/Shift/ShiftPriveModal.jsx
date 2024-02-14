import React, { useState, useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

const ShiftPriveModal
    = ({ isOpen, onSave, selecteddate, onCancel }) => {
        const [isOpenState, setIsOpenState] = useState(isOpen);
        const dummyData = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            bookedby: ["a", "b", "c", "d"],
            confirmationMailSending: false,
            additionalGuest: [],
            reservationTags: [],
            notes: "",
            createdAt: selecteddate,
        };
        const [formData, setFormData] = useState(dummyData);

        useEffect(() => {
            setIsOpenState(isOpen);
        }, [isOpen]);

        useEffect(() => {
            if (isOpen) {
                setFormData(dummyData);
            }
        }, [isOpen]);

        if (!isOpenState) {
            return null;
        }

        const handleInputChange = (field, value) => {
            // Update the formData state when input changes
            setFormData({ ...formData, [field]: value });
        };

        const handleSaveClick = () => {
            onSave(formData);
            setIsOpenState(false);
            console.log("FormData after Save:", formData); // Log the formData
        };

        return (
            <div
                className={`border-2 border-custom-blue-400 fixed top-0 right-0 h-full w-2/5 bg-white transition-transform ease-in-out duration-300 ${isOpenState ? 'transform translate-x-0' : 'transform translate-x-full'
                    } overflow-y-auto`}
            >
                <div className="p-4   ">
                    <div className=' button flex items-center mb-3 justify-between h-[40px]' >
                        <h2 className="text-xl font-medium">DINNER</h2>
                        <button className="px-4 py-2 rounded" onClick={onCancel}>
                            <ImCross />
                        </button>
                    </div>

                    <div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Shift Category</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>Dinner</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Days</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>S, M, T, W, TH, F, SA</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Start Date</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>11/12/2022</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>End Date</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>Indefinite</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Time</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>7:30 PM - 12:00 AM</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Interval</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>30 Minutes</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Floor Plan Layout</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>Default</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Seating Areas</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>Restaurant, Bar, Sushi Bar</p>
                            </div>
                        </div>
                    </div>



                    <h2 className="text-[#000000] text-[17px]  mt-6 font-medium">Payment & Policy</h2>

                    <div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Payment Requirements</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>No</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Payment Requirements</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>No</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Customer can modify/cancel</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>At any time</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Policy</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>Default Booking Policy</p>
                            </div>
                        </div>

                    </div>



                    <h2 className="text-[#000000] text-[17px]  mt-6 font-medium">Capacity</h2>

                    <div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Enforce Party Size on Internal Bookings</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>No</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Party Size min</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>1</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Party Size max</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>30</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Maximum total covers for shift</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>No Limit</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Allow double booking</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>No  </p>
                            </div>
                        </div>
                    </div>




                    {/* .,........... */}



                    <h2 className="text-[#000000] text-[17px]  mt-6 font-medium">Duration</h2>

                    <div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>1 guest</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>2 hrs</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>2 guest</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>2 hrs</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>3 guest</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>2 hrs</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>4 guest</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>2 hrs</p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>5 guest</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>2hrs  </p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>6 guest</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>2hrs  </p>
                            </div>
                        </div>


                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>7 guest</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>2hrs  </p>
                            </div>
                        </div>

                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>8 guest</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>2hrs  </p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>9 guest</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>2hrs  </p>
                            </div>
                        </div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>10+ guest</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>2hrs  </p>
                            </div>
                        </div>
                    </div>

                    {/* ............... */}
                    <h2 className="text-[#000000] text-[17px]  mt-6 font-medium">Pacing</h2>

                    <div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>Covers per interval</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>30</p>
                            </div>
                        </div>
                    </div>

                    {/* ............... */}
                    <h2 className="text-[#000000] text-[17px]  mt-6 font-medium">Perks & Upgrades</h2>

                    <div>
                        <div className='flex  justify-between border-b border-[#CED4DA] py-2'>
                            <div>
                                <p className='text-[#858E96] text-[14px] font-medium font-Lato'>No upgrades selected</p>
                            </div>
                            <div>
                                <p className='text-[#212529] text-[14px] font-medium font-Lato'>30</p>
                            </div>
                        </div>
                    </div>


                    <div className='my-3 flex justify-between items-center justify-center'>
                        <button className="px-4 py-2 mr-2  rounded" onClick={handleSaveClick}>
                            Edit
                        </button>
                        <button className="px-4 py-2  rounded" onClick={onCancel}>
                            Delete
                        </button>
                        <button className="px-4 py-2  rounded" onClick={onCancel}>
                            <BsThreeDotsVertical />
                        </button>
                    </div>

                </div>
            </div>
        );
    };

export default ShiftPriveModal
    ;
