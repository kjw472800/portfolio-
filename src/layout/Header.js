import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Hidden,Toolbar,Typography} from '@material-ui/core';


import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1
    },
}));

const Header=(props)=>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={props.menuHandler}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" className={classes.title} >
                        Portfolio
                    </Typography>
                    <IconButton edge="end" color="inherit" aria-label="add to shopping cart">
                        <Brightness4Icon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default Header;