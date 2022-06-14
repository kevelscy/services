import express from 'express'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.set('PORT', process.env.PORT || 3000)

server.get('/api/youtube', (req, res) => {
  
  return res.json({
    data: 'youtube',
    error: null
  })
})

server.get('/api/instagram', (req, res) => {

  return res.json({
    data: 'instagram',
    error: null
  })
})

server.listen(server.get('PORT'), () => {
  console.log(`Server is running on port ${server.get('PORT')}`)
})
