import request from 'supertest';
import { app, server } from '../index.js';

describe('Pruebas de la API de ToDo', () => {
    afterAll(async () => {
        await server.close(); // Cierra el servidor después de las pruebas
    });

    test('debería responder con un estado 200 en la ruta /api/todos', async () => {
        const response = await request(app)
            .get('/api/todos')
            .expect('Content-Type', /json/)
            .expect(200); // Esperamos un código de estado 200

        expect(response.body.success).toBe(true); // Asegúrate de que tu API devuelva este campo
    });
});