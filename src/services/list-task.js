import { Database } from '../database.js'


const database = new Database()

export const listTask = async (req, res) => {
    const search = decodeURIComponent(req.query?.search?.trim() || '');

    const tasks = database.select('tasks', search ? {
        title: search,
        description: search,
    } : null);

    return tasks;
}