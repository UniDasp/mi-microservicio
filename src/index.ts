import { Elysia } from 'elysia'

const app = new Elysia()

app.get('/', () => ({
  message: 'API base funcionando'
}))


app.post('/login', ({ body }) => {
    const { user } = body as { user?: string }
    
    if (!user || user.length < 3) {
        return { error: 'El usuario debe tener al menos 3 caracteres'}
    }

    return { message: `Bienvenido, ${user}!` }
})

app.post('/register', ({ body }) => {
    const { user } = body as { user?: string }
    
    if (!user || user.length < 3) {
        return { error: 'El usuario debe tener al menos 3 caracteres'}
    }

    return { message: `Usuario registrado, ${user}!` }
})

app.listen(3000)

console.log('Servidor escuchando en http://localhost:3000')