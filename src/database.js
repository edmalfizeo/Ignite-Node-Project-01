import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
    #database = {}

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database, null, 2), (err) => {
            if (err) {
                console.error('Erro ao persistir o banco de dados:', err);
            } else {
                console.log('Banco de dados persistido com sucesso');
            }
        });
    
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
        if (Array.isArray(this.#database[task])) {
            
            this.#database[task].push(taskData);
        } else {
            
            this.#database[task] = [taskData];
        }
    
    this.#persist();
    return taskData;
    }

    async select(task, search) {
        let data = this.#database[task] ?? []

        if (search) {
            data = data.filter(row => {
                return Object.entries(search).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }

        return data

    }
}