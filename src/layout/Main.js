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
import Contact from '../contact/Contact';

const useStyles = makeStyles((theme) => ({
    Boxroot: {
      backgroundColor: theme.palette.background.paper,
      // marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }));



const Main=(props)=>{
    const classes = useStyles();
    let location = useLocation();

    return (
        
       
        <Grid container>
            <Hidden smDown>
                <Grid item md={2}>
                    <Box m={1} bgcolor="info.secondary">
                        <NavLists></NavLists>
                    </Box>
                </Grid>
            </Hidden>
            <Grid item xs={12} md={10} >
               <Box className={classes.Boxroot}> 
                <Box pl={2}>
                    <Typography variant="h1" component="h1" gutterBottom color='textPrimary' >
                        {location.pathname.slice(1,2).toLocaleUpperCase()+location.pathname.slice(2)}
                    </Typography>
                </Box>
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
                    <Route path='/contact' exact>
                        <Contact/>
                    </Route>
                    <Redirect to='/about'/>
                </Switch>
                </Box >
            </Grid>
        </Grid>
        
    );
}


export default Main;