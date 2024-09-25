import { listTask } from "../services/list-task";
import { Database } from "../database";
import { buildRoutePath } from "../utils/build-route-path";

const database = new Database();

export const listTaskRoute = {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
        const { search } = req.query

        const tasks = listTask(database, search)

        return res.end(JSON.stringify(tasks))
    }
}