 
 import { useEffect } from 'react';
import './App.css'
import Shift from './Components/Shift/Shift'
import { DataContextProvider } from './Context/ContextProvider';
import data from './Components/Shift/data'
function App() {
 
  useEffect(()=>{
    const DATA = JSON.parse(localStorage.getItem('events'));
    if(!DATA){
      localStorage.setItem("events", JSON.stringify(data));
    }
    
  },[])
  return (
    <DataContextProvider>
     <Shift/>
    </DataContextProvider>
  )
}

export default App
