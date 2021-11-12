import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const FooterColumn1 = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return (
        <Box sx={{display:{md:'flex'}, justifyContent:{md: 'center'}}}>
            <Box>
            <Typography sx={{p:1, textAlign:{xs:'center'}}} variant="h5">
                MENU
            </Typography>
            <Box sx={{ width: '100%' }}>
      <List>
        <ListItemButton sx={{p:1}}> 
          <Link to="/Home" style={{textDecoration:'none', color: 'white'}}>
              Home
          </Link>
        </ListItemButton>
        <ListItemButton sx={{p:1}}> 
          <Link to="/about" style={{textDecoration:'none', color: 'white'}}>
              About
          </Link>
        </ListItemButton>
        <ListItemButton sx={{p:1}}> 
          <Link to="/contact" style={{textDecoration:'none', color: 'white'}}>
              Contact
          </Link>
        </ListItemButton>
        <ListItemButton sx={{p:1}}> 
          <Link to="/Profile" style={{textDecoration:'none', color: 'white'}}>
              Profile
          </Link>
        </ListItemButton>
      </List>
    </Box>
            </Box>
        </Box>
    );
};

export default FooterColumn1;