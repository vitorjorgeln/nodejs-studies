//Cada rota será um objeto composto por método, caminho e a função da rota em si
import { Database } from './database.js'
let database = new Database()
import {randomUUID} from 'node:crypto'

export const routes = [
    {
        method: 'GET',
        path: '/users',
        handler: (req, res) => {
            const users = database.select('users')
            return res.end(JSON.stringify(users))
        }
    },
    {
        method: 'POST',
        path: '/users',
        handler: (req, res) => {
            const { name, email, age } = req.body
            const user = {
                id: randomUUID(),
                name,
                email,
                age
            }
            database.insert('users', user)
            return res.writeHead(201).end()
        }
    }
]