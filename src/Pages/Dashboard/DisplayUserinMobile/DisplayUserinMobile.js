import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import { Paper, Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';

const DisplayUserinMobile = ({user}) => {
    const { displayName, email, role, username } = user;
    return (
        <Box sx={{ mb:3 }}>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{displayName}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow>
                        <TableCell>@username</TableCell>
                        <TableCell>{username}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell>{email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Role</TableCell>
                        <TableCell>{role}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    </Box>
    );
};

export default DisplayUserinMobile;