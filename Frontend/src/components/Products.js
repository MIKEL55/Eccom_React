import Product from "./Product";
import { useState ,useEffect} from "react";
import { useParams, useLocation} from "react-router-dom";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { publicRequest } from "../request-method";


const Products = () => {
  
    const [productlist, setProductList] = useState([{}]);
    const { cat } = useParams(); 
    const location = useLocation();


    const getProductList = async () => {
        try {
          const url = `category/products/${cat}`;
          const response = await publicRequest.get(url);
          setProductList(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getProductList();
      }, []);

    return(
        <section className='p-8' id='categories'>
          <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            {'Home'}
          </Link>
          <Typography color="text.primary">{cat}</Typography>
          </Breadcrumbs>
          <h1 className='font-medium italic text-3xl uppercase justify-start px-4 py-4'>
          {cat}
          </h1>

            <div className='grid gap-2 md:grid-cols-4 mb-2'>
            {productlist.map(item => <Product key={item._id} prod={item}/>)}
            </div>
        </section>


    );
}

export default Products;