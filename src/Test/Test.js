
import { makeStyles } from '@mui/styles';
import React from 'react';

const Test = () => {
    const useStyles = makeStyles(theme => ({
        div: {
            backgroundColor: 'red',
            [theme.breakpoints.up('600')]: {
                backgroundColor: 'blue'
            }
        }
    }));
const classes = useStyles();
    return (
        <div className={classes.theme}>
            ok
        </div>
    );
};

export default Test;