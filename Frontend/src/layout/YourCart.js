import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ProductCart from "../components/ProductCart";
import OrderSummary from "../components/OrderSummary";
import { Link,useNavigate} from 'react-router-dom';

import { useSelector } from "react-redux";
import {useEffect, useState } from "react";
import { publicRequest } from "../request-method";


const YourCart = () => {
    const cart = useSelector((store) => store.cart);
    const auth = useSelector((store) => store.auth);
    const navigate = useNavigate();
    const [shipping,setShipping] = useState({data:0});

    let show = false;
    if(cart.totalQantity > 0)
    {
        show=true;
    }

    const handleCheckout = (e) => {
        if(!auth.currentUser)
        {
            navigate("/signin");
        }
        else
        {
            navigate("/checkoutsuccess");
        }
        
    }

    const getShipping = async () => {
        try {
            const url = '/shipping/shippinglist';
            const response = await publicRequest.get(url);
            let cost = calculateShipping(response.data)
            setShipping({data:cost});
          } catch (error) {
            console.log(error);
          }
    };

    const calculateShipping = (data) => {
        if(cart.totalPrice < 100)
        {
            return data[0].shippingcost
        }
        else
        {
            return data[0].shippingcost-20
        }

    }


    useEffect(() => {
        getShipping();
      }, []);




    return (
        <>
        <div className="flex flex-col min-h-screen">
        <Banner/>
        <Navbar/>
        <h1 className='uppercase mt-4 mb-8 text-4xl text-center'>Your Cart</h1>

        {show ?
        <section className='p-8 grid md:grid-flow-col gap-8'>
            <div className="col-span-3">
                {cart.products.map((item) => <ProductCart product={item}/>)}
            </div>

            <div className="col-span-1">
                <OrderSummary orderdetails={cart} shippingdetails={shipping}/>
                <div className='grid sm:grid-cols-1 gap-4 md:gap-6 lg:gap-8 my-6'>
                    <div className='text-sm lg:text-md cursor-pointer uppercase block p-4 rounded-md border-2 border-black hover:bg-black hover:text-white transition ease-out duration-500' onClick={handleCheckout}>
                        checkout
                    </div>
                </div>
            </div>
        </section>
        :
        <>
        <h2 className='uppercase mt-4 mb-8 text-5xl text-center px-8 '>Your Cart is Empty</h2>
        <div className="flex flex-col items-center">
            <Link className='text-sm lg:text-md text-center cursor-pointer uppercase block p-4 rounded-md border-2 border-black hover:bg-black hover:text-white transition ease-out duration-500' to='/'>
            Get Started
            </Link>
        </div>
        </>
        }

        <Footer/>
        </div>
        </>
    );

};

export default YourCart;