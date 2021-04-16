import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#2867B2',
  },
  link2: {
    textDecoration: 'underline',
    color: '#2867B2',
  },
  button: {
    borderRadius: '15px'
  }
}));

function HomeBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static" color="inherit">
            <Toolbar>
            <Link to="/" className={classes.link}>   
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
                <FaLinkedin />
            </IconButton>
            </Link>
            <Typography variant="h6" className={classes.title}>
                LinkedIn
            </Typography>
            <Link to="/feed" className={classes.link2}>
                <Button className={classes.button}>Feed</Button>
            </Link>
            <Link to="/signup" className={classes.link2}>
                <Button className={classes.button}>Signup</Button> 
            </Link>
            <Link to="/login" className={classes.link2}>
                <Button className={classes.button}>Login</Button>
            </Link>
            </Toolbar>
        </AppBar>
        </div>
  );
}

export default HomeBar;
