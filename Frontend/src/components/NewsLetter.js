import React, { useState } from 'react';

import { Send } from '@mui/icons-material';

const Newsletter = () => {
  const [data,setData] = useState(true)

  const clickHandler = () => {
    setData(false)
  }

  return (
    <section className='bg-[#FDF5F6] py-32 px-8 flex flex-col items-center'>
      <h2 className='font-bold text-5xl sm:text-6xl md:text-7xl mb-10'>
        Newsletter
      </h2>
      <p className='text-2xl mb-10 text-center'>
        Get timely updates from your favorite products
      </p>
      
        {data ?
        <>
        <div
        className='border rounded-lg overflow-hidden flex flex-nowrap'
        >
        <input
          type='text'
          placeholder='Your email'
          className='px-6 py-2 focus:outline-none'
        />
        <button className='bg-sky-700 px-6 py-2 text-white' onClick={clickHandler}>
          <Send />
        </button>
        </div>
        </>
        :
        <p className='text-xl  text-center'>Thank you for subscribing to our newsletter</p>
        }
    </section>
  );
};

export default Newsletter;