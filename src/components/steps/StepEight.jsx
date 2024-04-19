import React, { useState } from 'react'
import HeadingTwo from '../../common/HeadingTwo'
import PrevButtonNavigate from '../../common/PrevButtonNavigate'
import Timer from '../../common/Timer'
import { useForm } from 'react-hook-form'
import NextButton from '../svg/NextButton'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const StepEight = () => {

    const navigate = useNavigate()
    const firstFormData = useForm();
    const { register, handleSubmit, control,formState: { errors } } = firstFormData;
  
    let questionsThirdForm = [
        {
            id:1,
            quiz:"Locate which company they are laundaring money through?",
            ans:"beaumont stainless steels ltd"
        },
        {
            id:2,
            quiz:"Find out more about the company? insert company number",
            ans:"01155165"
        },
        {
            id:3,
            quiz:"Are they still active?",
            ans:"no"
        },
        {
            id:4,
            quiz:"Name of the Accountant",
            ans:"colin neil bates"
        },
        {
            id:5,
            quiz:"DOB and Address?(MM/YY only)",
            ans:"08/1950 and 6 cottenham road, histon, cambridge, cambridgeshire, cb4 4es"
        }
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
          questionsThirdForm.length > 0 && questionsThirdForm.map((question) => {
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
                  {...register(quiz, { required: `${quiz} is required!`})}
                /> 
                {errors[quiz]?.message && <p className="text-red-500" >{errors[quiz]?.message}</p>}
                
                </div>
              </div>
            );
          })
        }
      </form>
        <div className='py-2 px-16 lg:px-64 flex items-end justify-end relative' >
          <div className='cursor-pointer' onClick={() => {
              handleSubmit((data) => {

                let a = 0 ;
                let objLength = Object.keys(data).length;

                questionsThirdForm.forEach(question => {

                  let enterAns = data[question.quiz];
                  let lower = enterAns.toLowerCase().trim();
    
                  if (lower !== " ") {    
                    if(lower === "beaumont stainless steels ltd"){

                      a++
                      toast.success(`${lower} : matched ✅`,{
                        duration: 2000,
                      })
                    }else if(lower === "01155165"){
                        a++
                        toast.success(`${lower} : matched ✅`,{
                          duration: 2000,
                        })
                    }else if(lower === "no"){
                        a++
                        toast.success(`${lower} : matched ✅`,{
                          duration: 2000,
                        })
                    
                    }else if(lower === "colin neil bates"){
                        a++
                        toast.success(`${lower} : matched ✅`,{
                          duration: 2000,
                        })
                    }

                    let q1Check = lower !== "beaumont stainless steels ltd" && question.id === 1;
                    let q2Check = lower !== "01155165" && question.id === 2;
                    let q3Check = lower !== "no" && question.id === 3;
                    let q4Check = lower !== "colin neil bates" && question.id === 4;

                      if(q1Check || q2Check  || q3Check || q4Check){
                        toast.error(`${question.quiz} : wrong answer ❌`,{
                          duration: 2000,
                        })
                    }
                  }
                });

                  if(a === 4){
                  localStorage.setItem("thirdFormData", JSON.stringify(data));
                  navigate("/stepnine") 
                }

              })();
            }}> <NextButton /> </div>
          
        </div>
    </div>
  </div>
  )
}

export default StepEight;
