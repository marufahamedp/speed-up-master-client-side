import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageUsers from '../ManageUsers/ManageUsers';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleIcon from '@mui/icons-material/People';
import AddTeamMember from '../AddTeamMember/AddTeamMember';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddAProduct from '../AddAProduct/AddAProduct';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import HandymanIcon from '@mui/icons-material/Handyman';
import BallotIcon from '@mui/icons-material/Ballot';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrder from '../MyOrder/MyOrder';
import MyOrders from '../MyOrders/MyOrders';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import Review from '../Review/Review/Review';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Reviews from '../Review/Reviews/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from '../../../hook/useAuth';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import PaymentIcon from '@mui/icons-material/Payment';
import Pay from '../Pay/Pay';
import ManageAllReviews from '../ManageAllReviews/ManageAllReviews/ManageAllReviews';
import PrivetRoute from '../../../PrivetRoute/PrivetRoute';
const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { logout, user, admin } = useAuth()
    const drawer = (
        <div>
            {
                user.email && <div>
                    <Typography sx={{ textAlign: 'center' }}> <Link style={{ textDecoration: 'none', color: 'black', }} to="/"><Button className="speedButton" sx={{ width: '100%', borderRadius: 0, fontSize: '25px' }} style={{ padding: '10px 0' }} variant="contained">Back To Home</Button></Link> </Typography>
                    <Divider />
                    <List>
                        {
                            admin && <Box>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/dashboardhome`}>
                                    <ListItem button>
                                        <DashboardIcon className="speedcolor" sx={{ mr: 1 }} />
                                        Dashboard
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageuser`}>
                                    <ListItem button>
                                        <ManageAccountsIcon className="speedcolor" sx={{ mr: 1 }} />
                                        Manage User
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/addteammember`}>
                                    <ListItem button>
                                        <PeopleIcon className="speedcolor" sx={{ mr: 1 }} />
                                        Manage Team Member
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/addaproduct`}>
                                    <ListItem button>
                                        <AddBoxIcon className="speedcolor" sx={{ mr: 1 }} />
                                        Add A Product
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageproducts`}>
                                    <ListItem button>
                                        <BallotIcon className="speedcolor" sx={{ mr: 1 }} />
                                        Manage Products
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageallorders`}>
                                    <ListItem button>
                                        <HandymanIcon className="speedcolor" sx={{ mr: 1 }} />
                                        Manage All Orders
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageallreviews`}>
                                    <ListItem button>
                                        <ReviewsIcon className="speedcolor" sx={{ mr: 1 }} />
                                        Manage All Reviews
                                    </ListItem>
                                </Link>
                            </Box>
                        }
                        {
                            !admin && <Box>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/myorders`}>
                                    <ListItem button>
                                        <AssignmentReturnedIcon className="speedcolor" sx={{ mr: 1 }} />
                                        My Orders
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/reviews`}>
                                    <ListItem button>
                                        <ReviewsIcon className="speedcolor" sx={{ mr: 1 }} />
                                        Review
                                    </ListItem>
                                </Link>

                                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/pay`}>
                                    <ListItem button >
                                        <PaymentIcon className="speedcolor" sx={{ mr: 1 }} />
                                        Pay
                                    </ListItem>
                                </Link>
                            </Box>

                        }
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/home`} onClick={logout}>
                            <ListItem button >
                                <LogoutIcon className="speedcolor" sx={{ mr: 1 }} />
                                Log Out
                            </ListItem>
                        </Link>


                    </List>
                    <Divider />

                </div>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="speedbg">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Customize your site
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>

                    {
                        admin && <div>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/dashboardhome`}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <AdminRoute path={`${path}/manageuser`}>
                                <ManageUsers></ManageUsers>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addteammember`}>
                                <AddTeamMember></AddTeamMember>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addaproduct`}>
                                <AddAProduct></AddAProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageallorders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageallreviews`}>
                                <ManageAllReviews></ManageAllReviews>
                            </AdminRoute>
                            <PrivetRoute path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </PrivetRoute>
                            <PrivetRoute path={`${path}/reviews`}>
                                <Reviews></Reviews>
                            </PrivetRoute>
                            <PrivetRoute path={`${path}/pay`}>
                                <Pay></Pay>
                            </PrivetRoute>
                        </div>
                    }

                    {
                        user.email && <div>
                            <Route exact path={path}>
                            <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/dashboardhome`}>
                            <MyOrders></MyOrders>
                            </Route>
                            <PrivetRoute path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </PrivetRoute>
                            <PrivetRoute path={`${path}/reviews`}>
                                <Reviews></Reviews>
                            </PrivetRoute>
                            <PrivetRoute path={`${path}/pay`}>
                                <Pay></Pay>
                            </PrivetRoute>
                        </div>
                    }
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;
