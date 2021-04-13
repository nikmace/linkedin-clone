import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, Grid } from '@material-ui/core';
import { FcClapperboard, FcStackOfPhotos, FcCalendar, FcDocument } from 'react-icons/fc';

import CreatePostDialog from './CreatePostDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
    },
    medium: {
        width: '40px',
        height: '40px',
    },
    root2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: '40px',
        borderRadius: '25px',
        transition: '.2s all',
        backgroundColor: 'white',
        border: '1px solid #333333',
        '&:hover': {
            backgroundColor: '#f5f5f5'
        },
        '&:focus': {
            outline: 'thin',
        }
    },
    span: {
        display: 'block',
        textAlign: 'left',
        marginLeft: '2rem',
        fontSize: '16px'
    },
    options: {
        marginTop: '.3rem'
    },
    button2: {
        width: '80%',
        height: '40px',
        border: 'none',
        backgroundColor: 'white',
        borderRadius: '25px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        '&:hover': {
            backgroundColor: '#f5f5f5'
        },
        '&:focus': {
            outline: 'thin',
        }
    },
    icon: {
        height: '24px',
        width: '24px',
    },
    iconText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const CreatePost = () => {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} className={classes.root2}>
                    <Grid container spacing={8}>
                        <Grid item xs={1}>
                            <Avatar alt="Remy Sharp" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" className={classes.medium} />
                        </Grid>
                        <Grid item xs={10}>
                            <button className={classes.button} onClick={handleClickOpen}>
                                <span className={classes.span}>Start a post</span>
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
            <CreatePostDialog open={open} onClose={handleClose} handleClose={handleClose}/>
            <Grid container spacing={4} className={classes.options}>
                <Grid item xs={3} className={classes.iconText}>
                    <button className={classes.button2} onClick={() => console.log('Create post with Photo')}>
                        <FcStackOfPhotos className={classes.icon}/>
                        <Typography>Photo</Typography>
                    </button>
                </Grid>
                <Grid item xs={3} className={classes.iconText}>
                    <button className={classes.button2} onClick={() => console.log('Create post with Video')}>
                        <FcClapperboard className={classes.icon}/>
                        <Typography>Video</Typography>
                    </button>
                </Grid>
                <Grid item xs={3} className={classes.iconText}>
                    <button className={classes.button2} onClick={() => console.log('Create post with Event')}>
                        <FcCalendar className={classes.icon}/>
                        <Typography>Event</Typography>
                    </button>
                </Grid>
                <Grid item xs={3} className={classes.iconText}>
                    <button className={classes.button2} onClick={() => console.log('Create post with Article')}>
                        <FcDocument className={classes.icon}/>
                        <Typography>Article</Typography>
                    </button>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default CreatePost;
