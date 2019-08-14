const userApi = require('./user')
const trackApi = require('./track')
const audioFeatureApi = require('./AudioFeature')


const user = {
    name: 'David',
    email: 'test@test.com',
    photoUrl: 'String',
    emailVerified: True
  }

 
 
  const tracks = [
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju'
              },
              href: 'https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju',
              id: '6sFIWsNpZYqfjUpaCgueju',
              name: 'Carly Rae Jepsen',
              type: 'artist',
              uri: 'spotify:artist:6sFIWsNpZYqfjUpaCgueju'
            }
          ],
          available_markets: [
            'AD',
            'AR',
            'AT',
            'AU',
            'BE',
            'BG',
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
            'EC',
            'EE',
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
            'IS',
            'IT',
            'JP',
            'LI',
            'LT',
            'LU',
            'LV',
            'MC',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'PA',
            'PE',
            'PH',
            'PL',
            'PT',
            'PY',
            'RO',
            'SE',
            'SG',
            'SK',
            'SV',
            'TH',
            'TR',
            'TW',
            'US',
            'UY',
            'VN',
            'ZA'
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/0tGPJ0bkWOUmH7MEOR77qc'
          },
          href: 'https://api.spotify.com/v1/albums/0tGPJ0bkWOUmH7MEOR77qc',
          id: '0tGPJ0bkWOUmH7MEOR77qc',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/5a73a056d0af707b4119a883d87285feda543fbb',
              width: 64
            }
          ],
          name: 'Cut To The Feeling',
          release_date: '2017-05-26',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:0tGPJ0bkWOUmH7MEOR77qc'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju'
            },
            href: 'https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju',
            id: '6sFIWsNpZYqfjUpaCgueju',
            name: 'Carly Rae Jepsen',
            type: 'artist',
            uri: 'spotify:artist:6sFIWsNpZYqfjUpaCgueju'
          }
        ],
        available_markets: [
          'AD',
          'AR',
          'AT',
          'AU',
          'BE',
          'BG',
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
          'EC',
          'EE',
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
          'IS',
          'IT',
          'JP',
          'LI',
          'LT',
          'LU',
          'LV',
          'MC',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'PA',
          'PE',
          'PH',
          'PL',
          'PT',
          'PY',
          'RO',
          'SE',
          'SG',
          'SK',
          'SV',
          'TH',
          'TR',
          'TW',
          'US',
          'UY',
          'VN',
          'ZA'
        ],
        disc_number: 1,
        duration_ms: 207959,
        explicit: false,
        external_ids: {
          isrc: 'USUM71703861'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl'
        },
        href: 'https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl',
        id: '11dFghVXANMlKmJXsNCbNl',
        is_local: false,
        name: 'Cut To The Feeling',
        popularity: 63,
        preview_url: 'https://p.scdn.co/mp3-preview/3eb16018c2a700240e9dfb8817b6f2d041f15eb1?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:11dFghVXANMlKmJXsNCbNl'
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju'
              },
              href: 'https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju',
              id: '6sFIWsNpZYqfjUpaCgueju',
              name: 'Carly Rae Jepsen',
              type: 'artist',
              uri: 'spotify:artist:6sFIWsNpZYqfjUpaCgueju'
            }
          ],
          available_markets: [
            'AD',
            'AR',
            'AT',
            'AU',
            'BE',
            'BG',
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
            'EC',
            'EE',
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
            'IS',
            'IT',
            'JP',
            'LI',
            'LT',
            'LU',
            'LV',
            'MC',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'PA',
            'PE',
            'PH',
            'PL',
            'PT',
            'PY',
            'RO',
            'SE',
            'SG',
            'SK',
            'SV',
            'TH',
            'TR',
            'TW',
            'US',
            'UY',
            'VN',
            'ZA'
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6SSSF9Y6MiPdQoxqBptrR2'
          },
          href: 'https://api.spotify.com/v1/albums/6SSSF9Y6MiPdQoxqBptrR2',
          id: '6SSSF9Y6MiPdQoxqBptrR2',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/2fb20bf4c1fb29b503bfc21516ff4b1a334b6372',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/a7b076ed5aa0746a21bc71ab7d2b6ed80dd3ebfe',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/b1d4c7643cf17c06b967b50623d7d93725b31de5',
              width: 64
            }
          ],
          name: 'Kiss',
          release_date: '2012-01-01',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:6SSSF9Y6MiPdQoxqBptrR2'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju'
            },
            href: 'https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju',
            id: '6sFIWsNpZYqfjUpaCgueju',
            name: 'Carly Rae Jepsen',
            type: 'artist',
            uri: 'spotify:artist:6sFIWsNpZYqfjUpaCgueju'
          }
        ],
        available_markets: [
          'AD',
          'AR',
          'AT',
          'AU',
          'BE',
          'BG',
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
          'EC',
          'EE',
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
          'IS',
          'IT',
          'JP',
          'LI',
          'LT',
          'LU',
          'LV',
          'MC',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'PA',
          'PE',
          'PH',
          'PL',
          'PT',
          'PY',
          'RO',
          'SE',
          'SG',
          'SK',
          'SV',
          'TH',
          'TR',
          'TW',
          'US',
          'UY',
          'VN',
          'ZA'
        ],
        disc_number: 1,
        duration_ms: 193400,
        explicit: false,
        external_ids: {
          isrc: 'CAB391100615'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/20I6sIOMTCkB6w7ryavxtO'
        },
        href: 'https://api.spotify.com/v1/tracks/20I6sIOMTCkB6w7ryavxtO',
        id: '20I6sIOMTCkB6w7ryavxtO',
        is_local: false,
        name: 'Call Me Maybe',
        popularity: 74,
        preview_url: 'https://p.scdn.co/mp3-preview/335bede49342352cddd53cc83af582e2240303bb?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 3,
        type: 'track',
        uri: 'spotify:track:20I6sIOMTCkB6w7ryavxtO'
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify: 'https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju'
              },
              href: 'https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju',
              id: '6sFIWsNpZYqfjUpaCgueju',
              name: 'Carly Rae Jepsen',
              type: 'artist',
              uri: 'spotify:artist:6sFIWsNpZYqfjUpaCgueju'
            }
          ],
          available_markets: [
            'AD',
            'AR',
            'AT',
            'AU',
            'BE',
            'BG',
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
            'EC',
            'EE',
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
            'IS',
            'IT',
            'JP',
            'LI',
            'LT',
            'LU',
            'LV',
            'MC',
            'MT',
            'MX',
            'MY',
            'NI',
            'NL',
            'NO',
            'NZ',
            'PA',
            'PE',
            'PH',
            'PL',
            'PT',
            'PY',
            'RO',
            'SE',
            'SG',
            'SK',
            'SV',
            'TH',
            'TR',
            'TW',
            'US',
            'UY',
            'VN',
            'ZA'
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/1DFixLWuPkv3KT3TnV35m3'
          },
          href: 'https://api.spotify.com/v1/albums/1DFixLWuPkv3KT3TnV35m3',
          id: '1DFixLWuPkv3KT3TnV35m3',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/3f65c5400c7f24541bfd48e60f646e6af4d6c666',
              width: 640
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ff347680d9e62ccc144926377d4769b02a1024dc',
              width: 300
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/c836e14a8ceca89e18012cab295f58ceeba72594',
              width: 64
            }
          ],
          name: 'Emotion (Deluxe)',
          release_date: '2015-09-18',
          release_date_precision: 'day',
          type: 'album',
          uri: 'spotify:album:1DFixLWuPkv3KT3TnV35m3'
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju'
            },
            href: 'https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju',
            id: '6sFIWsNpZYqfjUpaCgueju',
            name: 'Carly Rae Jepsen',
            type: 'artist',
            uri: 'spotify:artist:6sFIWsNpZYqfjUpaCgueju'
          }
        ],
        disc_number: 1,
        duration_ms: 251319,
        explicit: false,
        external_ids: {
          isrc: 'USUM71507009'
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7xGfFoTpQ2E7fRF5lN10tr'
        },
        href: 'https://api.spotify.com/v1/tracks/7xGfFoTpQ2E7fRF5lN10tr',
        id: '7xGfFoTpQ2E7fRF5lN10tr',
        is_local: false,
        name: 'Run Away With Me',
        popularity: 50,
        preview_url: 'https://p.scdn.co/mp3-preview/3e05f5ed147ca075c7ae77c01f2cc0e14cfad78d?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr'
      }
    ]
  