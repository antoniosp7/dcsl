import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import {deletePost} from '../../../actions/posts';


const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (

        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.imagefilename || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} name={post.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="h6">{post.manufacturer}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.description}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.price}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{post.screen}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{post.processor}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{post.ram}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
 
    )
};

export default Post;