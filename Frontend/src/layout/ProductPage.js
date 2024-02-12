import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";

import { Add, Remove } from '@mui/icons-material';

import { publicRequest } from "../request-method";

import {useDispatch } from "react-redux"; 
import { addProduct } from "../features/cart/cartSlice";



//
const sizes=["6","7","8","9","10","11","12"];
//const product=products[0];
//

const ProductPage = () => {
    let [size, setSize] = useState(sizes[0]);
    let [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const getProduct = async () => {
        try {
          const url = `/products/${id}`;
          const response = await publicRequest.get(url);
          setProduct(response.data);
        } catch (error) {
          console.log(error);
        }
      };




    const dispatch = useDispatch();

    const handleSize = (e)=> {
        setSize(e.target.value);
        
    }

    const handleQuantity =(e) =>{

        if(e.currentTarget.id === "removecount")
        {
            setQuantity(quantity-1);
        }
        else{
            setQuantity(quantity+1);
        }
    }

    const addToCardHandler = () =>
    {
        dispatch(addProduct({ product, size, quantity}));
    }


    useEffect(() => {
        getProduct();
      }, []);

    return (
       
        <>
        
        <Banner/>
        <Navbar/>
        <section className='p-8 grid grid-cols-1 md:grid-cols-2 gap-8 '>
            <div>
            <img
                src={product.image}
                alt={product.name}
                className='w-full h-96 object-contain'
            />
            </div>
            <div>
                <h2 className='text-5xl mb-6'>{product.title}</h2>
                <p className='mb-6 text-xl'>{product.description}</p>
                <span className='block text-2xl'>₹{product.price}</span>
                <span className=' mb-2 text-sm'>(Inclusive of all taxes)</span>
                <div className='grid sm:grid-cols-2 gap-4 mb-6'>
                    <div>
                        <label htmlFor='' className='text-xl pr-4'>
                            Size
                        </label>
                        <select className="border-2"  onChange={handleSize}>
                            {product.size? product.size.map((item) => (<option key={item} value={item}>{item}</option>)):""}
                        </select>
                    </div>
                </div>

                <div className='flex items-center justify-start pb-8'>
                    {quantity !==1 && <span className='cursor-pointer' onClick={handleQuantity} id="removecount">
                        <Remove />
                    </span>}
                    <span className='mx-2 text-xl h-10 w-10 rounded-2xl border flex justify-center items-center'>
                        {quantity}
                    </span>
                    {quantity < 6 && <span className='cursor-pointer' onClick={handleQuantity} id="addcount">
                        <Add />
                    </span>}
                </div>


                <div>
                    <button onClick={addToCardHandler}
                    className='uppercase hover:bg-sky-700 hover:text-white transition ease-out duration-500 border-sky-700 border rounded p-4'
                    >
                    Add to cart
                    </button>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default ProductPage;