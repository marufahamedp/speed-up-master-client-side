import { Typography } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ShopingCart = ({ car }) => {
    const { carName, manufacturer, price, imageURL, carDetails, _id } = car;

  
    return (
        <div>
            <Paper sx={{ p: 2 }} elevation={3}>
                <Typography sx={{ fontWeight: 600, my: 3 }} variant="h6">
                    ORDER INFORMATION
                </Typography>
                <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Car Name</TableCell>
            <TableCell align="right">{carName}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="left">Price</TableCell>
              <TableCell align="right">{price}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Shipping</TableCell>
              <TableCell align="right">Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Tax</TableCell>
              <TableCell align="right">Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Total</TableCell>
              <TableCell align="right">{price}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
            </Paper>
        </div>
    );
};

export default ShopingCart;