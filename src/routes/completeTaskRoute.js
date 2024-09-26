import { completeTask } from "../services/complete-task.js";
import { buildRoutePath } from "../utils/build-route-path.js";

export const completeTaskRoute = {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: async (req, res) => {
        await completeTask(req, res);
    }
};