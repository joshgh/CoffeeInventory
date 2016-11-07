import DS from 'ember-data';

export default DS.Model.extend({
  Name: DS.attr(),
  Recipe: DS.attr(),
  Description: DS.attr()
});
