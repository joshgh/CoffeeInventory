import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  greens: [],
  init() {
    let _this = this;
    this._super(this.get('store').findAll('green').then(function(response) {
      _this.set('greens', response);
    }));
  },
});
