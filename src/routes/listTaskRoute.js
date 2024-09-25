import { listTask } from "../services/list-task.js";
import { Database } from "../database.js";
import { buildRoutePath } from "../utils/build-route-path.js";

const database = new Database();

export const listTaskRoute = {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: async (req, res) => { 

        const tasks = await listTask(req, res);
         
        
        return res.end(JSON.stringify(tasks));
    }
}