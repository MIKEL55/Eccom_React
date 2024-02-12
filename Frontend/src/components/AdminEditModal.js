import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const AdminEditmodal = (props) =>{

    return(
        <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Product Details
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={props.closemodal}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                    <div
                        className='border bg-white p-6 flex flex-col min-w-[17rem] sm:min-w-[22rem] md:min-w-[25rem]'
                    >
                    <div className="grid grid-cols-2">
                    <label className='text-lg font-semibold'>Name</label>
                    <input
                    className='p-2 mb-4 border-2 rounded focus:outline-none'
                    type='text'
                    placeholder='Name'
                    name="title"
                    value={props.data.title || ''}
                    onChange={props.handleinput}
                    />
                    </div>
                    <div className="grid grid-cols-2">
                    <label className='text-lg font-semibold'>Description</label>
                    <textarea 
                    className='p-2 mb-4 border-2 rounded focus:outline-none'
                    type='text'
                    placeholder='Description'
                    name="description"
                    value={props.data.description || ''}
                    onChange={props.handleinput}
                    />
                    </div>
                    <div className="grid grid-cols-2">
                    <label className='text-lg font-semibold'>Price</label>
                    <input 
                    className='p-2 mb-4 border-2 rounded focus:outline-none'
                    type='number'
                    placeholder='Price'
                    name="price"
                    value={props.data.price || ''}
                    onChange={props.handleinput}
                    />
                    </div>
                    <div className="grid grid-cols-2">
                    <label className='text-lg font-semibold'>Image</label>
                    <div className='grid grid-row-2'>
                    <input
                    className='p-2 mb-4'
                    type='file'
                    name="file"
                    onChange={props.fileupload}
                    />
                    <label className='text-sm pb-4 text-red-600'>{props.fileerror}</label>
                    </div>
                    </div>

                    {/* <div className="grid grid-flow-col">
                    <label>Size</label>
                    <select className="p-2 mb-4 border-2 rounded focus:outline-none" >
                            {size?.map((item) => (<option key={item} value={item}>{item}</option>))}
                    </select>
                    </div> */}
                    <div className="grid grid-cols-2">
                    <label className='text-lg font-semibold'>Category</label>
                    <select className="p-2 mb-4 border-2 rounded focus:outline-none" value={props.data.category} name="category" onChange={props.handleinput}>
                      {<option  value={""}>--Select--</option>}
                            {props.category?.map((item) => (<option key={item._id} value={item.category_type}>{item.category_type}</option>))}
                    </select>
                    </div>

                    <div className="grid grid-cols-2">
                    <label className='text-lg font-semibold'>Size </label>
                    <FormGroup aria-label="position" row>
                    <FormControlLabel control={<Checkbox checked={props.size.size_6} onChange={props.handlesize} name="size_6"/>} label="6" />
                    <FormControlLabel control={<Checkbox checked={props.size.size_7} onChange={props.handlesize} name="size_7"/>} label="7" />
                    <FormControlLabel control={<Checkbox checked={props.size.size_8} onChange={props.handlesize} name="size_8"/>} label="8" />
                    <FormControlLabel control={<Checkbox checked={props.size.size_9} onChange={props.handlesize} name="size_9"/>} label="9" />
                    <FormControlLabel control={<Checkbox checked={props.size.size_10} onChange={props.handlesize} name="size_10"/>} label="10" />
                    </FormGroup>
                    </div>

                    {props.error ? <div className='grid grid-col-1'><label className='text-md bg-red-200 p-4 font-semibold'>{props.error}</label></div>: null}

                    </div>



                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    id="modal_close"
                    onClick={props.closemodal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.submit}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
    );

};

export default AdminEditmodal