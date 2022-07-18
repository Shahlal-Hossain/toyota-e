import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from './Toyota-Logo.png';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

const Nevigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <FormGroup>
                </FormGroup>
                <AppBar position="static">
                   <Toolbar>
                       <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <img style={{width: '150px' ,height:'55px'}} src={MenuIcon} alt="" />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration: 'none',textAlign:'center', }}>
                        </Typography>
                            <div>
                                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar"  aria-haspopup="true" onClick={handleMenu} color="inherit">
                                    <AccountCircle />
                                </IconButton>
                                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top',   horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right',}} open={Boolean(anchorEl)} onClose={handleClose}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none', color: '#000'}} to='/My-account'>My account</Link></MenuItem>
                                </Menu>
                            </div>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    );
};

export default Nevigation;