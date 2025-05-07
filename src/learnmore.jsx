import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
export default function Learnmore (){
    return (
        <>
            <div className='container flex flex-row gap-10 mt-60'>
            <h1 className='text-2xl font-bold bg-black p-5 text-white rounded hover:scale-110 duration-300 '>Learnmore Page</h1>
            <p className='text-2xl font-bold bg-gray-500 p-5 text-white rounded w-2/6 ms-10 text-center'>This is the learnmore Page!</p>
            </div>
        </>
    )
}