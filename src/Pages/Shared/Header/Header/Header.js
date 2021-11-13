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
  const styles = {
        background: 'white',    
}



    return (
        <Box>
          <Box  sx={{ flexGrow: 1, mb:8 }}>
        <AppBar style={styles} position="fixed">
        <Container>
          <Toolbar>
          
           <Typography variant="h6" component="div" sx={{ flexGrow: 1,  color:'black' }}>
           
           <Link style={{textDecoration: 'none'}} to="/home"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'black'}}><img style={{width:'100%'}} src={logo}/></Button> </Link>
            </Typography>
            
            <Link style={{textDecoration: 'none'}} to="/home"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'black'}}>Home</Button> </Link>
            <Link style={{textDecoration: 'none'}} to="/allcars"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'black'}}>All Cars</Button> </Link>
            <Link style={{textDecoration: 'none'}} to="/about"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'black'}}>About</Button> </Link>
            <Link style={{textDecoration: 'none'}} to="/contact"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'black'}}>Contact</Button> </Link>
            {
              user.email && <Box sx={{display:'flex'}}>
              
              <ProfileMenu></ProfileMenu>
              </Box>
            }
            {
              !user.email && <Box sx={{display:'flex'}}>
                <Link style={{textDecoration: 'none', marginLeft:'10px'}} to="/login"> <Button className="speedButtonO" variant="outlined" sx={{display: { xs: 'none', sm: 'block' } }} style={{}}>Log In</Button> </Link>
            <Link style={{textDecoration: 'none', marginLeft:'10px'}} to="/register"> <Button className="speedButton" variant="contained" sx={{display: { xs: 'none', sm: 'block' } }} style={{}}>Register</Button> </Link>
              </Box>
            }
            
            
           
          </Toolbar>
          </Container>
        </AppBar>
      </Box>
        </Box>
    );
};

export default Header;