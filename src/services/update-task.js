import { Database } from "../database.js";

const database = new Database();

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    database.update('tasks', id, {
        title,
        description,
    });

    if (updateTask) {
        return res.writeHead(204).end(); // Envia o status 204 se a tarefa foi atualizada
    } else {
        return res.writeHead(404).end(JSON.stringify({ error: "Task not found" })); // 404 se não foi encontrada
    }
}