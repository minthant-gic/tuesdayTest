'use client'
import React from 'react';
import { useSelector } from 'react-redux'

const Detail = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div className="bg-red-600 h-screen flex justify-center items-center">
                <span className="text-8xl">{count}</span>
        </div>
    );
};

export default Detail;