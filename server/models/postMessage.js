import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        default:0,
        type: Number
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const postMessage=mongoose.model('postMessage',postSchema);

export default postMessage;
 