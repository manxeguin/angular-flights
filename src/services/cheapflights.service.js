export const CheapFlightsService = ($http) => {
  'ngInject';
  let getFlights = function (from,to,flyOut,flyBack) {
    return $http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/' + from + '/to/' + to + '/' + flyOut + '/' + flyBack + '/250/unique/?limit=15&offset-0').then((response) => {
      return response.data.flights;
    });
  }

  return { getFlights: getFlights };
};
