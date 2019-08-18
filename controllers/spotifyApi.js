// const SpotifyWebApi = require('spotify-web-api-node');
// const { myClientId, myClientSecret } = require('../cred.js')
// var express = require('express'); // Express web server framework
// var request = require('request'); // "Request" library
// var cors = require('cors');
// var querystring = require('querystring');
// var cookieParser = require('cookie-parser');

// var spotifyApi = new SpotifyWebApi({
//   clientId: myClientId,
//   clientSecret: myClientSecret,
//   redirectUri: 'http://localhost:3001/callback'
// });


// // Search artists whose name contains 'Love'
// spotifyApi.searchTracks('Love')
//   .then(function(data) {
//     console.log('Search by "Love"', data.body);
//   }, function(err) {
//     console.error(err);
//   });

//   // Search tracks whose artist's name contains 'Love'
// spotifyApi.searchTracks('artist:Love')
// .then(function(data) {
//   console.log('Search tracks by "Love" in the artist name', data.body);
// }, function(err) {
//   console.log('Something went wrong!', err);
// });
//   module.exports = {
//       spotifyApi
//   }

//   /* Get Audio Features for a Track */
// spotifyApi.getAudioFeaturesForTrack('3Qm86XLflmIXVm1wcwkgDK')
// .then(function(data) {
//   console.log(data.body);
// }, function(err) {
//   done(err);
// });