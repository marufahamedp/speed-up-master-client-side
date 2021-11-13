import React from 'react';
import { styled, Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const DeleteTeammemberModal = ({open, handleClose, handleOpen,handelDelete, _id }) => {
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
    maxWidth: 500,
    p: 2,
    px: 4,
    pb: 3,
    backgroundColor:'white',
    borderRadius:'10px'
  };
    return (
        <div>
             <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
              <Box sx={{textAlign:'center'}}>
              <HighlightOffIcon style={{fontSize:'80px', color:'red'}}/>
              </Box>
            
           <Typography variant="h5" sx={{fontWeight:600, mb:1, textAlign:'center'}}>
           Are you sure ?
           </Typography>
           <Typography  sx={{textAlign:'center'}} variant="body1">
               Do you really want to delete this team member? This process cannot be undone.
           </Typography>
            <Box sx={{textAlign:'center'}}>
            <button sx={{mx:1, my:1}} className="modalcloseBtn"  onClick={handleClose} >Cancel</button>
            <button sx={{mx:1, my:1}} className="modalbtn" variant="contained"  onClick={() => handelDelete(_id)} >Delete</button>

            </Box>
          </Box>
        </StyledModal>
        </div>
    );
};

export default DeleteTeammemberModal;