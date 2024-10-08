import http from 'node:http';

import { json } from './middlewares/json.js';
import { extractQueryParams } from './utils/extract-query-params.js';
import { createTaskRoute } from './routes/createTaskRoute.js'
import { listTaskRoute } from './routes/listTaskRoute.js'
import { updateTaskRoute } from './routes/updateTaskRoute.js';
import { completeTaskRoute } from './routes/completeTaskRoute.js';
import { deleteTaskRoute } from './routes/deleteTaskRoute.js';

const routes = [createTaskRoute, listTaskRoute, updateTaskRoute, completeTaskRoute, deleteTaskRoute]

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if (route) {
        const routeParams = req.url.match(route.path)

        const { query, ...params} = routeParams.groups

        req.params = {...routeParams.groups}

        req.params = params
        req.query = query ? extractQueryParams(query): {}

        return route.handler(req, res)
    }
    return res.writeHead(404).end()
});


server.listen(3333, () => {
    console.log('Server is running on http://localhost:3333');
})
