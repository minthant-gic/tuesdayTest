'use client'
import React from 'react';
import { decrement, increment } from './counterSlice'
import {useDispatch} from "react-redux";

const Info = () => {
    const dispatch = useDispatch()
    return (
        <div className="bg-blue-700 h-screen flex justify-center items-center">
            <button
                aria-label="Increment"
                onClick={() => dispatch(increment())}
                className="bg-white text-red-600 px-2 py-2 rounded-full"
            >
                Increment
            </button>
            <button
                aria-label="Decrement"
                onClick={() => dispatch(decrement())}
                className="bg-white text-red-600 px-2 py-2 rounded-full"
            >
                Decrement
            </button>
        </div>
    );
};

export default Info;