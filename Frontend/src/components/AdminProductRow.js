
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const AdminProductRow = (props) => {
    return (
        <section className='p-8 grid grid-cols-1  md:grid-cols-7 bg-slate-300 justify-items-center' >
            <p>{props.data.title}</p>
            <img
            src={props.data.image ? props.data.image: " "}
             className='object-contain h-20 w-30'
             alt={props.data.title}
             >
             </img>
             <p>$ {props.data.price}</p>
             <p>{props.data.description}</p>
             <p>{props.data.category}</p>
             <ul>
             {props.data.size ? props.data.size.map((item) => <li>- {item}</li>): ""}
             </ul>
             <div>
             <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button id={props.data._id} onClick={props.openmodal}>
                    <EditIcon>

                    </EditIcon>
                </Button>
                <Button color="error" onClick={props.opendialog} data-row-id={props.data._id}>
                    <DeleteIcon/>
                </Button>
            </ButtonGroup>
             </div>
        </section>
    );

};
export default AdminProductRow