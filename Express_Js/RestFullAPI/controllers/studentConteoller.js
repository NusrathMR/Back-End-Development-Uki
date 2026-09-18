import student from "../models/studentModel.js";

// export const createStudent = async(req,res)=>{
//     try{
//         const {name,email,registrationNumber,course} = req.body;

//         const studentExist = await student.findOne({registrationNumber});
//         if (studentExist){
//             return res.status(400).json({massage:"Student already exist..."});
//         }

//         const saveStudent = await student.save();
//         res.status(200).json(saveStudent);
//     }
//     catch(error){
//         res.status(500).json({error:"Internal server error.."})
//     }
// }

export const createStudent = async (req,res)=>{
    try{
        const {registrationNumber} = req.body;

        const studentExist = await student.findOne({registrationNumber});
        if(studentExist){
            return res.status(400).json({massage:"Student already exists..."});
        }
        const studentData = new student(req.body);
        const saveStudent = await student.save(studentData);
        res.status(200).json(saveStudent);
    }
    catch(error){
        res.status(500).json({error:"Internal server error"})
    }
}

export const getAllStudents = async (req,res)=>{
    try{
        const allStudents = await student.find();
        if (allStudents){
            return res.status(200).json(allStudents);
        }
        res.status(400).json({massage:"Students not exists"});
    }
    catch(error){
        res.status(500).json({error:"Internal server error.."});
    }
}

export const getOneStudent = async (req,res)=>{
    try{
        const {registrationNumber} = req.body;

        const oneStudent = await student.findOne({registrationNumber});
        if (oneStudent){
            return res.status(200).json(oneStudent);
        }
        req.status(400).json({massage:"Student not find..."});
    }
    catch(error){
        res.status(500).json({error:"Internal server error"})
    }
}