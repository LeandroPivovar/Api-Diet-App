import 'dotenv/config'
import { knex as setupKnex } from 'knex'

export const knex = setupKnex({
  client: 'mysql',
  connection: {
    host: process.env.DIET_DB_HOST,
    user: process.env.DIET_DB_USER,
    password: process.env.DIET_DB_PASSWORD,
    database: process.env.DIET_DB_NAME,
  },
})
