import * as React from 'react';
import {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

const MyOrder = ({order}) => {


    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    const {name, orderStatus, shippingaddress, billingaddress, number, car, _id} = order;
    console.log(order);
    const [cars, setcars] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${car}`)
            .then(res => res.json())
            .then(data => setcars(data))
    }, [cars])

    const { carName, manufacturer, price, imageURL, carDetails } = cars;
    console.log(cars.carName);

    return (
        
            <TableRow

                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {carName}
                </TableCell>
                <TableCell>{manufacturer}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{orderStatus}</TableCell>

                <TableCell>
                    <Link style={{ textDecoration: 'none' }} to={`/allcars/${cars._id}`}>
                        <Button size="small">Car Details</Button>
                    </Link>
                </TableCell>

                <TableCell>
                    <TableCell>
                <Button  onClick={handleOpen} size="small">Delete Order</Button></TableCell>
               <ConfirmModal
               _id={_id}
               handleOpen={handleOpen}
               handleClose={handleClose}
               open={open}
               ></ConfirmModal>
                </TableCell>

            </TableRow>
        
    );
};

export default MyOrder;