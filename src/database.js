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

    async #loadDatabase() {
        try {
            const data = await fs.readFile(databasePath, 'utf-8');
            this.#database = JSON.parse(data);
        } catch (error) {
            console.error('Erro ao carregar o banco de dados:', error);
            this.#persist(); // Persistindo um novo arquivo caso não exista
        }
    }

    async insert(task, taskData) {
        await this.#loadDatabase();
        if (Array.isArray(this.#database[task])) {
            
            this.#database[task].push(taskData);
        } else {
            this.#database[task] = [taskData];
        }
    
    this.#persist();
    return taskData;

    }

    async select(task, search) {
        await this.#loadDatabase();
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

    async update(task, id, data) {
        await this.#loadDatabase();
        const rowIndex = this.#database[task].findIndex(row => row.id === id)

        if (rowIndex > -1) {
             // Pega os dados atuais
        const existingData = this.#database[task][rowIndex];

        // Atualiza os dados mantendo os campos não enviados
        this.#database[task][rowIndex] = {
            ...existingData, // Preserva os dados atuais
            ...data, // Sobrescreve apenas os campos enviados
            updated_at: new Date().toISOString() // Atualiza o campo updated_at
        };

        this.#persist();
        return this.#database[task][rowIndex];
    } else {
        console.error(`Item com ID ${id} não encontrado na tabela ${task}`);
        return null;
    }
    }

    async complete(task, id) {
        await this.#loadDatabase();
        const rowIndex = this.#database[task].findIndex(row => row.id === id)

        if (rowIndex > -1) {
            this.#database[task][rowIndex].completed_at = new Date().toISOString();
            this.#persist();
            return this.#database[task][rowIndex];
        } else {
            console.error(`Item com ID ${id} não encontrado na tabela ${task}`);
            return null;
        }
    }
}