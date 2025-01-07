import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';
import zIndex from '@mui/material/styles/zIndex';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#E2E8F0",
        margin: "1rem 2rem",
        borderRadius: "1rem",
        height: "65vh",
        [theme.breakpoints.down("sm")]: {
            height:"40vh",
        },
    },
    textStyles: {
        color: "red"
    },
    imgStyle: {
        position:'absolute',
        bottom:0,
        right:'15vw',
        width:'22vw',
        zIndex:999,
        [theme.breakpoints.down("lg")]: {
            minWidth:'35vw',
        },
        [theme.breakpoints.down("md")]: {
            minWidth:'50vw',
        },
        [theme.breakpoints.down("sm")]: {
            minWidth:'60vw',
        },
    },
    brushImgStyle: {
        position: 'absolute',
        bottom: '0vw',
        right: '15vw',
        width: '50vw',
        [theme.breakpoints.down("xl")]: {
            maxWidth: '20vw',
            right: '15vw',
            bottom: '15vw',
        },
        [theme.breakpoints.down("lg")]: {
            maxWidth: '28vw',
            right: '20vw',
            bottom: '25vw',
        },
        [theme.breakpoints.down("md")]: {
            maxWidth: '35vw',
            right: '25vw',
            bottom: '40vw',
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: '90vw',
            bottom: '45vw',
            right:'20vw'
        },
    },
    headerText: {
        padding:"1rem 1rem 0rem 1rem",
        fontSize: "5rem",
        color:'#4C4C4C',
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        },
    },
    subHeaderText: {
        padding:"0rem 1rem",
        fontSize: "3rem",
        color:'#4C4C4C',
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
        },
    },
    textGrid:{
        [theme.breakpoints.down("sm")]: {
            height:'10vh'
        },
    }
}));


const HeroSection = (props) => {
    const classes = useStyles();
    return (
            <Grid container className={classes.container}>
                {/* <Grid size={{md:4, sm:4, xs:2}} className={classes.textGrid} >
                    <div className={classes.headerText}>Hey There,</div>
                    <div className={classes.subHeaderText}> I'm Amit</div>
                </Grid> */}
                <Grid size={{md:12, sm:12, xs:12}} style={{position:'relative', overflow:'clip', zIndex:999}}>
                        <img className={classes.imgStyle} src="./myPic.png" />
                        <img src="../BrushStoke.png" style={{ zIndex: -1 }} className={classes.brushImgStyle} />
                </Grid>

            </Grid>
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