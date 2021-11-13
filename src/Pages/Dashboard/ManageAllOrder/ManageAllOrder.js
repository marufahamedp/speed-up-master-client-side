import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useCars from '../../../hook/useCars';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import ShipModal from '../ShipModal/ShipModal';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ManageAllOrder = ({order}) => {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [opendelete, setOpendelete] = React.useState(false);
  const handleOpendelete = () => setOpendelete(true);
  const handleClosedelete = () => setOpendelete(false);





    const [opena, setOpena] = React.useState(false);
  
  
    const handleClosea = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
  
        setOpena(false);
    };









    const [cars, setcars] = useState([]);
    const { carName, orderStatus, price, _id, displayName, name, number,orderID, shippingaddress, car} = order;
    useEffect(() => {
        fetch(`https://intense-sands-94991.herokuapp.com/${car}`)
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
    

      const handelDelete = id => {
        const url = `https://intense-sands-94991.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                      setOpena(true);
                    }
                })
    }


    return (
        <TableRow
            
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell>{cars.carName}</TableCell>
              <TableCell>{shippingaddress}</TableCell>
              
              <TableCell>{cars.price}</TableCell>
             
              <TableCell>{orderStatus}</TableCell>

         

              <TableCell>
                <Button className="speedcolor"  onClick={handleOpen} size="small">Ship Order</Button></TableCell>
             

              <TableCell>
                
                <Button className="speedcolor" onClick={handleOpendelete} size="small">Delete Order</Button></TableCell>
               <ConfirmModal
               _id={_id}
               handleOpen={handleOpendelete}
               handleClose={handleClosedelete}
               handelDelete={handelDelete}
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
            
    );
};

export default ManageAllOrder;