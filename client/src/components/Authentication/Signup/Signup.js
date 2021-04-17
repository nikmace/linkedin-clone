import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid, Paper, makeStyles, Typography, TextField, Button, Snackbar,  } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle/AlertTitle';

import { validateInputs } from './validate-inputs';
import { createUser } from '../../../services/auth/create-user';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5rem',
        height: '650px',
    },
    root2: {
        height: '650px',
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
    const [disabled, setDisabled] = React.useState(true);
    const [success, setSuccess] = React.useState();
    const [serverError, setServerError] = React.useState();
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [input, setInput] = React.useState({
        name: '',
        email: '',
        password: '',
        username: '',
        profileImage: '',
    });
    const [errors, setErrors] = React.useState({
        email: '',
        profileImage: '',
    });

    const classes = useStyles();

    const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    }

    const submitHandler = async () => {
        setErrors(null);
        let areValid = await validateInputs(input, setErrors);
        if(areValid) {
            const data = await createUser(input);

            setSuccess(data.success);
            setServerError(data.errors);
            setOpenSnackbar(true);
        }
    }
    
    React.useEffect(() => {
        setDisabled((input.name.length && input.email.length && input.username.length && input.profileImage.length) < 1 ? true : false)
    }, [input]);

    return (
        <>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
                <Grid item xs={10} sm={8} md={6} lg={4}>
                    <Typography variant="h4" className={classes.heading}>Signup</Typography>
                    <Paper className={classes.root2}>
                    <Grid container spacing={3}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <Typography variant="subtitle1">
                                    Name
                                </Typography>
                                <TextField
                                label="Enter your two names"
                                variant="outlined"
                                name='name'
                                value={input?.name}
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
                                    Email
                                </Typography>
                                <TextField
                                error={errors.email}
                                helperText={errors.email}
                                label="Enter your email"
                                variant="outlined"
                                name='email'
                                value={input?.email}
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
                            <Grid item xs={10}>
                                <Typography variant="subtitle1">
                                    Profile Image
                                </Typography>
                                <TextField
                                error={errors.profileImage}
                                helperText={errors.profileImage}
                                label="Paste your image url"
                                variant="outlined"
                                name='profileImage'
                                value={input?.profileImage}
                                onChange={handleChange}
                                className={classes.text1}
                                />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1">
                                    Have an account? 
                                    <Link to="/login" className={classes.link}>Login</Link>
                                </Typography>

                            </Grid>
                            <Grid item xs={5}>
                                <Link to="/" className={classes.link}>
                                    <Button  className={classes.button}>
                                        Back
                                    </Button>
                                </Link>
                            <Button className={classes.button} disabled={disabled} onClick={submitHandler}>
                                Signup
                            </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={1} sm={2} md={3} lg={4}></Grid>
            </Grid>
            {success === true && (
                <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
                        <Alert onClose={handleCloseSnackbar} severity="success">
                            <AlertTitle>Success</AlertTitle>
                            User created successfully! Please login.
                        </Alert>
                </Snackbar>
            )}
            {serverError && (
                <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {serverError ? serverError : null}
                    </Alert>
                </Snackbar>
            )}
            
        </>
    )
}

export default Signup;
