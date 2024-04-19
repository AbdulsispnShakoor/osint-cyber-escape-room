import React, {  useContext, useLayoutEffect, useState } from 'react';
import { TimerContext } from '../context/TimerContext';


const Timer = () => {

const CountdownTimer = () => {
  const { timer,formatTime} = useContext(TimerContext);
  // const [timeLeft, setTimeLeft] = useState(120 * 60); // 120 minutes

  // useLayoutEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeLeft(timeLeft - 1);
  //   }, 1000);

  //   // Clear timer on component unmount
  //   return () => clearTimeout(timer);
  // }, [timeLeft]);

  // // Convert minutes to hours and minutes
  // const hours = Math.floor(timeLeft / 60);
  // const minutes = timeLeft % 60;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-sm font-bold text-gray-800">
        {/* {hours.toString().padStart(2, '0')} : {minutes.toString().padStart(2, '0')} */}
        {
          formatTime(timer)
        }
      </div>
    </div>
  );
};

// export default CountdownTimer;
  return (
    <div className="timer bg-gray-50 rounded-full w-16 h-16  border-2 border-dashed border-blue-700 text-white flex items-center justify-center font-bold text-3xl">
    <CountdownTimer />
   </div>
  )
}

export default Timer
