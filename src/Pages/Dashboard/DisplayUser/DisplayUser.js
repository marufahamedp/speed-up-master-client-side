import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import { Paper, Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material';



const DisplayUser = ({ user }) => {
    const { displayName, email, role, username } = user;

    return (
      
        <TableRow>
            <TableCell>{displayName}</TableCell>
            <TableCell>{username}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{role}</TableCell>
        </TableRow>
        
    );
};

export default DisplayUser;