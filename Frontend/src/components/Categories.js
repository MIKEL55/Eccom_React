import CategoryMain from "./CategoryMain";
import { useState ,useEffect} from "react";
import { publicRequest } from "../request-method";



const Categories = () => {

    const [categorylist, setCategoryList] = useState([{}]);

    const getCategoryList = async () => {
        try {
          const url = 'dropdown/categorylist';
          const response = await publicRequest.get(url);
          setCategoryList(response.data);
        } catch (error) {
          console.log(error);
        }
      };



    useEffect(() => {
        getCategoryList();
      }, []);


    return (
        <section className='p-8' id='categories'>
            <div className='grid gap-2 md:grid-cols-4 mb-2'>
                {categorylist.map(item => <CategoryMain  name={item.category_type} image={item.image} key={item._id}/>)}
            </div>
        </section>
);
};

export default Categories;