import { randomUUID } from 'node:crypto'
export const createTask = async (req, res) => {
    const { title, description } = req.body

    const task = {
        id: randomUUID(),
        title,
        description,
        created_at: new Date(),
        updated_at: new Date(),
        completed_at: null
    }

    
    // Save task to database
    
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(task))

}