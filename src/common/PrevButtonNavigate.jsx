import React from 'react'
import { useNavigate } from 'react-router-dom'
import PrevButton from '../components/svg/PrevButton'

const PrevButtonNavigate = ({ navigatePropPrev }) => {
    const navigate = useNavigate();
    // console.log(navigatePropPrev)
    return (
            <button onClick={() => navigate(navigatePropPrev)}>
                <PrevButton />
            </button>
    )
}

export default PrevButtonNavigate
