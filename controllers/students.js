import studentModel from "../models/students.js";

export const getAllStudents = async(req,res) => {
    try {
        const students = await studentModel.find()
        return res.status(200).json({status:true, data: students})
    } catch (error) {
        return res.status(503).json({status:false, message: 'Connected fails'})
    }
}
export const getStudentsByID = async(req,res) => {
    try {
        const id = req.params.id
        const students = await studentModel.find()
        return res.status(200).json({status:true, data: students})
    } catch (error) {
        return res.status(503).json({status:false, message: 'Connected fails'})
    }
}
export const addStudents = async(req,res) => {
    try {
        const body = req.body
        const StudentModel = new studentModel(body)
        const students = await StudentModel.save()
        return res.status(200).json({status:true, data: students})
    } catch (error) {
        return res.status(503).json({status:false, message: 'Connected fails'})
    }
}
export const UpdateStudents = async(req,res) => {
    try {
        const id = req.params.id
        const body = req.body
        const students = await studentModel.findOneAndUpdate({_id: id}, body, {new:true})
        return res.status(200).json({status:true, data: students, message: ' Update Success'})
    } catch (error) {
        return res.status(503).json({status:false, message: 'Connected fails'})
    }
}
export const DeleteStudents = async(req,res) => {
    try {
        const id = req.params.id
        const students = await studentModel.findOneAndDelete({_id: id})
        return res.status(200).json({status:true, data: students, message: 'Delete Success'})
    } catch (error) {
        return res.status(503).json({status:false, message: 'Connected fails'})
    }
}
// router.get('/students',getAllStudents);
// router.get('/students/:id', getStudentsByID);
// router.post('/students', addStudents);
// router.put('/students/:id', UpdateStudents);
// router.delete('/students/:id', DeleteStudents);
