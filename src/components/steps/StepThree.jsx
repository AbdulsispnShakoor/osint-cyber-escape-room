import HeadingTwo from '../../common/HeadingTwo'
import PrevButtonNavigate from '../../common/PrevButtonNavigate'
import Timer from '../../common/Timer'
import NextButton from '../svg/NextButton'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const StepThree = () => {


  const firstFormData = useForm();
  const { register, handleSubmit, control,formState: { errors } } = firstFormData;


  const navigate = useNavigate()


  let questionsFirstForm = [
    {
      id: 1,
      quiz: "Locate where the ship is?",
      ans: "open field"
    },
    {
      id: 2,
      quiz: "Where is the ship from?",
      ans: "panama"
    },
    {
      id: 3,
      quiz: "Where it has come from?",
      ans: "open field"
    },
    {
      id: 4,
      quiz: "Where is destined for?",
      ans: "open field"
    },
  ];


  return (
    <div className='lg:min-h-[70vh] px-4 sm:px-16 py-16 text-white'>
    <div className="top lg:px-48 flex items-center justify-between space-y-4 md:justify-between flex-wrap lg:flex-nowrap">
      <HeadingTwo />
      <div className="time_prev flex items-center justify-center space-x-4 ">
        <PrevButtonNavigate navigatePropPrev={-1} />
        <Timer />
      </div>
    </div>
    <div className="form w-full">
      <form onSubmit={(e) =>  e.preventDefault()} className='w-full xl:px-36  xl:w-3/4 py-8 mx-auto '   noValidate>

        {
          questionsFirstForm.length > 0 && questionsFirstForm.map((question) => {
            const { quiz} = question;
            return (
              <div key={question.id} className="input_group flex justify-center flex-col xl:flex-row lg:justify-between items-center space-x-4 flex-wrap lg:flex-nowrap space-y-4 mb-4">
                <label htmlFor={quiz} className='text-xl md:text-xl font-semibold'>{quiz}</label>
                <div className="flex flex-col space-y-1 w-2/4">

                <input
                  type="text"
                  autoComplete='off'
                  id={quiz}
                  name={quiz}
                  placeholder='enter your answer here'
                  className={` p-3 -ml-4 text-black ${errors[quiz]?.message ? "outline-red-500" :" "}`}
                  {...register(quiz, { required: `${quiz} is required or answer didn't match`})}
                /> 
                {errors[quiz]?.message && <p className="text-red-500" >{errors[quiz]?.message}</p>}
                
                </div>
              </div>
            );
          })
        }
      </form>
        <div className='py-2 px-16 lg:px-64 flex items-end justify-end relative' >
          <div className='cursor-pointer'  onClick={() => {
            handleSubmit((data) => {

  
              let a = 0 ;
              let objLength = Object.keys(data).length;

              questionsFirstForm.forEach(question => {
                 
                let enterAns = data[question.quiz];
                let lower = enterAns.toLowerCase().trim();

                if (lower !== " ") {    
                    if(lower === "panama"){

                      a++
                      toast.success(`${lower} : matched ✅`,{
                        duration: 2000,
                      })
                    }
                      if(lower !== "panama" && question.id === 2){
                        toast.error(`${question.quiz} : wrong answer ❌`,{
                          duration: 2000,
                        })
                    }
                  }
                });
                if(a === 1){
                  localStorage.setItem("firstFormData", JSON.stringify(data));
                  navigate("/stepfour");
                }

              })();

            }}><NextButton /></div>
          
        </div>
    </div>

  </div>
      
  )
}

export default StepThree;
