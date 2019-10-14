export default function HomeController($state,$filter,$stateParams) {
    'ngInject';
    return {
        $onInit() {

            if ($stateParams.from && $stateParams.to && $stateParams.flyout && $stateParams.flyback) {
                
                this.defaultValues = {
                  from:$stateParams.from,
                  to:$stateParams.to,
                  flyout:$stateParams.flyout,
                  flyback:$stateParams.flyback
                }

            }
            
        },
        searchCheapFlights(event){
          if (event.params){

              $state.go('home.flights', {
                     from: event.params.from.iataCode,
                     to: event.params.to.iataCode,
                     flyout: $filter('date')(event.params.flyout, 'yyyy-MM-dd'),
                     flyback: $filter('date')(event.params.flyback, 'yyyy-MM-dd') });
          }
        }
    }
}
