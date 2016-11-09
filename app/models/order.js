import DS from 'ember-data';

export default DS.Model.extend({
  blendID: DS.attr(),
  blendName: DS.attr(),
  weight: DS.attr(),
  customerName: DS.attr(),
  fulfilled: DS.attr("boolean")
});
