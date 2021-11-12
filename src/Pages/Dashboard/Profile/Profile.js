import { Container, Divider, Typography } from '@mui/material';
import { borderRadius, Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import MainHeader from '../../Shared/Header/MainHeader/MainHeader';
import cover from '../../../images/user-cover.jpg';
import useAuth from '../../../hook/useAuth';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
const Profile = () => {
  
    const {user} = useAuth();
    
    const coverImage = {
        width: '90%',
        height: '312px',
        overflow: 'hidden',
        borderRadius: '0 0 20px 20px'
    }
    const profileImage = {
        // transition: '.5s ease',
        // top: '60%',
        // left: '50%',
        // transform: 'translate(-50%, -0%)',
        // color: 'white',
        // width: '100%',
        // fontWeight: '600',
        // padding: '0 20px 0 20px'
        width:'160px',
        height:'160px',
        borderRadius: '100%',
        border: '4px solid black'
    }
    return (
        <div>
            <MainHeader></MainHeader>
            <Box>
                <Container sx={{display:{xs:'none', md:'block'}}}>
                    <Box>
                        <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Box style={coverImage}
                        >
                            <img style={{ width: '100%' }} src={cover}  alt="" />
                        </Box>
                        </Box>
                        <Box style={{display:'flex', justifyContent:'center'}} sx={{mt:{xs:'-190px', md:'-120px'}}}>
                        <Box style={profileImage}>
                            <img style={{ width: '100%', borderRadius: '100%' }}  src={user.photoURL} alt="" />
                        </Box>
                        </Box>
                    </Box>
                </Container>
                <Box  sx={{display:{md:'none'}}}>
                        <Box sx={{display:'flex', justifyContent:'center',width: '100%'}}>
                        <Box 
                        >
                            <img style={{ width: '100%' }} src={cover}  alt="" />
                        </Box>
                        </Box>
                        <Box style={{display:'flex', justifyContent:'center'}} sx={{mt:{xs:'-130px', md:'-120px'}}}>
                        <Box style={profileImage}>
                            <img style={{ width: '100%', borderRadius: '100%' }}  src={user.photoURL} alt="" />
                        </Box>
                        </Box>
                    </Box>
                    <Container>
                        <Box>
                        <Typography sx={{textAlign:'center', my:1, fontWeight: 600}} variant="h4">{user.displayName}</Typography>
                        <Divider/>
                        </Box>
                            <ProfileDetails
                          
                            ></ProfileDetails>
                    </Container>
            </Box>
        </div>
    );
};

export default Profile;