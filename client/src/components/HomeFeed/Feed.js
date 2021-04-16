import React from 'react';
import {Grid, Paper, makeStyles} from '@material-ui/core';

import ProfileFeed from './Feed/ProfileFeed';
import CreatePost from  './Posts/create-post/CreatePost';
import FollowFeed from './Feed/follow-feed/FollowFeed';
import PostFeed from './Posts/post-feed/PostFeed';

import { getPosts } from '../../services/get-posts';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '4rem',
        dislay: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    profileFeed: {
        height: '500px',
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
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
    },
    
}));

const Feed = () => {
    const classes = useStyles();

    const [posts, setPosts] = React.useState();
    const [success, setSuccess] = React.useState();

    React.useEffect(() => {
        async function getAllPosts() {
            let posts = await getPosts();
            if (posts) {
                setPosts(posts.posts);
                setSuccess(posts.success);
            }      
        }
        
        getAllPosts();
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={5}>
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
                        {posts && posts.map(post => {
                            return (
                                <PostFeed post={post} key={post._id} creator={post.creator}/>
                            )
                        })}
                        
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

export default Feed;
