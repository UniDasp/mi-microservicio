import { Elysia } from 'elysia'

const app = new Elysia()

app.get('/', () => ({
  message: 'API base funcionando'
}))

app.listen(3000)

console.log('Servidor escuchando en http://localhost:3000')