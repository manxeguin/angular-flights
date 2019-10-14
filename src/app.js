import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import { HomeComponent } from './home/home.component';
import {
  CheapFlightsService,
  AiportsService,
  UtilsService
} from './services';

angular.module('myApp', [
  uiRouter,
  Components
])
.component('homePage', HomeComponent)
.service('AiportsService', AiportsService)
.service('CheapFlightsService', CheapFlightsService)
.service('UtilsService', UtilsService)
.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '',
      template: '<home-page></home-page>'
    })
    .state('home.flights', {
      url: '/:from/:to/:flyout/:flyback',
      template: '<flight-list-state></flight-list-state>'
    });
});
