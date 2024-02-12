

import { Link } from 'react-router-dom';

const Product = (props) =>{
    const url= `/product/${props.prod._id}`;

    return(
        <Link to={url} >
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={props.prod.image} alt={props.prod.title}/>
            <div className="px-6 py-4 border-t-2">
                <div className="font-bold text-xl mb-2">{props.prod.title}</div>
                <p className="text-gray-700 text-base">
                {props.prod.category}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${props.prod.price}</span>
            </div>
        </div>
        </Link>

    );
};

export default Product;
