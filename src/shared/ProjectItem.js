import React from 'react';
import {Typography,Box, Card,Grid,CardMedia,CardContent,CardActions,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardroot: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    
}));

const ProjectItem= (props)=>{
    const classes= useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.cardroot}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Hellow
                    {/* {props.projectName} */}
                    </Typography>
                    <Typography>
                        Est elit nulla mollit est culpa cupidatat sint ea. Aute consequat culpa exercitation adipisicing occaecat laborum consectetur proident fugiat velit Lorem duis. Et dolore Lorem sit nostrud nulla esse eu aliquip qui excepteur exercitation culpa velit. Incididunt Lorem aliquip Lorem elit aliqua occaecat exercitation dolor nulla velit. Est nisi dolor sit dolor consectetur id laborum mollit velit officia ipsum.
                    {/* {props.content} */}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button size="small" color="primary">
                    Read more...
                    </Button>
                </CardActions>
            </Card>
      </Grid>
    )
}

export default ProjectItem;