import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imagefilename: String,
    screen: String,
    processor: String,
    ram: Number,
});

const PostPhone = mongoose.model('PostPhone', postSchema);

export default PostPhone;