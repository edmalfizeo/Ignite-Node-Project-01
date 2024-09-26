import fetch from 'node-fetch';
import fs from 'fs';

const API_URL = 'http://localhost:3333/tasks';

const csvFilePath = './csvFile/tasks.csv';

async function exportTasksToCSV() {
    try {
        
        const response = await fetch(API_URL);
        const tasks = await response.json();

        if (!Array.isArray(tasks)) {
            throw new Error('Response is not an array');
        }

        const headers = ['title', 'description'];

        const csvData = [
            headers.join(','),  
            ...tasks.map(task => [
                task.title,
                task.description,
            ].join(','))
        ].join('\n');

        fs.writeFileSync(csvFilePath, csvData);

        console.log('Exportação para CSV concluída com sucesso.');
    } catch (error) {
        console.error('Erro ao exportar tasks para CSV:', error);
    }
}

exportTasksToCSV();