const express = require('express')


const audioFeatureApi = require('../models/AudioFeature.js')


const audioFeatureRouter = express.Router()

audioFeatureRouter.get('/', (req, res) => {
  const trackId = req.params.trackId
  audioFeatureApi.getAudioFeatureByTrackId(trackId)
    .then((audioFeature) => {
      res.json(audioFeature)
    })
})

audioFeatureRouter.put('/:audioFeatureId', (req, res) => {
  audioFeatureApi.updateAudioFeature(req.params.audioFeatureId, req.body)
    .then((updatedAudioFeature) => {
      res.json(updatedAudioFeature)
    })
})

audioFeatureRouter.get('/:audioFeatureId', (req, res) => {
  audioFeatureApi.getAudioFeature(req.params.audioFeatureId)
    .then((audioFeature) => {
      res.json(audioFeature)
    })
})

audioFeatureRouter.post('/', (req, res) => {
  audioFeatureApi.addNewAudioFeature(req.body)
    .then((audioFeature) => {
      res.json(audioFeature)
    })
})

audioFeatureRouter.delete(':/audioFeatureId', (req, res) => {
  audioFeatureApi.deleteAudioFeature(req.params.audioFeatureId)
    .then((audioFeature) => {
      res.json(audioFeature)
    })
})


module.exports = {
  audioFeatureRouter
}
