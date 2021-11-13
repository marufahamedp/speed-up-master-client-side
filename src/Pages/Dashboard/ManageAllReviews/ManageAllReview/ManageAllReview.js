import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Rating from '@mui/material/Rating';
import ConfirmDeleteReviewModal from '../ConfirmDeleteReviewModal/ConfirmDeleteReviewModal';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ManageAllReview = ({reviewall}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    const [openalart, setOpenalart] = React.useState(false);


    const handleClosealart = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenalart(false);
    };
    const handelDelete = id => {
        const url = `https://intense-sands-94991.herokuapp.com/reviews/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setOpen(false)
                        setOpenalart(true);
                        
                    }
                })
    }
    const {name, email, photo, review, rating, _id} = reviewall;
    return (
        <div>
            <Paper sx={{p:2, mb:2, display:'flex', alignItems:'center', justifyContent: 'space-between'}} elevation={3}>
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <img style={{width:'50px', borderRadius:'100%'}} src={photo} alt="" />
                    <Typography sx={{ml:2}} variant="h6">
                        {name}
                    </Typography>
                </Box>
                <Box sx={{display:'flex', alignItems:'center'}}>
                <Typography sx={{mr:2}} variant="h6">
                        Rating: 
                    </Typography>
                <Rating sx={{}} name="half-rating-read" defaultValue={rating} precision={0.5} readOnly size="large" />
                <Typography sx={{ml:2}} variant="h6">
                        Star
                    </Typography>
                </Box>
                <Box>
                    <Button sx={{color:'red'}}  onClick={handleOpen} >< DeleteForeverIcon />Delete</Button>
                    <ConfirmDeleteReviewModal
                         _id={_id}
                         handleOpen={handleOpen}
                         handleClose={handleClose}
                         handelDelete={handelDelete}
                         open={open}
                    ></ConfirmDeleteReviewModal>
                </Box>
            </Paper>
            <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar  open={openalart} autoHideDuration={3000} onClose={handleClosealart}>
                       <Box>
                       <Alert onClose={handleClosealart} severity="success" sx={{ width: '100%', }}>
                            Successfully Delete this review
                        </Alert>
                       </Box>
                    </Snackbar>
                </Stack>
        </div>
    );
};

export default ManageAllReview;