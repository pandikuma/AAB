import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import History from './History'
import InputData from './InputData';
import SomeElectrical from './SomeElectrical';
import Right from './Right';
import HeadingPage from './HeadingPage';


export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Sidebar/>
      <Topbar/>
      <HeadingPage/>
      <Routes>
        <Route path='/' element={<MainContent/>}/>
        <Route path='/History' element={<History/>}/>
        <Route path='/InputData' element={<InputData/>}/>
        <Route path='/SomeElectrical' element={<SomeElectrical/>}/>
      </Routes>
      </BrowserRouter>
    </div> )
}

export default App

