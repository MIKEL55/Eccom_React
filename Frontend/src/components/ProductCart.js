import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/cart/cartSlice';

const ProductCart = (props) => {

    const dispatch = useDispatch();
    const _id = props.product._id
    const quantity=  props.product.quantity;
    const price = props.product.price;
    const size = props.product.size;
    const handlerRemove = () =>{
      dispatch(deleteProduct({_id,quantity,price,size}));
    }


  


    return (
        <div className='flex flex-col md:flex-row justify-between mb-4 p-6 border-t border-b'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:mr-8 mb-8 md:mb-0'>
          <img className='w-full h-full md:w-64 md:h-64' alt={props.product.name} src={props.product.image} />
        </div>
        <div>
          <div className='mb-6'>
            <span className='font-bold'>Product:</span> {props.product.title}
          </div>
          <div className='mb-6'>
            <span className='font-bold'>ID:</span> {props.product._id}
          </div>
          <div className='mb-6'>
            <span className='font-bold'>Size:</span> {props.product.size}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-start mb-8'>
          <span className='mx-2 text-xl h-10 w-10 rounded-2xl border flex justify-center items-center'>
            {props.product.quantity}
          </span>
        
        </div>
        <span className='block mb-6 text-4xl'>
          $ {props.product.quantity*props.product.price}
        </span>
        <span className='block mb-6 text-2sm'>
        <IconButton aria-label="delete" onClick={handlerRemove}>
          <DeleteIcon />
        </IconButton>
        </span>
      </div>
    </div>

    );
};

export default ProductCart;