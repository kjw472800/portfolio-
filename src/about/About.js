import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card , CardMedia, Divider, Grid, List,ListItemText,ListItemIcon,ListItem} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import HttpIcon from '@material-ui/icons/Http';
import testimg from '../assets/test1.jpg';
import LanguageIcon from '@material-ui/icons/Language';
import BuildIcon from '@material-ui/icons/Build';
import StorageIcon from '@material-ui/icons/Storage';
const useStyles = makeStyles({
    card: {
      display: 'flex',
      height: '100%',
      paddingRight: '3px'
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: "100%",
      maxWidth: 300,
      height: 300,
      marginTop: 3
    }
  });

const About= ()=>{
    const classes = useStyles();

    return (
        <React.Fragment>
        <Card > 
            <Grid container>
                <Grid container item xs={12} md={3} >         
                    <Box width="100%"  p={1} my={0.5} display="flex" justifyContent="center">
                        <CardMedia className={classes.cardMedia} image={testimg} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box width="100%" p={1}>
                    <Typography variant="h3" component="h2">Background</Typography>
                    <Typography variant="body1" gutterBottom paragraph  >
                        I am currently a master student in Computer Science at the University of Illinois, Urbana-Champaign.
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Divider/>
        </Card>
        <Divider/>
        <Card>
            <Typography variant="h3" component="h2">Skills</Typography>
            <Box mt={1} minHeight={100} >
                
                <Grid container>
                    <Grid item md={4} xs={12}>
                        <List aria-label="">
                            <ListItem >
                            <ListItemIcon>
                                <CodeIcon color='secondary' fontSize='large'/>
                            </ListItemIcon>
                            <ListItemText primary="Language" />
                            </ListItem>
                            <ListItem >
                            <ListItemText primary="C/C++" />
                            </ListItem>
                            <ListItem >
                            <ListItemText primary="javascript" />
                            </ListItem>
                            <ListItem >
                            <ListItemText primary="python" />
                            </ListItem>
                        </List>
                    </Grid>
                    
                    <Grid item md={4} xs={12}>
                    <List aria-label="">
                            <ListItem >
                            <ListItemIcon>
                                <HttpIcon color='secondary' fontSize='large'/>
                            </ListItemIcon>
                            <ListItemText primary="Web frontend" />
                            </ListItem>
                            <ListItem >
                            <ListItemText primary="React/Redux" />
                            </ListItem>
                            <ListItem >
                            <ListItemText primary="Material-UI" />
                            </ListItem>
                            <Divider/>
                            <ListItem >
                            <ListItemIcon>
                                <StorageIcon color='secondary' fontSize='large'/>
                            </ListItemIcon>
                            <ListItemText primary="Web backend" />
                            </ListItem>
                            <ListItem >
                            <ListItemText primary="RESTful API" />
                            </ListItem>
                            <ListItem >
                            <ListItemText primary="Express.js" />
                            </ListItem>
                            <ListItem >
                            <ListItemText primary="MongoDB" />
                            </ListItem>
                            <ListItem >
                            <ListItemText primary="PostgreSQL" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <List aria-label="">
                            <ListItem >
                            <ListItemIcon>
                                <BuildIcon color='secondary' fontSize='large'/>
                            </ListItemIcon>
                            <ListItemText primary="Others" />
                            </ListItem>
                            
                            <ListItem >
                            <ListItemText primary="Git/Github" />
                            </ListItem>

                            <ListItem >
                            <ListItemText primary="Robot Operating System" />
                            </ListItem>
                            
                            <Divider/>

                            <ListItem >
                            <ListItemIcon>
                                <LanguageIcon color='secondary' fontSize='large'/>
                            </ListItemIcon>
                            <ListItemText primary="Language" />
                            </ListItem>

                            <ListItem>
                            <ListItemText primary="Mandarin" />
                            </ListItem>
                            <ListItem >
                            <ListItemText primary="English" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                

            </Box>
        </Card>
        </React.Fragment>
    )
}

export default About;