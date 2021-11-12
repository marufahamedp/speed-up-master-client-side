import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useUsers from '../../../hook/useUsers';
import DisplayUser from '../DisplayUser/DisplayUser';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import DisplayUserinMobile from '../DisplayUserinMobile/DisplayUserinMobile';


const ManageUsers = () => {
  const { users } = useUsers()
  return (
    <div>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>@username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {
                users.map(user => <DisplayUser
                  key={user._id}
                  user={user}
                ></DisplayUser>)
              }

            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Typography sx={{textAlign:'center', mb:2}} variant="h6">
              ALL USERS
        </Typography>
        {
          users.map(user => <DisplayUserinMobile
            key={user._id}
            user={user}
          ></DisplayUserinMobile>)
        }
      </Box>

    </div>
  );
};

export default ManageUsers;