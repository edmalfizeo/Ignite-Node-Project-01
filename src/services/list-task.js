export const listTask = async (req, res) => {
    
    const tasks = database.select('tasks', search ? {
        task: search,
    } : null)

}