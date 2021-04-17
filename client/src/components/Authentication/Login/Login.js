import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, makeStyles, Typography, Avatar, TextField, Button } from '@material-ui/core';

import { loginUser } from '../../../services/auth/login-user';

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
        marginBottom: '1rem',
        marginTop: '.3rem',
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
    const [disabled, setDisabled] = React.useState(true);
    const [input, setInput] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = async () => {
        const data = await loginUser(input);
        console.log(data);
    }

    React.useEffect(() => {
        setDisabled((input.username.length && input.password.length) < 1 ? true : false)
    }, [input]);

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
                                label="Enter your username"
                                variant="outlined"
                                name='username'
                                value={input?.username}
                                onChange={handleChange}
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
                                label="Enter your password"
                                variant="outlined"
                                name='password'
                                value={input?.password}
                                onChange={handleChange}
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
                            <Button  className={classes.button} disabled={disabled} onClick={submitHandler}>
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
