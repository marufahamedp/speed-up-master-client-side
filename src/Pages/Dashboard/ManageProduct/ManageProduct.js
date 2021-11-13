import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteProductModal from '../DeleteProductModal/DeleteProductModal';

const ManageProduct = ({ car }) => {
    

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const { carName, manufacturer, price, imageURL, carDetails, _id } = car;
    const handelDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://intense-sands-94991.herokuapp.com/${id}`
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

        <TableRow

            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {carName}
            </TableCell>
            <TableCell>{manufacturer}</TableCell>
            <TableCell>{price}</TableCell>

            <TableCell>
                <Link style={{ textDecoration: 'none' }} to={`/allcars/${_id}`}>
                    <Button className="speedcolor" size="small">Car Details</Button>
                </Link>
            </TableCell>

            <TableCell>
                <Button className="speedcolor"  onClick={handleOpen} size="small">Delete Order</Button></TableCell>
               <DeleteProductModal
               _id={_id}
               handleOpen={handleOpen}
               handleClose={handleClose}
               open={open}
               ></DeleteProductModal>

        </TableRow>

    );
};

export default ManageProduct;