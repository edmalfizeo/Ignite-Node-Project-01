# Node.js Fundamentals Project

This is a simple Node.js project where I built a complete API to manage tasks. The API allows you to create, list, update, complete, and delete tasks. Additionally, the project includes a feature to export task data to a CSV file.

## Features

- **Create Tasks**: Add new tasks with a title and description.
- **List Tasks**: Retrieve a list of all tasks.
- **Update Tasks**: Modify the details of an existing task.
- **Complete Tasks**: Mark tasks as completed.
- **Delete Tasks**: Remove tasks from the list.
- **Export to CSV**: Export all tasks data into a CSV file.

## Technologies Used

- **Node.js**: Core runtime environment for building the API.
- **JavaScript**: Programming language used to develop the logic.
- **fs (File System)**: Node.js module used for file handling.
- **csv-parser**: A library to handle CSV operations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/edmalfizeo/Ignite-Node-Project-01.git

2. Install dependencies:
   ```bash
   npm install

## Running the Project

1. To run the API server, use the following command:
    ```bash
    node src/server.js

2. For exporting tasks to a CSV file, run:
     ```bash
     node csv.js
