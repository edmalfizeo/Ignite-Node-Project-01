import { updateTask } from "../services/update-task.js";
import { buildRoutePath } from "../utils/build-route-path.js";

export const updateTaskRoute = {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: async (req, res) => {
        const task = await updateTask(req, res);
        
    }
}