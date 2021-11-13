import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useCars from '../../../hook/useCars';
import useOrders from '../../../hook/useOrders';
import useTeams from '../../../hook/useTeams';
import useUsers from '../../../hook/useUsers';
import useReviews from '../../../hook/useReviews';
import { Link } from 'react-router-dom';
const DashboardHome = () => {
    const {cars} = useCars()
    const {orders} = useOrders()
    const {teamMember} = useTeams()
    const {users} = useUsers()
    const {reviews} = useReviews()
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
               <Paper className="speedbg" sx={{p:2, color:'white'}} elevation={3}>
                   <Typography sx={{textAlign:'center', fontWeight: 600}} variant="h5">
                       Total Product
                   </Typography>
                   <Typography sx={{textAlign:'center', fontWeight: 600}} variant="h5">
                       {cars.length}
                   </Typography>
                   <Link style={{textDecoration:'none'}} to="/dashboard/manageproducts">
                   <Box sx={{textAlign:'center', mt:1}}>
                   <Button size="small" className="speedButtonS" >Manage Products</Button>
                   </Box>
                   </Link>
               </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper className="speedbg" sx={{p:2, color:'white'}} elevation={3}>
                   <Typography sx={{textAlign:'center', fontWeight: 600}} variant="h5">
                       Total Orders
                   </Typography>
                   <Typography sx={{textAlign:'center', fontWeight: 600}} variant="h5">
                       {orders.length}
                   </Typography>
                   <Link style={{textDecoration:'none'}} to="/dashboard/manageallorders">
                   <Box sx={{textAlign:'center', mt:1}}>
                   <Button size="small" className="speedButtonS" >Manage orders</Button>
                   </Box>
                   </Link>
               </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper className="speedbg" sx={{p:2, color:'white'}} elevation={3}>
                   <Typography sx={{textAlign:'center', fontWeight: 600}} variant="h5">
                       Total Team Members
                   </Typography>
                   <Typography sx={{textAlign:'center', fontWeight: 600}} variant="h5">
                       {teamMember.length}
                   </Typography>
                   <Link style={{textDecoration:'none'}} to="/dashboard/addteammember">
                   <Box sx={{textAlign:'center', mt:1}}>
                   <Button size="small" className="speedButtonS" >Manage members</Button>
                   </Box>
                   </Link>
               </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper className="speedbg" sx={{p:2, color:'white'}} elevation={3}>
                   <Typography sx={{textAlign:'center', fontWeight: 600}} variant="h5">
                       Total Users
                   </Typography>
                   <Typography sx={{textAlign:'center', fontWeight: 600}} variant="h5">
                       {users.length}
                   </Typography>
                   <Link style={{textDecoration:'none'}} to="/dashboard/manageuser">
                   <Box sx={{textAlign:'center', mt:1}}>
                   <Button size="small" className="speedButtonS" >Manage users</Button>
                   </Box>
                   </Link>
               </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper className="speedbg" sx={{p:2, color:'white'}} elevation={3}>
                   <Typography sx={{textAlign:'center', fontWeight: 600}} variant="h5">
                       Total Reviews
                   </Typography>
                   <Typography sx={{textAlign:'center', fontWeight: 600}} variant="h5">
                       {reviews.length}
                   </Typography>
                   <Link style={{textDecoration:'none'}} to="/dashboard/manageallreviews">
                   <Box sx={{textAlign:'center', mt:1}}>
                   <Button size="small" className="speedButtonS" >Manage reviews</Button>
                   </Box>
                   </Link>
               </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardHome;