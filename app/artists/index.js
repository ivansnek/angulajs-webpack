import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './artists.routes';
import artistList from './artist-list/artist-list.component';
import artistTopTrack from './artist-toptracks/artist-toptracks.component';
import ArtistDetailController from './artist-detail.controller';
import ArtistService from '../services/artist.service';

export default angular.module('topArtists.artist', [uirouter])
    .config(routes)
    .component('artistList', artistList)
    .component('artistToptracks', artistTopTrack)
    .controller('ArtistDetailCtrl', ArtistDetailController)
    .service('ArtistService', ArtistService)
    .name
