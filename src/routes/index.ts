// ROTAS DE USUARIO:
// - CRIAR USUÁRIO

/* ROTAS DE REFEIÇAO
- CRIAR REFEICAO
- EDITAR REFEICAO
- APAGAR REFEICAO
- LISTAR TODAS AS REFEICOES
- LISTAR UMA REFEICAO
 */
import { knex } from '../database'

export async function routes(app) {
  app.get('/', async () => {
    return { hello: 'world' }
  })

  app.post('/user', async (request, reply) => {
    const { name, email, password } = request.body

    await knex('users').insert({name: name , email: email , password: password })

    return reply.status(201).send(request.body)
  })  

  app.post('/meal', async (request, reply) => {
    const { user_id, name, description, is_on_diet } = request.body
    
    if(await knex('meals').insert({user_id: user_id, name: name, description: description, is_on_diet: is_on_diet })){
      return reply.status(201).send('Meal created!')
    }
    
  })

  

}
