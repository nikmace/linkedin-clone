import React from 'react';
import { Grid, Typography, Avatar, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getPosts } from '../../../../services/get-posts';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    postsPaper: {
        height: '800px',
        borderRadius: '15px',
        backgroundColor: 'white',
    }
}));


function PostFeed() {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.postsPaper}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={8}>

                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default PostFeed;

