import { useNavigate } from "react-router-dom";
// import briefCaseVideo from "../../assets/videos/briefcase.mp4";
// import briefCaseOpenCode from "../../assets/videos/brief case open video.mp4";
import lockerImg from '../../assets/images/locker.png';
import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import PrevButtonNavigate from "../../common/PrevButtonNavigate";
import Timer from "../../common/Timer";

const LockerOne = () => {
    const {handleReset} = useContext(TimerContext)
    const navigate = useNavigate();
    const { handleStart } = useContext(TimerContext);
  
    const firstFormData = useForm();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = firstFormData;
  
    const handleClickNext = (data) => {
      handleStart();
      navigate("/ship-info-step");
      console.log(data)
    };
  
    const handlePinSubmit = () => {
      handleSubmit((data) => {
        let {
          pin_codeOne,
          pin_codeTwo,
          pin_codeThree,
          pin_codeFour,
          pin_codeFive,
          pin_codeSix,
        } = data;
  
        if (pin_codeOne !== "0") {
          return toast.error("Please enter a valid pin code one");
        } else if (pin_codeTwo !== "5") {
          return toast.error("Please enter a valid pin code two");
        } else if (pin_codeThree !== "1") {
          return toast.error("Please enter a valid pin code three");
        } else if (pin_codeFour !== "2") {
          return toast.error("Please enter a valid pin code four");
        } else if (pin_codeFive !== "8") {
          return toast.error("Please enter a valid pin code five");
        } else if (pin_codeSix !== "6") {
          return toast.error("Please enter a valid pin code six");
        } else {
          toast.success("All pins are valid");
          handleClickNext(data);
        }
      })();
    };




  return (
    

      <div className="flex flex-col items-center justify-center px-2 w-full md:px-16 lg:px-24 py-8 ">
        <div className="top flex w-full items-end justify-end space-x-4 space-y-4 md:justify-end flex-wrap md:flex-nowrap">
            
            <div   className="time_prev flex items-center justify-center space-x-4 ">
              <div onClick={handleReset}>
                <PrevButtonNavigate navigatePropPrev={-1}/>
              </div>
                <Timer />
            </div>
       </div>
        <div className="video flex items-center justify-center flex-col px-4">
          {/* <video
            className="w-96 px-4 lg:w-2/4 h-fit"
            src={briefCaseOpenCode}
            autoPlay
            controls
          ></video> */}
          <img  className="w-96 px-4 lg:w-2/4 h-fit" src={lockerImg} alt="locker suitcase" />
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            className="locker_pin flex justify-between w-full space-x-2 px-4 lg:w-2/4 mt-8"
          >
            <div className="">
              <div className="inputs flex gap-2">
                <input
                  type="number"
                  defaultValue={0}
                  min="0"
                  max="9"
                  id="pin_codeOne"
                  name="pin_code one"
                  {...register("pin_codeOne", {
                    required: `pin_codeOne is required`,
                  })}
                  className="bg-slate-700 w-8 lg:w-16 text-center h-16 lg:h-24 text-2xl lg:text-5xl rounded-md text-white"
                />
                {errors["pin_codeOne"]?.message && (
                  <p className="text-red-500 text-xs">
                    {errors["pin_codeOne"]?.message}
                  </p>
                )}
                <input
                  type="number"
                  min="0"
                  max="9"
                  defaultValue={0}
                  id="pin_codeTwo"
                  name="pin_codeTwo"
                  {...register("pin_codeTwo", {
                    required: `pin_codeTwo is required`,
                  })}
                  className="bg-slate-700 w-8 lg:w-16 text-center h-16 lg:h-24 text-2xl lg:text-5xl rounded-md text-white"
                />
                {errors["pin_codeTwo"]?.message && (
                  <p className="text-red-500 text-xs">
                    {errors["pin_codeTwo"]?.message}
                  </p>
                )}
                <input
                  type="number"
                  min="0"
                  max="9"
                  defaultValue={0}
                  id="pin_codeThree"
                  name="pin_codeThree"
                  {...register("pin_codeThree", {
                    required: `pin_codeThree is required`,
                  })}
                  className="bg-slate-700 w-8 lg:w-16 text-center h-16 lg:h-24 text-2xl lg:text-5xl rounded-md text-white"
                />
                {errors["pin_codeThree"]?.message && (
                  <p className="text-red-500 text-xs">
                    {errors["pin_codTthree"]?.message}
                  </p>
                )}
              </div>
              <button
                onClick={handlePinSubmit}
                className="mt-4 px-4 lg:px-10 py-3 bg-black text-white rounded-full border border-white flex items-center justify-between space-x-2 lg:space-x-4 font-medium text-sm lg:font-bold"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
                <span>Swipe to start</span>
              </button>
            </div>
            <div className="inputs flex items-center justify-between flex-col">
              <div className="flex gap-2">
                <input
                  type="number"
                  min="0"
                  max="9"
                  defaultValue={0}
                  id="pin_codeFour"
                  name="pin_codeFour"
                  {...register("pin_codeFour", {
                    required: `pin_codeFour is required`,
                  })}
                  className="bg-slate-700 w-8 lg:w-16 text-center h-16 lg:h-24 text-2xl lg:text-5xl rounded-md text-white"
                />
                {errors["pin_codeFour"]?.message && (
                  <p className="text-red-500 text-xs">
                    {errors["pin_codeFour"]?.message}
                  </p>
                )}

                <input
                  type="number"
                  min="0"
                  max="9"
                  defaultValue={0}
                  id="pin_codeFive"
                  name="pin_codeFive"
                  {...register("pin_codeFive", {
                    required: `pin_codeFive is required`,
                  })}
                  className="bg-slate-700 w-8 lg:w-16 text-center h-16 lg:h-24 text-2xl lg:text-5xl rounded-md text-white"
                />
                {errors["pin_codeFive"]?.message && (
                  <p className="text-red-500 text-xs">
                    {errors["pin_codeFive"]?.message}
                  </p>
                )}
                <input
                  type="number"
                  min="0"
                  max="9"
                  defaultValue={0}
                  id="pin_codeSix"
                  name="pin_codeSix"
                  {...register("pin_codeSix", {
                    required: `pin_codeSix is required`,
                  })}
                  className="bg-slate-700 w-8 lg:w-16 text-center h-16 lg:h-24 text-2xl lg:text-5xl rounded-md text-white"
                />
                {errors["pin_codeSix"]?.message && (
                  <p className="text-red-500 text-xs">
                    {errors["pin_codeSix"]?.message}
                  </p>
                )}
              </div>
              <button
                onClick={handlePinSubmit}
                className="mt-4 px-4 lg:px-10 py-3 bg-black text-white rounded-full border border-white flex items-center justify-between space-x-2 lg:space-x-4 font-medium lg:font-bold"
              >
                <span>Swipe to start</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>


  )
}

export default LockerOne