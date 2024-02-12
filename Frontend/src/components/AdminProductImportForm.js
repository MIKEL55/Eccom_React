import { useState } from "react";
import { publicRequest } from "../request-method";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const AdminProductImportFrom = () => {
   let uploadfile ='';
   let [button,setButton] = useState({status:false})

    const importProduct = async () => {

        try {
            let formData = new FormData();
            if(uploadfile) {
              formData.append('product_excel',uploadfile)
            }
            const url = '/admin/product/import';
            const response = await publicRequest.post(url,formData,{
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            if(response)
            {
                console.log(response);
                setTimeout(() => {
                  setButton({...button,status:false});
                }, "1000");                
                
            }
          } catch (error) {

            console.log(error)
          }
    }

    const handleSubmit = () => {
        setButton({...button,status:true})
        importProduct();
    }
    const handleupload = (e) => {
        uploadfile = e.currentTarget.files[0];

    }


    return (
        <div className="flex justify-center mt-20 px-8">
            <div className="grid grid-cols-2">
                <input
                className='p-2 mb-4 '
                type='file'
                name="file"
                onChange={handleupload}
                />
                <button className={`mb-4 bg-sky-700 text-white hover:bg-sky-600 disabled:bg-sky-600 p-2 justify-center `} onClick={handleSubmit} disabled={button.status}>
                  {button.status ?
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress color="inherit"/>
                     </Box>
                     : 'Add'
                  }
                </button>
                  

           </div>
        </div>
        
    );
};
export default AdminProductImportFrom;
