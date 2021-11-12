import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import useOrders from '../../../hook/useOrders';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ManageAllOrderMobile from '../Dashboard/ManageAllOrderMobile/ManageAllOrderMobile';


const ManageAllOrders = () => {


 
    const { orders } = useOrders()
    return (
        <div>
          <Box  sx={{ display: { xs: 'none', md: 'block' } }}>
          <Typography sx={{ textAlign: 'center', fontWeight: 600, mb:2 }} variant="h4">
               MANAGE ALL ORDERS
            </Typography>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order By</TableCell>
            <TableCell>Car Name</TableCell>
            <TableCell>Shipping Address</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Order States</TableCell>
            <TableCell>Ship This Order</TableCell>
            <TableCell>Delete This Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
              <ManageAllOrder
              key={order._id}
              order={order}
              ></ManageAllOrder>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Typography sx={{textAlign:'center', mb:2}} variant="h6">
              ALL ORDERS
        </Typography>

        {orders.map((order) => (
              <ManageAllOrderMobile
              key={order._id}
              order={order}
              ></ManageAllOrderMobile>
            
          ))}
          
          </Box>
        </div>
    );
};

export default ManageAllOrders;