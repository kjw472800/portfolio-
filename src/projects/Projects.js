import React from 'react';
import ProjectItem from '../shared/ProjectItem';
import { Grid,Typography,Box} from '@material-ui/core';

const Projects= ()=>{
    

    return (
        <Box  bgcolor='background.default'>
            <Typography variant="h3" component="h2"></Typography>
            
            <Grid container spacing={2}>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </Grid>
        </Box>
    )
}

export default Projects;