import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex p-10 shadow-2xl bg-blue-100 m-6 rounded-xl'>
      <div>
        <Image src={'/next.svg'} alt='Next Logo' height={250} width={250} />
        <h2 className='text-lg font-bold'>The Company Tagline</h2>
      </div>
      <div className='flex ml-auto space-x-5'>
        <div>
            <h2 className='text-lg font-bold'>Quick Links</h2>
            <p>Lorem ipsum</p>
        </div>

        <div>
            <h2 className='text-lg font-bold'>Contact Us</h2>
            <p>Lorem ipsum</p>
        </div>

        <div>
            <h2 className='text-lg font-bold'>Social</h2>
            <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
