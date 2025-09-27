import express from 'express'
import url from 'url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

app.use('/', express.static(path.resolve(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})