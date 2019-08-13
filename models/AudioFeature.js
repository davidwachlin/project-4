
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

// gets
function getAllAudioFeatures() {
  return AudioFeatureCollection.find()
}

function getAudioFeature(audioFeatureId) {
  return AudioFeatureCollection.findById(audioFeatureId)
}

function getAudioFeatureByTrackId(trackId) {
  return AudioFeatureCollection.find({trackId: trackId})
}


function addNewAudioFeature(audioFeatureObject) {
  return AudioFeatureCollection.create(audioFeatureObject)
}

function updateAudioFeature(audioFeatureId, updatedAudioFeature) {
  return AudioFeatureCollection.findByIdAndUpdate(audioFeatureId, updatedAudioFeature, {new: true})
}
function deleteAudioFeature(audioFeatureId) {
  return AudioFeatureCollection.findByIdAndDelete(audioFeatureId)
}

//test data functions
function deleteAllAudioFeatures() {
  return AudioFeatureCollection.deleteMany()
}

function addAudioFeatures(audioFeatures) {
  return AudioFeatureCollection.create(audioFeatures)
}

module.exports = {
  getAllAudioFeatures,
  getAudioFeature,
  getAudioFeatureByTrackId,
  addNewAudioFeature,
  deleteAllAudioFeatures,
  addAudioFeatures,
  updateAudioFeature,
  deleteAudioFeature

}
