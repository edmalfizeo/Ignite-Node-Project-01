import { createTask } from "../services/create-task";
import { buildRoutePath } from "../utils/build-route-path";
import { Database } from "../database";

const database = new Database()

export const createTaskRoute = {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
        const task = createTask(req, res)

        database.insert('tasks', task)

        return res.writeHead(201).end()
    }
}