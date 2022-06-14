import 'dotenv/config'
import express from 'express'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.set('PORT', process.env.PORT || 3000)

server.get('/', (req, res) => {
  res.send('<div>Api Test Instagram</div>')
})

server.get('/api/instagram', async (req, res) => {
  return res.status(200).json({
    data: result,
    error: null
  })
})

server.get('/callback', async (req, res) => {
  console.log('/// here to keep track of how many times this is called')
  console.log('Instagram code: ', req.query.code)

  const data = {
    url: url,
    client_id : process.env.INSTAGRAM_APP_ID,
    client_secret : process.env.INSTAGRAM_APP_SECRECT,
    grant_type : 'authorization_code',
    redirect_uri : 'https://services-production-533e.up.railway.app/',
    code : req.query.code
  }

  const url = 'https://api.instagram.com/oauth/access_token'

  await req.post({
    method: 'POST',
    url: url,
    body: JSON.stringify(data),
  },
  function (e, r, body) {
    //body will contain the access_token
    console.log('body', body)
   })

  return res.status(200).json({
    data: true,
    error: null
  })
})

server.get('/privacy', async (req, res) => {
  return res.status(200).send('<div>Privacy</div>')
})

server.get('/any', async (req, res) => {
  return res.status(200).send('<div>Any</div>')
})

server.listen(server.get('PORT'), () => {
  console.log(`Server is running on port ${server.get('PORT')}`)
})
