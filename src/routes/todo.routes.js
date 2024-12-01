import express from 'express';
import { createTodo, getAllTodos, updateTodo, deleteTodo } from '../controllers/todo.controller.js';

const router = express.Router();

// Ruta para crear tarea
router.post('/', createTodo);
router.get('/', getAllTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;