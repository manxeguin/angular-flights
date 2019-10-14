export default function FlightListStateController($stateParams, CheapFlightsService) {
    'ngInject';
    return {

        $onInit() {

            if ($stateParams.from && $stateParams.to && $stateParams.flyout && $stateParams.flyback) {
                
                CheapFlightsService.getFlights($stateParams.from, $stateParams.to, $stateParams.flyout, $stateParams.flyback).then((flights) => {
                    this.flightsListData = flights;
                });

            }

        }

    }
}
