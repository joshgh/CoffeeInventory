import DS from 'ember-data';

export default DS.Model.extend({
  blendID: DS.attr(),
  weight: DS.attr(),
  name: DS.attr(),
  fulfilled: DS.attr("boolean")
});
