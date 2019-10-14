import template from './airport-selector.component.html';
import controller from './airport-selector.controller';

describe('Airport Selector Tests', () => {

  describe('Controller', () => {
    // controller specs
    it('has a airport property', () => { 
      expect(controller).to.have.property('name');
    });

    //TODO write more controller test...
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has airport name in template', () => {
      expect(template).to.match(/.*?(?:^|\s)({{airport.name}}[^\s$]*).*?/g);
    });

    //TODO write more...
  });

});