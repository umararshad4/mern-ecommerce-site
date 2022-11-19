import express from 'express'
const app = express()

const port = process.env.PORT || 5000
app.get('/', (req, res) => {
    return res.json({ name: "umar" })
})
app.listen(port, () => `server is running on http://localhost:${port}`)