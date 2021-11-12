import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import useAuth from '../../hook/useAuth';
import './DisplayMyBlogsinProfile.css'
const DisplayMyBlogsinProfile = ({post}) => {
    const {posts, _id} = post
    const {user} = useAuth();

    return (
        <div>
            <Paper elevation={3} sx={{p:2, mb:2}}>
            <Box sx={{display: 'flex', alignItems:'center'}}>
            <img style={{ width: '40px', borderRadius:'100%' }}  src={user.photoURL} alt="" />
            <Typography sx={{ml:1}} variant="h6">{user.displayName}</Typography>
            </Box>
                <div className="images"> { ReactHtmlParser (posts) } </div>
            </Paper>
        </div>
    );
};

export default DisplayMyBlogsinProfile;