import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText,Divider,IconButton} from '@material-ui/core';
import { useHistory } from "react-router-dom";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
}));

const NavLists=(props)=>{
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const history= useHistory();   
    const clickHandler=(event, i, path)=>{
        setSelectedIndex(i);
        history.push(path);
    }
    return (
        <div >
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                button
                selected={selectedIndex === 0}
                onClick={(event) => clickHandler(event, 0,'/about')}
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem
                button
                selected={selectedIndex === 2}
                onClick={(event) => clickHandler(event, 2,'/projects')}
                >
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                </ListItem>
                <ListItem
                button
                selected={selectedIndex === 1}
                onClick={(event) => clickHandler(event, 1,'/resume')}
                >
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Resume" />
                </ListItem>
                {/* <ListItem
                button
                selected={selectedIndex === 3}
                onClick={(event) =>  clickHandler(event, 3,'/contact')}
                >
                    <ListItemIcon>
                        <ContactMailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItem> */}
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItem>
                <IconButton aria-label="github" href="https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_images_center">
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-label="Linkedln" href="https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_images_center" >
                    <LinkedInIcon />
                </IconButton>
                </ListItem>
            </List>
        </div>
    );
}

                

export default NavLists;