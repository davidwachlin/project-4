const express = require('express')

const trackApi = require('../models/track.js')

const trackRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */


trackRouter.get('/', (req, res) => {
  trackApi.getAllTracks()
    .then((tracks) => {
      res.json(tracks)
    })
})

trackRouter.put('/:trackId', (req, res) => {
  trackApi.updateTrack(req.params.trackId, req.body)
    .then((updatedTrack) => {
      res.json(updatedTrack)
    })
})

trackRouter.get('/:trackId', (req, res) => {
  trackApi.getTrack(req.params.trackId)
    .then((track) => {
      res.json(track)
    })
})

trackRouter.post('/', (req, res) => {
  trackApi.addNewTrack(req.body)
    .then((track) => {
      res.json(track)
    })
})

trackRouter.delete(':/trackId', (req, res) => {
  trackApi.deleteTrack(req.params.trackId)
    .then((track) => {
      res.json(track)
    })
})


module.exports = {
  trackRouter
}
