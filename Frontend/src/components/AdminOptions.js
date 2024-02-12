import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ListIcon from '@mui/icons-material/List';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminOptions = () => {
    
      const navigate = useNavigate();
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);

      const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
      };
      
      const handleClose = (e) => {
        navigate(`/admin/`+e.currentTarget.id)
        setAnchorEl(null);
      };
    
      return (
        <div>
          <IconButton  
            variant="contained"
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <ListIcon/>
          </IconButton >
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose} id="category">Category</MenuItem>
          </Menu>
        </div>
      );
};

export default AdminOptions;