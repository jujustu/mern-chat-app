import mongoose from "mongoose";


const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,    
            ref:"Message",
            default: [],
        }
    ]
},{timestamps:true})

const conversation = mongoose.model("converstation",conversationSchema)

export default conversation;