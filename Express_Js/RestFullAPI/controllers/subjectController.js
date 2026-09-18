import subject from "../models/subjectModel.js"

export const CreateSubject = async(req,res)=>{
    try{
        const {subjectName, subjectCode, credit} = req.body;

        const subjectExist = await student.findOne(subjectCode);
        if (subjectExist){
            return res.status(400).json({massage:"Subject already exist..."})
        }
        const subjectData = new subject(req.body);
        const createSubject = await student.save(subjectData);
        res.status(200).json(createSubject);
    }
    catch(error){
        res.status(500).json({error:"Internal server error.."})
    }
}