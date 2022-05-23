import mongoose from "mongoose";

const postMessageSchema = mongoose.Schema({
    Creator: String,
    Title: String,
    Message: String,    
    Tags: [String],
    SelectedFile: String,
    LikeCount: {
        type: Number,
        default: 0 
    },
    CreatedAt: {
        type: Date,
        default: new Date()
    }
});

const postMessageModel = mongoose.model('postmessages', postMessageSchema);

export default postMessageModel;



