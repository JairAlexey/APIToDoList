import pool from '../db.js';

export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        const newTodo = await pool.query(
            'INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *',
            [title, description]
        );
        
        res.status(201).json({
            success: true,
            data: newTodo.rows[0],
            message: 'Tarea creada exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear la tarea',
            error: error.message
        });
    }
};

export const getAllTodos = async (req, res) => {
    try {
        const todos = await pool.query('SELECT * FROM todos ORDER BY created_at DESC');
        
        res.status(200).json({
            success: true,
            data: todos.rows,
            message: 'Tareas recuperadas exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener las tareas',
            error: error.message
        });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        
        const updatedTodo = await pool.query(
            'UPDATE todos SET title = COALESCE($1, title), description = COALESCE($2, description), completed = COALESCE($3, completed) WHERE id = $4 RETURNING *',
            [title, description, completed, id]
        );

        if (updatedTodo.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Tarea no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            data: updatedTodo.rows[0],
            message: 'Tarea actualizada exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar la tarea',
            error: error.message
        });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await pool.query(
            'DELETE FROM todos WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Tarea no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Tarea eliminada exitosamente',
            data: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la tarea',
            error: error.message
        });
    }
};