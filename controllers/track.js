const express = require('express')

const trackApi = require('../models/track.js')


const trackRouter = express.Router({ mergeParams: true })


trackRouter.get('/', (req, res) => {
  const barChartId = req.params.barChartId
  trackApi.getTracksByBarChartId(barChartId)
    .then((tracks) => {
      res.json(tracks)
    })
    .catch(err => {
      console.log(err)
    })
})


trackRouter.put('/:trackId', (req, res) => {
  trackApi.updateTrack(req.params.trackId, req.body)
    .then((updatedTrack) => {
      res.json(updatedTrack)
    })
    .catch(err => {
      console.log(err)
    })
})

trackRouter.get('/:trackId', (req, res) => {
  trackApi.getTrack(req.params.trackId)
    .then((track) => {
      res.json(track)
    })
    .catch(err => {
      console.log(err)
    })
})

trackRouter.post('/', (req, res) => {
  req.body.barChartId = req.params.barChartId
  trackApi.addNewTrack(req.body)
    .then((track) => {
      res.json(track)

    })
    .catch(err => {
      console.log(err)
    })
})

trackRouter.delete('/:trackId', (req, res) => {
  trackApi.deleteTrack(req.params.trackId)
    .then((track) => {
      res.json(track)
    })
    .catch(err => {
      console.log(err)
    })
})


module.exports = {
  trackRouter
}