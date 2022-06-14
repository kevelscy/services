import 'dotenv/config'
import express from 'express'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.set('PORT', process.env.PORT || 3000)

server.get('/api/youtube', (req, res) => {
  return res.status(200).json({
    data: 'youtube',
    error: null
  })
})

server.get('/api/instagram', (req, res) => {
  return res.status(200).json({
    data: 'instagram',
    error: null
  })
})

server.get('/callback', (req, res) => {
  return res.status(200).json({
    data: true,
    error: null
  })
})

server.get('/privacy', (req, res) => {
  return res.status(200).send('<div>Privacy</div>')
})

server.get('/any', (req, res) => {
  return res.status(200).send('<div>Any</div>')
})

server.listen(server.get('PORT'), () => {
  console.log(`Server is running on port ${server.get('PORT')}`)
})
