
const mongoose = require('./connection.js')


const AudioFeatureSchema = new mongoose.Schema({
  
    duration_ms: Number,
    key: 5,
    mode: Number,
    time_signature: Number,
    acousticness: Number,
    danceability: Number,
    energy: Number,
    instrumentalness: Number,
    liveness: Number,
    loudness: Number,
    speechiness: Number,
    valence: Number,
    tempo: Number,
    id: String,
    uri: String,
    track_href: String,
    analysis_url: String,
    type: String,
    trackId: mongoose.Types.ObjectId
})



const AudioFeatureCollection = mongoose.model('AudioFeature', AudioFeatureSchema)


function getAllAudioFeatures() {
  return AudioFeatureCollection.find()
}

//get tracks by user id

function getAudioFeature(audioFeatureId) {
  return AudioFeatureCollection.findById(audioFeatureId)
}

function getAudioFeatureByTrackId(trackId) {
  return AudioFeatureCollection.find({trackId: trackId})
}

function addNewAudioFeature(audioFeatureObject) {
  return AudioFeatureCollection.create(audioFeatureObject)
}

// function updateTrack(trackId, audioFeatureObject) {
//   return AudioFeatureCollection.findByIdAndUpdate(trackId, audioFeatureObject, {new: true})
// }
function deleteAudioFeature(audioFeatureId)

function deleteAllAudioFeatures() {
  return AudioFeatureCollection.deleteMany()
}

function addAudioFeatures(audioFeatures) {
  return AudioFeatureCollection.create(audioFeatures)
}
/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllAudioFeatures,
  getAudioFeature,
  addNewAudioFeature,
  deleteAllAudioFeatures,
  addAudioFeatures,
  getAudioFeatureByTrackId
}
