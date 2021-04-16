import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Avatar, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { createPost } from '../../../../services/create-post';
import { getPosts } from '../../../../services/get-posts';

const useStyles = makeStyles((theme) => ({
    text1: {
        width: '100%',
        marginBottom: '1rem'
    },
    text2: {
        width: '100%',
    },
    button: {
        color: '#0a66c2',
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '1rem',
        marginBottom: '1.5rem'
    },
}));


export default function CreatePostDialog({ open, handleClose, setSuccess }) {
    const [description, setDescription] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');
    const [disabled, setDisabled] = React.useState(true);
    const classes = useStyles();

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleChangeImage = (e) => {
        setImageUrl(e.target.value);
    };

    const submitHandler = async () => {
        let creator = '60767fbd7c253440f20b6b37'
        await createPost(description, imageUrl, creator);
        setImageUrl('');
        setDescription('');
        setSuccess(true);
        handleClose();
    }

    React.useEffect(() => {
        setDisabled((description.length && imageUrl.length) < 1 ? true : false)
    }, [imageUrl, description])

    return (
        <div>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create a post</DialogTitle>
            <Divider variant="middle"/>
            <DialogContent>
                <div className={classes.root}>
                    <Avatar alt="Remy Sharp" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" className={classes.medium} />
                    <Typography variant="subtitle1">
                        Nikita Baranov
                    </Typography>
                </div>
            <DialogContentText>
                Follow community guidelines. For more information, visit LinkedIn Policy.
            </DialogContentText>
                <TextField
                    id="outlined-multiline-static"
                    label="What do you want to talk about?"
                    multiline
                    rows={8}
                    variant="outlined"
                    value={description}
                    onChange={handleChangeDescription}
                    className={classes.text1}
                />
                <TextField
                    label="Paste image address"
                    variant="outlined"
                    className={classes.text2}
                    value={imageUrl}
                    onChange={handleChangeImage}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} className={classes.button}>
                Cancel
            </Button>
            <Button onClick={submitHandler} className={classes.button} disabled={disabled}>
                Post
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
    }