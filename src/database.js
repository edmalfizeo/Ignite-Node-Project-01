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
        let data = [];
        try {
            const fileContent = await fs.readFile(databasePath);
            this.#database = JSON.parse(fileContent);
            data = this.#database[task] ?? [];
        } catch (error) {
            console.error("Erro ao ler o banco de dados:", error);
        }
        if (search) {
            const searchText = search.search.toLowerCase();
            data = data.filter(row => {
                return Object.values(row).some(value =>
                    value.toString().toLowerCase().includes(searchText)
                );
            });
        }
    
        return data;

    }
}