const mongoose = require('./connection.js')


const TrackSchema = new mongoose.Schema({
    album: {
      artists: [
        {
          external_urls: {
            spotify: String
          },
          href: String,
          id: String,
          name: String,
          type: String,
          uri: String
        }
      ],
      external_urls: {
        spotify: String
      },
      href: String,
      id: String,
      images: [
        {
          height: Number,
          url: String,
          width: Number
        },
        {
          height: Number,
          url: String,
          width: Number
        },
        {
          height: Number,
          url: 'https://i.scdn.co/image/5a73a056d0af707b4119a883d87285feda543fbb',
          width: Number
        }
      ],
      name: {
    album: {
      artists: [
        {
          external_urls: {
            spotify: String
          },
          href: String,
          id: String,
          name: String,
          type: String,
          uri: String
        }
      ],
      external_urls: {
        spotify: String
      },
      href: String,
      id: String,
      images: [
        {
          height: Number,
          url: String,
          width: Number
        },
        {
          height: Number,
          url: String,
          width: Number
        },
        {
          height: Number,
          url: String,
          width: Number
        }
      ],
      name: String,
      release_date: String,
      release_date_precision: String,
      type: String,
      uri: String
    },
    artists: [
      {
        external_urls: {
          spotify: String
        },
        href: String,
        id: String,
        name: String,
        type: String,
        uri: String
      }
    ],
    disc_number: Number,
    duration_ms: Number,
    explicit: Boolean,
    external_ids: {
      isrc: String
    },
    external_urls: {
      spotify: String
    },
    href: String,
    id: String,
    is_local: Boolean,
    name: String,
    popularity: Number,
    preview_url: String,
    track_number: Number,
    type: String,
    uri: String
  },
      release_date: String,
      release_date_precision: String,
      type: String,
      uri: String
    },
    artists: [
      {
        external_urls: {
          spotify: String
        },
        href: String,
        id: String,
        name: String,
        type: String,
        uri: String
      }
    ],
    disc_number: Number,
    duration_ms: Number,
    explicit: Boolean,
    external_ids: {
      isrc: String
    },
    external_urls: {
      spotify: String
    },
    href: String,
    id: String,
    is_local: Boolean,
    name: String,
    popularity: Number,
    preview_url: String,
    track_number: Number,
    type: String,
    uri: String,
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
