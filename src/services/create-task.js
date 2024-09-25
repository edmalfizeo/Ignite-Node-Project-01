import { randomUUID } from 'node:crypto'
import { Database } from "../database.js";

const database = new Database()

export const createTask = async (req, res) => {
    const { title, description } = req.body

    const task = {
        id: randomUUID(),
        title,
        description,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        completed_at: null
    }
    
    // Save task to database
    database.insert('tasks', task);
    
    
    
    res.writeHead(201).end()

    return task
}