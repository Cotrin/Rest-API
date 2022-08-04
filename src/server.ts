// EXPRESS

// REST
// GET      POST        PUT      DELETE
// Read     Create      Update   Delete
import express from 'express'

import { routes } from './routes'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3000, () => {
  console.log('App running on port 3000')
})

