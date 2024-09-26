import { deleteTask } from "../services/delete-task.js";
import { buildRoutePath } from "../utils/build-route-path.js";

export const deleteTaskRoute = {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: async (req, res) => {
        await deleteTask(req, res);
    }
}