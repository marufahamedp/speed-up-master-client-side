import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Button, Grid, Paper, TextField } from '@mui/material';
import useAuth from '../../../hook/useAuth';
import PostuserBlogs from '../../PostuserBlogs/PostuserBlogs';
import DisplayMyBlogsinProfile from '../../DisplayMyBlogsinProfile/DisplayMyBlogsinProfile';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileDeta() {
    const [posts, setPost] = useState();
    useEffect(() => {
        fetch('https://intense-sands-94991.herokuapp.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    }, [posts])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {user} = useAuth()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{display:'flex', justifyContent: 'center'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Photos" {...a11yProps(2)} />
        </Tabs>
      </Box>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container spacing={2}>
  <Grid item xs={12} md={3} sx={{display:{xs:'none', md:'block'}}}>
    <Box sx={{display:'flex', justifyContent: 'center'}}>
       <Box>
       <Paper elevation={3} sx={{p:1}}>
       <Button sx={{width:'100%', fontSize:'25px', mb:2}} variant="outlined">About</Button>
       <Typography sx={{mb:1}}>
       Name: {user.displayName}
       </Typography>
       <Typography  sx={{mb:1}}>
       Email: {user.email}
       </Typography>
       <Typography  sx={{mb:1}}>
       Role: {user.role}
       </Typography>
       </Paper>
       </Box>
    </Box>
  </Grid>
  <Grid item xs={12} md={6}>
  <Box sx={{display:'flex', justifyContent: 'center'}}>
        <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', display:'flex', alignItems:'center', p:1 }} elevation={3}> 
        <img style={{ width: '50px', borderRadius:'100%' }}  src={user.photoURL} alt="" />
        <Button onClick={handleOpen} sx={{ml:1, width: '100%'}} variant="outlined">Whats On your mind?</Button>
         </Paper>
         <PostuserBlogs
         handleOpen={handleOpen}
         handleClose={handleClose}
         open={open}
         ></PostuserBlogs>
        </Box>
    </Box>
    
    
        {
            posts?.map(post=> <DisplayMyBlogsinProfile
            key={post._id}
                post={post}
            ></DisplayMyBlogsinProfile>)
        }



  </Grid>
  <Grid item xs={12} md={3} sx={{display:{xs:'none', md:'block'}}}>
  <Box sx={{display:'flex', justifyContent: 'center', ml:2}}>
  <Box>
       <Paper elevation={3} sx={{p:1}}>
       <Button sx={{width:'100%', fontSize:'25px', mb:2}} variant="outlined">About</Button>
       <Typography sx={{mb:1}}>
       Name: {user.displayName}
       </Typography>
       <Typography  sx={{mb:1}}>
       Email: {user.email}
       </Typography>
       <Typography  sx={{mb:1}}>
       Role: {user.role}
       </Typography>
       </Paper>
       </Box>
    </Box>
  </Grid>
</Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Typography sx={{mb:1}}>
       Name: {user.displayName}
       </Typography>
       <Typography  sx={{mb:1}}>
       Email: {user.email}
       </Typography>
  
       <Typography  sx={{mb:1}}>
       Role: {user.role}
       </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        there will add some images
      </TabPanel>
    </Box>
  );
}
