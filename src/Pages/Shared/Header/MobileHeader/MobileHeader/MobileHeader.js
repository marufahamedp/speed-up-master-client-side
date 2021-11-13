import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ProfileMenu from '../../ProfileMenu/ProfileMenu';
import useAuth from '../../../../../hook/useAuth';
import logo from '../../../../../images/logo.png';
const MobileHeader = () => {

  const {user, logout} =useAuth();
    const [state, setState] = React.useState({
        
        left: false
       
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}

        >
          <List>
           <ListItem>
           <Link style={{textDecoration: 'none'}} to="/home">
           <Box className="speedcolor" style={{color: '#1976D2'}}  sx={{display: 'flex', alignItems: 'center'}}>
           <HomeIcon sx={{mr:1}} style={{fontSize: '30px'}} />
            <Typography variant="h6">Home</Typography>
           </Box>
           </Link>
           </ListItem>
           <ListItem>
           <Link style={{textDecoration: 'none'}} to="/allcars">
           <Box className="speedcolor" style={{color: '#1976D2'}}  sx={{display: 'flex', alignItems: 'center'}}>
           <DirectionsCarFilledIcon sx={{mr:1}} style={{fontSize: '30px'}} />
            <Typography variant="h6">All Cars</Typography>
           </Box>
           </Link>
           </ListItem>
           <ListItem>
           <Link style={{textDecoration: 'none'}} to="/about">
           <Box className="speedcolor" style={{color: '#1976D2'}}  sx={{display: 'flex', alignItems: 'center'}}>
           <InfoIcon sx={{mr:1}} style={{fontSize: '30px'}} />
            <Typography variant="h6">About</Typography>
           </Box>
           </Link>
           </ListItem>
           <ListItem>
           <Link style={{textDecoration: 'none'}} to="/contact">
           <Box className="speedcolor" style={{color: '#1976D2'}}  sx={{display: 'flex', alignItems: 'center'}}>
           <ContactsIcon sx={{mr:1}} style={{fontSize: '30px'}} />
            <Typography variant="h6">Contact</Typography>
           </Box>
           </Link>
           </ListItem>
          {
            user.email && <ListItem onClick={logout}>
            <Box className="speedcolor" style={{color: '#1976D2'}}  sx={{display: 'flex', alignItems: 'center'}}>
            <LoginIcon sx={{mr:1}} style={{fontSize: '30px'}} />
             <Typography variant="h6">Log Out</Typography>
            </Box>
            </ListItem>
          }
          {
            !user.email && <Box>
               <ListItem>
           <Link style={{textDecoration: 'none'}} to="/login">
           <Box className="speedcolor" style={{color: '#1976D2'}}  sx={{display: 'flex', alignItems: 'center'}}>
           <LoginIcon sx={{mr:1}} style={{fontSize: '30px'}} />
            <Typography variant="h6">Log In</Typography>
           </Box>
           </Link>
           </ListItem>
           <ListItem>
           <Link style={{textDecoration: 'none'}} to="/register">
           <Box className="speedcolor" style={{color: '#1976D2'}}  sx={{display: 'flex', alignItems: 'center'}}>
           <PersonAddIcon sx={{mr:1}} style={{fontSize: '30px'}} />
            <Typography variant="h6">Register</Typography>
           </Box>
           </Link>
           </ListItem>
            </Box>
          }
          </List>
        </Box>
      );
    
     

      return (
        <div>
       
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Box sx={{mb:7, flexGrow: 1 }}>
      <AppBar className="speedbg" position="fixed" sx={{ mb:8 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon /> 
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link style={{textDecoration: 'none'}} to="/home"> <Button  sx={{display: { xs: 'none', sm: 'block' } }} style={{color: 'white'}}><img style={{width:'100%'}} src={logo}/></Button> </Link>
          </Typography>
         {
           user.email &&  <ProfileMenu></ProfileMenu>
         }
        </Toolbar>
      </AppBar>
    </Box>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      );
};

export default MobileHeader;