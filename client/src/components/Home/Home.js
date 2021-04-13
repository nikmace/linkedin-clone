import React from 'react';
import {Grid, Paper, makeStyles} from '@material-ui/core';

import ProfileFeed from './Feed/ProfileFeed';
import CreatePost from  './Posts/create-post/CreatePost';
import FollowFeed from './Feed/follow-feed/FollowFeed';

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
        borderRadius: '15px',
        boxShadow: '0 5px 10px rgba(0,0,0,.1)',
    },
    createPost: {
        height: '120px',
        borderRadius: '15px',
        boxShadow: '0 5px 10px rgba(0,0,0,.1)',
    },
    followPeople: {
        height: '370px',
        borderRadius: '15px',
        boxShadow: '0 5px 10px rgba(0,0,0,.1)',
    },
    posts: {
        marginTop: '1rem',
    },
    postsPaper: {
        height: '800px',
        borderRadius: '15px',
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
                    <Paper className={classes.followPeople}>
                        <FollowFeed />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
