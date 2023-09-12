import { randomUUID } from 'crypto'
import { knex } from '../database'
import { FastifyInstance } from 'fastify'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transaction = await knex('transactions')
      .insert({
        id: randomUUID(),
        title: 'Test Transaction',
        amount: 1000,
      })
      .returning('*')

    return transaction
  })
}
