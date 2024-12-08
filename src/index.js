import express from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todo.routes.js';
import healthRoutes from './routes/health.routes.js';

dotenv.config();

const app = express();
app.get("/", (req, res) => res.json({ message: "API de ToDoList" }));
app.use(express.json());
app.use('/api/todos', todoRoutes);
app.use('/api/health', healthRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en | http://localhost:${PORT}`);
});