import React,{useState} from 'react';
import { CssBaseline,Container, Hidden} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import Resume from './resume/Resume';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import { makeStyles } from '@material-ui/core/styles';
import Header from './layout/Header';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Main from './layout/Main';
import SideDrawer from './layout/SideDrawer';
import Footer from './layout/Footer';



function App() {
  const darkTheme  = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const sideDrawerCloseHandler=()=>setSideDrawerOpen(false);
  const sideDrawerOpenHandler=()=>setSideDrawerOpen(true);
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <Header menuHandler={sideDrawerOpenHandler}/>   
        <Main/>
        <Hidden mdUp>
          <SideDrawer open={sideDrawerOpen} sideDrawerCloseHandler={sideDrawerCloseHandler}/>
        </Hidden> 
        <Footer/>
    </ThemeProvider>
  );
}

export default App;


/*
git remote add origin https://github.com/kjw472800/portfolio-.git
git branch -M main
git push -u origin main
*/