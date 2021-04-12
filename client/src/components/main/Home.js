import React from 'react';
import {Grid, Paper, makeStyles} from '@material-ui/core';

import ProfileFeed from './feed/ProfileFeed';
import CreatePost from  './posts/create-post/CreatePost';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '4rem',
        dislay: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    profileFeed: {
        height: '470px',
    },
    createPost: {
        height: '120px',
    },
    followPeople: {
        height: '315px',
    },
    posts: {
        marginTop: '1rem',
    },
    postsPaper: {
        height: '800px',
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                    <Paper className={classes.profileFeed}>
                        <ProfileFeed />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.createPost}>
                        <CreatePost />
                    </Paper>
                    <Grid item xs={12} className={classes.posts}>
                        <Paper className={classes.postsPaper}>Posts</Paper>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.followPeople}>Add to your Feed</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
