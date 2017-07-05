import artistTemplate from './artists.html';
import artistDetailTemplate from './artist-detail.html';
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
    .state('artists', {
        url: '/artists',
        template: artistTemplate,
        resolve: {
            artists: ['ArtistService', (ArtistService) => {            
                return ArtistService.getArtistList()
                .then(response => response.data.artists.artist, (val) => -val.playcount);
            }]
        }
    })
    .state('artists-detail', {
        url: '/artists/:name',
        template: artistDetailTemplate,
        controller: 'ArtistDetailCtrl as vm',
        resolve: {
            artist: ['ArtistService','$stateParams', (ArtistService, $stateParams) => {            
                return ArtistService.getInfo($stateParams.name)
                    .then(response => response.data.artist);
            }],
            tracks: ['ArtistService','$stateParams', (ArtistService, $stateParams) => {            
                return ArtistService.getTopTracks($stateParams.name)
                    .then(response => response.data.toptracks.track);
            }],
        }      
    })
}