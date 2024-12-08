# ToDoList API

## Descripción

ToDoList es una API RESTful que permite a los usuarios gestionar sus tareas diarias. Los usuarios pueden crear, leer, actualizar y eliminar tareas, lo que les ayuda a organizar mejor sus pendientes y llevar un control de su progreso.

## Características

- **Crear Tareas**: Permite a los usuarios crear nuevas tareas con un título y una descripción.
- **Listar Tareas**: Los usuarios pueden obtener una lista de todas sus tareas pendientes.
- **Actualizar Tareas**: Los usuarios pueden marcar tareas como completadas o actualizar su información.
- **Eliminar Tareas**: Los usuarios pueden eliminar tareas que ya no necesitan.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web y APIs en Node.js.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar las tareas.
- **Jest**: Framework de pruebas para asegurar la calidad del código.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/todo-list.git
   cd todo-list
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:
   ```
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=tu_base_de_datos
   PORT=3000
   ```

4. Inicia la aplicación:
   ```bash
   npm start
   ```

## Rutas de la API

- `GET /api/todos`: Obtiene todas las tareas.
- `POST /api/todos`: Crea una nueva tarea.
- `PATCH /api/todos/:id`: Actualiza una tarea existente.
- `DELETE /api/todos/:id`: Elimina una tarea.

## Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:
   ```bash
   npm test
   ```

## Despliegue

La aplicación está configurada para desplegarse en Railway. Asegúrate de tener configuradas las variables de entorno necesarias en Railway para que la aplicación funcione correctamente.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.   