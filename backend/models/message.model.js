import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    messages:{
        type: String,
        required:true,
    },
    edited:{
        type:Boolean,
        default: false,
    }
},{timestamps:true})


const Message = mongoose.model("Message",messageSchema)

export default Message