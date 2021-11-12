import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';
import logo from '../../../../images/logo.png'
const Header = () => {
  const {user, logout} =useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Container>
          <Toolbar>
          
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
           <Link style={{textDecoration: 'none'}} to="/home"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'white'}}><img style={{width:'100%'}} src={logo}/></Button> </Link>
            </Typography>
            
            <Link style={{textDecoration: 'none'}} to="/home"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'white'}}>Home</Button> </Link>
            <Link style={{textDecoration: 'none'}} to="/allcars"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'white'}}>All Cars</Button> </Link>
            <Link style={{textDecoration: 'none'}} to="/about"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'white'}}>About</Button> </Link>
            <Link style={{textDecoration: 'none'}} to="/contact"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'white'}}>Contact</Button> </Link>
            {
              user.email && <Box sx={{display:'flex'}}>
                <Button onClick={logout}  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'white'}}>Log Out</Button>
              <ProfileMenu></ProfileMenu>
              </Box>
            }
            {
              !user.email && <Box sx={{display:'flex'}}>
                <Link style={{textDecoration: 'none'}} to="/login"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'white'}}>Log In</Button> </Link>
            <Link style={{textDecoration: 'none'}} to="/register"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'white'}}>Register</Button> </Link>
              </Box>
            }
            
            
           
          </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
};

export default Header;