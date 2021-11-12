import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import loginBG from '../../images/login.png'
import { useForm } from "react-hook-form";
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { useHistory, useLocation } from 'react-router';
const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        if (data.password !== data.password2) {
            alert('Your Password Did Not Match');
            return
        }
        registerUser(data.email, data.password, data.name, data.username, history);

    };
    const handelSingup = e =>{
       
    }
    return (
        <div>

            <Box sx={{my:2}}>
                {
                    user?.email && <Alert severity="success">Registerd successfully</Alert>
                }
                {
                    authError && <Alert severity="error">{authError.slice(5)}</Alert>
                }
                <Container>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {
                                isLoading && <CircularProgress />
                            }
                            {!isLoading && <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Paper sx={{ p: 4, width: '60%' }}>
                                    <Typography variant="h5" sx={{ my: 3, textAlign: 'center', fontWeight: '600' }}>
                                        Register
                                    </Typography>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <TextField
                                            id="standard-basic"
                                            label="Your Name"
                                            variant="standard"
                                            type="text"
                                            sx={{ mb: 3, width: "100%" }}
                                            {...register("name")}
                                        />
                                        <br />
                                        <TextField
                                            id="standard-basic"
                                            label="@username"
                                            variant="standard"
                                            type="text"
                                            sx={{ mb: 3, width: "100%" }}
                                            {...register("username")}
                                        />
                                        <br />
                                        <TextField
                                            id="standard-basic"
                                            label="Your Email"
                                            variant="standard"
                                            type="email"
                                            sx={{ mb: 3, width: "100%" }}
                                            {...register("email")}
                                        />
                                        <br />
                                        <TextField
                                            id="standard-basic"
                                            label="Your Password"
                                            variant="standard"
                                            type="password"
                                            sx={{ mb: 3, width: "100%" }}
                                            {...register("password")}
                                        />
                                        <br />
                                        <TextField
                                            id="standard-basic"
                                            label="Re-Type Password"
                                            variant="standard"
                                            type="password"
                                            sx={{ mb: 3, width: "100%" }}
                                            {...register("password2")}
                                        />
                                        <br />
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{ my: 2, width: "100%" }}
                                            onClick={handelSingup}
                                        >
                                            Sing Up
                                        </Button>

                                    </form>
                                    <Typography sx={{ mt: 3, textAlign:'center', fontSize: '0.8rem' }}>
                                    Don't have an account <Link to='/login'>Log In</Link>
                                </Typography>
                                </Paper>
                               
                            </Box>}

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '100%' }} src={loginBG} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Register;