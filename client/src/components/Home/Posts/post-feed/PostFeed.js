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
        fontSize: '13px', //
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


function PostFeed() {
    const classes = useStyles();

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
                                18h
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
                        Data are units of information, often numeric, that are collected through observation. In a more technical sense, data are a set of values of qualitative or quantitative variables about one or more persons or objects, while a datum (singular of data) is a single value of a single variable.
                        </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={12}>
                        <img src="https://images.ctfassets.net/u0haasspfa6q/2sMNoIuT9uGQjKd7UQ2SMQ/1bb98e383745b240920678ea2daa32e5/sell_landscape_photography_online" style={{width: '100%', height: '450px', objectFit: 'contain'}}/>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default PostFeed;

