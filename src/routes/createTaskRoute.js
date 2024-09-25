import { createTask } from "../services/create-task.js";
import { buildRoutePath } from "../utils/build-route-path.js";

export const createTaskRoute = {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: async (req, res) => {
        try { 
            const task = await createTask(req, res);

            
        } catch (error) {
            console.error('Error:', error);
        }
    }
 }