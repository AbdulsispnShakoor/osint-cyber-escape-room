import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import password from "../../../public/password.json";



// JSON.parse(localStorage.getItem("login"));

const res = JSON.stringify(password, null, 2);
const data = JSON.parse(res)
const loginInfo = JSON.parse(localStorage.getItem("login")) ? JSON.parse(localStorage.getItem("login")) : data;

const Password = () => {

    const [passwordData, setPasswordData] = useState(loginInfo);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });

    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        localStorage.setItem("login", JSON.stringify(passwordData));
        toast.success("Password updated successfully.")
        navigate("/playOpShadowTrace")
    };

    return (
        <div className='flex items-center justify-center min-h-[80vh]'>
            <form onSubmit={handleSubmit} className='bg-white p-4 rounded-xl w-3/4 xl:w-1/4'>
                <div className="input_group px-4 py-3">
                    <label htmlFor="name" className='text-md font-semibold pr-4 mb-2 inline-block'>Username</label>
                    <input type="text" id='name' value={passwordData.username} onChange={handleChange} name='username' className='p-3 w-full border-2 border-slate-300' />
                </div>
                <div className="input_group px-4 py-3 relative">
                    <label htmlFor="password" className='text-md font-semibold pr-4 mb-2 inline-block'>Password</label>
                    <input type={showPass ? "text" : "password"} id='password' value={passwordData.password} onChange={handleChange} name='password' className='p-3 w-full border-2 border-slate-300' />
                    <span onClick={() => setShowPass(!showPass)} className='absolute top-16 right-6'>
                        {
                            showPass ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                            </svg>

                                :

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                </svg>

                        }

                    </span>
                </div>
                <button type='submit' className='mr-4 float-right inline-block py-2 px-4 text-white font-bold  bg-blue-600 shadow-xl'>Update Password</button>
            </form>
        </div>
    )
}

export default Password
