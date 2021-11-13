import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import useAuth from '../../../../hook/useAuth';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaymentIcon from '@mui/icons-material/Payment';
const ProfileMenu = () => {
  const {user, logout} =useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
             <img style={{ width: 35, height: 35, borderRadius: '100%' }} src={user.photoURL} alt="" />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Link to="/profile" style={{textDecoration: 'none', color:'black'}} >
          <MenuItem>
          <img style={{ width: 35, height: 35, borderRadius: '100%' }} src={user.photoURL} alt="" /><Typography  sx={{ml:1}}>{user.displayName}</Typography>
          </MenuItem>
          </Link>
          <Divider />
      
         <Link to="/dashboard/myorders" style={{textDecoration: 'none', color:'black'}} >
         <MenuItem>
            <ListItemIcon>
              <AssignmentReturnedIcon fontSize="small" />
            </ListItemIcon>
            My Order
          </MenuItem>
         </Link>
         <Link to="/dashboard/reviews" style={{textDecoration: 'none', color:'black'}} >
         <MenuItem>
            <ListItemIcon>
              <ReviewsIcon fontSize="small" />
            </ListItemIcon>
            Reviews
          </MenuItem>
         </Link>
         <Link to="/dashboard/pay" style={{textDecoration: 'none', color:'black'}} >
         <MenuItem>
            <ListItemIcon>
              <PaymentIcon fontSize="small" />
            </ListItemIcon>
            Pay
          </MenuItem>
         </Link>
        
         <Link to="/dashboard" style={{textDecoration: 'none', color:'black'}} >
         <MenuItem>
          <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            <Typography>Dashboard</Typography>
          </MenuItem>
         </Link>
          <MenuItem onClick={logout} >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
};

export default ProfileMenu;