const userApi = require('./user');
const trackApi = require('./track');
const audioFeatureApi = require('./AudioFeature');

const user1 = {
	name: 'David',
	email: 'test@test.com',
	photoUrl: 'https://www.placecage.com/200/300',
	emailVerified: true
};

const user2 = {
	name: 'Sam',
	email: 'sam@test.com',
	photoUrl: 'https://www.placecage.com/200/300',
	emailVerified: true
};

//single track data
const track1 = {
	album: {
		album_type: 'album',
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/0En4EEcDMJ5kaUCf1aZ9js'
				},
				href: 'https://api.spotify.com/v1/artists/0En4EEcDMJ5kaUCf1aZ9js',
				id: '0En4EEcDMJ5kaUCf1aZ9js',
				name: 'Lee Dorsey',
				type: 'artist',
				uri: 'spotify:artist:0En4EEcDMJ5kaUCf1aZ9js'
			}
		],
		available_markets: [
			'AD',
			'AE',
			'AR',
			'AT',
			'BE',
			'BG',
			'BH',
			'BO',
			'BR',
			'CA',
			'CH',
			'CL',
			'CO',
			'CR',
			'CY',
			'CZ',
			'DE',
			'DK',
			'DO',
			'DZ',
			'EC',
			'EE',
			'EG',
			'ES',
			'FI',
			'FR',
			'GB',
			'GR',
			'GT',
			'HK',
			'HN',
			'HU',
			'ID',
			'IE',
			'IL',
			'IN',
			'IS',
			'IT',
			'JO',
			'JP',
			'KW',
			'LB',
			'LI',
			'LT',
			'LU',
			'LV',
			'MA',
			'MC',
			'MT',
			'MX',
			'MY',
			'NI',
			'NL',
			'NO',
			'OM',
			'PA',
			'PE',
			'PH',
			'PL',
			'PS',
			'PT',
			'PY',
			'QA',
			'RO',
			'SA',
			'SE',
			'SG',
			'SK',
			'SV',
			'TH',
			'TN',
			'TR',
			'TW',
			'US',
			'UY',
			'VN',
			'ZA'
		],
		external_urls: {
			spotify: 'https://open.spotify.com/album/2CQt3vL1SHnqxyZvoPQPUb'
		},
		href: 'https://api.spotify.com/v1/albums/2CQt3vL1SHnqxyZvoPQPUb',
		id: '2CQt3vL1SHnqxyZvoPQPUb',
		images: [
			{
				height: 636,
				url: 'https://i.scdn.co/image/4a530a50bd849b51cad079df9e8d2edbd375dbcf',
				width: 640
			},
			{
				height: 298,
				url: 'https://i.scdn.co/image/ff9912385526e95bd6a3a3a02a93c87c0279842a',
				width: 300
			},
			{
				height: 64,
				url: 'https://i.scdn.co/image/3e20253509e1c5df3e85577d07344102b4b1b650',
				width: 64
			}
		],
		name: 'The New Lee Dorsey',
		release_date: '2000',
		release_date_precision: 'year',
		total_tracks: 24,
		type: 'album',
		uri: 'spotify:album:2CQt3vL1SHnqxyZvoPQPUb'
	},
	artists: [
		{
			external_urls: {
				spotify: 'https://open.spotify.com/artist/0En4EEcDMJ5kaUCf1aZ9js'
			},
			href: 'https://api.spotify.com/v1/artists/0En4EEcDMJ5kaUCf1aZ9js',
			id: '0En4EEcDMJ5kaUCf1aZ9js',
			name: 'Lee Dorsey',
			type: 'artist',
			uri: 'spotify:artist:0En4EEcDMJ5kaUCf1aZ9js'
		}
	],
	available_markets: [
		'AD',
		'AE',
		'AR',
		'AT',
		'BE',
		'BG',
		'BH',
		'BO',
		'BR',
		'CA',
		'CH',
		'CL',
		'CO',
		'CR',
		'CY',
		'CZ',
		'DE',
		'DK',
		'DO',
		'DZ',
		'EC',
		'EE',
		'EG',
		'ES',
		'FI',
		'FR',
		'GB',
		'GR',
		'GT',
		'HK',
		'HN',
		'HU',
		'ID',
		'IE',
		'IL',
		'IN',
		'IS',
		'IT',
		'JO',
		'JP',
		'KW',
		'LB',
		'LI',
		'LT',
		'LU',
		'LV',
		'MA',
		'MC',
		'MT',
		'MX',
		'MY',
		'NI',
		'NL',
		'NO',
		'OM',
		'PA',
		'PE',
		'PH',
		'PL',
		'PS',
		'PT',
		'PY',
		'QA',
		'RO',
		'SA',
		'SE',
		'SG',
		'SK',
		'SV',
		'TH',
		'TN',
		'TR',
		'TW',
		'US',
		'UY',
		'VN',
		'ZA'
	],
	disc_number: 1,
	duration_ms: 146800,
	explicit: false,
	external_ids: {
		isrc: 'USAR10401057'
	},
	external_urls: {
		spotify: 'https://open.spotify.com/track/5neEPhmOnULqKJE9W4mktR'
	},
	href: 'https://api.spotify.com/v1/tracks/5neEPhmOnULqKJE9W4mktR',
	id: '5neEPhmOnULqKJE9W4mktR',
	is_local: false,
	name: 'Gotta Find a Job',
	popularity: 16,
	preview_url:
		'https://p.scdn.co/mp3-preview/f57066917d76716be8f205e83e0d27860afb50e7?cid=774b29d4f13844c495f206cafdad9c86',
	track_number: 6,
	type: 'track',
	uri: 'spotify:track:5neEPhmOnULqKJE9W4mktR'
};

//single audio feature
const audioFeature1 = {
	danceability: 0.811,
	energy: 0.559,
	key: 10,
	loudness: -9.181,
	mode: 1,
	speechiness: 0.0571,
	acousticness: 0.672,
	instrumentalness: 0,
	liveness: 0.24,
	valence: 0.951,
	tempo: 130.033,
	type: 'audio_features',
	id: '5neEPhmOnULqKJE9W4mktR',
	uri: 'spotify:track:5neEPhmOnULqKJE9W4mktR',
	track_href: 'https://api.spotify.com/v1/tracks/5neEPhmOnULqKJE9W4mktR',
	analysis_url:
		'https://api.spotify.com/v1/audio-analysis/5neEPhmOnULqKJE9W4mktR',
	duration_ms: 146800,
	time_signature: 4
};

//multiple tracks
tracks = [
	{
		album: {
			album_type: 'album',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/3eqjTLE0HfPfh78zjh6TqT'
					},
					href: 'https://api.spotify.com/v1/artists/3eqjTLE0HfPfh78zjh6TqT',
					id: '3eqjTLE0HfPfh78zjh6TqT',
					name: 'Bruce Springsteen',
					type: 'artist',
					uri: 'spotify:artist:3eqjTLE0HfPfh78zjh6TqT'
				}
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/6yskFQZNlLYhkchAxELHi6'
			},
			href: 'https://api.spotify.com/v1/albums/6yskFQZNlLYhkchAxELHi6',
			id: '6yskFQZNlLYhkchAxELHi6',
			images: [
				{
					height: 640,
					url:
						'https://i.scdn.co/image/34bb697d62850090614efc939515361c3fd39955',
					width: 640
				},
				{
					height: 300,
					url:
						'https://i.scdn.co/image/5059e8e7be9bf39300a636579cfaa8e91586a4c9',
					width: 300
				},
				{
					height: 64,
					url:
						'https://i.scdn.co/image/2a8f12c75544dc3b0e95dbd453412761683a18a6',
					width: 64
				}
			],
			name: 'Nebraska',
			release_date: '1982-09-30',
			release_date_precision: 'day',
			total_tracks: 10,
			type: 'album',
			uri: 'spotify:album:6yskFQZNlLYhkchAxELHi6'
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/3eqjTLE0HfPfh78zjh6TqT'
				},
				href: 'https://api.spotify.com/v1/artists/3eqjTLE0HfPfh78zjh6TqT',
				id: '3eqjTLE0HfPfh78zjh6TqT',
				name: 'Bruce Springsteen',
				type: 'artist',
				uri: 'spotify:artist:3eqjTLE0HfPfh78zjh6TqT'
			}
		],
		disc_number: 1,
		duration_ms: 236653,
		explicit: false,
		external_ids: {
			isrc: 'USSM18200422'
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/1Vp8U39YNsDfd6yVuaUq12'
		},
		href: 'https://api.spotify.com/v1/tracks/1Vp8U39YNsDfd6yVuaUq12',
		id: '1Vp8U39YNsDfd6yVuaUq12',
		is_local: false,
		is_playable: true,
		name: 'Atlantic City',
		popularity: 53,
		preview_url:
			'https://p.scdn.co/mp3-preview/27b69afc8c95753a30f5feca0d609ddec7c26d2b?cid=774b29d4f13844c495f206cafdad9c86',
		track_number: 2,
		type: 'track',
		uri: 'spotify:track:1Vp8U39YNsDfd6yVuaUq12'
	},
	{
		album: {
			album_type: 'album',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/3eqjTLE0HfPfh78zjh6TqT'
					},
					href: 'https://api.spotify.com/v1/artists/3eqjTLE0HfPfh78zjh6TqT',
					id: '3eqjTLE0HfPfh78zjh6TqT',
					name: 'Bruce Springsteen',
					type: 'artist',
					uri: 'spotify:artist:3eqjTLE0HfPfh78zjh6TqT'
				}
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/18up6NykzEl2aS94I6TVDg'
			},
			href: 'https://api.spotify.com/v1/albums/18up6NykzEl2aS94I6TVDg',
			id: '18up6NykzEl2aS94I6TVDg',
			images: [
				{
					height: 640,
					url:
						'https://i.scdn.co/image/c9b57555c7fee5c55e67184bf80546aeb4030cd2',
					width: 640
				},
				{
					height: 300,
					url:
						'https://i.scdn.co/image/015c4859815063da735e58b9de09454ecf77ee77',
					width: 300
				},
				{
					height: 64,
					url:
						'https://i.scdn.co/image/63490e0d1c30a06b11c68005572b7b93b607a979',
					width: 64
				}
			],
			name: 'Live in New York City',
			release_date: '2001-03-27',
			release_date_precision: 'day',
			total_tracks: 20,
			type: 'album',
			uri: 'spotify:album:18up6NykzEl2aS94I6TVDg'
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/3eqjTLE0HfPfh78zjh6TqT'
				},
				href: 'https://api.spotify.com/v1/artists/3eqjTLE0HfPfh78zjh6TqT',
				id: '3eqjTLE0HfPfh78zjh6TqT',
				name: 'Bruce Springsteen',
				type: 'artist',
				uri: 'spotify:artist:3eqjTLE0HfPfh78zjh6TqT'
			}
		],
		disc_number: 1,
		duration_ms: 396306,
		explicit: false,
		external_ids: {
			isrc: 'USSM10102040'
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/1H7VGH2n4xNqi1bu6TSkGk'
		},
		href: 'https://api.spotify.com/v1/tracks/1H7VGH2n4xNqi1bu6TSkGk',
		id: '1H7VGH2n4xNqi1bu6TSkGk',
		is_local: false,
		is_playable: true,
		name:
			'Atlantic City - Live at Madison Square Garden, New York, NY - June/July 2000',
		popularity: 33,
		preview_url:
			'https://p.scdn.co/mp3-preview/26583d69f249a303c3660571c2e7426ea8be026d?cid=774b29d4f13844c495f206cafdad9c86',
		track_number: 4,
		type: 'track',
		uri: 'spotify:track:1H7VGH2n4xNqi1bu6TSkGk'
	},
	{
		album: {
			album_type: 'album',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/0vqkz1b2qBkoYrGMj2CUWq'
					},
					href: 'https://api.spotify.com/v1/artists/0vqkz1b2qBkoYrGMj2CUWq',
					id: '0vqkz1b2qBkoYrGMj2CUWq',
					name: 'Bobby Womack',
					type: 'artist',
					uri: 'spotify:artist:0vqkz1b2qBkoYrGMj2CUWq'
				}
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/7eVKCG0KD8FCvIlx8E1pBG'
			},
			href: 'https://api.spotify.com/v1/albums/7eVKCG0KD8FCvIlx8E1pBG',
			id: '7eVKCG0KD8FCvIlx8E1pBG',
			images: [
				{
					height: 640,
					url:
						'https://i.scdn.co/image/cabe4582e7653956e8c3651e6dad22fa0f0a76b4',
					width: 640
				},
				{
					height: 300,
					url:
						'https://i.scdn.co/image/1f66006b758db48eafe0b56043d691a2412a4cc4',
					width: 300
				},
				{
					height: 64,
					url:
						'https://i.scdn.co/image/04047f693f03685121629d30ee881f43e948a5f9',
					width: 64
				}
			],
			name: 'Midnight Mover: The Bobby Womack Story',
			release_date: '1993-01-01',
			release_date_precision: 'day',
			total_tracks: 44,
			type: 'album',
			uri: 'spotify:album:7eVKCG0KD8FCvIlx8E1pBG'
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/0vqkz1b2qBkoYrGMj2CUWq'
				},
				href: 'https://api.spotify.com/v1/artists/0vqkz1b2qBkoYrGMj2CUWq',
				id: '0vqkz1b2qBkoYrGMj2CUWq',
				name: 'Bobby Womack',
				type: 'artist',
				uri: 'spotify:artist:0vqkz1b2qBkoYrGMj2CUWq'
			}
		],
		disc_number: 2,
		duration_ms: 230506,
		explicit: false,
		external_ids: {
			isrc: 'USNPD0710491'
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/2zyTP97uGsIc1C4KNNEkyn'
		},
		href: 'https://api.spotify.com/v1/tracks/2zyTP97uGsIc1C4KNNEkyn',
		id: '2zyTP97uGsIc1C4KNNEkyn',
		is_local: false,
		is_playable: true,
		name: 'Across 110th Street',
		popularity: 57,
		preview_url:
			'https://p.scdn.co/mp3-preview/e13d5cbb3410b52c2bbfefcd6b08cdb1a39f2ce5?cid=774b29d4f13844c495f206cafdad9c86',
		track_number: 2,
		type: 'track',
		uri: 'spotify:track:2zyTP97uGsIc1C4KNNEkyn'
	},
	{
		album: {
			album_type: 'album',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/2uNpV18izVIP7DNusoWbT5'
					},
					href: 'https://api.spotify.com/v1/artists/2uNpV18izVIP7DNusoWbT5',
					id: '2uNpV18izVIP7DNusoWbT5',
					name: 'Bobby Hebb',
					type: 'artist',
					uri: 'spotify:artist:2uNpV18izVIP7DNusoWbT5'
				}
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/6pJkF95sYsVg3FJtTvTuEG'
			},
			href: 'https://api.spotify.com/v1/albums/6pJkF95sYsVg3FJtTvTuEG',
			id: '6pJkF95sYsVg3FJtTvTuEG',
			images: [
				{
					height: 640,
					url:
						'https://i.scdn.co/image/ccdb2317c5accc3deb87b364decfcd8693e92846',
					width: 640
				},
				{
					height: 300,
					url:
						'https://i.scdn.co/image/527aba91cb650bf85f8a36d49657737affedbeda',
					width: 300
				},
				{
					height: 64,
					url:
						'https://i.scdn.co/image/82a413e3ba14972c304f0f1413fa67ade8e570c5',
					width: 64
				}
			],
			name: 'Sunny',
			release_date: '1966-01-01',
			release_date_precision: 'day',
			total_tracks: 12,
			type: 'album',
			uri: 'spotify:album:6pJkF95sYsVg3FJtTvTuEG'
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/2uNpV18izVIP7DNusoWbT5'
				},
				href: 'https://api.spotify.com/v1/artists/2uNpV18izVIP7DNusoWbT5',
				id: '2uNpV18izVIP7DNusoWbT5',
				name: 'Bobby Hebb',
				type: 'artist',
				uri: 'spotify:artist:2uNpV18izVIP7DNusoWbT5'
			}
		],
		disc_number: 1,
		duration_ms: 165066,
		explicit: false,
		external_ids: {
			isrc: 'USPR39402093'
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/4vju55Ag7apDL2CfotuE7Q'
		},
		href: 'https://api.spotify.com/v1/tracks/4vju55Ag7apDL2CfotuE7Q',
		id: '4vju55Ag7apDL2CfotuE7Q',
		is_local: false,
		is_playable: true,
		name: 'Sunny',
		popularity: 58,
		preview_url:
			'https://p.scdn.co/mp3-preview/cd0a77bb9a9e6f7d76b325afca215e3a2461dc6c?cid=774b29d4f13844c495f206cafdad9c86',
		track_number: 1,
		type: 'track',
		uri: 'spotify:track:4vju55Ag7apDL2CfotuE7Q'
	},
	{
		album: {
			album_type: 'album',
			artists: [
				{
					external_urls: {
						spotify: 'https://open.spotify.com/artist/1WvvwcQx0tj6NdDhZZ2zZz'
					},
					href: 'https://api.spotify.com/v1/artists/1WvvwcQx0tj6NdDhZZ2zZz',
					id: '1WvvwcQx0tj6NdDhZZ2zZz',
					name: 'Future Islands',
					type: 'artist',
					uri: 'spotify:artist:1WvvwcQx0tj6NdDhZZ2zZz'
				}
			],
			external_urls: {
				spotify: 'https://open.spotify.com/album/0bVZZUftetJmkK0Ms8S6Z0'
			},
			href: 'https://api.spotify.com/v1/albums/0bVZZUftetJmkK0Ms8S6Z0',
			id: '0bVZZUftetJmkK0Ms8S6Z0',
			images: [
				{
					height: 640,
					url:
						'https://i.scdn.co/image/1cd1799bceab3b375d5692b9810eec30233503c8',
					width: 640
				},
				{
					height: 300,
					url:
						'https://i.scdn.co/image/5c9aa60eb56e6b8914f0004ee5c2700715b20aea',
					width: 300
				},
				{
					height: 64,
					url:
						'https://i.scdn.co/image/1f246c3f1af34d7e39b91883b3ba7f37c78e4f72',
					width: 64
				}
			],
			name: 'In Evening Air',
			release_date: '2010-05-04',
			release_date_precision: 'day',
			total_tracks: 9,
			type: 'album',
			uri: 'spotify:album:0bVZZUftetJmkK0Ms8S6Z0'
		},
		artists: [
			{
				external_urls: {
					spotify: 'https://open.spotify.com/artist/1WvvwcQx0tj6NdDhZZ2zZz'
				},
				href: 'https://api.spotify.com/v1/artists/1WvvwcQx0tj6NdDhZZ2zZz',
				id: '1WvvwcQx0tj6NdDhZZ2zZz',
				name: 'Future Islands',
				type: 'artist',
				uri: 'spotify:artist:1WvvwcQx0tj6NdDhZZ2zZz'
			}
		],
		disc_number: 1,
		duration_ms: 193933,
		explicit: false,
		external_ids: {
			isrc: 'USTJ21023503'
		},
		external_urls: {
			spotify: 'https://open.spotify.com/track/18W0n9N0USkeXgrCJGV2hg'
		},
		href: 'https://api.spotify.com/v1/tracks/18W0n9N0USkeXgrCJGV2hg',
		id: '18W0n9N0USkeXgrCJGV2hg',
		is_local: false,
		is_playable: true,
		name: 'Tin Man',
		popularity: 40,
		preview_url:
			'https://p.scdn.co/mp3-preview/c098815fe15005cce9482d3328964e01e015cfe7?cid=774b29d4f13844c495f206cafdad9c86',
		track_number: 3,
		type: 'track',
		uri: 'spotify:track:18W0n9N0USkeXgrCJGV2hg'
	}
];

//multiple track audio features
let audioFeatures = [
	{
		danceability: 0.475,
		energy: 0.429,
		key: 4,
		loudness: -10.577,
		mode: 1,
		speechiness: 0.0367,
		acousticness: 0.311,
		instrumentalness: 0,
		liveness: 0.376,
		valence: 0.34,
		tempo: 108.034,
		type: 'audio_features',
		id: '1Vp8U39YNsDfd6yVuaUq12',
		uri: 'spotify:track:1Vp8U39YNsDfd6yVuaUq12',
		track_href: 'https://api.spotify.com/v1/tracks/1Vp8U39YNsDfd6yVuaUq12',
		analysis_url:
			'https://api.spotify.com/v1/audio-analysis/1Vp8U39YNsDfd6yVuaUq12',
		duration_ms: 236653,
		time_signature: 4
	},
	{
		danceability: 0.496,
		energy: 0.851,
		key: 9,
		loudness: -6.902,
		mode: 1,
		speechiness: 0.0484,
		acousticness: 0.0843,
		instrumentalness: 0.00000573,
		liveness: 0.719,
		valence: 0.573,
		tempo: 97.018,
		type: 'audio_features',
		id: '1H7VGH2n4xNqi1bu6TSkGk',
		uri: 'spotify:track:1H7VGH2n4xNqi1bu6TSkGk',
		track_href: 'https://api.spotify.com/v1/tracks/1H7VGH2n4xNqi1bu6TSkGk',
		analysis_url:
			'https://api.spotify.com/v1/audio-analysis/1H7VGH2n4xNqi1bu6TSkGk',
		duration_ms: 396307,
		time_signature: 4
	},
	{
		danceability: 0.476,
		energy: 0.585,
		key: 11,
		loudness: -14.211,
		mode: 0,
		speechiness: 0.0478,
		acousticness: 0.107,
		instrumentalness: 0.0000143,
		liveness: 0.149,
		valence: 0.523,
		tempo: 110.275,
		type: 'audio_features',
		id: '2zyTP97uGsIc1C4KNNEkyn',
		uri: 'spotify:track:2zyTP97uGsIc1C4KNNEkyn',
		track_href: 'https://api.spotify.com/v1/tracks/2zyTP97uGsIc1C4KNNEkyn',
		analysis_url:
			'https://api.spotify.com/v1/audio-analysis/2zyTP97uGsIc1C4KNNEkyn',
		duration_ms: 230507,
		time_signature: 4
	},
	{
		danceability: 0.711,
		energy: 0.347,
		key: 4,
		loudness: -10.955,
		mode: 0,
		speechiness: 0.0394,
		acousticness: 0.93,
		instrumentalness: 0.0134,
		liveness: 0.403,
		valence: 0.661,
		tempo: 128.474,
		type: 'audio_features',
		id: '4vju55Ag7apDL2CfotuE7Q',
		uri: 'spotify:track:4vju55Ag7apDL2CfotuE7Q',
		track_href: 'https://api.spotify.com/v1/tracks/4vju55Ag7apDL2CfotuE7Q',
		analysis_url:
			'https://api.spotify.com/v1/audio-analysis/4vju55Ag7apDL2CfotuE7Q',
		duration_ms: 165067,
		time_signature: 4
	},
	{
		danceability: 0.491,
		energy: 0.68,
		key: 10,
		loudness: -5.497,
		mode: 1,
		speechiness: 0.0544,
		acousticness: 0.0395,
		instrumentalness: 0.679,
		liveness: 0.199,
		valence: 0.28,
		tempo: 154.023,
		type: 'audio_features',
		id: '18W0n9N0USkeXgrCJGV2hg',
		uri: 'spotify:track:18W0n9N0USkeXgrCJGV2hg',
		track_href: 'https://api.spotify.com/v1/tracks/18W0n9N0USkeXgrCJGV2hg',
		analysis_url:
			'https://api.spotify.com/v1/audio-analysis/18W0n9N0USkeXgrCJGV2hg',
		duration_ms: 193933,
		time_signature: 4
	}
];

audioFeatureApi
	.deleteAllAudioFeatures()
	.then(() => trackApi.deleteAllTracks())
	.then(() => userApi.deleteAllUsers())
	.then(() => userApi.addNewUser(user1))
	.then(createdUser => {
		return tracks.forEach(track => {
			track.userId = createdUser._id;
			trackApi.addNewTrack(track);
		});
	})
	.then(() => userApi.addNewUser(user2))
	.then(user2 => {
		track1.userId = user2._id;
		return trackApi.addNewTrack(track1);
	})
	.then(() => {
		process.exit();
	})
	.catch(err => {
		console.log(err);
		process.exit();
	});
