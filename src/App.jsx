 
 import { useEffect } from 'react';
import './App.css'
import Events from './Components/Events/Events'
import data from './Components/DataBase/data'
function App() {
 
  useEffect(()=>{
    // const DATA = JSON.parse(localStorage.getItem('events'));
    // if(!DATA){
    //   localStorage.setItem("events", JSON.stringify(data));
    // }
    localStorage.setItem("events", JSON.stringify(data));
  },[])
  return (
    <>
     <Events/>
    </>
  )
}

export default App
