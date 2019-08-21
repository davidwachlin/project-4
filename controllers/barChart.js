const express = require('express')

const barChartApi = require('../models/barChart.js')


const barChartRouter = express.Router()


barChartRouter.get('/', (req, res) => {
  const barChartId = req.params.barChartId
  barChartApi.getTracksByBarChartId(barChartId)
    .then((barCharts) => {
      res.json(barCharts)
    })
    .catch(err => {
      console.log(err)
    })
})


barChartRouter.put('/:barChartId', (req, res) => {
  barChartApi.updateTrack(req.params.barChartId, req.body)
    .then((updatedTrack) => {
      res.json(updatedTrack)
    })
    .catch(err => {
      console.log(err)
    })
})

barChartRouter.get('/:barChartId', (req, res) => {
  barChartApi.getTrack(req.params.barChartId)
    .then((barChart) => {
      res.json(barChart)
    })
    .catch(err => {
      console.log(err)
    })
})

barChartRouter.post('/', (req, res) => {
  req.body.barChartId = req.params.barChartId
  barChartApi.addNewTrack(req.body)
    .then((barChart) => {
      res.json(barChart)

    })
    .catch(err => {
      console.log(err)
    })
})

barChartRouter.delete(':/barChartId', (req, res) => {
  barChartApi.deleteTrack(req.params.barChartId)
    .then((barChart) => {
      res.json(barChart)
    })
    .catch(err => {
      console.log(err)
    })
})


module.exports = {
  barChartRouter
}