# Todo App

A simple Todo application built with Node.js, Express, and vanilla JavaScript. The app allows users to create, view, and delete tasks from a Todo list, accessible via a browser at `http://localhost:8080`.

## Features

- Add tasks to the Todo list.
- View all tasks.
- Delete tasks from the Todo list.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:KingKazuma42/testTodo.git
   cd testTodo
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Project Structure

```
.
├── server.js         # Node.js server file
├── public/           # Static files
│   ├── index.html    # Frontend HTML
│   ├── style.css     # CSS for styling
│   └── app.js        # Frontend JavaScript
└── package.json      # Node.js project configuration
```

## API Endpoints

The app provides a simple API for managing Todo tasks:

### `GET /api/todos`
- **Description:** Fetch all Todo items.
- **Response:**
  ```json
  [
    {
      "id": 123,
      "text": "Example task"
    }
  ]
  ```

### `POST /api/todos`
- **Description:** Add a new Todo item.
- **Request Body:**
  ```json
  {
    "text": "New task"
  }
  ```
- **Response:**
  ```json
  {
    "id": 124,
    "text": "New task"
  }
  ```

### `DELETE /api/todos/:id`
- **Description:** Delete a Todo item by ID.
- **Response:** No content (204).

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Built with Node.js and Express.
- Simple and clean UI with vanilla JavaScript, HTML, and CSS.


