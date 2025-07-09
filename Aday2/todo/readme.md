# ✅ TODOS Viewer App

#### A simple and responsive web app that displays a list of todos in a clean Bootstrap-styled table using the JSONPlaceholder REST API. Built with HTML, Bootstrap, and Vanilla JavaScript.

## 📌 Features

### Fetches real-time TODO data from JSONPlaceholder API.

### Displays todos in a responsive, styled table.

### Each row shows: User ID, Todo ID, Title, and Completed Status.

### Clean and minimal design with Bootstrap 5.

## 🧑‍💻 Technologies Used

### HTML5

### Bootstrap 5 (CSS Framework)

### Vanilla JavaScript (ES6)

### Fetch API

### JSONPlaceholder REST API

## 📦 Folder Structure

### bash
### Copy
### Edit
### project-folder/
### ├── index.html      # HTML layout with Bootstrap table
### ├── script.js       # JavaScript logic to fetch and display todos
### └── README.md       # Project description and instructions

## 🔍 How It Works
### On page load, calltodo() is triggered.

### It fetches the data from https://jsonplaceholder.typicode.com/todos.

### The JSON response (array of todo objects) is passed to displaytodo() function.

### Each todo is added as a new <tr> in the table using createElement().

## 📋 Data Fields Displayed

### Field	Description
### userId	ID of the user who created the todo
### id	Unique ID of the todo
### title	Description of the task
### completed	Status of completion (true / false)

## 📸 UI Preview
### html
### Copy
### Edit
### +---------------------------------------------------------------+
### |  User ID | ID |                  Title              | Completed |
### +---------------------------------------------------------------+
### |     1    |  1 | delectus aut autem                  |   true    |
### |     1    |  2 | quis ut nam facilis et officia qui  |   false   |
### |   ...    | .. | ...                                  |   ...     |
### +---------------------------------------------------------------+

## 🧪 How to Use

### Clone or download the repository.

### Open index.html in a browser.

### The todos will load automatically into the table.

## 🌐 API Used

### JSONPlaceholder Todos Endpoint

### URL: https://jsonplaceholder.typicode.com/todos

### Returns: Array of 200 todo objects

## 🚀 Possible Enhancements

### Add filter/search for completed/uncompleted

### Add pagination or limit the number of todos shown.

### Color code rows based on completion status.

https://github.com/user-attachments/assets/9f78e014-c142-4bff-b397-5d6bfb8ea7e4

 todos.


