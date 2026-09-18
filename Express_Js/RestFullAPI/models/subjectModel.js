import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    subjectName:{
        type:String,
        require:[true,"Subject name is required"],
        trim:true
    },
    subjectCode:{
        type:String,
        require:[true,"Subject code is required"],
        unique:true,
        uppercase:true,
        trim:true,
    },
    credit:{
        type:String,
        require:[true,"Subject credit is required"],
        min:1
    }
},
{
    timestamps:true
});

const subject = mongoose.model("subject", subjectSchema);
export default subject;