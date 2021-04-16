import React from 'react';
import { Grid, Typography, Tooltip, IconButton, Avatar } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AiOutlinePlus } from 'react-icons/ai';

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: '54px',
        width: '54px',
    },
    root2: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'flex-start',
        marginLeft: '1rem',
    },
    buttonRoot2: {
        width: '98.75px',
        height: '32px',
        borderRadius: '25px',
        transition: '.2s all',
        backgroundColor: 'white',
        border: '1px solid #333333',
        '&:hover': {
            backgroundColor: '#f5f5f5'
        },
        '&:focus': {
            outline: 'thin',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoRoot2: {
        color: '#333333',
        marginBottom: '.4rem'
    }
}));

const Person = ({ user: {imageUrl, username, description }}) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                    <Avatar alt="Remy Sharp" src={imageUrl} className={classes.avatar}/>
                </Grid>
                <Grid item xs={9}>
                    <Grid container className={classes.root2}>
                        <Typography >
                            {username}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.infoRoot2}>
                            {description}
                        </Typography>
                        <button className={classes.buttonRoot2} onClick={() => console.log("Followed person")}>
                            <AiOutlinePlus />
                            Follow
                        </button>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default Person;
