import template from './airport-selector.component.html';
import controller from './airport-selector.controller';
import './airport-selector.component.scss';

export const AirportSelectorComponent = {
  bindings: {
    airport: '<',
    airportsData: '<',
    onUpdate: '&'
  },
  template,
  controller
};
