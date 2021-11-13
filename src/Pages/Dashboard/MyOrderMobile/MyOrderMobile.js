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
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

const MyOrderMobile = ({order}) => {
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const [cars, setcars] = useState([]);
    const { carName, orderStatus, price, _id, displayName, name, number,orderID, shippingaddress, car} = order;
    useEffect(() => {
        fetch(`https://intense-sands-94991.herokuapp.com/cars/${car}`)
            .then(res => res.json())
            .then(data => setcars(data))
    }, [cars])
    const handelDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://intense-sands-94991.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                    }
                })
        }
    }

    return (
        <Box sx={{ mb:3 }}>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                        <TableCell>Car Name</TableCell>
                        <TableCell>{cars.carName}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                   
                    <TableRow>
                        <TableCell>Manufacturer</TableCell>
                        <TableCell>{cars.manufacturer}</TableCell>
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
                        <TableCell>View Car Details</TableCell>
                        <TableCell>
                    <Link style={{ textDecoration: 'none' }} to={`/allcars/${cars._id}`}>
                        <Button className="speedcolor" size="small">Car Details</Button>
                    </Link>
                </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Delete Order</TableCell>
                        <TableCell>
                <Button className="speedcolor" onClick={handleOpen} size="small">Delete Order</Button></TableCell>
               <ConfirmModal
               _id={_id}
               handleOpen={handleOpen}
               handleClose={handleClose}
               open={open}
               ></ConfirmModal>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    </Box>
    );
};

export default MyOrderMobile;