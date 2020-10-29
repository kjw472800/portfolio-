import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Grid,Hidden,Toolbar,Typography,Paper, Divider, Box} from '@material-ui/core';
import { Switch, Route, useLocation , Redirect } from 'react-router-dom'


import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Resume from '../resume/Resume';
import NavLists from '../shared/Navigation/NavLists';
import About from '../about/About';
import Projects from '../projects/Projects';

const useStyles = makeStyles(theme => ({
    paperRoot: {
      backgroundColor: "red"
    }
  }));

const Main=(props)=>{
    const classes = useStyles();
    let location = useLocation();

    return (
        
       
        <Grid container>
            <Hidden smDown>
                <Grid item md={2}>
                    <NavLists></NavLists>
                </Grid>
            </Hidden>
            <Grid item xs={12} md={10} >
               <Box bgcolor="palette.background.paper"> 
                <Typography variant="h1" component="h1" gutterBottom color='textPrimary' >
                    {location.pathname.slice(1,2).toLocaleUpperCase()+location.pathname.slice(2)}
                </Typography>
                </Box >
                <Divider />
                <Switch>
                    <Route path='/resume' exact>
                        <Resume/>
                    </Route>
                    <Route path='/about' exact>
                        <About/>
                    </Route>
                    <Route path='/projects' exact>
                        <Projects/>
                    </Route>
                    <Redirect to='/about'/>
                </Switch>
            </Grid>
        </Grid>
        
    );
}


export default Main;