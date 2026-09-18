import mongoose from "mongoose";

const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Student name is required"]
    },
    email:{
        type:String,
        require:[true,"Student email is required"],
        unique:true,
        lowercase:true,
        trim:true
    },
    registrationNumber:{
        type:String,
        require:[true,"Student registration number is required"],
        unique:true,
        trim:true
    },
    course:{
        type:String,
        require:[true,"Student course is required"]
    }
},

{
    timestamps:true
}
);

const student = mongoose.model("student", studentSchema);
export default student;

