import mongoose from 'mongoose';
import PostPhone from '../models/postPhone.js'

export const getPosts = async (req, res) => {
    try {
        const postPhones = await PostPhone.find();

        res.status(200).json(postPhones);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
   
    const post = req.body;

    const newPost = new PostPhone(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { name, manufacturer, description, color, price, imagefilename, screen, processor, ram } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { name, manufacturer, description, color, price, imagefilename, screen, processor, ram, _id: id };

    await PostPhone.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}


export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostPhone.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

