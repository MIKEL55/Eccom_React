import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import { Link,useNavigate} from 'react-router-dom';

import formvalidation from '../formvalidation';
import { publicRequest } from '../request-method';
import { useDispatch,useSelector } from 'react-redux';
import {signupFailure} from '../features/authErrorSlice';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data,setData] = useState({'firstname': '', 'lastname': '', 'username': '', 'email': '', 'password': '','cnfpassword':''})

    const [error,setError] = useState({})

    const autherror = useSelector((store) => store.autherror);




    // const formSubmithandler =()=> {
    //   const email = emailRef.current.value;
    //   const password = userpasswordRef.current.value;
    //   const firstname = firstnameRef.current.value;
    //   const lastname = lastnameRef.current.value;
    //   const username = usernameRef.current.value;
    //   createUser({email:email,password:password,firstname:firstname,lastname:lastname,username:username});
      
    // }

    // const createUser= async (user) => {
    //   try {
    //     const response = await publicRequest.post('/user/signup', user);
    //     if(response)
    //     {
    //       navigate("/signin");
    //     }
        
    //   } catch (error) {
    //     console.log(error.response.data);
    //   }
    // };


    const createUser = async (user) => {
      try 
      {
        const response = await publicRequest.post('/user/signup', user);
        navigate('/signupsuccess')
      }
      catch(err)
      {
        dispatch(signupFailure(err.response.data.error));
      }
    }

    const formSubmithandler =()=> {

      let errordata= formvalidation(data);
      setError(errordata)
      console.log(errordata);

      if(Object.keys(errordata).length < 1)
      {
        const value = data;
        createUser(value);
      }
    }

    const handleformInput = (e) => {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
    }

  return (
    <>
    <Banner/>
    <Navbar/>
    <div className='px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover'>
      <div className='border bg-white p-6 flex flex-col  min-w-[17rem] sm:min-w-[22rem] md:min-w-[35rem] max-w-[25rem]'>
        <h1 className='uppercase text-xl mb-4 font-bold self-center'>Sign up</h1>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='First Name'
            name='firstname'
            onChange={handleformInput}
            value={data.firstname}
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Last Name'
            name='lastname'
            onChange={handleformInput}
            value={data.lastname}
          />
           <span className='text-red-700 text-xs '>
            {error.firstname}
          </span>
          <span className='text-red-700 text-xs'>
          {error.lastname}
          </span>
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Username'
            name='username'
            onChange={handleformInput}
            value={data.username}
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleformInput}
            value={data.email}
          />

          <span className='text-red-700 text-xs'>
            {error.username}
          </span>
          <span className='text-red-700 text-xs'>
            {error.email}
          </span>

        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleformInput}
            value={data.password}
          />
          <input
            className= 'block p-2 border-2 rounded focus:outline-none '
            type='password'
            placeholder='Confirm Password'
            name='cnfpassword'
            onChange={handleformInput}
            value={data.cnfpassword}
          />

          <span className='text-red-700 text-xs'>
            {error.password}
          </span>
          <span className='text-red-700 text-xs'>
            {error.cnfpassword}
          </span>

        </div>
        <p className='mb-4 '>
          By Creating an accounct I consent to the processing of my personal
          data in accordance with the &nbsp;
          <a href='' className='uppercase font-bold'>
            Privacy policy
          </a>
        </p>
        <button className='mb-4 bg-teal-700 text-white p-2' onClick={formSubmithandler}>Create</button>
        <Link to='/signin' className='capitalize underline mb-4'>
          Already have an account
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Signup;