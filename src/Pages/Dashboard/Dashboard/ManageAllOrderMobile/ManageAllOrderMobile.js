import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ConfirmModal from '../../ConfirmModal/ConfirmModal';
import ShipModal from '../../ShipModal/ShipModal';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const ManageAllOrderMobile = ({order}) => {

    const [opena, setOpena] = React.useState(false);
  
  
    const handleClosea = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
  
        setOpena(false);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [opendelete, setOpendelete] = React.useState(false);
    const handleOpendelete = () => setOpendelete(true);
    const handleClosedelete = () => setOpendelete(false);

    const [cars, setcars] = useState([]);
    const { carName, orderStatus, price, _id, displayName, name, number,orderID, shippingaddress, car, email} = order;
    useEffect(() => {
        fetch(`https://intense-sands-94991.herokuapp.com/cars/${car}`)
            .then(res => res.json())
            .then(data => setcars(data))
    }, [cars])
   


  const handelShip= e => {
 
    const url = `https://intense-sands-94991.herokuapp.com/orders/${_id}`;
    
    
        axios.put(url, {
            orderStatus: "Shipped"
          })
          setOpena(true);
          setOpen(false)
      
    
}


    return (
        <div>
            <Box sx={{ mb:3 }}>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order By</TableCell>
                        <TableCell>{name}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow>
                        <TableCell>Car Name</TableCell>
                        <TableCell>{cars.carName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell>{email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Shipping Address</TableCell>
                        <TableCell>{shippingaddress}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Price</TableCell>
                        <TableCell>{cars.price}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Order Status</TableCell>
                        <TableCell>{orderStatus}</TableCell>
                    </TableRow>

                    
                    <TableRow>
                        <TableCell>Delete Order</TableCell>

                        <TableCell>
                <Button className="speedcolor" onClick={handleOpen} size="small">Ship Order</Button></TableCell>
               
                    </TableRow>

                    <TableRow>
                        <TableCell>Delete Order</TableCell>

                        <TableCell>
                <Button className="speedcolor" onClick={handleOpendelete} size="small">Delete Order</Button></TableCell>
                <ConfirmModal
               _id={_id}
               handleOpen={handleOpendelete}
               handleClose={handleClosedelete}
               open={opendelete}
               ></ConfirmModal>
                 <ShipModal
               _id={_id}
               handleOpen={handleOpen}
               handleClose={handleClose}
               handelShip={handelShip}
               open={open}
               ></ShipModal>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar  open={opena} autoHideDuration={3000} onClose={handleClosea}>
                       <Box>
                       <Alert onClose={handleClosea} severity="success" sx={{ width: '100%', }}>
                            Order Shipped Deleted
                        </Alert>
                       </Box>
                    </Snackbar>
                </Stack>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    </Box>
        </div>
    );
};

export default ManageAllOrderMobile;