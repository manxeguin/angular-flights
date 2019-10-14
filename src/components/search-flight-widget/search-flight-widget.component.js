import template from './search-flight-widget.component.html';
import controller from './search-flight-widget.controller';
import './search-flight-widget.component.scss';

export const SearchFlightWidgetComponent = {
  bindings: {
    searchFunction: '&',
    defaultValues:'<'
  },
  template,
  controller
};
