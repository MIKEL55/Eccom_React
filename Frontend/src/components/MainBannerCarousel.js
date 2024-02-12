
import {ArrowRight,ArrowLeft} from '@mui/icons-material';
import { Link } from 'react-scroll';

import { useState } from 'react';


const carousel_data = [
    {
      url: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1550995694-3f5f4a7e1bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
  ];


const MainBannerCarouser = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const incrementIndex = () => {
        setCurrentIndex((currentIndex) => {
          return (currentIndex + 1) % carousel_data.length;
        });
      };
      const decrementIndex = () => {
        setCurrentIndex((currentIndex) => {
          return currentIndex === 0 ? carousel_data.length - 1 : currentIndex - 1;
        });
      };

    return (
        <section className='h-carousel relative bg-red-300'>
                 <div
                    onClick={decrementIndex}
                    className='w-12 h-12 rounded-full bg-gray-100/50 absolute top-1/2 left-4 cursor-pointer'
                >
                    <ArrowLeft className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
                </div>

               <img src={carousel_data[currentIndex].url} alt=" " className='w-full h-full object-cover'/>
               <div className='absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center text-white uppercase px-4 text-center'>
                <h1 className='text-4xl md:text-6xl font-bold mb-8'>Winter sale</h1>
                <p className='tracking-wider mb-16 text-md md:text-xl'>
                don't compromise on style! get flat 30% off for new arrivals.
                </p>
                <Link
                to='categories'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                >
                <button className='border p-3 bg-white text-black text-lg hover:bg-sky-700 hover:border-none hover:text-white transition ease-out	duration-500'>
                    Shop Now
                </button>
                </Link>
                 </div>
                 <div
                    onClick={incrementIndex}
                    className='w-12 h-12 rounded-full bg-gray-100/50 absolute top-1/2 right-4 cursor-pointer'
                >
                    <ArrowRight className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
                </div>
        </section>

    );
};

export default MainBannerCarouser;