import React, { createContext, useState } from 'react';
import shiftData from '../Components/Shift/data'; // Import your initial data

// Create a context
const DataContext = createContext();

// Create a provider component
const DataContextProvider = ({ children }) => {
  // Define your data here
  const [data, setData] = useState(shiftData); // Use your initial data here

  const updateEventData = (updatedData) => {
    setData(updatedData);
  };

  return (
    <DataContext.Provider value={{ data, updateEventData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
