// import React from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import video2 from '../../assets/videos/OSINT CER task 1.mp4';
import PrevButtonNavigate from '../../common/PrevButtonNavigate';
import NextButtonNavigate from '../../common/NextButtonNavigate';
import Timer from '../../common/Timer';


const ShipInfo = () => {
    return (
    <div className='text-white px-4 sm:px-36 lg:px-64 py-16 flex justify-center flex-col gap-8'>
       <div className="top flex items-center justify-between space-y-4 md:justify-between flex-wrap md:flex-nowrap">
            <HeadingTwo/>
            <div   className="time_prev flex items-center justify-center space-x-4 ">
              <div >
                <PrevButtonNavigate navigatePropPrev={-1}/>
              </div>
                <Timer />
            </div>
       </div>
       <div className="video ">
             <video src={video2} autoPlay controls></video>
        </div>
       
    
        <NextButtonNavigate navigatePropNext={'/steptwo'}/>
    </div>
  )
}

export default ShipInfo
