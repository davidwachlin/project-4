const express = require('express')
const app = express()


const { trackRouter } = require('./controllers/track.js')
const { audioFeatureRouter } = require('./controllers/audiofeature')
const { userRouter } = require('./controllers/user')



app.use(express.urlencoded({extended: true}))


app.use(express.json())



app.use(express.static(`${__dirname}/client/build`))


app.use('/api/users', userRouter)
app.use('/api/tracks', trackRouter)
app.use('/api/audioFeatures', audioFeatureRouter)




app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
