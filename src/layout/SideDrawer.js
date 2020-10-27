import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer,Divider,IconButton} from '@material-ui/core';
import NavLists from '../shared/Navigation/NavLists';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        justifyContent: 'flex-end',
    }
}));


const SideDrawer=(props)=>{
    const classes = useStyles();
    
    return (
        <Drawer variant="persistent" open={props.open}>
        <div className={classes.drawerHeader}>
          <IconButton edge="end" onClick={props.sideDrawerCloseHandler}>
            <ArrowBackIcon />
          </IconButton>
        </div> 
        <Divider />
        <NavLists/>
        
      </Drawer>
    );
}


export default SideDrawer;