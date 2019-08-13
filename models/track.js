
const mongoose = require('./connection.js')


const TrackSchema = new mongoose.Schema({
 name: String
})


const TrackCollection = mongoose.model('Track', TrackSchema)


function getAllTracks() {
  return TrackCollection.find()
}

//get tracks by user id

function getTrack(trackId) {
  return TrackCollection.findById(trackId)
}

function addNewTrack(trackObject) {
  return TrackCollection.create(trackObject)
}

function updateTrack(trackId, trackObject) {
  return TrackCollection.findByIdAndUpdate(trackId, trackObject, {new: true})
}

function deleteAllTracks() {
  return TrackCollection.deleteMany()
}

function addTracks(tracks) {
  return TrackCollection.create(tracks)
}
/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllTracks,
  getTrack,
  addNewTrack,
  updateTrack,
  deleteAllTracks,
  addTracks
}
