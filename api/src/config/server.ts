import 'dotenv/config'
import app from '@config/app'

const PORT = process.env['PORT'] ?? 3000

app.listen(PORT, () => {
  if (process.env['NODE_ENV'] === 'development') {
    console.log(`Server started on port ${PORT}`)
  }
})
