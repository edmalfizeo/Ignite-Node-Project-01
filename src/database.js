import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
    #database = {}

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }
    
    constructor() {
        fs.readFile(databasePath)
            .then(data => {
                this.#database = JSON.parse(data)
            })
            .catch(() => {
                this.#persist()
            })
    }

    insert(task, taskData) {
        if(Array.isArray(this.#database[task])) {
            this.#database[task].push(taskData)
        } else {
            this.#database[task] = [taskData]
        }

        this.#persist()

        return taskData
    }
}