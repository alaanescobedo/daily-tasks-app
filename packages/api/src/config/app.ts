import express from 'express'
import cors from 'cors'
import taskRouter from '@task/taskRouter'
import seedRouter from '@seed/seedRouter'
import userRouter from '@user/userRouter'
import authRouter from '@auth/authRouter'
import errorHandler from '@error/errorHandler'
import createIndex from 'middleware/createIndex'

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*' ,
}))


app.use(createIndex) // generate index of repositories
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/tasks', taskRouter)
app.use('/api/v1/users', userRouter)

if (process.env['NODE_ENV'] === 'development' || process.env['NODE_ENV'] === 'test') {
  app.use('/api/v1/seeds', seedRouter)
}

app.all('*', (_req, res) => {
  res.status(404).send({ status: 'Failed', message: 'Not found' })
})

app.use(errorHandler)

export default app
