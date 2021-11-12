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
import { Link } from 'react-router-dom';
import DeleteProductModal from '../DeleteProductModal/DeleteProductModal';
const ManageProductMobile = ({ car }) => {
    const { carName, manufacturer, price, imageURL, carDetails, _id } = car;
    const handelDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://intense-sands-94991.herokuapp.com/cars/${id}`
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
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <div>
            <Box sx={{ mb:3 }}>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell>{carName}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow>
                        <TableCell>Manufacturer</TableCell>
                        <TableCell>{manufacturer}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Price</TableCell>
                        <TableCell>{price}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Product Details</TableCell>
                        <TableCell>
                        <Link style={{ textDecoration: 'none' }} to={`/allcars/${_id}`}>
                    <Button size="small">Car Details</Button>
                </Link>
                            </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Delete Product</TableCell>
                        <TableCell>
                <Button  onClick={handleOpen} size="small">Delete Product</Button></TableCell>
               <DeleteProductModal
               _id={_id}
               handleOpen={handleOpen}
               handleClose={handleClose}
               open={open}
               ></DeleteProductModal>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    </Box>
        </div>
    );
};

export default ManageProductMobile;