import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, makeStyles, Typography, Avatar, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5rem',
        height: '300px',
    },
    root2: {
        height: '300px',
        display: 'block',
        justifyContent: 'center',
        borderRadius: '15px'
    },
    text1: {
        width: '100%',
        marginBottom: '1rem'
    },
    text2: {
        width: '100%',
    },
    heading: {
        alignItems: 'center', 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex', 
        marginBottom: '2rem',
        color: '#2867B2',
    },
    link: {
        textDecoration: 'none',
        color: '#2867B2',
    },
    button: {
        color: '#0a66c2',
    },
}));


function Signup() {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
                <Grid item xs={10} sm={8} md={6} lg={4}>
                    <Typography variant="h4" className={classes.heading}>Login</Typography>
                    <Paper className={classes.root2}>
                    
                        <Grid container spacing={3}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <Typography variant="subtitle1">
                                    Username
                                </Typography>
                                <TextField
                                id="outlined-multiline-static"
                                label="Enter your username"
                                variant="outlined"
                                className={classes.text1}
                                />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                        
                        <Grid container spacing={3}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <Typography variant="subtitle1">
                                    Password
                                </Typography>
                                <TextField
                                type="password"
                                id="outlined-multiline-static"
                                label="Enter your password"
                                variant="outlined"
                                className={classes.text1}
                                />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                        
                        <Grid container spacing={3}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={7}>
                                <Typography variant="subtitle1">
                                    Don't have an account? 
                                    <Link to="/signup" className={classes.link}>Signup</Link>
                                </Typography>

                            </Grid>
                            <Grid item xs={4}>
                                <Link to="/" className={classes.link}>
                                    <Button  className={classes.button}>
                                        Back
                                    </Button>
                                </Link>
                            <Button  className={classes.button} disabled>
                                Login
                            </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
            </Grid>
        </>
    )
}

export default Signup;
