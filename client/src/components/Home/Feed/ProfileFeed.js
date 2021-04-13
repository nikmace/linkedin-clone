import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, Divider, Grid } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import './ProfileFeed.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root2: {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  root3: {
    marginTop: '1rem',
    marginBottom: '1rem',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'flex-start',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  link1: {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'black',
    '&:hover': {
        textDecoration: 'underline',
        color: '#333333',
    }
  },
  link2: {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'black',
    '&:hover': {
        color: '#333333',
    }
  },
  root4: {
    display: 'block',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    textAlign: '',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

function ProfileFeed() {
  const classes = useStyles();

  return (
      <>
        <div className={classes.root}>
        <Avatar alt="Remy Sharp" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" className={classes.large} />
        </div>
        <div className={classes.root2}>
          <Link to="/in/:id" className={classes.link1}>
            <Typography variant="h6" gutterBottom>
            Nikita Baranov
            </Typography>
          </Link>
            <Typography variant="body2" gutterBottom>
                Full-Stack Web Developer
            </Typography>
        </div>
        <Divider variant="middle"/>
        <div className={classes.root3}>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={9}>
                    <Link to="/connections" className={classes.link1}>
                        <Typography variant="body2" gutterBottom style={{color: '#333333'}}>
                            Connections
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Grow your connections
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <span style={{fontSize: '.9rem'}}>34</span>
                </Grid>
            </Grid>
        </div>
        <Divider variant="middle"/>
        <div className={classes.root3}>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={9}>
                    <Link to="/connections" className={classes.link1}>
                        <Typography variant="body2" gutterBottom style={{color: '#333333'}}>
                            Who viewed your profile
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <span style={{fontSize: '.9rem'}}>87</span>
                </Grid>
            </Grid>
        </div>
        <Divider variant="middle"/>
        <div className={classes.root2}>
            <Typography variant="overline" gutterBottom>
            Access exclusive tools & insights
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Try Premium free for 1 Month
            </Typography>
        </div>
        <Divider variant="middle"/>
        <div className={classes.root4}>
            <Link to='/my-items' className={classes.link2}>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <BookmarkIcon />    
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body2">
                    My Items
                    </Typography>
                </Grid>
            </Grid>
            </Link>
        </div>
    </>
  );
}
export default ProfileFeed;
