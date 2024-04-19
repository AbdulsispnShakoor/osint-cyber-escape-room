import React, { useState } from 'react'

const formValues = {
    name:"",
    email:"",
    message:""
}


const ContactForm = () => {
    const [formData, setFormData] = useState(formValues);

    const handleFormChange =(e) =>{
        const { name,value } = e.target;
        setFormData((prev) =>({...prev,[name]:value}))
    }
    const handleSubmit =(e) =>{
        e.preventDefault()
        if(!formData.name && !formData.email && !formData.message){
           return alert("Please fill the form data");
        }
        console.log(formData)
        setFormData(formValues);
    }
    return (
        <>
            <section id='contact' className="text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative flex px-4 pb-10 pt-24 sm:pb-16 md:justify-center lg:pb-24  sm:px-6 lg:px-8">
                        <div className="absolute inset-0 bg-gradient-to-t  to-transparent" />
                        <div className="relative">
                            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                <h2 className=' text-2xl lg:text-6xl font-semibold tracking-wider mb-8'>Get in Touch With Us</h2>
                                <p>Ready for the OSINT Escape Room adventure? Click to sign up or ask questions. Let's start your journey in mastering open-source intelligence. Connect with us now!</p>
                               <div className="flex space-x-8">
                                <div className="line pt-8">
                                <svg width="24" height="280" viewBox="0 0 24 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="13" y1="12" x2="13" y2="310" stroke="#38B6FF" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="12" fill="#38B6FF"/>
                                    <circle cx="12" cy="158" r="12" fill="#38B6FF"/>
                                    <circle cx="12" cy="310" r="12" fill="#38B6FF"/>
                                </svg>
                                </div>
                                <div className="contacts">
                                    <div className="phone flex flex-col space-y-3 mt-6">
                                        <h3 className='text-3xl font-semibold text-[#38B6FF]'>Phone Number</h3>
                                        <p> +31 (0) 630714889</p>
                                        <p> +44(0)7818725408</p>
                                    </div>
                                    <div className="phone flex flex-col space-y-3 mt-6">
                                        <h3 className='text-3xl font-semibold text-[#38B6FF]'>Email Address</h3>
                                        <p> info@wolfmind.nl </p>
                                        <p>info@gentiumcyber.com</p>
                                    </div>
                                    <div className="phone flex flex-col space-y-3 mt-6">
                                        <h3 className='text-3xl font-semibold text-[#38B6FF]'>Official Website</h3>
                                        <p> www.wolfmind.nl </p>
                                        <p> www.gentiumcyber.com</p>
                                    </div>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24 text-white">
                        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <form onSubmit={handleSubmit} className="mt-8" >
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="text-base font-medium"> Your Name </label>
                                        <div className="mt-2.5 relative">
                                            <input type="text" name="name" autoComplete='false' value={formData.name} onChange={handleFormChange} required id="name" placeholder="Enter Your Name " className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200  bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-base font-medium"> Your E-mail Address </label>
                                        <div className="mt-2.5 relative">
                                            <input type="email" name="email" autoComplete='false' value={formData.email} onChange={handleFormChange} required id="email" placeholder="Enter email to get started" className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200  bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="text-base font-medium"> Your Message </label>
                                        <div className="mt-2.5 relative">
                                            <textarea name="message" id="message" autoComplete='false' value={formData.message} onChange={handleFormChange} required rows="4" cols="50" placeholder="Insert Your Message" className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200  bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                        </div>
                                    </div>
                                 
                                    <div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent bg-gradient-to-b from-[#31A2E6] to-[#00367B] focus:outline-none hover:opacity-80 focus:opacity-80">
                                        Submit Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ContactForm
