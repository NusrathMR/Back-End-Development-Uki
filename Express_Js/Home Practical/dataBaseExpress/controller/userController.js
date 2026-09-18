import user from "../model/userModel.js";

export const viewAllUsers = async(req,res)=>{
    try{
        const allData = await user.find();
        if(allData){
            return res.status(200).json(allData);
        }
        return res.status(400).json({message: "No data exist."})
    }catch(error){
        return res.status(500).json({error: "Internal Server Error"});
    }
}

export const createUser = async(req,res)=>{
    try{
        const userData = new user(req.body);
        const {email} = userData;

        const userExist = await user.findOne({email});
        if(userExist){
            return res.status(400).json({massage: "User already exist..."});
        }

        const saveUser = await userData.save();
        res.status(200).json(saveUser)
    }catch(error){
        req.status(500).json({error: "Internal Server error..."});
    }
}