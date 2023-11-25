import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    id:Number,
    title:String,
    date:String,
    body:String,
    urls:{
        blogUrl:String,
        thumbUrl:String,
        imagesUrl:[String],
    },
    likes:Number,
    labels:[String],
    tags:[String],
});

const Blog = new mongoose.model('Blog', blogSchema);

export default Blog;