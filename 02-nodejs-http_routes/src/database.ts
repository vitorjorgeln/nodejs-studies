import { knex as setupKnex } from 'knex'
export const configDb = {
  client: 'sqlite3',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
}
export const knex = setupKnex(configDb)
