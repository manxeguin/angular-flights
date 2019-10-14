import template from './airport-wrapper.component.html';
import controller from './airport-wrapper.controller';

export const AirportWrapperComponent = {
  bindings: {
    fromAirport: '<',
    toAirport: '<',
    defaultValues:'<',
    onUpdate:'&'
  },
  template,
  controller
};
