import template from './artist-toptracks.template.html';
import controller from './artist-toptracks.controller';

let ArtistTopTracks = {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        tracks: '='
    }
}

export default ArtistTopTracks;