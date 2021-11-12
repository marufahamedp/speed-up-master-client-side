import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import useCars from '../../../hook/useCars'; 
import ManageProduct from '../ManageProduct/ManageProduct';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ManageProductMobile from '../ManageProductMobile/ManageProductMobile';

const ManageProducts = () => {
    const {cars} = useCars()
    return (
        <div>
       <Box sx={{ display: { xs: 'none', md: 'block' } }}>
       <Typography sx={{textAlign:'center', fontWeight:600}} variant="h4">
                        MANAGE PRODUCTS
                    </Typography>
          <Box sx={{textAlign:'end', my:3}}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`/dashboard/addaproduct`}>
                    <Button variant="contained"> Add A Product</Button>
                </Link>
          </Box>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Car Name</TableCell>
            <TableCell>Manufacturer</TableCell>
            <TableCell>Car Price</TableCell>
            <TableCell>View Car Details</TableCell>
            <TableCell>Delete This Product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            cars.map((car=> <ManageProduct
              key={car._id}
              car={car}
            ></ManageProduct>))
          }
        </TableBody>
      </Table>
    </TableContainer>
       </Box>
       <Box sx={{ display: { xs: 'block', sm: 'none' } }}> 
       <Typography sx={{textAlign:'center', fontWeight:600}} variant="h5">
                        MANAGE PRODUCTS
                    </Typography>
         {
            cars.map((car=> <ManageProductMobile
              key={car._id}
              car={car}
            ></ManageProductMobile>))
          }
       </Box>
    </div>
    );
};

export default ManageProducts;