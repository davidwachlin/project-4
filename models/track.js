const mongoose = require('./connection.js')
var Types = require('mongoose-easy-types').Types;


const TrackSchema = new mongoose.Schema({
  album: Types.helpers.shuffle(),
  artists: Types.helpers.shuffle(),
  disc_number: Number,
  duration_ms: Number,
  explicit: Boolean,
  external_ids: Types.helpers.shuffle(),
  external_urls: Types.helpers.shuffle(),
  href: String,
  id: String,
  is_local: Boolean,
  name: String,
  popularity: Number,
  preview_url: String,
  track_number: Number,
  type: String,
  url: String,
  userId: mongoose.Types.ObjectId
})


const TrackCollection = mongoose.model('Track', TrackSchema)


function getAllTracks() {
  return TrackCollection.find()
}

function getTracksByUserId(userId) {
  return TrackCollection.find({userId: userId})
}

function getTrack(trackId) {
  return TrackCollection.findById(trackId)
}

function addNewTrack(trackObject) {
  return TrackCollection.create(trackObject)
}

function updateTrack(trackId, trackObject) {
  return TrackCollection.findByIdAndUpdate(trackId, trackObject, {new: true})
}

function deleteTrack(trackId) {
  return TrackCollection.findByIdAndDelete(trackId)
}

function deleteAllTracks() {
  return TrackCollection.deleteMany()
}

function addTracks(tracks) {
  return TrackCollection.create(tracks)
}

module.exports = {
  getAllTracks,
  getTrack,
  getTracksByUserId,
  addNewTrack,
  updateTrack,
  deleteTrack,
  deleteAllTracks,
  addTracks
}
