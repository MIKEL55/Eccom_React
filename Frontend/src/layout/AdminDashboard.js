import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";


import Button from '@mui/material/Button';

import AdminProductRow from "../components/AdminProductRow";

import { publicRequest } from "../request-method";
import { useEffect, useState } from "react";
import AdminEditmodal from "../components/AdminEditModal";
import Dialogmodal from "../components/DialogModal";
import AdminOptions from "../components/AdminOptions";

import useAxiosPrivate from "../hooks/useAxiosPrivate";



const AdminDashBoard = () => {

    const [products,setProduct] = useState([{}]);

    const [categories,setCategories] = useState([{}]);

    const [modal,setModal] = useState({editmodal:false,addmodal:false,dialogmodal:false,rowid:""})

    const [edit,setEdit] = useState({});

    const [add,setAdd] = useState({});

    const [sizes,setSizes] = useState({size_6:false,size_7:false,size_8:false,size_9:false,size_10:false});

    const [uploaderror,setuploadError] = useState('');

    const [error,setError] = useState(null);

    let uploadfile="";

    //const axiosPrivate = useAxiosPrivate();


    const getProductList = async () => {
        try {
          const url = '/admin/products';
          const response = await publicRequest.get(url);
          setProduct(response.data);
        } catch (error) {
          console.log(error);
        }
      };


    const getCategoryList = async () => {
      try {
        const url = '/dropdown/categorylist';
        const response = await publicRequest.get(url);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    //--------------- Update Product -------------------//
    const updateProduct = async () => {
      try {
        
          let formData = new FormData();
          formData.append("userData", JSON.stringify(edit))

          let temp = Object.entries(sizes).filter( a => a[1] === true).map(b => b[0].replace('size_',''))
          formData.append("sizeData",JSON.stringify(temp));

          if(uploadfile) {
            formData.append('product_image',uploadfile)
          }
          const url = '/admin/product/update';
          const response = await publicRequest.post(url,formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          if(response)
          {
            setModal({...modal,editmodal:false});
            getProductList();
          }
        } catch (error) {
          setuploadError(error.response.data.message);
        }
  };

  //--------------- Update Product -------------------//

  //----------------- Add Product --------------------//
    const addProduct = async () => {
      try {
        
          let formData = new FormData();
          formData.append("userData", JSON.stringify(add))

          let temp = Object.entries(sizes).filter( a => a[1] === true).map(b => b[0].replace('size_','')) // convert size state object to size array
          formData.append("sizeData",JSON.stringify(temp));

          if(uploadfile) {
            formData.append('product_image',uploadfile)
          }
          const url = '/admin/product/add';
          const response = await publicRequest.post(url,formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          if(response)
          {
            setModal({...modal,addmodal:false});
            getProductList();
          }
        } catch (error) {
          setError(error.response.data.message)
        }
  };

  //----------------- Add Product --------------------//

  //----------------- Delete Product -----------------//

  const deleteProduct = async (event) => {
    
    const id = modal.rowid;
    try {
      const url = `/admin/product/delete/${id}`;
      const response = await publicRequest.post(url);
      if(response){
        setModal({...modal,dialogmodal:false,rowid:""});
        getProductList();
      }
    } catch (error) {
      console.log(error);
    }
  };


  //----------------- Delete Product -----------------//

  //------------------ Modal--------------------------//
      const openModal = (event) => {
        const id = event.currentTarget.id
        const editdata = products.find( x => x._id === id )
        const temp = sizes;
        editdata.size.map( value => 'size_'+value).forEach(key => temp[key] = true); // convert size array to size state object
        setEdit(editdata)
        setModal({...modal,editmodal:true})
        setuploadError('')
        setError(null);

      }

  //------------------ Modal--------------------------//

  
  //------------------ Dialog--------------------------//

      const openDialog = async (event) => {
        const id = await event.currentTarget.getAttribute('data-row-id')
        setModal({...modal,dialogmodal:true,rowid:id})
      }
  //------------------ Dialog--------------------------//


    //------------------ Close Modal--------------------------//

      const closeModal = () => {
        setModal({editmodal:false,addmodal:false,dialogmodal:false,rowid:false})
        setAdd({});
        setSizes({size_6:false,size_7:false,size_8:false,size_9:false,size_10:false});
      }
      
    //------------------ Close Modal--------------------------//


      //--------Edit Input handler-----------// 
      const handleEdit = (e) =>{
        const { name, value } = e.target;
        setEdit({
          ...edit,
          [name]: value,
        });
      }
      //--------Edit Input handler-----------// 


      //--------Add Input handler-----------// 
      const handleAdd = (e) =>{
        const { name, value } = e.target;
        setAdd({
          ...add,
          [name]: value,
        });
      }
      //--------Add Input handler-----------// 

      

      const handlefileUpload = (e) =>{
        uploadfile = e.currentTarget.files[0];
      }

      const handleSize = (e) =>{
        const {name ,checked } = e.target;
        setSizes({
          ...sizes,
          [name] : checked,
        });
      }




    useEffect(() => {
        getProductList();
        getCategoryList();
      }, []);


    return (
        <>
        <Banner/>
        <Navbar/>
        <section className='p-8 grid grid-cols-2 md:grid-cols-2'>
            <h2 className='font-bold text-4xl mb-4 flex justify-start items-center'>Products</h2>
            <div className='font-bold text-2xl mb-4 flex justify-end items-center'>
              <Button variant="contained" onClick={()=>{setModal({...modal,addmodal:true})}}>
                Add New
              </Button>
              <AdminOptions/>
            </div>
        </section>
        <section className='p-8 grid grid-cols-1  md:grid-cols-7 text-center'>
            <h2 className='font-bold text-2xl mb-4 tracking-wider'>Name</h2>
            <h2 className='font-bold text-2xl mb-4 tracking-wider'>Photo</h2>
            <h2 className='font-bold text-2xl mb-4 tracking-wider'>Price</h2>
            <h2 className='font-bold text-2xl mb-4 tracking-wider'>Description</h2>
            <h2 className='font-bold text-2xl mb-4 tracking-wider'>Category</h2>
            <h2 className='font-bold text-2xl mb-4 tracking-wider'>Size</h2>
            <h2 className='font-bold text-2xl mb-4 tracking-wider'>Action</h2>        
        </section>

            {products.map((item) => <AdminProductRow data={item} key={item._id} openmodal={openModal} opendialog={openDialog}/>)}
        
        {/*---Dialog Modal---*/}
        {modal.dialogmodal && <Dialogmodal closemodal={closeModal} submit={deleteProduct} />}
        {/*---Dialog Modal---*/}

        {/*--EDIT MODAL--*/}
        {modal.editmodal && <AdminEditmodal data={edit} closemodal={closeModal} handleinput={handleEdit} submit={updateProduct} fileupload={handlefileUpload} fileerror={uploaderror} category={categories} size={sizes} handlesize={handleSize}/>}
        {/*--EDIT MODAL--*/}

        {/*--ADD MODAL--*/}
        {modal.addmodal && <AdminEditmodal data={add} closemodal={closeModal} handleinput={handleAdd} submit={addProduct} fileupload={handlefileUpload} fileerror={uploaderror} category={categories} size={sizes} handlesize={handleSize} error={error}/>}
        {/*--ADD MODAL--*/}
        <Footer/>
        </>
    );
};

export default AdminDashBoard;