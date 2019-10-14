import angular from 'angular';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';

import { CommonHeaderComponent } from './common-header/common-header.component';

import { AirportSelectorComponent } from './airport-selector/airport-selector.component';
import { AirportWrapperComponent } from './airport-wrapper/airport-wrapper.component';

import { SearchFlightWidgetComponent } from './search-flight-widget/search-flight-widget.component';


import { FlightListStateComponent } from './flight-list-state/flight-list-state.component';
import { FlightListComponent } from './flight-list/flight-list.component';

export default angular.module('app.components', [])
.component('dateWrapper', DateWrapperComponent)
.component('commonHeader', CommonHeaderComponent)
.component('dateSelector', DateSelectorComponent)
.component('airportSelector', AirportSelectorComponent)
.component('airportWrapper', AirportWrapperComponent)
.component('searchFlightWidget', SearchFlightWidgetComponent)
.component('flightListState', FlightListStateComponent)
.component('flightList', FlightListComponent)
.name;
