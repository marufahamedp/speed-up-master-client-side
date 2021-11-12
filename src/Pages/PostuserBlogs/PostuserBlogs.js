import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import useAuth from '../../hook/useAuth';
import { Button, Paper, TextField, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import TextEditor from '../Shared/TextEditor/TextEditor';
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 800,
  bgcolor: 'background.paper',
  p: 2,
  px: 4,
  pb: 3,
  backgroundColor:'white',
  height:'40%',
  overflow:'auto'
};

export default function PostuserBlogs({open, handleOpen, handleClose}) {
    const {user} = useAuth()
  return (
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Paper  elevation={3} sx={style}>
       <Box  sx={{ width: '100%', display:'flex', alignItems:'center', p:1 }}>
       <img style={{ width: '50px', borderRadius:'100%' }}  src={user.photoURL} alt="" />
       <Box>
       <Typography variant="h6" sx={{ml:1}}>
            {user.displayName}
        </Typography>
       <Typography  variant="caption" sx={{ml:1, display:'flex', alignItems:'center'}} >
            <PublicIcon sx={{fontSize:'16px'}} />Public
        </Typography>
       </Box>
       </Box>
        {/* <Box sx={{ width: '100%', display:'flex', alignItems:'center', p:1 }}> 
        <TextField
          id="outlined-multiline-static"
          label="Your blog"
          multiline
          rows={4}
          defaultValue="Write A blog"
          sx={{ml:1, width: '100%'}}
        />
        
         </Box> */}
         <TextEditor></TextEditor>
        </Paper>
      </StyledModal>
  );
}
