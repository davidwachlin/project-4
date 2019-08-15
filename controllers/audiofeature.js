const express = require('express')


const audioFeatureApi = require('../models/AudioFeature.js')


const audioFeatureRouter = express.Router({ mergeParams: true })

audioFeatureRouter.get('/', (req, res) => {
  const trackId = req.params.trackId
  audioFeatureApi.getAudioFeatureByTrackId(trackId)
    .then((audioFeature) => {
      res.json(audioFeature)
    })
    .catch(err => {
      console.log(err)
    })
})

audioFeatureRouter.put('/:audioFeatureId', (req, res) => {
  audioFeatureApi.updateAudioFeature(req.params.audioFeatureId, req.body)
    .then((updatedAudioFeature) => {
      res.json(updatedAudioFeature)
    })
    .catch(err => {
      console.log(err)
    })
})

audioFeatureRouter.get('/:audioFeatureId', (req, res) => {
  audioFeatureApi.getAudioFeature(req.params.audioFeatureId)
    .then((audioFeature) => {
      res.json(audioFeature)
    })
    .catch(err => {
      console.log(err)
    })
})

audioFeatureRouter.post('/', (req, res) => {
  req.body.trackId = req.params.trackId
  audioFeatureApi.addNewAudioFeature(req.body)
    .then((audioFeature) => {
      res.json(audioFeature)
    })
    .catch(err => {
      console.log(err)
    })
})

audioFeatureRouter.delete(':/audioFeatureId', (req, res) => {
  audioFeatureApi.deleteAudioFeature(req.params.audioFeatureId)
    .then((audioFeature) => {
      res.json(audioFeature)
    })
    .catch(err => {
      console.log(err)
    })
})


module.exports = {
  audioFeatureRouter
}
