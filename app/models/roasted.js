import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  weight: DS.attr(),
  greenID: DS.attr(),
  greenUsed: DS.attr(),
  roastLevel: DS.attr()
});
