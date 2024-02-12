import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";



import { useDispatch,useSelector } from 'react-redux';
import { login } from '../features/auth-actions';

import { useEffect, useRef } from "react";
import { Link ,useNavigate } from "react-router-dom";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const auth = useSelector((store) => store.auth);

    const autherror = useSelector((store) => store.autherror);

    
    const usernameRef = useRef();
    const passwordRef = useRef();

    const formSubmitHandler = (event)=>{
      event.preventDefault()
      const email = usernameRef.current.value;
      const password = passwordRef.current.value;
      dispatch(
        login({
          email,
          password,
        })
      );
    }

   const loginredirect = ( user)=>{
      if(user != null)
      {
        navigate(-1);
      }

    }


    useEffect(() => {
      loginredirect(auth.currentUser);
    }, [auth.currentUser]);


    return (
        <>
        <Banner/>
        <Navbar/>
                <form className='px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover' onSubmit={formSubmitHandler}>
            <div
                className='border bg-white p-6 flex flex-col min-w-[17rem] sm:min-w-[22rem] md:min-w-[25rem]'
            >
                <h1 className='uppercase text-xl mb-4 font-bold'>Log in</h1>
              {autherror.error &&
                <span
                className='mb-4 bg-red-200 text-red-700 p-2 '
                >
                {autherror.errormsg}
                </span>
                }
                <input
                className='p-2 mb-4 border-2 rounded focus:outline-none'
                type='text'
                placeholder='Username'
                ref={usernameRef}
                />
                <input
                className='p-2 mb-4 border-2 rounded focus:outline-none'
                type='password'
                placeholder='Password'
                ref={passwordRef}
                />
                
                <button
                className='mb-4 bg-teal-700 text-white p-2 disabled:bg-teal-500 disabled:cursor-not-allowed'
                disabled={auth.isFetching}
                >
                Login
                </button>
                <Link to='/signup' className='capitalize underline mb-4'>
                create a new account
                </Link>
            </div>
            </form>
        <Footer/>
        </>
        
    );

};

export default Login;