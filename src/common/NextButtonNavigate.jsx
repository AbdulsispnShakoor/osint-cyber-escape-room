import React from 'react'
import { useNavigate } from 'react-router-dom'
import NextButton from '../components/svg/NextButton'

const NextButtonNavigate = ({ navigatePropNext }) => {
    const navigate = useNavigate();
    // console.log(navigatePropNext)
    return (
        <div className="next_btn mt-16 flex items-end justify-end md:pr-16">
            <button onClick={() => navigate(navigatePropNext)} type="submit">
                <NextButton />
            </button>
        </div>
    )
}

export default NextButtonNavigate
