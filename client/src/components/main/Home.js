import React from 'react';
import {Grid, Paper, makeStyles} from '@material-ui/core';
import ProfileFeed from './feed/ProfileFeed';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '4rem',
        dislay: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    profileFeed: {
        height: '415px',
    },
    createPost: {
        height: '100px',
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
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Paper className={classes.profileFeed}>
                        <ProfileFeed />
                    </Paper>
                </Grid>
                <Grid item xs={7}>
                    <Paper className={classes.createPost}>Create Post</Paper>
                    <Grid item xs={12} className={classes.posts}>
                        <Paper className={classes.postsPaper}>Posts</Paper>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.followPeople}>Add to your Feed</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
