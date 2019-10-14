
export const AiportsService = ($http) => {
    'ngInject';

    let getAirports = function(){
      return $http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/').then((response) => {
        return response.data.airports;
      });
    }

    return {getAirports : getAirports};
};







