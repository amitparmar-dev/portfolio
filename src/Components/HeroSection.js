import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#acb8bf",
      color: theme.palette.common.white,
      margin: "1rem",
    },
    textStyles:{
      color: "red"
    },
    box: {
      width: '200px',
      height: '200px',
      backgroundColor: 'blue',
      margin: '20px',
      padding: '20px',

    }
  }));
 
  
const HeroSection = (props) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <h1 className={classes.textStyles}>Hello World</h1>
        <div style={{
          width: '200px',
          height: '200px',
         
        }}>

        </div>
        <Grid container spacing={1}>
        <Grid size={6}>
            <img src="./myPic.png"/>
        
        </Grid>
        <Grid size={6} style={{backgroundColor:"green"}}>
            <h1>section4</h1>
        
        </Grid>
         </Grid>
      </div>
    )
  }

export default HeroSection


// return (
//     <div className='bg-slate-200 h-[80vh] overflow-clip md:w-[90vw] md:mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:w-[100vw] border rounded-2xl'>
//         <div className=''>
//             <div className='text-6xl lg:text-9xl md:text-8xl md:font-bold md:text-slate-600 pt-32 md:pt-60 pl-28 sm:pt-50'>Hey There,</div>
//             <div className='text-6xl lg:text-9xl md:text-8xl font-bold text-slate-600 pl-32 '> I'm Amit</div>
//         </div>
//         <div className='relative z-50'>
//             <img src="../myPic.png" style={{ zIndex: 11 }} className='absolute bottom-0 z-50 md:w-[30vw] '/>
//             <img src="../BrushStoke.png" style={{ zIndex: -1 }} className='lg:w-[30vw]' />
//         </div>

//     </div>
// )