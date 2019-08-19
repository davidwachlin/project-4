
const mongoose = require('./connection.js')
var Types = require('mongoose-easy-types').Types;


const BarChartSchema = new mongoose.Schema({
  tracks: Array,
  graphFeature: {
    type: String,
    default: 'energy'
  },
  userId: mongoose.Types.ObjectId
})


const BarChartCollection = mongoose.model('BarChart', BarChartSchema)



function getAllBarCharts() {
  return BarChartCollection.find()
}

function getBarChart(barChartId) {
  return BarChartCollection.findById(barChartId)
}

function addNewBarChart(barChartObject) {
  return BarChartCollection.create(barChartObject)
}

function updateBarChart(barChartId, updatedBarChart) {
  return BarChartCollection.findByIdAndUpdate(barChartId, updatedBarChart, {new: true})
}

function deleteBarChart(barChartId) {
  return BarChartCollection.findByIdAndDelete(barChartId)
}

function deleteAllBarCharts() {
  return BarChartCollection.deleteMany()
}

function addBarCharts(barCharts) {
  return BarChartCollection.create(barCharts)
}



module.exports = {
  getAllBarCharts,
  checkBarChart,
  getBarChart,
  addNewBarChart,
  updateBarChart,
  deleteBarChart,
  deleteAllBarCharts,
  addBarCharts
}
