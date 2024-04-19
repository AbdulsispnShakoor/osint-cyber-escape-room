import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import Home from './pages/Home'
import Step0 from './pages/Step0/Step0'
import ProtectedRoute from '../utils/ProtectedRoute'
import StepOne from './components/steps/StepOne'
import StepTwo from './components/steps/StepTwo'
import StepThree from './components/steps/StepThree'
import Hero from './components/hero-section/Hero'
import Section05 from './components/section-five/Section05'
import SectionFour from './components/section-four/SectionFour'
import ContactForm from './components/contact-section/ContactForm'
import Second from './components/section-two/Second'
import Section06 from './components/section-06/Section06'
import Section03 from './components/section-three/Section03'
import StepFour from './components/steps/StepFour'
import StepFive from './components/steps/StepFive'
import StepSix from './components/steps/StepSix'
import StepSeven from './components/steps/StepSeven'
import StepEight from './components/steps/StepEight'
import StepNine from './components/steps/StepNine'
import StepTen from './components/steps/StepTen'
import StepEleven from './components/steps/StepEleven'
import StepTwelev from './components/steps/StepTweleve'
import StepThirteen from './components/steps/Stepthirteen'
import StepFourteen from './components/steps/StepFourteen'
import StepFifteen from './components/steps/StepFifteen'
import StepEnd from './components/steps/StepEnd'
import { Toaster } from 'react-hot-toast'
import { TimerContext } from './context/TimerContext';
import Timer from './common/Timer'
import Password from './components/password/Password';

import passwordcred from "/public/password.json";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

// storing into localstorage
// useEffect(()=>{
//   localStorage.setItem("json-data", JSON.stringify(passwordcred));

// },[])


  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours > 0 ? hours + ':' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
  };
// {formatTime(timer)}
  return (
    // step0-bg class for an image
    <TimerContext.Provider value={{handleStart,handleStop,handleReset,timer,formatTime}}>

    
    <div className=' bg-[#001632] min-h-screen relative'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/timerExtra' element={<Timer />} />
          <Route path='/about' element={<SectionFour />} />
          <Route path='/services' element={<Section03 />} />
          <Route path='/cyberEscapeRooms' element={<Section05 />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/playOpShadowTrace' element={<Second/>} />
          <Route path='/whyOsint?' element={<Section06/>} />
          <Route path='/change-password' element={<Password />} />
          <Route path='/home' element={<Home />} />
          <Route path='/step' element={
            <ProtectedRoute>
              <Step0 handleStart={handleStart}/>
            </ProtectedRoute>
          } />
          <Route path='/stepone' element={
            <ProtectedRoute>
              <StepOne />
            </ProtectedRoute>
          } />
          <Route path='/steptwo' element={
            <ProtectedRoute>
              <StepTwo />
            </ProtectedRoute>
          } />
          <Route path='/stepthree' element={
            <ProtectedRoute>
              <StepThree />
            </ProtectedRoute>
          } />
          <Route path='/stepfour' element={
            <ProtectedRoute>
              <StepFour />
            </ProtectedRoute>
          } />
          <Route path='/stepfive' element={
            <ProtectedRoute>
              <StepFive />
            </ProtectedRoute>
          } />
          <Route path='/stepsix' element={
            <ProtectedRoute>
              <StepSix />
            </ProtectedRoute>
          } />
          <Route path='/stepseven' element={
            <ProtectedRoute>
              <StepSeven />
            </ProtectedRoute>
          } />
          <Route path='/stepeight' element={
            <ProtectedRoute>
              <StepEight />
            </ProtectedRoute>
          } />
          <Route path='/stepnine' element={
            <ProtectedRoute>
              <StepNine />
            </ProtectedRoute>
          } />
          <Route path='/stepten' element={
            <ProtectedRoute>
              <StepTen />
            </ProtectedRoute>
          } />
          <Route path='/stepeleven' element={
            <ProtectedRoute>
              <StepEleven />
            </ProtectedRoute>
          } />
          <Route path='/steptwelev' element={
            <ProtectedRoute>
              <StepTwelev />
            </ProtectedRoute>
          } />
          <Route path='/stepthirteen' element={
            <ProtectedRoute>
              <StepThirteen />
            </ProtectedRoute>
          } />
          <Route path='/stepfourteen' element={
            <ProtectedRoute>
              <StepFourteen />
            </ProtectedRoute>
          } />
          <Route path='/stepfifteen' element={
            <ProtectedRoute>
              <StepFifteen />
            </ProtectedRoute>
          } />
          <Route path='/stepsend' element={
            <ProtectedRoute>
              <StepEnd />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false}/>
    </div>
    </TimerContext.Provider>
  )
}

export default App
 