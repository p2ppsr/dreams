require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
// @ts-ignore
const authrite = require('authrite-express')
const PacketPay = require('@packetpay/express')
const OpenAI = require('openai')

const app = express()
const port = process.env.HTTP_PORT || 8080

// Your OpenAI API Key
// @ts-ignore
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
})

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Expose-Headers', '*')
  res.header('Access-Control-Allow-Private-Network', 'true')
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

app.use(
  authrite.middleware({
    serverPrivateKey: process.env.SERVER_PRIVATE_KEY,
    baseUrl: process.env.HOSTING_DOMAIN,
  })
)

app.use(
  PacketPay({
    calculateRequestPrice: (req) => {
      if (req.originalUrl === '/analyze') {
        return 1000 // satoshis, for running a dream analysis
      }
      return 0
    },
    serverPrivateKey: process.env.SERVER_PRIVATE_KEY,
    ninjaConfig: {
      dojoURL: process.env.DOJO_URL,
    },
  })
)

app.post('/analyze', async (req, res) => {
  const { dreamText } = req.body

  if (!dreamText) {
    return res.status(400).send('Dream text is required.')
  }

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a professional dream analyzer. Analyze the dreams provided by the user.',
        },
        {
          role: 'user',
          content: dreamText,
        },
      ],
    })

    const analysis = completion.data.choices[0].message.content
    res.json({ analysis })
  } catch (error) {
    console.error('Error calling OpenAI:', error)
    res.status(500).json({ error: 'Failed to analyze the dream.' })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
