import React from 'react';

export default function Homepage() {
  return (
    <div className='container flex flex-col sm:flex-row gap-10 mt-10 sm:mt-60'>
      <h1 className='text-2xl font-bold bg-black p-5 text-white rounded hover:scale-110 duration-300'>
        Home Page
      </h1>
      <p className='text-2xl font-bold bg-gray-500 p-5 text-white rounded sm:w-2/6 sm:ml-10 text-center'>
        This is the home page!
      </p>
    </div>
  );
}
