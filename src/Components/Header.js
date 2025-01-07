import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily:'cursive',
    color:'#eab308',
    fontSize:'3rem'
  },

}));

  
const Header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Amit.Parmar
        </div>
    )
}

export default Header
