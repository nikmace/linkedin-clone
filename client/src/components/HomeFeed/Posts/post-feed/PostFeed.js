import React from 'react';
import { Grid, Typography, Avatar, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FiMoreHorizontal } from 'react-icons/fi';

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
        marginBottom: '2.5rem',
    },
    avatar: {
        width: '64px',
        height: '64px',
    },
    root2: {
        display: 'flex',
        justifyContent: 'flex',
        alignItems: 'inherit',
    },
    info: {
        color: '#333333',
        fontSize: '13px',
    },
    root3: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    moreIcon: {
        width: '26px',
        height: '26px',
    },
    root4: {
        marginBottom: '1rem'
    }
}));


function PostFeed({ post: { description, imageUrl, createdAt, creator, likesCount, commentsCount, comments } }) {
    const classes = useStyles();
    
    console.log()
    return (
        <>
            <Paper className={classes.postsPaper}>
                <Grid container spacing={3}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={9} className={classes.root2}>
                        <Avatar alt="Remy Sharp" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" className={classes.avatar} />
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">
                                Nikita Baranov
                            </Typography>
                            <Typography variant="caption" className={classes.info}>
                                Full-Stack Web Developer
                            </Typography>
                            <br />
                            <Typography variant="caption">
                                {createdAt}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} className={classes.root3}>
                        <FiMoreHorizontal className={classes.moreIcon}/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Grid container className={classes.root4}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Typography variant="body1">
                        {description ? description : 'No information available'}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={12}>
                        <img src={imageUrl} style={{width: '100%', height: '450px', objectFit: 'contain'}}/>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default PostFeed;

