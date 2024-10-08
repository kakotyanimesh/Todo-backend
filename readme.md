# Todo full stack

This project is a simple Todo fullstack API built using react, tailwind, Node.js, Express, and file-based storage. It allows users to manage a list of todo items with basic CRUD (Create, Read, Update, Delete) operations. The todos are stored in a JSON file (`todos.json`).

## Assignment

This project is part of the 100x Dev Cohort assignment [link](https://harkirat.classx.co.in/new-courses) led by [Harkirat Singh](https://www.youtube.com/@harkirat1).

You can read more about the development process in my [blog post](https://sunrise-boar-33f.notion.site/Todo-Backend-3554a4e3b40e419f96b83de950ec5e61).

<!-- 
## Installation

### Navigate to the project directory:
```bash
cd todo-backend
```

### Install the dependencies:
```bash
npm install
```

### Create a `todos.json` file in the root directory with the following structure:
```json
[]
```

## Usage

### Start the server:
```bash
node app.js
```

The server will run on `http://localhost:3000`.

## API Endpoints

### Get All Todos

- **Endpoint:** `GET /todos`
- **Description:** Retrieves the list of all todos.
- **Response:**
    ```json
    [
        {
            "id": 1,
            "title": "Sample Todo",
            "completed": false
        },
        
    ]
    ```

### Create a Todo

- **Endpoint:** `POST /todos`
- **Description:** Creates a new todo.
- **Request Body:**
    ```json
    {
        "title": "New Todo",
        "completed": false
    }
    ```
- **Response:**
    ```json
    {
        "message": "todo created successfully"
    }
    ```

### Update a Todo

- **Endpoint:** `PUT /todos/:id`
- **Description:** Updates an existing todo by its ID.
- **Request Body:**
    ```json
    {
        "title": "Updated Todo",
        "completed": true
    }
    ```
- **Response:**
    ```json
    [
        {
            "id": 1,
            "title": "Updated Todo",
            "completed": true
        },
        
    ]
    ```

### Delete a Todo

- **Endpoint:** `DELETE /todos/:id`
- **Description:** Deletes a todo by its ID.
- **Response:**
    ```json
    {
        "message": "todo deleted successfully"
    }
    ```

## Features

- **Create Todos:** Add new tasks to your todo list.
- **Read Todos:** View all tasks in your todo list.
- **Update Todos:** Edit the details of existing tasks.
- **Delete Todos:** Remove tasks from your todo list.

## Dependencies

- **Express** - Web framework for Node.js.
- **body-parser** - Middleware to parse request bodies.
- **fs (File System)** - Node.js module for interacting with the file system.

## License

This project is licensed under the MIT License.
```

This version includes a dedicated "Assignment" section with a link to your blog post, providing context for the project as part of the 100x Dev Cohort. -->



