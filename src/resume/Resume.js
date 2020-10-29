import React from 'react';
import {Typography,Box, Card,Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import resume from '../assets/resume.jpg';

const useStyles = makeStyles((theme) => ({
    img: {
      width: "100%",
    },
}));

const Resume= ()=>{
    const classes= useStyles();
    return (
        <Card >
            <img src={resume} className={classes.img}/>
            <Link href="https://www.w3schools.com/css/css3_images.asp" color="inherit" variant="h4">
                DownLoad Link
            </Link>
        </Card>
    )
}

export default Resume;