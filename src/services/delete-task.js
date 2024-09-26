import { Database } from "../database.js";

const database = new Database();

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    const taskDeleted = await database.delete('tasks', id);

    if (taskDeleted) {
        return res.writeHead(204).end(); // No Content
    }
}