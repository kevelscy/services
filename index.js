import 'dotenv/config'
import express from 'express'
import ig from 'instagram-scraping'


const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.set('PORT', process.env.PORT || 3000)

server.get('/', (req, res) => {
  res.send('<div>Api Test Instagram</div>')
})

server.get('/api/youtube', async (req, res) => {
  return res.status(200).json({
    data: 'youtube',
    error: null
  })
})

server.get('/api/instagram', async (req, res) => {
  const result = await ig.scrapeTag('lcpcaracas')

  // const data = result.medias.map(media => {
  //   return {
  //     id: media.id,
  //     url: media.url,
  //     likes: media.likes,
  //     comments: media.comments,
  //     caption: media.caption,
  //     timestamp: media.timestamp,
  //     image: media.image,
  //     video: media.video,
  //     type: media.type
  //   }
  // })


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
    client_id : '1097733327447973',
    client_secret : '3882292eac0c1b92fd87950ced47deb5',
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
