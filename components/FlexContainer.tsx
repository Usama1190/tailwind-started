import React from 'react';

const FlexContainer = () => {
  return (
    <div className='flex rounded-lg bg-pink-100 shadow-xl m-4 p-8 gap-x-8'>
      <div className='basis-1/3 bg-white rounded-md shadow-md p-8'>
        <h1 className='font-black text-xl'>Standard</h1>
        <h2 className='text-gray-800'>Monthly Plan</h2>
        <h1 className='font-black text-3xl mt-4'>$25</h1>
      </div>
    
      <div className='basis-1/3 bg-pink-600 rounded-md shadow-md text-white p-8'>
        <h1 className='font-black text-xl'>Popular</h1>
        <h2 className='text-pint-100'>Monthly Plan</h2>
        <h1 className='font-black text-3xl mt-4'>$40</h1>
      </div>

      <div className='basis-1/3 bg-white rounded-md shadow-md p-8'>
        <h1 className='font-black text-xl'>Premium</h1>
        <h2 className='text-gray-800'>Monthly Plan</h2>
        <h1 className='font-black text-3xl mt-4'>$55</h1>
      </div>
    </div>
  )
}

export default FlexContainer;
//   rafce  react arrow function export component