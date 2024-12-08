import request from 'supertest';
import { app, server } from '../index.js';

describe('Pruebas de la API de ToDo', () => {
    afterAll(async () => {
        await server.close(); // Cierra el servidor después de las pruebas
    });

    test('debería crear una nueva tarea', async () => {
        const newTodo = {
            title: 'Tarea de prueba',
            description: 'Descripción de la tarea de prueba'
        };

        const response = await request(app)
            .post('/api/todos')
            .send(newTodo)
            .expect('Content-Type', /json/)
            .expect(201); // Esperamos un código de estado 201

        expect(response.body.success).toBe(true);
        expect(response.body.data.title).toBe(newTodo.title);
        expect(response.body.data.description).toBe(newTodo.description);
    });
});