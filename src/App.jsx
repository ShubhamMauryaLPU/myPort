import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import Certificates from './pages/Certificates';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/Home' element={<HomePage/>} />
          <Route path='/About' element={<> <NavBar/><About/><Footer/></>} />
          <Route path='/Experience' element={<><NavBar/><Experience/><Footer/></>} />
          <Route path='/Education' element={<><NavBar/><Education/><Footer/></>} />
          <Route path='/Projects' element={<><NavBar/><Projects/><Footer/></>} />
          <Route path='/Certificates' element={<><NavBar/><Certificates/><Footer/></>} />
          <Route path='/contact' element={<><NavBar/><Contact/><Footer/></>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
