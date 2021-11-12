import * as React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import MyOrder from '../MyOrder/MyOrder';
import MyOrderMobile from '../MyOrderMobile/MyOrderMobile';
const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    const filterOrders = orders.filter(order => order.email == user?.email)
    return (
        <div>
            <Box  sx={{ display: { xs: 'none', md: 'block' } }}>
            <Typography sx={{ textAlign: 'center', fontWeight: 600, mb:2 }} variant="h4">
                MY ORDERS
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Car Name</TableCell>
                            <TableCell>Manufacturer</TableCell>
                            <TableCell>Car Price</TableCell>
                            <TableCell>Order Status</TableCell>
                            <TableCell>View Car Details</TableCell>
                            <TableCell>Delete This Product</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            filterOrders.map((order => <MyOrder
                                key={order._id}
                                order={order}
                            ></MyOrder>))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Typography sx={{textAlign:'center', mb:2}} variant="h6">
              ALL ORDERS
        </Typography>

        {filterOrders.map((order) => (
              <MyOrderMobile
              key={order._id}
              order={order}
              ></MyOrderMobile>
            
          ))}
          </Box>
        </div>
    );
};

export default MyOrders;