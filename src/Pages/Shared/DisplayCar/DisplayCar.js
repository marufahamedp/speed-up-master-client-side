import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './DisplayCar.css'
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
const DisplayCar = ({ car }) => {

    const { carName, manufacturer, price, imageURL, carDetails, _id } = car;
    return (
        <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ maxWidth: 390 }}>
                <div className="cardContainer">
                <CardMedia
                    component="img"
                    height="210"
                    width="100%"
                    image={imageURL}
                    alt="green iguana"
                    className="cardImg"
                />
                <CardContent>
                    <Typography sx={{fontWeight: 600}} gutterBottom variant="h6" component="div">
                        {carName}
                    </Typography>
                    <Typography sx={{fontWeight: 400}}  variant="h6">
                        $ {price}
                    </Typography>
                    <Typography variant="body1" component="div">
                        Manufacturer: {manufacturer}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {carDetails.slice(0, 100)}....
                    </Typography>
                </CardContent>
                
                <div  className="btnsection">
                <CardActions sx={{ width:'100%'}}>
                    <Link  style={{textDecoration:'none', width:'100%' }} to={`/allcars/${_id}`}>
                    <Button sx={{ width:'100%'}} className="btn" variant="contained"> <AddShoppingCartIcon sx={{mr:1}} /> Buy Now</Button>
                    </Link>
                    
                </CardActions>
                </div>
                </div>
            </Card >
        </Grid>
    );
};

export default DisplayCar;