const express = require('express')

const barChartApi = require('../models/barChart.js')


const barChartRouter = express.Router()


barChartRouter.get('/', (req, res) => {
  barChartApi.getAllBarCharts()
    .then((barCharts) => {
      res.json(barCharts)
    })
    .catch(err => {
      console.log(err)
    })
})


barChartRouter.put('/:barChartId', (req, res) => {
  barChartApi.updateBarChart(req.params.barChartId, req.body)
    .then((updatedBarChart) => {
      res.json(updatedBarChart)
    })
    .catch(err => {
      console.log(err)
    })
})

barChartRouter.get('/:barChartId', (req, res) => {
  barChartApi.getBarChart(req.params.barChartId)
    .then((barChart) => {
      res.json(barChart)
    })
    .catch(err => {
      console.log(err)
    })
})

barChartRouter.post('/', (req, res) => {
  req.body.barChartId = req.params.barChartId
  barChartApi.addNewBarChart(req.body)
    .then((barChart) => {
      res.json(barChart)

    })
    .catch(err => {
      console.log(err)
    })
})

barChartRouter.delete('/:barChartId', (req, res) => {
  barChartApi.deleteBarChart(req.params.barChartId)
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