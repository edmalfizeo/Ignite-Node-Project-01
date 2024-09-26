import { Database } from "../database.js";

const database = new Database();

export const completeTask = async (req, res) => {
    const { id } = req.params;

    const task = await database.complete('tasks', id);

    res.writeHead(200).end();

    return task
};