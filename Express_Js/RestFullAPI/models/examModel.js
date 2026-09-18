import mongoose from "mongoose";



const examResultsSchema = new mongoose.Schema(
    {
        student:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student",
            required:true
        },

        subject:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subject",
            required:true
        },

        marks:{
            type:Number,
            required:true,
            min:0,
            max:100
        },

        grade:{
            type:String,
            required:true
        },

        examDate:{
            type:Date,
            default:Date.now
        }
    },
    {
        timestamps:true
    }
)

const examResults = mongoose.model("exam", examSchema);
export default examResults;