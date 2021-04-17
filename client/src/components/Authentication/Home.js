import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, makeStyles, Typography, Avatar } from '@material-ui/core';
import { IoIosArrowForward } from 'react-icons/io';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10rem',
        height: '600px',
    },
    root2: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#0a66c2',
    },
    root3: {
        marginTop: '3.5rem',
    },
    queries: {
        width: '400px',
        height: '60px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        cursor: 'pointer',
    },
    avatar: {
        height: '500px',
        width: '800px',
        objectFit: 'contain',
    },
    root4: {
        marginTop: '1rem',
    }
}))


function Home() {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={1} md={1} lg={2}></Grid>
                <Grid item xs={4} md={3} lg={4} className={classes.root2}>
                    <Grid item xs={9}>
                        <Typography variant='h2' className={classes.title}>Welcome to the community of specialists!</Typography>
                    </Grid>
                    <Grid container className={classes.root3}>
                        <Grid item xs={7} className={classes.root4}>
                            <Paper className={classes.queries}>
                                <Grid item xs={10}>
                                    Find new Job
                                </Grid>
                                <IoIosArrowForward />
                            </Paper>
                        </Grid>
                        <Grid item xs={7} className={classes.root4}>
                            <Paper className={classes.queries}>
                                <Grid item xs={10}>
                                    Find connections
                                </Grid>
                                <IoIosArrowForward />
                            </Paper>
                        </Grid>
                        <Grid item xs={7} className={classes.root4}>
                            <Paper className={classes.queries}>
                                <Grid item xs={10}>
                                    Develop your skills
                                </Grid>
                                <IoIosArrowForward />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5} md={6} lg={4}>
                    <Avatar className={classes.avatar} src="https://blog.alexa.com/wp-content/uploads/2020/08/CM-content-tactics.png"/>
                </Grid>
                <Grid item xs={2} md={2} lg={2}></Grid>
            </Grid>
        </>
    )
}

export default Home;
