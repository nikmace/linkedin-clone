import React from 'react';
import { Grid, Typography, Tooltip, IconButton } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FcInfo } from 'react-icons/fc';
import Person from './Person';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '0rem',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    addToFeed: {
        fontWeight: 'bold',
        fontSize: '15px',
    },
    avatar: {
        height: '54px',
        width: '54px',
    },
    root2: {
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'flex-start',
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

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
}))(Tooltip);

const person1 = {
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
    username: 'John Dover',
    description: 'Web Developer',
}

const person2 = {
    imageUrl: 'https://logosvector.net/wp-content/uploads/2012/04/ibm-logo-vector-200x200.png',
    username: 'Bob Mitchel',
    description: 'Software Engineer',
}

const person3 = {
    imageUrl: 'https://img2.freepng.ru/20180423/gkw/kisspng-google-logo-logo-logo-5ade7dc753b015.9317679115245306313428.jpg',
    username: 'Anna Marlow',
    description: 'Sales',
}



const FollowFeed = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                    <Typography variant="subtitle1" className={classes.addToFeed}>
                        Add to your feed
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <HtmlTooltip title="Follow things that interest you to personalize your feed. Learn more." className={classes.tooltip}>
                        <IconButton >
                            <FcInfo />  
                        </IconButton>
                    </HtmlTooltip>
                </Grid>
            </Grid>
            <Person user={person1}/>
            <Person user={person2}/>
            <Person user={person3}/>
        </>
    )
}

export default FollowFeed;
