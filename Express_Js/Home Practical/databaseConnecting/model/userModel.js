// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         require:true
//     },
    
//     email:{
//         type:String,
//         require:true
//     },

//     address:{
//         type:String,
//         require:true
//     }
// });

// export default mongoose.model("user", userSchema);


import mongoose from "mongoose";

const uerSchema  = new mongoose.Schema({
    Name:{
        type:String,
        require:true,
    },

    Email:{
        type:String,
        require:true,
    },

    Address:{
        type:String,
        require:true
    }
})

export default mongoose.model("user", userSchema);