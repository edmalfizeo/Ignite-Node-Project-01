import { randomUUID } from 'node:crypto'
export const createTask = async (req, res) => {
    method: 'POST'
    body: JSON.stringify({
        id: randomUUID(),
        title,
        description,
        created_at: new Date(),
        updated_at: new Date(),
        completed_at: null
    })

}