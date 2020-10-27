import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Grid,Hidden,Toolbar,Typography,Paper} from '@material-ui/core';
import { Switch, Route, Link as RouterLink, Redirect } from 'react-router-dom'


import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Resume from '../resume/Resume';
import NavLists from '../shared/Navigation/NavLists';

const useStyles = makeStyles(theme => ({
    paperRoot: {
      backgroundColor: "red"
    }
  }));

const Main=(props)=>{
    const classes = useStyles();
    return (
        
       
        <Grid container>
            <Grid item xs={12} md={8} >
                <Switch>
                    <Route path='/resume'>
                        <Resume/>
                    </Route>
                    <Redirect to='/'/>
                </Switch>
            </Grid>
            <Hidden smDown>
                <Grid item md={4}>
                    <NavLists></NavLists>
                </Grid>
            </Hidden>
        </Grid>
        
    );
}


export default Main;