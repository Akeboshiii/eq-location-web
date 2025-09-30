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

app.use(express.json())


app.put('/raw_loc', (req, res) => {
    const {lat, lon} = req.body
    console.log(req.body)
    loc.lat = lat
    loc.lon = lon
    res.status(200).send("done")
})

app.get('/raw_loc', (req, res) => {
    res.status(200).json(loc)
})

app.use('/', express.static(path.resolve(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})