import {ShoppingCart} from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link} from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux'; 
import { logout } from '../features/auth-actions';


const Navbar = () => {
    const dispatch = useDispatch();

    const totalQantity = useSelector((store) => store.cart.totalQantity);


    const auth = useSelector((store) => store.auth);
    const user = auth.currentUser;

    const onLogout = () =>{
      dispatch(
        logout({user})
      );
    }

    return(
    <nav className='grid grid-cols-2 p-4 border-b font-semibold h-18'>
    <h1 className='font-bold text-3xl uppercase flex items-center justify-start px-4 tracking-wider'>
      <Link to='/'>Frindle</Link>
    </h1>
    <div className='flex justify-end items-center px-4 text-md md:text-lg'>
      {auth.currentUser ?
        <button onClick={onLogout} className='uppercase px-4 py-2'>
        Logout
      </button>
        :
        <>
      <Link to='/signup' className='uppercase px-4 py-2'>
        Register
      </Link>
      <Link  to='/signin' className='uppercase px-4 py-2'>
        Sign in
      </Link>
      </>
      
      }
      <Link to='/usercart'>
        <Badge
          badgeContent={totalQantity}
          color='primary'
          className='cursor-pointer'
        >
          <ShoppingCart/>
        </Badge>
      </Link>
    </div>
  </nav>
    );
};

export default Navbar;