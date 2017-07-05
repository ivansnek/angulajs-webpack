import controller from './artist-list.controller';
import template from './artist-list.template.html';

let ArtistListComponent = {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        artists: '='
    }

}
export default ArtistListComponent;