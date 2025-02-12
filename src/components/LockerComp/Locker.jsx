
import { useNavigate } from "react-router-dom";
import briefCaseVideo from "../../assets/videos/briefcase.mp4";
import NextButtonNavigate from "../../common/NextButtonNavigate";
import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext";



const Locker = () => {
  const navigate = useNavigate();
  const { handleStart } = useContext(TimerContext);

  const handleClickNext = () => {
    handleStart();
    navigate("/stepone");
  };


  return (
    <div className="h-full w-full">
      <div className="w-full md:min-h-full aspect-video video px-8 md:px-16 lg:px-32">
        <video
          className="aspect-video"
          src={briefCaseVideo}
          autoPlay
          controls
        ></video>
      </div>
  

      {/* next btn */}
      <div className="btn flex items-center justify-end px-8 md:px-16 lg:px-24 pb-16 lg:-mt-36">
        <div
          className="btn cursor-pointer text-white hover:scale-105 transition-all duration-200 ease-linear"
          onClick={handleClickNext}
        >
          <NextButtonNavigate navigatePropNext={"/stepone"} />
        </div>
      </div>
    </div>
  );
};

export default Locker;
