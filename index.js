import express from 'express'
import url from 'url'
import path from 'path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

let loc = {
    'lat': 6.691099220075941,
    'lon': 124.6766570122493
}

app.use('/', express.static(path.resolve(__dirname, 'public')))

app.post('/', (req, res) => {
    lat, lon = loc
    in_lat, in_lon = req.body
    lat = in_lat
    lon = in_lon    
})

app.get('/raw_loc', (req, res) => {
    res.status(200).json(loc)
})

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})