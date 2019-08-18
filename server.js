const express = require('express')
const app = express()

const { userRouter } = require('./controllers/user.js')
const { trackRouter } = require('./controllers/track.js')
const { audioFeatureRouter } = require('./controllers/audiofeature.js')
// const { spotifyAuth } = require('./controllers/spotifyAuth')
app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(express.static(`${__dirname}/client/build`))

app.use('/api/users', userRouter)
app.use('/api/users/:userId/tracks', trackRouter)
app.use('/api/users/:userId/tracks/:trackId/audiofeature', audioFeatureRouter)
// app.use('/login', spotifyAuth)


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
