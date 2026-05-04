const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const LASTFM_API_KEY = 'f4edb626c7f889fa0a418a6d0487dfbc'
const BASE_URL = 'https://ws.audioscrobbler.com/2.0'

app.get('/artist/:name/top-tracks', async (req, res) => {
  const name = encodeURIComponent(req.params.name)
  const response = await fetch(`${BASE_URL}?method=artist.gettoptracks&artist=${name}&api_key=${LASTFM_API_KEY}&format=json`)
  const data = await response.json()
  res.json(data)
})

app.get('/artist/:name/weekly-tracks', async (req, res) => {
  const name = encodeURIComponent(req.params.name)
  const response = await fetch(`${BASE_URL}?method=artist.gettoptracks&artist=${name}&api_key=${LASTFM_API_KEY}&format=json&period=7day`)
  const data = await response.json()
  res.json(data)
})

app.get('/artist/:name/top-albums', async (req, res) => {
  const name = encodeURIComponent(req.params.name)
  const response = await fetch(`${BASE_URL}?method=artist.gettopalbums&artist=${name}&api_key=${LASTFM_API_KEY}&format=json`)
  const data = await response.json()
  res.json(data)
})

app.get('/artist/:name', async (req, res) => {
  const name = encodeURIComponent(req.params.name)
  const response = await fetch(`${BASE_URL}?method=artist.getinfo&artist=${name}&api_key=${LASTFM_API_KEY}&format=json`)
  const data = await response.json()
  res.json(data)
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})