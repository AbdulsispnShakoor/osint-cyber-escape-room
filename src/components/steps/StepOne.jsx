import React, { useContext } from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import video2 from '../../assets/videos/OSINT CER task 1.mp4';
import PrevButtonNavigate from '../../common/PrevButtonNavigate';
import NextButtonNavigate from '../../common/NextButtonNavigate';
import Timer from '../../common/Timer';
import { TimerContext } from '../../context/TimerContext';

const StepOne = () => {
const {handleReset} = useContext(TimerContext)
  return (
    <div className='stepOne_bg text-white min-h-[70vh] px-4 sm:px-36 md:px-64 py-16'> 
      <div className="main ">
          <div className="top flex items-center justify-between space-y-4 md:justify-between flex-wrap md:flex-nowrap">
            <HeadingTwo/>
            <div onClick={handleReset} className="time_prev flex items-center justify-center space-x-4 ">
              {/* <button onClick={() => navigate(-1)}>
                <PrevButton />
              </button> */}
              <PrevButtonNavigate navigatePropPrev={-1} />
              <Timer />
            </div>
          </div>
          <div className="bottom flex items-center justify-between flex-wrap lg:flex-nowrap space-x-6 mt-8">
            <div className="video">
             <video src={video2} autoPlay controls></video>
            </div>
            <div className="text lg:px-8">
              <p>
              Excellent Detective, you got into the briefcase! 
              On your computer you have a number of Open
              Source Intelligence Tools at your disposal which are
              accessible on the open web. Use any of these tools
              to help you further the investigation. 
              Just remember to operate within the legal
              framework. <br />
              I will email you some intelligence that we have had
              sent through by the Italian Port police about a ship
              with a suspected container of Snake Eyes drugs.
              I will send you the photo now. <br />
              Your task is the following:
              </p>
              <ul className='md:text-2xl font-bold py-6'>
                <li>One - Locate where the ship is?</li>
                <li>Two - Where it has come from?</li>
                <li> Three - Where is the ship going to? </li>
              </ul>
              <p>
                Call me as soon as you have this information.
              </p>
            </div>
          </div>
          <NextButtonNavigate navigatePropNext={"/steptwo"}/>
      </div>
    </div>
  )
}

export default StepOne
