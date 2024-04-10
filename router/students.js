import express from 'express';
import { getAllStudents, getStudentsByID, addStudents, UpdateStudents, DeleteStudents } from '../controllers/students.js';
const router = express.Router();
router.get('/students',getAllStudents);
router.get('/students/:id', getStudentsByID);
router.post('/students', addStudents);
router.put('/students/:id', UpdateStudents);
router.delete('/students/:id', DeleteStudents);

export default router;