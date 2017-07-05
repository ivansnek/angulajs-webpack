import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.routes';
import artist from './artists'

angular.module('topArtists', [uirouter, artist])
    .config(routes);