import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import loginBG from '../../images/login.png'
import { useForm } from "react-hook-form";
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { useHistory, useLocation } from 'react-router';
const Login = () => {

    const location = useLocation();
    const history = useHistory();
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password, location, history)

    };

    const handelGooglesingin = () => {
        signInWithGoogle(location, history)
    }
    const bguse = {
        backgroundImage: `url(https://i.ibb.co/1LYJYbS/samuele-errico-piccarini-FMb-WFDi-VRPs-unsplash.jpg)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '650px'
    }

    return (
        <Box style={bguse} sx={{ my: 2, }}>
            {
                user?.email && <Alert severity="success">Log in successfully</Alert>
            }
            {
                authError && <Alert severity="error">{authError.slice(5)}</Alert>
            }
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <img style={{ width: '100%' }} src="" alt="" />
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 10 }}>
                        {
                            isLoading && <CircularProgress />
                        }
                        {!isLoading && <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Paper sx={{ p: 4, width: '100%' }}>
                                <Typography variant="h5" sx={{ my: 3, textAlign: 'center', fontWeight: '600' }}>
                                    Log In
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
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
                                    <Button
                                    className="speedButton"
                                        type="submit"
                                        variant="contained"
                                        sx={{ my: 2, width: "100%" }}
                                    >
                                        Sing In
                                    </Button>
                                    <Typography sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}>
                                        ------OR------
                                    </Typography>
                                    <Box
                                        sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        onClick={handelGooglesingin}
                                    >
                                        <Button  className="speedButtonO" variant="outlined">
                                            Sing in with google
                                        </Button>
                                    </Box>
                                </form>
                                <Typography sx={{ mt: 3, textAlign: 'center', fontSize: '0.8rem' }}>
                                    Don't have an account <Link to='/register'>Creat One</Link>
                                </Typography>
                            </Paper>

                        </Box>}
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Login;