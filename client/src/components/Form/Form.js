import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';


const Form = (currentId, setCurrentId) => {
    const[postData, setPostData] = useState({
        name:'', manufacturer:'', description:'', color:'', price: 0, screen: '', processor:'', ram: 0, imagefilename: ''});
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();    

    const handleSubmit = (e) => {
        e.preventDefault();

        
        dispatch(createPost(postData));
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant= "h6" >Creating a phone</Typography>
            <TextField name = "name" variant="outlined" label="Name" fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData ,name: e.target.value})}/>
            <TextField name = "manufacturer" variant="outlined" label="Manufacturer" fullWidth value={postData.manufacturer} onChange={(e) => setPostData({ ...postData ,manufacturer: e.target.value})}/>
            <TextField name = "description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData ,description: e.target.value})}/>
            <TextField name = "color" variant="outlined" label="Color" fullWidth value={postData.color} onChange={(e) => setPostData({ ...postData ,color: e.target.value})}/>
            <TextField name = "price" variant="outlined" label="Price" fullWidth value={postData.price} onChange={(e) => setPostData({ ...postData ,price: e.target.value})}/>
            <TextField name = "screen" variant="outlined" label="Screen" fullWidth value={postData.screen} onChange={(e) => setPostData({ ...postData ,screen: e.target.value})}/>
            <TextField name = "processor" variant="outlined" label="Processor" fullWidth value={postData.processor} onChange={(e) => setPostData({ ...postData ,processor: e.target.value})}/>
            <TextField name = "ram" variant="outlined" label="Ram" fullWidth value={postData.ram} onChange={(e) => setPostData({ ...postData ,ram: e.target.value})}/>
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, imagefilename: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit </Button>
            </form>

        </Paper>
    );
}

export default Form;