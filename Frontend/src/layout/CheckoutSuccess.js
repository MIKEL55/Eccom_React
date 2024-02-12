import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import { Link } from 'react-router-dom';


const CheckoutSuccess = () => {
    return (
        <>
        <Banner/>
        <Navbar/>
        <div className="pb-80">
        <div class="flex justify-center p-8">
         <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>
        </div>
        <h2 className='uppercase mt-4 mb-8 text-3xl text-center '>Order Successfull</h2>
        <h2 className='uppercase mt-4 mb-8 text-xl text-center '>Thank you for the purchase.Transaction ID #0000000</h2>
        <div className="flex flex-col items-center">
        <Link className='text-sm lg:text-md text-center cursor-pointer uppercase block p-4 rounded-md border-2 border-black hover:bg-black hover:text-white transition ease-out duration-500' to='/'>
            Return
        </Link>
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default CheckoutSuccess;