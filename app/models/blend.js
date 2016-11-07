import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  recipe: DS.attr(),
  description: DS.attr()
});
