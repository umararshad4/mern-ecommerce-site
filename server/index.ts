//imports
import express from 'express'
import productsRoute from './router/products.route'
const app = express()

const port = process.env.PORT || 5000
//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// routes middlewares
app.use('/api', productsRoute)


//server running
app.listen(port, () => `server is running on http://localhost:${port}`)