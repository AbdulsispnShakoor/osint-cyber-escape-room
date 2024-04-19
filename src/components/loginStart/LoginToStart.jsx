import React, { useEffect, useState } from 'react'
import startBtn from '../../assets/images/startBtn.png';
import { useNavigate } from 'react-router-dom';
import password from "../../../public/password.json";
// console.log(password)
let credential = '';
// const credential = JSON.parse(localStorage.getItem("json-data"));
// console.log(credential)
const LoginToStart = () => {

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const {name, value} = e.target;
           setLoginData((prev) =>({
            ...prev,[name] : value
        }))
    };


useEffect(()=>{

    credential=  JSON.parse(localStorage.getItem("json-data"));
},[])

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(loginData);
        localStorage.setItem("login", JSON.stringify(loginData));
        const storeLogin = JSON.parse(localStorage.getItem("login"));
        // console.log(storeLogin);

        const {username, password} = credential;
        const {username:name, password:pass} = loginData;

        if(username === name && password === pass){
            navigate("/step")
        }else{
            alert("Login failed - please try again later")
        }
    };
    return (
        <div className=' text-white mt-8 px-8 lg:px-36 overflow-hidden'>
            <h2 className='lg:text-6xl text-2xl text-center leading-snug'>Operation Shadow Trace <br /> CLICK TO START INVESTIGATION</h2>
            <form onSubmit={handleSubmit} className="py-16 loginForm flex items-center justify-center flex-wrap md:flex-nowrap gap-24 w-full flex-row-reverse">
               
                <div className="input-group lg:basis-96">
                    <div>
                        <label htmlFor="name" className="text-base font-medium"> User name </label>
                        <div className="my-2.5 relative">
                            <input type="text" name="username" value={loginData.username} onChange={handleInputChange} autoComplete='off' required id="name" placeholder="*********** " className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200  bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="text-base font-medium"> One time password </label>
                        <div className="my-2.5 relative">
                            <input type="password" name="password" value={loginData.password} onChange={handleInputChange} autoComplete='off' required id="password" placeholder="***********" className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200  bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                        </div>
                    </div>
                </div>
                <button className="btn cursor-pointer hover:scale-105 transition-all duration-200 ease-linear" type="submit" >
                    <img src={startBtn} alt="start" />
                </button>
            </form>
        </div>
    )
}

export default LoginToStart
